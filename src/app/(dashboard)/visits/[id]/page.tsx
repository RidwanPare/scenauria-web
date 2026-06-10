import { Header } from '@/components/layout/Header';
import { getServerToken } from '@/lib/auth';
import { apiGet } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { PublishActions } from '@/components/visits/PublishActions';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Visit {
  id: string;
  slug: string;
  publication_status: string;
  place_id: string;
  scene_url: string | null;
  poster_url: string | null;
  required_plan: string;
  published_at: string | null;
  created_at: string;
}

interface QrCode {
  id: string;
  name: string;
  scan_count: number;
  status: string;
  tracked_url: string;
}

export default async function VisitDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const token = await getServerToken();

  const [visit, qrData] = await Promise.all([
    apiGet<Visit>(`/visits/${id}`, token).catch(() => null),
    apiGet<{ qrcodes: QrCode[] }>(`/visits/${id}/qrcodes`, token).catch(() => ({ qrcodes: [] })),
  ]);

  if (!visit) notFound();

  const STATUS_VARIANT: Record<string, 'default' | 'secondary' | 'outline'> = {
    published: 'default',
    paused: 'secondary',
    draft: 'outline',
  };

  return (
    <div>
      <Header title={visit.slug} />
      <div className="p-6 max-w-3xl space-y-6">
        {/* Status + actions */}
        <div className="flex items-center gap-4 flex-wrap">
          <Badge variant={STATUS_VARIANT[visit.publication_status] ?? 'outline'}>
            {visit.publication_status}
          </Badge>
          <PublishActions visitId={visit.id} currentStatus={visit.publication_status} />
          {visit.publication_status === 'published' && (
            <Link href={`/v/${visit.slug}`} target="_blank" className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800">
              <ExternalLink size={14} /> Voir la visite
            </Link>
          )}
        </div>

        {/* Infos */}
        <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg bg-white">
          <div>
            <p className="text-xs text-slate-400 mb-1">Slug</p>
            <p className="text-sm font-mono text-slate-700">{visit.slug}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Plan requis</p>
            <p className="text-sm text-slate-700 capitalize">{visit.required_plan}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Scene URL</p>
            <p className="text-sm text-slate-700 truncate">{visit.scene_url ?? '—'}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Créée le</p>
            <p className="text-sm text-slate-700">{new Date(visit.created_at).toLocaleDateString('fr-FR')}</p>
          </div>
        </div>

        {/* QR codes */}
        <div>
          <h2 className="font-semibold text-slate-800 mb-3">QR Codes ({qrData.qrcodes.length})</h2>
          <div className="space-y-2">
            {qrData.qrcodes.map(q => (
              <div key={q.id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
                <div>
                  <p className="text-sm font-medium text-slate-700">{q.name}</p>
                  <p className="text-xs text-slate-400 truncate max-w-xs">{q.tracked_url}</p>
                </div>
                <span className="text-sm font-semibold text-slate-600">{q.scan_count} scans</span>
              </div>
            ))}
            {qrData.qrcodes.length === 0 && <p className="text-sm text-slate-400">Aucun QR code.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
