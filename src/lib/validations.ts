import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Minimum 6 caractères'),
});

export const registerSchema = z.object({
  first_name: z.string().min(1, 'Prénom requis'),
  last_name: z.string().min(1, 'Nom requis'),
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Minimum 6 caractères'),
});

export const placeSchema = z.object({
  name: z.string().min(1, 'Nom requis'),
  category: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  description: z.string().optional(),
  phone: z.string().optional(),
  website_url: z.string().url('URL invalide').optional().or(z.literal('')),
  booking_url: z.string().url('URL invalide').optional().or(z.literal('')),
});

export const visitUpdateSchema = z.object({
  scene_url: z.string().url('URL invalide').optional().or(z.literal('')),
  poster_url: z.string().url('URL invalide').optional().or(z.literal('')),
  slug: z.string().min(1).optional(),
  required_plan: z.enum(['start', 'plus', 'pro', 'multi']).optional(),
});

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;
export type PlaceData = z.infer<typeof placeSchema>;
export type VisitUpdateData = z.infer<typeof visitUpdateSchema>;
