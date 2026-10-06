import React, { useState } from 'react';
import ShadeCard from '@/components/color/ShadeCard';
import ShadeDetail from '@/components/color/ShadeDetail';
import { SHADES, SHADES_BY_SERIES } from '@/data/shades';

export default function ColorSection() {
  const [selected, setSelected] = useState(SHADES.find((shade) => shade.code === 'A2'));

  return (
    <section id="color" className="scroll-mt-24 border-t border-[#E0FBFC]/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#98C1D9]">01 — COLOR</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-[#E0FBFC] md:text-5xl">
            La guía de color
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#E0FBFC]/65 md:text-lg">
            Dieciséis tonos de la guía VITA classical agrupados por familia cromática. Acércate a cualquier diente y la
            lengüeta adoptará su color exacto.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {SHADES_BY_SERIES.map((group) => (
            <span
              key={group.key}
              className="flex items-center gap-2 rounded-full border border-[#E0FBFC]/10 bg-white/[0.03] px-3.5 py-1.5"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: group.shades[Math.floor(group.shades.length / 2)].hex }}
              />
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#E0FBFC]/60">
                {group.key} · {group.name.toUpperCase()}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <div className="space-y-8">
            {SHADES_BY_SERIES.map((group) => (
              <div
                key={group.key}
                className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.02] p-6 md:p-8"
              >
                <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-bold tracking-tight text-[#E0FBFC] md:text-xl">
                    Grupo {group.key} · {group.name}
                  </h3>
                  <p className="max-w-md text-xs text-[#E0FBFC]/50 md:text-sm">{group.note}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {group.shades.map((shade) => (
                    <ShadeCard
                      key={shade.code}
                      shade={shade}
                      selected={selected?.code === shade.code}
                      onSelect={setSelected}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <ShadeDetail shade={selected} />
        </div>

        <p className="mt-10 font-mono text-[10px] tracking-[0.24em] text-[#E0FBFC]/40">
          CON RATÓN, LA LENGÜETA SE TIÑE AL PASAR · EN PANTALLA TÁCTIL, TOCA UN DIENTE PARA SELECCIONARLO
        </p>
      </div>
    </section>
  );
}