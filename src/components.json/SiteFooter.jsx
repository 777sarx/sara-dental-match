import React from 'react';

const SUMMARY = [
  { title: 'Color', href: '#color', text: 'Primero el tono: guía VITA classical y comparación bajo luz neutra.' },
  { title: 'Forma', href: '#forma', text: 'Después la morfología, en diálogo con las líneas del rostro.' },
  { title: 'Tamaño', href: '#tamano', text: 'Por último la dimensión, respetando proporciones y vecinos.' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E0FBFC]/10 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-[#E0FBFC] md:text-5xl">
          Elegir bien un diente es devolver a cada rostro su propia armonía.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SUMMARY.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-[#E0FBFC]/10 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-[#E0FBFC]/25 hover:bg-white/[0.05]"
            >
              <p className="font-mono text-[10px] tracking-[0.28em] text-[#98C1D9]">{item.title.toUpperCase()}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#E0FBFC]/65">{item.text}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#E0FBFC]/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[9px] tracking-[0.28em] text-[#E0FBFC]/45 sm:text-[10px]">
            ATLAS DE SELECCIÓN DENTAL · TRABAJO FINAL DE GRADO · 2026
          </p>
          <p className="font-mono text-[9px] tracking-[0.28em] text-[#98C1D9] sm:text-[10px]">
            DISEÑADO POR SARA EL HANCHI
          </p>
        </div>
      </div>
    </footer>
  );
}