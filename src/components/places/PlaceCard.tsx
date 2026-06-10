import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface PlaceCardProps {
  id: string;
  name: string;
  city?: string | null;
  category?: string | null;
  status: string;
}

export function PlaceCard({ id, name, city, category, status }: PlaceCardProps) {
  return (
    <Link href={`/places/${id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <MapPin size={18} className="text-slate-500" />
            </div>
            <Badge variant={status === 'active' ? 'default' : 'secondary'}>{status}</Badge>
          </div>
          <h3 className="font-semibold text-slate-900 mt-3">{name}</h3>
          {(city || category) && (
            <p className="text-sm text-slate-400 mt-1">{[category, city].filter(Boolean).join(' · ')}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
