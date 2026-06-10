import type { Metadata } from 'next';
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google';
import { QueryProvider } from '@/components/layout/QueryProvider';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const sourceSerif = Source_Serif_4({ variable: '--font-serif', subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Scenauria — Visites immersives créées avec votre smartphone',
  description:
    'Convertissez plus de visiteurs en clients grâce à une visite immersive. Lien, QR code, boutons d’action et analytics — sans caméra 360.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
