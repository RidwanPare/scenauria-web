'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, MapPin, Video, Eye, BarChart2, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/places', label: 'Lieux', icon: MapPin },
  { href: '/captures', label: 'Captures', icon: Video },
  { href: '/visits', label: 'Visites', icon: Eye },
  { href: '/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/settings', label: 'Paramètres', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/login';
  }

  return (
    <aside className="w-56 flex-shrink-0 border-r bg-white h-screen flex flex-col">
      <div className="p-4 border-b">
        <span className="font-bold text-lg tracking-tight">Scenauria</span>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {NAV.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              pathname === href || (href !== '/dashboard' && pathname.startsWith(href))
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            )}
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>
      <div className="p-2 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-600 hover:bg-slate-50 w-full"
        >
          <LogOut size={16} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}
