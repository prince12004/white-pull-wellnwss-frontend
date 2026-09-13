# White — Clinic Platform

A premium dermatology/skin/hair/laser/aesthetic clinic platform: a public website, an
admin CMS/CRM, and a shared API, built as a pnpm + Turborepo monorepo.

**Status: Phase 1 complete** — architecture, database, authentication, RBAC, and the
admin foundation. See `/apps/admin` for which modules are live vs. "coming in a future
phase" placeholders. Later phases (services, packages, doctors, clinics, blogs,
before/after, offers, WhatsApp lead CRM, SEO/analytics) are built incrementally on top
of this foundation.

## Stack

- **apps/web** — Next.js 15 public site (App Router, Tailwind, `@white/ui`)
- **apps/admin** — Next.js 15 admin panel
- **apps/api** — NestJS 10 REST API, MongoDB/Mongoose, JWT auth, RBAC
- **packages/ui** — shared components (Radix-based Dialog/Toast, Tailwind primitives)
- **packages/types** — shared TypeScript interfaces
- **packages/config** — shared ESLint/Tailwind/TS config

## Prerequisites

- Node.js ≥ 18.18 (repo pinned to 18.20.8 via `.nvmrc`)
- pnpm ≥ 9 (`corepack enable` or `npm i -g pnpm`)
- A MongoDB connection string (Atlas or local `mongod`)

## Setup

```bash
pnpm install

# Copy env examples and fill in real values (never commit the real files)
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local
```

Required values in `apps/api/.env`:

| Variable | Notes |
|---|---|
| `MONGODB_URI` | Full Atlas/local connection string, including the database name |
| `ACCESS_TOKEN_SECRET` / `REFRESH_TOKEN_SECRET` | Generate with `openssl rand -hex 32` each |
| `WEB_ORIGIN` / `ADMIN_ORIGIN` | Exact origins allowed via CORS (with credentials) |
| `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` | Used once by the seed script — no default is provided on purpose |
| `CLOUDINARY_*` | Placeholders — unused until the Media Library phase |

## Seed the database

Creates the full permission catalog, the 7 system roles, one Super Admin user, and a
default Settings document. Safe to re-run (idempotent upserts).

```bash
pnpm seed
```

## Run everything

```bash
pnpm dev
```

- API: http://localhost:4000/api
- Web: http://localhost:3000
- Admin: http://localhost:3001 (log in with `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD`)

The admin app proxies `/api/*` to the NestJS API (see `apps/admin/next.config.mjs`) so
auth cookies stay same-site regardless of where the API is deployed.

## Tests

```bash
pnpm --filter @white/api test       # unit tests
pnpm --filter @white/api test:e2e   # e2e tests, spin up an in-memory MongoDB
```

## Build

```bash
pnpm build   # builds api, web, and admin via Turborepo
```

## Security checklist (Phase 1)

- Passwords hashed with argon2id; refresh tokens hashed before storage and rotated on
  every use.
- Helmet, CORS locked to `WEB_ORIGIN`/`ADMIN_ORIGIN` with credentials, global rate
  limiting (100 req/min) plus a 5 req/min limit on `/auth/login`.
- Global `ValidationPipe` (`whitelist`, `forbidNonWhitelisted`, `transform`) rejects any
  unexpected request field — the primary NoSQL-injection defense alongside Mongoose's
  own parameterization.
- Every login/logout and every admin mutation is written to the `AuditLog` collection
  (actor, action, module, before/after snapshot, IP, user agent).
- `.env` files are git-ignored; only `.env.example` placeholders are committed. Rotate
  any credential that was ever pasted in plaintext outside of a `.env` file.
- RBAC is enforced server-side via `PermissionsGuard` — the admin UI hiding a nav item
  is a UX nicety, not the security boundary.

## Deployment notes

- **API**: any Node host (Render/Railway/Fly/EC2/etc). Set all `apps/api/.env` vars in
  the platform's secret store; run `pnpm --filter @white/api build && pnpm --filter
  @white/api start`.
- **Web/Admin**: deploy as standard Next.js apps (Vercel or any Node host). Set
  `NEST_API_URL` to the deployed API's public URL. If serving admin and API from
  different subdomains, keep the `next.config.mjs` rewrite in `apps/admin` so cookies
  stay same-site — or put both behind one reverse-proxy origin.
- **Database**: back up the MongoDB Atlas cluster on a schedule (Atlas has built-in
  continuous backups on paid tiers); the `AuditLog` and `Settings` collections are
  small and cheap to snapshot frequently.
- Run `pnpm seed` once against production with a strong, unique
  `SEED_ADMIN_PASSWORD`, then change that password from the admin UI immediately after
  first login (`mustChangePassword` support is in the schema for this).
