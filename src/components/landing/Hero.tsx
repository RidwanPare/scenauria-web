import Link from 'next/link';
import { Play, ShieldCheck, Tag, Eye, QrCode, MousePointerClick, BarChart3, Phone, Navigation, MessageCircle, CalendarCheck } from 'lucide-react';

const PROOF_ITEMS = [
  { icon: Eye, label: 'Visite immersive' },
  { icon: QrCode, label: 'QR code' },
  { icon: MousePointerClick, label: "Boutons d'action" },
  { icon: BarChart3, label: 'Analytics' },
];

export function Hero() {
  return (
    <section className="px-6 md:px-12 pt-10 pb-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
      {/* Texte */}
      <div>
        <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.1] font-semibold text-[#13233F] tracking-tight">
          Convertissez plus de visiteurs en clients grâce à une{' '}
          <span className="text-[#3B6FE0]">visite immersive</span> créée avec votre smartphone.
        </h1>

        <p className="mt-6 text-lg text-[#13233F]/75 leading-relaxed max-w-xl">
          Montrez votre établissement comme si vos clients y étaient, partagez-le par lien ou QR code,
          puis suivez les vues, les clics et les interactions depuis votre tableau de bord.
        </p>

        <div className="mt-6 flex items-center gap-3 bg-[#EAF0FA] rounded-xl px-4 py-3 max-w-xl">
          <ShieldCheck className="h-5 w-5 text-[#3B6FE0] shrink-0" />
          <p className="text-[15px] text-[#13233F]">
            Aucune caméra 360. Aucun matériel complexe. Juste votre smartphone.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/register"
            className="bg-[#13233F] text-white font-medium px-7 py-3.5 rounded-xl hover:bg-[#1d3357] active:scale-[0.97] transition-all"
          >
            Créer ma visite gratuite
          </Link>
          <a
            href="#exemple"
            className="flex items-center gap-2 border border-[#13233F]/25 text-[#13233F] font-medium px-7 py-3.5 rounded-xl hover:border-[#13233F]/50 active:scale-[0.97] transition-all"
          >
            <Play className="h-4 w-4" />
            Voir un exemple
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#13233F]/70">
          {PROOF_ITEMS.map(({ icon: Icon, label }, i) => (
            <span key={label} className="flex items-center gap-1.5">
              <Icon className="h-4 w-4" />
              {label}
              {i < PROOF_ITEMS.length - 1 && <span className="ml-3.5 text-[#13233F]/30">·</span>}
            </span>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-[15px] text-[#13233F]/80">
          <Tag className="h-4 w-4" />
          À partir de <strong className="font-semibold">7,99 €/mois par lieu</strong> — aperçu gratuit avant paiement.
        </p>
      </div>

      {/* Visuel */}
      <HeroVisual />
    </section>
  );
}

const ACTIONS = [
  { icon: Phone, label: 'Appeler' },
  { icon: Navigation, label: 'Itinéraire' },
  { icon: MessageCircle, label: 'WhatsApp', green: true },
  { icon: CalendarCheck, label: 'Réserver' },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="relative flex items-start justify-center gap-4">
        {/* Téléphone */}
        <div className="relative w-60 md:w-64 shrink-0 rounded-[2.4rem] border-[6px] border-[#13233F] bg-[#13233F] shadow-2xl shadow-[#13233F]/25 overflow-hidden">
          <div className="aspect-[9/18] relative bg-gradient-to-b from-[#2a3a55] via-[#41527a] to-[#1c2840] overflow-hidden">
            {/* Scène stylisée */}
            <div className="absolute inset-0 opacity-90">
              <div className="absolute top-[18%] left-[12%] h-10 w-10 rounded-full bg-[#E8B36B]/80 blur-[1px]" />
              <div className="absolute top-[14%] right-[18%] h-8 w-8 rounded-full bg-[#E8B36B]/60 blur-[1px]" />
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#0d1626] to-transparent" />
              <div className="absolute bottom-[12%] left-[10%] right-[10%] h-px bg-white/20" />
            </div>
            {/* Header visite */}
            <div className="absolute top-0 inset-x-0 px-4 pt-4 text-white">
              <p className="text-sm font-semibold">Le Comptoir</p>
              <p className="text-[11px] text-white/70">Restaurant · Lyon</p>
            </div>
            {/* Hotspots */}
            {[
              { top: '34%', left: '28%' },
              { top: '46%', left: '62%' },
              { top: '58%', left: '40%' },
            ].map((pos, i) => (
              <span
                key={i}
                style={pos}
                className="absolute h-5 w-5 rounded-full border-2 border-white bg-white/30 backdrop-blur-sm shadow-lg"
              />
            ))}
            {/* Sélecteur de pièce */}
            <div className="absolute bottom-16 left-4 bg-white rounded-lg px-3 py-1.5 text-xs font-medium text-[#13233F] shadow">
              Salon ▾
            </div>
            {/* Miniatures */}
            <div className="absolute bottom-3 inset-x-3 flex gap-1.5">
              {[0, 1, 2].map(i => (
                <div key={i} className={`h-10 flex-1 rounded-md ${i === 1 ? 'ring-2 ring-white' : ''} bg-gradient-to-br from-[#52688f] to-[#33425f]`} />
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite : actions + analytics */}
        <div className="flex flex-col gap-2.5 pt-6">
          {ACTIONS.map(({ icon: Icon, label, green }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-2.5 shadow-md shadow-[#13233F]/8 border border-[#13233F]/5 text-sm font-medium text-[#13233F]"
            >
              <Icon className={`h-4 w-4 ${green ? 'text-[#25D366]' : 'text-[#3B6FE0]'}`} />
              {label}
            </div>
          ))}

          {/* Carte analytics */}
          <div className="mt-3 bg-white rounded-2xl p-4 shadow-lg shadow-[#13233F]/10 border border-[#13233F]/5 w-44 md:w-52">
            <p className="text-xs font-semibold text-[#13233F] mb-3">Tableau de bord</p>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              {[
                { n: '248', l: 'vues' },
                { n: '43', l: 'clics' },
                { n: '18', l: 'scans QR' },
              ].map(({ n, l }) => (
                <div key={l} className="rounded-lg border border-[#13233F]/8 py-2">
                  <p className="text-base font-bold text-[#13233F]">{n}</p>
                  <p className="text-[9px] text-[#13233F]/60">{l}</p>
                </div>
              ))}
            </div>
            {/* Mini courbe */}
            <svg viewBox="0 0 160 48" className="mt-3 w-full">
              <polyline
                points="0,40 20,30 40,34 60,22 80,26 100,16 120,20 140,10 160,6"
                fill="none"
                stroke="#3B6FE0"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* QR code flottant */}
      <div className="absolute -bottom-6 left-2 md:left-6 bg-white rounded-2xl p-3.5 shadow-xl shadow-[#13233F]/15 border border-[#13233F]/5">
        <p className="text-[11px] font-semibold text-[#13233F] mb-2">Scannez pour visiter</p>
        <QrPattern className="h-20 w-20" />
        <p className="text-[10px] text-[#13233F]/60 mt-1.5 text-center">ou scannez-moi</p>
      </div>
    </div>
  );
}

function QrPattern({ className }: { className?: string }) {
  // QR décoratif (non scannable)
  const cells = [
    [0,0],[1,0],[2,0],[6,0],[8,0],[10,0],[11,0],[12,0],
    [0,1],[2,1],[5,1],[7,1],[10,1],[12,1],
    [0,2],[1,2],[2,2],[4,2],[8,2],[10,2],[11,2],[12,2],
    [5,3],[6,3],[9,3],
    [1,4],[3,4],[7,4],[8,4],[11,4],
    [0,5],[4,5],[6,5],[10,5],[12,5],
    [2,6],[5,6],[8,6],[9,6],[11,6],
    [0,7],[3,7],[6,7],[7,7],[12,7],
    [1,8],[4,8],[9,8],[10,8],
    [0,9],[5,9],[7,9],[11,9],
    [0,10],[1,10],[2,10],[6,10],[8,10],[10,10],[12,10],
    [0,11],[2,11],[4,11],[9,11],[11,11],
    [0,12],[1,12],[2,12],[5,12],[7,12],[10,12],[12,12],
  ];
  return (
    <svg viewBox="0 0 13 13" className={className}>
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#13233F" />
      ))}
    </svg>
  );
}
