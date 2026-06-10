'use client';

import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { PlaceForm } from '@/components/places/PlaceForm';
import type { PlaceData } from '@/lib/validations';

export default function NewPlacePage() {
  const router = useRouter();

  async function handleSubmit(data: PlaceData) {
    const res = await fetch('/api/proxy/places', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const place = await res.json();
      router.push(`/places/${place.id}`);
    }
  }

  return (
    <div>
      <Header title="Nouveau lieu" />
      <div className="p-6">
        <PlaceForm onSubmit={handleSubmit} submitLabel="Créer le lieu" />
      </div>
    </div>
  );
}
