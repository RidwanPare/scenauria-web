import { Image as ImageIcon, GalleryVertical, Video, QrCode, ClipboardCopy, Pin, Info } from 'lucide-react';

const KIT_ITEMS = [
  { icon: ImageIcon, label: 'Visuel carré Instagram / Facebook' },
  { icon: GalleryVertical, label: 'Story verticale Instagram / WhatsApp / Snapchat' },
  { icon: Video, label: 'Mini vidéo courte' },
  { icon: QrCode, label: 'Visuel avec QR code' },
  { icon: ClipboardCopy, label: 'Message prêt à copier-coller' },
  { icon: Pin, label: 'Post épinglé « Visitez-nous comme si vous y étiez »' },
];

export function DiffusionKit() {
  return (
    <section className="bg-[#13233F]">
      <div className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight">
            Annoncez facilement que votre établissement est{' '}
            <span className="text-[#9FB8E8]">visitable en ligne.</span>
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed">
            Une fois votre visite publiée, Scenauria génère un kit de diffusion prêt à partager
            pour annoncer à vos clients qu&apos;ils peuvent découvrir votre établissement comme
            s&apos;ils y étaient.
          </p>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KIT_ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 bg-white/8 rounded-xl px-5 py-4 border border-white/10 text-[15px] text-white"
            >
              <Icon className="h-5 w-5 text-[#9FB8E8] shrink-0" />
              {label}
            </li>
          ))}
        </ul>

        <p className="mt-8 flex items-start gap-2.5 text-sm text-white/60 max-w-2xl">
          <Info className="h-4 w-4 mt-0.5 shrink-0" />
          Le kit n&apos;est pas une agence de communication. Il sert à diffuser votre visite
          Scenauria et à faire découvrir votre établissement.
        </p>
      </div>
    </section>
  );
}
