import Link from 'next/link';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: '7,99 €',
    tagline: 'Pour publier une première visite et la partager simplement.',
    features: [
      'Visite immersive publiée',
      'Lien public',
      'QR code',
      "Kit d'annonce simple",
      'Analytics de base',
      'Aperçu gratuit avant paiement',
    ],
    annual: 'Annuel : 79,99 € la première année, puis 49,99 €/an.',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '12,99 €',
    tagline: 'Pour mieux convertir et suivre les interactions.',
    features: [
      'Tout Starter',
      "Boutons d'action : Appeler, Itinéraire, WhatsApp, Réserver",
      'Analytics détaillés',
      'Kit de diffusion multi-réseaux',
      'Mini vidéo courte',
      'Personnalisation avancée',
    ],
    annual: 'Annuel : 119,99 € la première année, puis 79,99 €/an.',
    highlight: true,
  },
  {
    name: 'Business',
    price: '19,99 €',
    tagline: 'Pour les établissements plus structurés ou multi-lieux.',
    features: [
      'Tout Pro',
      'Suivi multi-lieux',
      'Analytics comparatifs',
      'Plusieurs QR codes ou campagnes',
      'Contenus de diffusion enrichis',
      'Support prioritaire',
    ],
    annual: 'Annuel : 179,99 € la première année, puis 119,99 €/an.',
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="bg-white border-y border-[#13233F]/8">
      <div className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#13233F] text-center">
          Choisissez l&apos;offre adaptée à votre établissement.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map(({ name, price, tagline, features, annual, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl p-7 flex flex-col ${
                highlight
                  ? 'bg-[#13233F] text-white shadow-xl shadow-[#13233F]/20 md:-my-3 md:py-10'
                  : 'bg-[#FAF6EF] border border-[#13233F]/10'
              }`}
            >
              {highlight && (
                <span className="self-start text-xs font-semibold bg-[#3B6FE0] text-white px-3 py-1 rounded-full mb-4">
                  Recommandé
                </span>
              )}
              <h3 className={`font-semibold text-lg ${highlight ? 'text-white' : 'text-[#13233F]'}`}>{name}</h3>
              <p className="mt-2 flex items-baseline gap-1">
                <span className={`font-serif text-4xl font-semibold ${highlight ? 'text-white' : 'text-[#13233F]'}`}>{price}</span>
                <span className={`text-sm ${highlight ? 'text-white/70' : 'text-[#13233F]/60'}`}>/mois</span>
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${highlight ? 'text-white/75' : 'text-[#13233F]/70'}`}>{tagline}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {features.map(f => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${highlight ? 'text-white/90' : 'text-[#13233F]/85'}`}>
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${highlight ? 'text-[#9FB8E8]' : 'text-[#3B6FE0]'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <p className={`mt-6 text-xs ${highlight ? 'text-white/60' : 'text-[#13233F]/55'}`}>{annual}</p>

              <Link
                href="/register"
                className={`mt-5 text-center font-medium px-5 py-3 rounded-xl active:scale-[0.97] transition-all ${
                  highlight
                    ? 'bg-white text-[#13233F] hover:bg-white/90'
                    : 'bg-[#13233F] text-white hover:bg-[#1d3357]'
                }`}
              >
                Créer ma visite gratuite
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
