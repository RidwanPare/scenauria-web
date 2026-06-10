import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';

interface VisitCardProps {
  id: string;
  slug: string;
  publication_status: string;
  place_id: string;
}

const STATUS_VARIANT: Record<string, 'default' | 'secondary' | 'outline'> = {
  published: 'default',
  paused: 'secondary',
  draft: 'outline',
};

export function VisitCard({ id, slug, publication_status }: VisitCardProps) {
  return (
    <Link href={`/visits/${id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
              <Eye size={16} className="text-slate-500" />
            </div>
            <Badge variant={STATUS_VARIANT[publication_status] ?? 'outline'}>{publication_status}</Badge>
          </div>
          <p className="font-medium text-slate-800 mt-2 truncate">{slug}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
