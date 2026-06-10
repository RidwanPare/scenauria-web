import { Header } from '@/components/layout/Header';
import { getServerToken } from '@/lib/auth';
import { apiGet } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Eye, QrCode, CreditCard } from 'lucide-react';

async function getDashboardData(token: string) {
  const [org, places, visits, summary] = await Promise.allSettled([
    apiGet<{ name: string; plan: string }>('/organizations/me', token),
    apiGet<{ total: number }>('/places', token),
    apiGet<{ total: number }>('/visits', token),
    apiGet<{ summary: Array<{ event_type: string; count: number }> }>('/analytics/summary', token),
  ]);

  return {
    org: org.status === 'fulfilled' ? org.value : null,
    placesTotal: places.status === 'fulfilled' ? (places.value as any).total ?? 0 : 0,
    visitsTotal: visits.status === 'fulfilled' ? (visits.value as any).total ?? 0 : 0,
    totalScans: summary.status === 'fulfilled'
      ? (summary.value as any).summary?.find((s: any) => s.event_type === 'qr_scan')?.count ?? 0
      : 0,
  };
}

export default async function DashboardPage() {
  const token = await getServerToken();
  const data = await getDashboardData(token ?? '');

  const stats = [
    { label: 'Lieux actifs', value: data.placesTotal, icon: MapPin },
    { label: 'Visites créées', value: data.visitsTotal, icon: Eye },
    { label: 'Scans QR', value: data.totalScans, icon: QrCode },
    { label: 'Plan', value: data.org?.plan?.toUpperCase() ?? '—', icon: CreditCard },
  ];

  return (
    <div>
      <Header title={`Bonjour 👋${data.org ? ` — ${data.org.name}` : ''}`} />
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <Card key={label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">{label}</CardTitle>
                <Icon size={16} className="text-slate-400" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
