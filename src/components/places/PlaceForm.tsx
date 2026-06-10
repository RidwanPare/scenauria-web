'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { placeSchema, type PlaceData } from '@/lib/validations';

interface PlaceFormProps {
  defaultValues?: Partial<PlaceData>;
  onSubmit: (data: PlaceData) => Promise<void>;
  submitLabel?: string;
}

export function PlaceForm({ defaultValues, onSubmit, submitLabel = 'Enregistrer' }: PlaceFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PlaceData>({
    resolver: zodResolver(placeSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
      <div className="space-y-1">
        <Label htmlFor="name">Nom *</Label>
        <Input id="name" {...register('name')} />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label htmlFor="category">Catégorie</Label>
          <Input id="category" placeholder="Restaurant, Hôtel..." {...register('category')} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="city">Ville</Label>
          <Input id="city" {...register('city')} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label htmlFor="country">Pays</Label>
          <Input id="country" placeholder="FR" {...register('country')} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" {...register('phone')} />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="address">Adresse</Label>
        <Input id="address" {...register('address')} />
      </div>
      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" rows={3} {...register('description')} />
      </div>
      <div className="space-y-1">
        <Label htmlFor="website_url">Site web</Label>
        <Input id="website_url" type="url" placeholder="https://..." {...register('website_url')} />
        {errors.website_url && <p className="text-sm text-red-500">{errors.website_url.message}</p>}
      </div>
      <div className="space-y-1">
        <Label htmlFor="booking_url">URL réservation</Label>
        <Input id="booking_url" type="url" placeholder="https://..." {...register('booking_url')} />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enregistrement...' : submitLabel}
      </Button>
    </form>
  );
}
