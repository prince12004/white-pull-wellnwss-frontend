/** @type {import('next').NextConfig} */
const NEST_API_URL = process.env.NEST_API_URL ?? 'http://localhost:4000/api';

const nextConfig = {
  transpilePackages: ['@white/ui', '@white/types'],
  async rewrites() {
    // Proxy /api/* to the NestJS backend so auth cookies stay same-site from the
    // browser's perspective, sidestepping cross-subdomain cookie issues entirely.
    return [{ source: '/api/:path*', destination: `${NEST_API_URL}/:path*` }];
  },
};

export default nextConfig;
