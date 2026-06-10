import { Header } from '@/components/layout/Header';
import { getServerToken } from '@/lib/auth';
import { apiGet } from '@/lib/api';
import { VisitCard } from '@/components/visits/VisitCard';

interface Visit {
  id: string;
  slug: string;
  publication_status: string;
  place_id: string;
}

export default async function VisitsPage() {
  const token = await getServerToken();
  const data = await apiGet<{ visits: Visit[]; total: number }>('/visits?limit=100', token)
    .catch(() => ({ visits: [], total: 0 }));

  return (
    <div>
      <Header title="Visites" />
      <div className="p-6">
        <p className="text-sm text-slate-500 mb-4">{data.total} visite{data.total > 1 ? 's' : ''}</p>
        {data.visits.length === 0 ? (
          <p className="text-center py-16 text-slate-400">Aucune visite. Créez une visite depuis un lieu.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.visits.map(v => <VisitCard key={v.id} {...v} />)}
          </div>
        )}
      </div>
    </div>
  );
}
