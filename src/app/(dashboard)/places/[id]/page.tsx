import { Header } from '@/components/layout/Header';
import { getServerToken } from '@/lib/auth';
import { apiGet } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { PlaceTabs } from './PlaceTabs';
import { notFound } from 'next/navigation';

interface Place {
  id: string;
  name: string;
  city: string | null;
  category: string | null;
  status: string;
  description: string | null;
  address: string | null;
  phone: string | null;
  website_url: string | null;
  booking_url: string | null;
  country: string | null;
}

export default async function PlaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const token = await getServerToken();

  const place = await apiGet<Place>(`/places/${id}`, token).catch(() => null);
  if (!place) notFound();

  return (
    <div>
      <Header title={place.name} />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant={place.status === 'active' ? 'default' : 'secondary'}>{place.status}</Badge>
          {place.city && <span className="text-sm text-slate-500">{place.city}</span>}
        </div>
        <PlaceTabs place={place} />
      </div>
    </div>
  );
}
