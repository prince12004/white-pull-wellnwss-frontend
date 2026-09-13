import { Card, CardContent, CardHeader, CardTitle } from '@white/ui';
import { getSession } from '@/lib/auth';

const STAT_CARDS = [
  { label: 'Total Leads', hint: 'Available once the CRM phase ships' },
  { label: "Today's Leads", hint: 'Available once the CRM phase ships' },
  { label: 'WhatsApp Leads', hint: 'Available once the CRM phase ships' },
  { label: 'Conversion Rate', hint: 'Available once the CRM phase ships' },
];

export default async function DashboardPage() {
  const session = await getSession();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-charcoal-900">
          Welcome back, {session?.name ?? 'there'}
        </h1>
        <p className="mt-1 text-sm text-charcoal-500">
          This is Phase 1 of the platform: architecture, authentication, RBAC, and the
          admin foundation. Lead/CRM metrics will populate here in a later phase.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAT_CARDS.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardTitle className="text-sm text-charcoal-500">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-charcoal-300">—</p>
              <p className="mt-1 text-xs text-charcoal-300">{stat.hint}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What&apos;s ready right now</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-charcoal-700">
            <li>Users — create admin users and assign roles</li>
            <li>Roles &amp; Permissions — manage the granular permission matrix</li>
            <li>Settings — business info, WhatsApp numbers, marketing pixel IDs</li>
            <li>Audit Log — every login and admin action is recorded</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
