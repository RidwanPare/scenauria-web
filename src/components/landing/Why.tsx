import { HeartHandshake, MousePointerClick, BarChart3 } from 'lucide-react';

const BENEFITS = [
  {
    icon: HeartHandshake,
    title: 'Donnez confiance avant la visite',
    desc: "Montrez l'ambiance, l'espace, les équipements et les détails qui rassurent vos futurs clients.",
  },
  {
    icon: MousePointerClick,
    title: "Facilitez le passage à l'action",
    desc: 'Ajoutez des boutons pour appeler, réserver, demander un itinéraire ou vous contacter sur WhatsApp.',
  },
  {
    icon: BarChart3,
    title: 'Mesurez ce qui fonctionne',
    desc: 'Suivez les vues, les scans QR, les clics et les interactions depuis votre tableau de bord.',
  },
];

export function Why() {
  return (
    <section id="produit" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#13233F] leading-tight">
          Une visite immersive ne sert pas seulement à montrer votre lieu.{' '}
          <span className="text-[#3B6FE0]">Elle aide vos clients à se décider.</span>
        </h2>
        <p className="mt-5 text-lg text-[#13233F]/75 leading-relaxed">
          Avant de se déplacer, de réserver ou de vous contacter, vos clients veulent se projeter.
          Avec Scenauria, ils peuvent découvrir votre établissement en ligne, comme s&apos;ils y étaient,
          puis passer à l&apos;action en un clic.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {BENEFITS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-7 border border-[#13233F]/8 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-[#EAF0FA] flex items-center justify-center mb-5">
              <Icon className="h-6 w-6 text-[#3B6FE0]" />
            </div>
            <h3 className="font-semibold text-lg text-[#13233F] mb-2">{title}</h3>
            <p className="text-[15px] text-[#13233F]/70 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
