'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface PublishActionsProps {
  visitId: string;
  currentStatus: string;
}

export function PublishActions({ visitId, currentStatus }: PublishActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function doAction(action: 'publish' | 'pause' | 'unpublish') {
    setLoading(true);
    await fetch(`/api/proxy/visits/${visitId}/${action}`, { method: 'POST' });
    router.refresh();
    setLoading(false);
  }

  return (
    <div className="flex gap-2">
      {currentStatus !== 'published' && (
        <Button onClick={() => doAction('publish')} disabled={loading} size="sm">
          Publier
        </Button>
      )}
      {currentStatus === 'published' && (
        <Button onClick={() => doAction('pause')} disabled={loading} size="sm" variant="outline">
          Mettre en pause
        </Button>
      )}
      {currentStatus !== 'draft' && (
        <Button onClick={() => doAction('unpublish')} disabled={loading} size="sm" variant="ghost">
          Dépublier
        </Button>
      )}
    </div>
  );
}
