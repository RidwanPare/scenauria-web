'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceForm } from '@/components/places/PlaceForm';
import { useRouter } from 'next/navigation';
import type { PlaceData } from '@/lib/validations';
import { useQuery } from '@tanstack/react-query';
import { Badge } from '@/components/ui/badge';

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

interface Capture {
  id: string;
  status: string;
  video_url: string | null;
  created_at: string;
}

interface VisitItem {
  id: string;
  slug: string;
  publication_status: string;
}

export function PlaceTabs({ place }: { place: Place }) {
  const router = useRouter();

  const { data: capturesData } = useQuery({
    queryKey: ['place-captures', place.id],
    queryFn: async () => {
      const res = await fetch(`/api/proxy/places/${place.id}/captures`);
      return res.json() as Promise<{ captures: Capture[] }>;
    },
  });

  const { data: visitsData } = useQuery({
    queryKey: ['place-visits', place.id],
    queryFn: async () => {
      const res = await fetch(`/api/proxy/places/${place.id}/visits`);
      return res.json() as Promise<{ visits: VisitItem[] }>;
    },
  });

  async function handleUpdate(data: PlaceData) {
    await fetch(`/api/proxy/places/${place.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    router.refresh();
  }

  return (
    <Tabs defaultValue="info">
      <TabsList>
        <TabsTrigger value="info">Informations</TabsTrigger>
        <TabsTrigger value="captures">Captures ({capturesData?.captures?.length ?? 0})</TabsTrigger>
        <TabsTrigger value="visits">Visites ({visitsData?.visits?.length ?? 0})</TabsTrigger>
      </TabsList>

      <TabsContent value="info" className="mt-4">
        <PlaceForm
          defaultValues={{
            name: place.name,
            category: place.category ?? '',
            city: place.city ?? '',
            country: place.country ?? '',
            address: place.address ?? '',
            phone: place.phone ?? '',
            website_url: place.website_url ?? '',
            booking_url: place.booking_url ?? '',
            description: place.description ?? '',
          }}
          onSubmit={handleUpdate}
          submitLabel="Mettre à jour"
        />
      </TabsContent>

      <TabsContent value="captures" className="mt-4">
        <div className="space-y-2">
          {capturesData?.captures?.map((c) => (
            <div key={c.id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
              <div>
                <p className="text-sm font-medium text-slate-700 truncate max-w-sm">{c.video_url ?? "Pas d'URL"}</p>
                <p className="text-xs text-slate-400">{new Date(c.created_at).toLocaleDateString('fr-FR')}</p>
              </div>
              <Badge variant="outline">{c.status}</Badge>
            </div>
          ))}
          {!capturesData?.captures?.length && <p className="text-sm text-slate-400">Aucune capture.</p>}
        </div>
      </TabsContent>

      <TabsContent value="visits" className="mt-4">
        <div className="space-y-2">
          {visitsData?.visits?.map((v) => (
            <div key={v.id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
              <a href={`/visits/${v.id}`} className="text-sm font-medium text-slate-700 hover:underline">{v.slug}</a>
              <Badge variant={v.publication_status === 'published' ? 'default' : 'secondary'}>{v.publication_status}</Badge>
            </div>
          ))}
          {!visitsData?.visits?.length && <p className="text-sm text-slate-400">Aucune visite.</p>}
        </div>
      </TabsContent>
    </Tabs>
  );
}
