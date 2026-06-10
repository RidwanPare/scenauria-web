import { Header } from '@/components/layout/Header';
import { getServerToken } from '@/lib/auth';
import { apiGet } from '@/lib/api';
import { Badge } from '@/components/ui/badge';

interface Capture {
  id: string;
  place_id: string;
  video_url: string | null;
  status: string;
  created_at: string;
}

const STATUS_VARIANT: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
  ready: 'default',
  processing: 'secondary',
  draft: 'outline',
  failed: 'destructive',
};

export default async function CapturesPage() {
  const token = await getServerToken();
  const data = await apiGet<{ captures: Capture[]; total: number }>('/captures?limit=50', token)
    .catch(() => ({ captures: [], total: 0 }));

  return (
    <div>
      <Header title="Captures" />
      <div className="p-6">
        <p className="text-sm text-slate-500 mb-4">{data.total} capture{data.total > 1 ? 's' : ''}</p>
        <div className="space-y-2">
          {data.captures.map(c => (
            <div key={c.id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
              <div>
                <p className="text-sm font-medium text-slate-700 truncate max-w-lg">{c.video_url ?? "Pas d'URL vidéo"}</p>
                <p className="text-xs text-slate-400 mt-0.5">{new Date(c.created_at).toLocaleDateString('fr-FR')}</p>
              </div>
              <Badge variant={STATUS_VARIANT[c.status] ?? 'outline'}>{c.status}</Badge>
            </div>
          ))}
          {data.captures.length === 0 && (
            <p className="text-center py-16 text-slate-400">Aucune capture.</p>
          )}
        </div>
      </div>
    </div>
  );
}
