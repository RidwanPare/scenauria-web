'use client';

import { useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Upload, Loader2 } from 'lucide-react';

type Step = 'idle' | 'uploading' | 'creating' | 'error';

export function NewCaptureForm({ placeId }: { placeId: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<Step>('idle');
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  async function handleFile(file: File) {
    setError(null);
    setStep('uploading');
    try {
      const formData = new FormData();
      formData.append('file', file);

      const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData });
      const uploadJson = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadJson.error ?? "Échec de l'upload");

      setStep('creating');
      const captureRes = await fetch('/api/proxy/captures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ place_id: placeId, video_url: uploadJson.video_url }),
      });
      if (!captureRes.ok) {
        const j = await captureRes.json();
        throw new Error(j.error ?? 'Échec de la création de la capture');
      }

      await queryClient.invalidateQueries({ queryKey: ['place-captures', placeId] });
      setStep('idle');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erreur inconnue');
      setStep('error');
    } finally {
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  const busy = step === 'uploading' || step === 'creating';

  return (
    <div className="mb-4">
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
        }}
      />
      <Button onClick={() => inputRef.current?.click()} disabled={busy}>
        {busy ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Upload className="h-4 w-4 mr-2" />}
        {step === 'uploading' ? 'Upload de la vidéo…' : step === 'creating' ? 'Création…' : 'Nouvelle capture'}
      </Button>
      <p className="text-xs text-slate-400 mt-1.5">
        Vidéo de votre établissement (mp4, mov…) — max 500 MB. Le traitement démarre automatiquement.
      </p>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
