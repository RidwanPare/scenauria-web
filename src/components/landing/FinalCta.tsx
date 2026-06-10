import Link from 'next/link';
import { Logo } from './Logo';

export function FinalCta() {
  return (
    <>
      <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-[2.6rem] font-semibold text-[#13233F] leading-tight">
          Faites découvrir votre établissement avant même que vos clients se déplacent.
        </h2>
        <p className="mt-6 text-lg text-[#13233F]/75 max-w-2xl mx-auto leading-relaxed">
          Créez gratuitement votre aperçu Scenauria, visualisez le résultat,
          puis publiez votre visite lorsqu&apos;elle vous convient.
        </p>
        <Link
          href="/register"
          className="mt-9 inline-block bg-[#13233F] text-white font-medium px-9 py-4 rounded-xl text-lg hover:bg-[#1d3357] active:scale-[0.97] transition-all"
        >
          Créer ma visite gratuite
        </Link>
      </section>

      <footer className="border-t border-[#13233F]/8 px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <span className="font-serif font-semibold text-[#13233F]">Scenauria</span>
          </div>
          <p className="text-sm text-[#13233F]/50">© 2026 Scenauria. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
