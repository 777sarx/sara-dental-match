import React from 'react';
import { Image } from '@/components/ui/image';

export default function PrecisionBand() {
  return (
    <section className="border-t border-[#E0FBFC]/10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E0FBFC]/10 bg-[#050A0F]">
          <Image
            src="https://media.base44.com/images/public/6ac21e49ce45eb9ee5ec0654/67bf4b800_generated_dbaa1e60.png"
            alt="Lámina clínica con los cuatro perfiles faciales, sus formas geométricas y los pares de dientes correspondientes"
            className="aspect-[16/9] w-full"
            fittingType="fill"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,10,15,0.35) 0%, rgba(5,10,15,0.15) 45%, rgba(5,10,15,0.9) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#98C1D9]">PRECISIÓN MORFOLÓGICA</p>
            <p className="mt-4 max-w-2xl font-display text-2xl font-bold leading-tight tracking-tight text-[#E0FBFC] md:text-4xl">
              La forma correcta es la que el paciente reconoce como suya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}