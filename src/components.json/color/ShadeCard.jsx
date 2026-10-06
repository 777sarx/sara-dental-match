import React from 'react';
import Tooth from '@/components/Tooth';
import { useCursor } from '@/components/cursor/CursorProvider';

export default function ShadeCard({ shade, selected, onSelect }) {
  const { setHover, clear } = useCursor();

  const activate = () => setHover({ label: shade.code, color: shade.hex });

  return (
    <button
      type="button"
      onClick={() => onSelect(shade)}
      onMouseEnter={activate}
      onFocus={activate}
      onMouseLeave={clear}
      onBlur={clear}
      aria-label={`Tono ${shade.code}`}
      aria-pressed={selected}
      className={`group relative flex flex-col items-center gap-4 rounded-3xl border p-5 transition-all duration-500 sm:p-6 ${
        selected
          ? 'border-[#98C1D9]/70 bg-[#98C1D9]/10'
          : 'border-[#E0FBFC]/10 bg-white/[0.02] hover:border-[#E0FBFC]/30 hover:bg-white/[0.05]'
      }`}
    >
      <div className="h-24 w-16 transition-transform duration-500 group-hover:-translate-y-2 sm:h-28 sm:w-20">
        <Tooth
          variant="incisivo"
          color={shade.hex}
          className="h-full w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)]"
        />
      </div>
      <span
        className={`font-mono text-[11px] tracking-[0.3em] transition-colors duration-300 ${
          selected ? 'text-[#E0FBFC]' : 'text-[#E0FBFC]/55 group-hover:text-[#E0FBFC]'
        }`}
      >
        {shade.code}
      </span>
      {selected && (
        <span className="absolute right-3 top-3 font-mono text-[8px] tracking-[0.2em] text-[#98C1D9]">SEL.</span>
      )}
    </button>
  );
}