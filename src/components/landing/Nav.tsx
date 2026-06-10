import Link from 'next/link';
import { Logo } from './Logo';

const LINKS = [
  { href: '#produit', label: 'Produit' },
  { href: '#cas-usage', label: "Cas d'usage" },
  { href: '#tarifs', label: 'Tarifs' },
];

export function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-2.5">
        <Logo className="h-9 w-9" />
        <span className="font-serif text-2xl font-semibold text-[#13233F] tracking-tight">Scenauria</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} className="text-[15px] text-[#13233F]/80 hover:text-[#13233F] transition-colors">
            {label}
          </a>
        ))}
        <Link href="/login" className="text-[15px] text-[#13233F]/80 hover:text-[#13233F] transition-colors">
          Connexion
        </Link>
        <Link
          href="/register"
          className="bg-[#13233F] text-white text-[15px] font-medium px-5 py-2.5 rounded-lg hover:bg-[#1d3357] active:scale-[0.97] transition-all"
        >
          Créer ma visite
        </Link>
      </div>
      <Link
        href="/register"
        className="md:hidden bg-[#13233F] text-white text-sm font-medium px-4 py-2 rounded-lg active:scale-[0.97] transition-transform"
      >
        Créer ma visite
      </Link>
    </nav>
  );
}
