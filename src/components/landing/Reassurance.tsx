import { Check } from 'lucide-react';

const POINTS = [
  'Pas besoin de caméra 360',
  'Pas besoin de développeur',
  'Pas besoin de site complexe',
  'Aperçu gratuit avant paiement',
  'QR code inclus',
  'Analytics intégrés',
  'Partage facile sur les réseaux',
];

export function Reassurance() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#13233F]">
        Simple à créer. Facile à partager.{' '}
        <span className="text-[#3B6FE0]">Mesurable dès le départ.</span>
      </h2>

      <ul className="mt-10 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {POINTS.map(p => (
          <li
            key={p}
            className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-[#13233F]/10 text-[15px] text-[#13233F]"
          >
            <Check className="h-4 w-4 text-[#3B6FE0]" />
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}
