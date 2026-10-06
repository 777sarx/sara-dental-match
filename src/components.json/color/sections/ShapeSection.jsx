import React from 'react';
import ShapeCard from '@/components/shape/ShapeCard';
import { FORMS } from '@/data/forms';

export default function ShapeSection() {
  return (
    <section id="forma" className="scroll-mt-24 border-t border-[#E0FBFC]/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#98C1D9]">02 — FORMA</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-[#E0FBFC] md:text-5xl">
            Tipologías morfológicas
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#E0FBFC]/65 md:text-lg">
            Tres formas básicas que se eligen mirando al paciente, nunca al modelo: la silueta del diente debe repetir
            el contorno general del rostro para que la sonrisa se perciba como propia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FORMS.map((form) => (
            <ShapeCard key={form.key} form={form} />
          ))}
        </div>

        <p className="mt-10 font-mono text-[10px] tracking-[0.24em] text-[#E0FBFC]/40">
          LA FORMA SE DECIDE EN EL PRIMER CONTACTO VISUAL · ANTES DE TOMAR CUALQUIER REGISTRO
        </p>
      </div>
    </section>
  );
}