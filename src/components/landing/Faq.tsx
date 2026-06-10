const FAQS = [
  {
    q: "Ai-je besoin d'une caméra 360 ?",
    a: 'Non. Scenauria est conçu pour fonctionner avec un simple smartphone.',
  },
  {
    q: 'Est-ce que je paie avant de voir le résultat ?',
    a: "Non. Vous pouvez générer un aperçu gratuit avant de choisir une offre.",
  },
  {
    q: 'Que se passe-t-il après paiement ?',
    a: 'Votre visite est publiée. Vous recevez un lien, un QR code, votre kit de diffusion et l’accès aux analytics.',
  },
  {
    q: 'Puis-je partager ma visite sur WhatsApp, Instagram ou Facebook ?',
    a: 'Oui. Votre visite peut être partagée par lien, QR code ou via le kit de diffusion Scenauria.',
  },
  {
    q: 'À quoi servent les analytics ?',
    a: 'Ils vous permettent de suivre les vues, scans QR, clics et interactions générées par votre visite.',
  },
];

export function Faq() {
  return (
    <section className="bg-white border-y border-[#13233F]/8">
      <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#13233F] text-center mb-12">
          Questions fréquentes
        </h2>

        <div className="divide-y divide-[#13233F]/8">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-[#13233F] text-lg">
                {q}
                <span className="ml-4 text-[#3B6FE0] transition-transform duration-200 group-open:rotate-45 text-2xl leading-none shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] text-[#13233F]/70 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
