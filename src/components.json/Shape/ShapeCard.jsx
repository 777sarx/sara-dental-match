import React, { useState } from 'react';
import Tooth from '@/components/Tooth';
import { useCursor } from '@/components/cursor/CursorProvider';

export default function ShapeCard({ form }) {
  const { setHover, clear } = useCursor();
  const [active, setActive] = useState(false);

  const enter = () => {
    setActive(true);
    setHover({ label: form.name.toUpperCase(), color: form.color });
  };

  const leave = () => {
    setActive(false);
    clear();
  };

  return (
    <article
      onMouseEnter={enter}
      onMouseLeave={leave}
      className={`group flex flex-col rounded-[2rem] border p-7 transition-colors duration-500 ${
        active ? 'border-[#98C1D9]/40 bg-white/[0.05]' : 'border-[#E0FBFC]/10 bg-white/[0.02]'
      }`}
    >
      <div className="relative h-56 md:h-64">
        <Tooth
          variant={form.variant}
          color={form.color}
          guides={active}
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>

      <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-[#E0FBFC]">{form.name}</h3>
      <p className="mt-2 font-mono text-[10px] tracking-[0.26em] text-[#98C1D9]">{form.tagline.toUpperCase()}</p>
      <p className="mt-5 text-sm leading-relaxed text-[#E0FBFC]/65">{form.text}</p>

      <ul className="mt-6 space-y-2 border-t border-[#E0FBFC]/10 pt-6">
        {form.cues.map((cue) => (
          <li key={cue} className="flex items-start gap-3 text-xs text-[#E0FBFC]/55">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#98C1D9]" />
            {cue}
          </li>
        ))}
      </ul>

      <p className="mt-6 font-mono text-[9px] tracking-[0.22em] text-[#E0FBFC]/30">
        {active ? 'PROPORCIÓN ÁUREA VISIBLE' : 'PASA EL CURSOR PARA VER LAS GUÍAS'}
      </p>
    </article>
  );
}