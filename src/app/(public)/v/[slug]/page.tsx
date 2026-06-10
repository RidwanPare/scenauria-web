import { notFound } from 'next/navigation';

interface Visit {
  id: string;
  slug: string;
  publication_status: string;
  scene_url: string | null;
  poster_url: string | null;
}

async function getPublicVisit(slug: string): Promise<Visit | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';
  const res = await fetch(`${apiUrl}/v/${slug}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function PublicVisitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const visit = await getPublicVisit(slug);

  if (!visit || visit.publication_status !== 'published') notFound();

  const viewerUrl = process.env.NEXT_PUBLIC_VIEWER_URL ?? 'http://localhost:4000';

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      {visit.scene_url ? (
        <iframe
          src={`${viewerUrl}?scene=${encodeURIComponent(visit.scene_url)}`}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          title={`Visite ${visit.slug}`}
        />
      ) : (
        <div className="flex items-center justify-center h-full text-white">
          <p className="text-slate-400">Visite en cours de préparation.</p>
        </div>
      )}
    </div>
  );
}
