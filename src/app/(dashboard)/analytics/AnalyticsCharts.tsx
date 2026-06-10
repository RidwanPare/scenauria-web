'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SummaryItem {
  event_type: string;
  count: number;
}

const COLORS = ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b', '#94a3b8'];

export function AnalyticsCharts({ summary }: { summary: SummaryItem[] }) {
  const total = summary.reduce((s, i) => s + i.count, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-500">Total événements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{total.toLocaleString('fr-FR')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-500">Types distincts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{summary.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-500">Top événement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold truncate">{summary[0]?.event_type ?? '—'}</p>
          </CardContent>
        </Card>
      </div>

      {summary.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Événements par type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={summary} margin={{ top: 0, right: 0, left: 0, bottom: 40 }}>
                <XAxis dataKey="event_type" angle={-30} textAnchor="end" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {summary.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center py-16 text-slate-400">
          <p>Aucun événement enregistré. Les données apparaîtront dès qu&apos;une visite sera consultée.</p>
        </div>
      )}
    </div>
  );
}
