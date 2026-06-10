import { UtensilsCrossed, Scissors, Store, BedDouble, Dumbbell } from 'lucide-react';

const CASES = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants et cafés',
    desc: "Montrez l'ambiance, la salle, la terrasse, le bar ou les espaces privatisables.",
  },
  {
    icon: Scissors,
    title: 'Salons de beauté et barber shops',
    desc: "Rassurez vos clients sur le cadre, l'hygiène, le confort et l'expérience.",
  },
  {
    icon: Store,
    title: 'Boutiques et showrooms',
    desc: 'Aidez les clients à découvrir votre univers avant de venir sur place.',
  },
  {
    icon: BedDouble,
    title: 'Hôtels, chambres et résidences',
    desc: 'Montrez les chambres, espaces communs, équipements et accès.',
  },
  {
    icon: Dumbbell,
    title: 'Salles de sport et loisirs',
    desc: "Présentez les équipements, espaces, vestiaires et zones d'activité.",
  },
];

export function UseCases() {
  return (
    <section id="cas-usage" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#13233F] text-center max-w-3xl mx-auto leading-tight">
        Scenauria s&apos;adapte aux lieux que vos clients veulent voir{' '}
        <span className="text-[#3B6FE0]">avant de choisir.</span>
      </h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map(({ icon: Icon, title, desc }) => (
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
