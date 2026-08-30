'use client';

import Link from 'next/link';
import { useState } from 'react';
import LogoLarge from '@/components/LogoLarge';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: 'About', path: '/about', color: 'header-button-magenta' },
    { name: 'Projects', path: '/projects', color: 'header-button-purple' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex flex-row">
        <Link href="/" aria-label="Zytronium Dev home"><LogoLarge /></Link>
        <div className="relative hidden sm:flex flex-1 h-24 items-center justify-end px-8 gap-1 overflow-hidden navbar-surface">
          <div className="pointer-events-none absolute top-0 h-px w-[60%] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[scan_6s_linear_infinite]" />
          <div className="pointer-events-none absolute inset-0 navbar-lines" />
          <div className="absolute bottom-0 left-0 right-0 h-px navbar-accent" />
          {navItems.map(({ path, name, color }, i) => (
            <div key={path} className="flex items-center">
              {i > 0 && <span className="w-px h-3.5 bg-secondary/30 mx-1" />}
              <Link href={path} className={`header-button ${color}`}>{name}</Link>
            </div>
          ))}
          <a href="/#contact" className="header-button header-button-cyan ml-4">Contact</a>
        </div>
        <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="sm:hidden flex-1 flex items-center justify-end px-5 text-foreground/70 navbar-surface">
          <span className="relative w-6 h-5 flex flex-col justify-between"><span className={`block h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-[10px]' : ''}`} /><span className={`block h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} /><span className={`block h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`} /></span>
        </button>
      </div>
      <div className={`sm:hidden overflow-hidden transition-all ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} navbar-mobile`}>
        <nav className="flex flex-col items-start gap-2 p-4">{navItems.map(({ path, name, color }) => <Link key={path} href={path} onClick={() => setMenuOpen(false)} className={`header-button ${color}`}>{name}</Link>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="header-button header-button-cyan">Contact</a></nav>
      </div>
    </header>
  );
}
