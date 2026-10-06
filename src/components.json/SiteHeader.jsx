import React from 'react';

const LINKS = [
  { href: '#color', label: 'Color' },
  { href: '#forma', label: 'Forma' },
  { href: '#tamano', label: 'Tamaño' },
  { href: '#proporcion', label: 'Proporción', mobileHidden: true },
  { href: '#dimensiones', label: 'Dimensiones', mobileHidden: true },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E0FBFC]/10 bg-[#050A0F]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#98C1D9]" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#E0FBFC]/80 sm:text-[10px]">
            SELECCIÓN DENTAL
          </span>
        </a>
        <nav className="flex items-center gap-5 sm:gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-[9px] tracking-[0.26em] text-[#E0FBFC]/50 transition-colors duration-300 hover:text-[#E0FBFC] sm:text-[10px] ${
                link.mobileHidden ? 'hidden sm:inline' : ''
              }`}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}