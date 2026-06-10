'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { registerSchema, type RegisterData } from '@/lib/validations';
import { useState } from 'react';

export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterData) {
    setError(null);
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.push('/dashboard');
      router.refresh();
    } else {
      const body = await res.json();
      setError(body.message ?? "Erreur lors de l'inscription");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Créer un compte</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="first_name">Prénom</Label>
              <Input id="first_name" {...register('first_name')} />
              {errors.first_name && <p className="text-sm text-red-500">{errors.first_name.message}</p>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="last_name">Nom</Label>
              <Input id="last_name" {...register('last_name')} />
              {errors.last_name && <p className="text-sm text-red-500">{errors.last_name.message}</p>}
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" {...register('password')} />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Création...' : 'Créer mon compte'}
          </Button>
          <p className="text-center text-sm text-slate-500">
            Déjà un compte ?{' '}
            <a href="/login" className="text-slate-900 underline">Se connecter</a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
