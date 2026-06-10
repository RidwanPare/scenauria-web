import { Header } from '@/components/layout/Header';
import { getServerToken } from '@/lib/auth';
import { apiGet } from '@/lib/api';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface OrgProfile {
  id: string;
  name: string;
  plan: string;
  subscription_status: string;
  country: string | null;
  currency: string;
}

interface Member {
  user_id: string;
  role: string;
  user: { email: string; first_name: string | null; last_name: string | null };
}

interface Subscription {
  plan: string;
  status: string;
  current_period_end: string | null;
  billing_interval: string;
}

export default async function SettingsPage() {
  const token = await getServerToken();

  const [org, membersData, billing] = await Promise.all([
    apiGet<OrgProfile>('/organizations/me', token).catch(() => null),
    apiGet<{ members: Member[] }>('/organizations/me/members', token).catch(() => ({ members: [] })),
    apiGet<{ subscription: Subscription | null }>('/billing/subscription', token).catch(() => ({ subscription: null })),
  ]);

  return (
    <div>
      <Header title="Paramètres" />
      <div className="p-6 max-w-2xl">
        <Tabs defaultValue="org">
          <TabsList>
            <TabsTrigger value="org">Organisation</TabsTrigger>
            <TabsTrigger value="members">Membres ({membersData.members.length})</TabsTrigger>
            <TabsTrigger value="billing">Abonnement</TabsTrigger>
          </TabsList>

          <TabsContent value="org" className="mt-4 space-y-3">
            {org && (
              <div className="grid gap-3">
                <div className="p-4 border rounded-lg bg-white">
                  <p className="text-xs text-slate-400 mb-1">Organisation</p>
                  <p className="font-semibold text-slate-800">{org.name}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 border rounded-lg bg-white">
                    <p className="text-xs text-slate-400 mb-1">Plan</p>
                    <p className="font-semibold capitalize">{org.plan}</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-white">
                    <p className="text-xs text-slate-400 mb-1">Pays</p>
                    <p className="font-semibold">{org.country ?? '—'}</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-white">
                    <p className="text-xs text-slate-400 mb-1">Devise</p>
                    <p className="font-semibold">{org.currency}</p>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="members" className="mt-4">
            <div className="space-y-2">
              {membersData.members.map(m => (
                <div key={m.user_id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
                  <div>
                    <p className="text-sm font-medium text-slate-700">
                      {m.user.first_name} {m.user.last_name}
                    </p>
                    <p className="text-xs text-slate-400">{m.user.email}</p>
                  </div>
                  <Badge variant={m.role === 'owner' ? 'default' : 'secondary'}>{m.role}</Badge>
                </div>
              ))}
              {membersData.members.length === 0 && (
                <p className="text-sm text-slate-400">Aucun membre.</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="billing" className="mt-4">
            {billing.subscription ? (
              <div className="p-4 border rounded-lg bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <p className="font-semibold capitalize text-slate-800">{billing.subscription.plan}</p>
                  <Badge variant={billing.subscription.status === 'active' ? 'default' : 'secondary'}>
                    {billing.subscription.status}
                  </Badge>
                </div>
                <p className="text-sm text-slate-500">
                  Facturation {billing.subscription.billing_interval === 'monthly' ? 'mensuelle' : 'annuelle'}
                </p>
                {billing.subscription.current_period_end && (
                  <p className="text-sm text-slate-500">
                    Renouvellement le {new Date(billing.subscription.current_period_end).toLocaleDateString('fr-FR')}
                  </p>
                )}
              </div>
            ) : (
              <div className="p-4 border rounded-lg bg-white text-center text-slate-400">
                <p>Plan Start (gratuit). Contactez-nous pour passer à un plan supérieur.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
