import { Eye, QrCode, Phone, MessageCircle, Navigation, CalendarCheck, Globe, TrendingUp } from 'lucide-react';

const METRICS = [
  { icon: Eye, label: 'Vues de la visite' },
  { icon: QrCode, label: 'Scans du QR code' },
  { icon: Phone, label: 'Clics sur Appeler' },
  { icon: MessageCircle, label: 'Clics sur WhatsApp' },
  { icon: Navigation, label: 'Clics sur Itinéraire' },
  { icon: CalendarCheck, label: 'Clics sur Réserver' },
  { icon: Globe, label: 'Sources : lien, QR, Instagram, Facebook, WhatsApp' },
  { icon: TrendingUp, label: 'Évolution par jour ou par période' },
];

export function Analytics() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#13233F] leading-tight">
          Des analytics simples pour savoir si votre visite{' '}
          <span className="text-[#3B6FE0]">attire vraiment des clients.</span>
        </h2>
        <p className="mt-6 text-lg text-[#13233F]/75 leading-relaxed">
          Vous ne partagez plus seulement un lien. Vous savez combien de personnes découvrent
          votre établissement et quelles actions elles effectuent ensuite.
        </p>
      </div>

      <ul className="grid sm:grid-cols-2 gap-3">
        {METRICS.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-[#13233F]/8 text-[15px] text-[#13233F]"
          >
            <Icon className="h-5 w-5 text-[#3B6FE0] shrink-0" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
