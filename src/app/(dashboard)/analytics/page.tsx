import { Header } from '@/components/layout/Header';
import { getServerToken } from '@/lib/auth';
import { apiGet } from '@/lib/api';
import { AnalyticsCharts } from './AnalyticsCharts';

interface SummaryItem {
  event_type: string;
  count: number;
}

export default async function AnalyticsPage() {
  const token = await getServerToken();
  const summary = await apiGet<{ summary: SummaryItem[] }>('/analytics/summary', token)
    .catch(() => ({ summary: [] }));

  return (
    <div>
      <Header title="Analytics" />
      <div className="p-6">
        <AnalyticsCharts summary={summary.summary} />
      </div>
    </div>
  );
}
