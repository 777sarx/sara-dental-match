import React from 'react';
import { Image } from '@/components/ui/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#1B4965]/40 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-[#98C1D9]/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
            'linear-gradient(to right, rgba(224,251,252,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(224,251,252,0.05) 1px, transparent 1px)',
            backgroundSize: '120px 120px'
          }} />
        
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-10">
        <div className="min-w-0">
          <p className="font-mono tracking-[0.4em] text-[#98C1D9] text-sm sm:text-sm">
            PRÓTESIS DENTAL · TRABAJO FINAL DE GRADO
          </p>

          <h1 className="mt-8 font-display text-[12.5vw] font-extrabold leading-[0.85] tracking-[-0.03em] text-[#E0FBFC] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Color.
            <br />
            Forma.
            <br />
            <span className="text-[#98C1D9]">Tamaño.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#E0FBFC]/70 md:text-lg">
            Atlas interactivo para la selección del diente en prótesis fija: cómo elegir el tono que integra, la
            morfología que armoniza y la dimensión que respeta la proporción del rostro.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#color"
              className="rounded-full bg-[#E0FBFC] px-6 py-3 font-mono text-[10px] tracking-[0.24em] text-[#050A0F] transition-colors duration-300 hover:bg-[#98C1D9]">
              
              EXPLORAR LA GUÍA DE COLOR
            </a>
            <a
              href="#forma"
              className="rounded-full border border-[#E0FBFC]/20 px-6 py-3 font-mono text-[10px] tracking-[0.24em] text-[#E0FBFC]/75 transition-colors duration-300 hover:border-[#98C1D9]/60 hover:text-[#E0FBFC]">
              
              VER TIPOLOGÍAS
            </a>
          </div>

          <p className="mt-10 font-mono text-[9px] leading-relaxed tracking-[0.24em] text-[#E0FBFC]/40 sm:text-[10px]">
            MUEVE EL RATÓN O TOCA CUALQUIER DIENTE → LA LENGÜETA SE TIÑE CON SU TONO
          </p>
        </div>

        <div className="relative min-w-0">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E0FBFC]/10 bg-[#050A0F]">
            <Image src="https://media.base44.com/images/public/6ac21e49ce45eb9ee5ec0654/ca17bacdc_Gemini_Generated_Image_n3uwx6n3uwx6n3uw.jpg"

            alt="Muestrario VITA classical A1–D4 con los 16 dientes de color y su código, sobre fondo azul medianoche"
            className="aspect-[4/3] w-full"
            fittingType="fill" />
            
          </div>
          <div className="absolute -bottom-5 left-5 rounded-full border border-[#E0FBFC]/15 bg-[#050A0F]/85 px-4 py-2 backdrop-blur-md">
            <span className="font-mono text-[9px] tracking-[0.24em] text-[#E0FBFC]/70 sm:text-[10px]">
              GUÍA VITA CLASSICAL · 16 TONOS
            </span>
          </div>
        </div>
      </div>
    </section>);

}