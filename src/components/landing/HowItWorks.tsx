import { Smartphone, Eye, Rocket, Share2, LineChart } from 'lucide-react';

const STEPS = [
  {
    icon: Smartphone,
    title: 'Capturez avec votre smartphone',
    desc: 'Prenez les photos ou contenus nécessaires depuis votre téléphone. Pas besoin de caméra 360 ni de matériel professionnel.',
  },
  {
    icon: Eye,
    title: 'Prévisualisez votre visite',
    desc: 'Scenauria génère un aperçu de votre visite immersive. Vous voyez le résultat avant de payer.',
  },
  {
    icon: Rocket,
    title: 'Publiez votre visite',
    desc: "Lorsque la visite vous convient, vous choisissez votre offre et vous l'activez.",
  },
  {
    icon: Share2,
    title: 'Partagez partout',
    desc: "Recevez votre lien, votre QR code et votre kit d'annonce pour vos réseaux sociaux.",
  },
  {
    icon: LineChart,
    title: 'Suivez les résultats',
    desc: 'Consultez les vues, scans QR, clics sur appel, itinéraire, WhatsApp ou réservation.',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white border-y border-[#13233F]/8">
      <div className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#13233F] text-center">
          Créez, publiez, partagez, mesurez.
        </h2>

        <ol className="mt-14 grid md:grid-cols-5 gap-8">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-8 w-8 rounded-full bg-[#13233F] text-white text-sm font-semibold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <Icon className="h-5 w-5 text-[#3B6FE0]" />
              </div>
              <h3 className="font-semibold text-[#13233F] mb-2">{title}</h3>
              <p className="text-sm text-[#13233F]/70 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
