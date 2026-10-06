import React from 'react';
import Tooth from '@/components/Tooth';

export default function SignatureTag() {
  return (
    <a
      href="#top"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-[#E0FBFC]/15 bg-[#050A0F]/80 px-3.5 py-2 backdrop-blur-md transition-colors duration-300 hover:border-[#98C1D9]/50"
    >
      <Tooth
        variant="ovoide"
        color="#98C1D9"
        className="h-3.5 w-3.5 transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
      />
      <span className="font-mono text-[8px] tracking-[0.22em] text-[#E0FBFC]/70 sm:text-[9px]">
        DISEÑADO POR SARA EL HANCHI
      </span>
    </a>
  );
}