import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, QrCode, BarChart2, Check } from 'lucide-react';

const FEATURES = [
  { icon: Eye, title: 'Visites immersives 3D', desc: 'Gaussian Splat haute fidélité, hébergé sur CDN mondial.' },
  { icon: QrCode, title: 'QR Codes trackés', desc: 'Générez des QR codes par canal (vitrine, flyer, réseaux) et suivez les scans.' },
  { icon: BarChart2, title: 'Analytics temps réel', desc: 'Événements de visite, sources, appareils — tout en un tableau de bord.' },
];

const PLANS = [
  { name: 'Start', price: '0€', features: ['1 lieu', '1 visite publiée', 'Analytics de base'], cta: 'Commencer gratuitement', highlight: false },
  { name: 'Plus', price: '49€/mois', features: ['5 lieux', '10 visites', 'QR codes illimités', 'Analytics avancés'], cta: 'Essai 14 jours', highlight: true },
  { name: 'Pro', price: '149€/mois', features: ['Lieux illimités', 'Visites illimitées', 'API accès', 'Support prioritaire'], cta: 'Contacter', highlight: false },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <span className="font-bold text-xl">Scenauria</span>
        <div className="flex gap-3">
          <Link href="/login"><Button variant="ghost">Connexion</Button></Link>
          <Link href="/register"><Button>Commencer</Button></Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-8">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Visites immersives 3D<br />pour vos lieux
        </h1>
        <p className="text-xl text-slate-500 mb-8 max-w-xl mx-auto">
          Transformez vos vidéos en expériences Gaussian Splat interactives. Partagez un lien, un QR code, analysez l&apos;engagement.
        </p>
        <Link href="/register">
          <Button size="lg">Créer mon compte gratuitement</Button>
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Tarifs simples</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map(({ name, price, features, cta, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl border p-6 ${highlight ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200'}`}
            >
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-3xl font-bold my-3">{price}</p>
              <ul className="space-y-2 mb-6">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={14} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/register">
                <Button className="w-full" variant={highlight ? 'secondary' : 'outline'}>{cta}</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-slate-400 text-sm">
        © 2026 Scenauria. Tous droits réservés.
      </footer>
    </div>
  );
}
