import { Header } from '@/components/layout/Header';
import { getServerToken } from '@/lib/auth';
import { apiGet } from '@/lib/api';
import { PlaceCard } from '@/components/places/PlaceCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Place {
  id: string;
  name: string;
  city: string | null;
  category: string | null;
  status: string;
}

export default async function PlacesPage() {
  const token = await getServerToken();
  const data = await apiGet<{ places: Place[]; total: number }>('/places?limit=100', token).catch(() => ({ places: [], total: 0 }));

  return (
    <div>
      <Header title="Lieux" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-slate-500">{data.total} lieu{data.total > 1 ? 'x' : ''}</p>
          <Link href="/places/new"><Button>+ Nouveau lieu</Button></Link>
        </div>
        {data.places.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <p>Aucun lieu. Créez votre premier lieu pour commencer.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.places.map(p => <PlaceCard key={p.id} {...p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
