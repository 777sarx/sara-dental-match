import React from 'react';
import Tooth from '@/components/Tooth';
import { SERIES } from '@/data/shades';

export default function ShadeDetail({ shade }) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.03] p-7 backdrop-blur-md">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">TONO SELECCIONADO</p>

        {shade ?
        <>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-5xl font-bold tracking-tight text-[#E0FBFC]">{shade.code}</p>
                <p className="mt-2 text-sm text-[#E0FBFC]/60">Grupo {shade.series} · {SERIES[shade.series].name}</p>
              </div>
              <div className="h-24 w-14 shrink-0">
                <Tooth variant="incisivo" color={shade.hex} className="h-full w-full" />
              </div>
            </div>

            <p className="mt-7 border-t border-[#E0FBFC]/10 pt-6 text-sm leading-relaxed text-[#E0FBFC]/70">
              {shade.note}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span
              className="h-8 w-8 rounded-lg border border-[#E0FBFC]/20"
              style={{ backgroundColor: shade.hex }}
              aria-hidden="true" />
            
              <span className="font-mono text-[10px] tracking-[0.24em] text-[#E0FBFC]/50">{shade.hex}</span>
            </div>
          </> :

        <p className="mt-6 text-sm leading-relaxed text-[#E0FBFC]/60">
            Pasa el cursor o toca un diente para analizar su tono, su saturación y cuándo conviene utilizarlo.
          </p>
        }
      </div>

      <p className="mt-5 px-1 text-xs leading-relaxed text-[#E0FBFC]/40">La comparación se realiza siempre con luz neutra y el diente hidratado, antes de elegir la cerámica.

      </p>
    </aside>);

}