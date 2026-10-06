import React, { useLayoutEffect, useRef, useState } from 'react';
import Tooth from '@/components/Tooth';
import { Slider } from '@/components/ui/slider';

const MIN = 7.5;
const MAX = 10.5;
const PRESETS = [
  { label: 'Pequeño', value: 8 },
  { label: 'Medio', value: 9 },
  { label: 'Grande', value: 10 },
];

export default function SizeSection() {
  const [width, setWidth] = useState(9);
  const frameRef = useRef(null);
  const [frameWidth, setFrameWidth] = useState(0);

  useLayoutEffect(() => {
    const element = frameRef.current;
    if (!element) return undefined;
    const measure = () => setFrameWidth(element.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const scale = frameWidth ? Math.min(26, Math.max(11, (frameWidth - 72) / MAX)) : 26;
  const height = Number((width * 1.24).toFixed(1));
  const px = Math.round(width * scale);

  return (
    <section id="tamano" className="scroll-mt-24 border-t border-[#E0FBFC]/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#98C1D9]">03 — TAMAÑO</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-[#E0FBFC] md:text-5xl">
            Escala dimensional
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#E0FBFC]/65 md:text-lg">
            Mueve la escala para ver cómo cambia la proporción del incisivo central. La anchura del diente se mide
            siempre sobre el diente vecino y sobre la línea media de la cara.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.02] p-6 md:p-12">
            <div ref={frameRef} className="flex min-h-[24rem] items-end justify-center overflow-hidden pb-12 pr-14">
              <div className="relative" style={{ width: `${px}px`, height: `${px * 1.25}px` }}>
                <Tooth variant="incisivo" color="#EFE7DA" className="h-full w-full" />

                <div className="absolute -bottom-9 left-0 right-0 flex items-center">
                  <span className="h-3 w-px bg-[#98C1D9]/60" />
                  <span className="h-px flex-1 bg-[#98C1D9]/40" />
                  <span className="mx-3 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-[#98C1D9]">
                    {width.toFixed(1)} MM
                  </span>
                  <span className="h-px flex-1 bg-[#98C1D9]/40" />
                  <span className="h-3 w-px bg-[#98C1D9]/60" />
                </div>

                <div className="absolute -right-7 top-0 bottom-0 flex flex-col items-center">
                  <span className="h-px w-3 bg-[#98C1D9]/60" />
                  <span className="w-px flex-1 bg-[#98C1D9]/40" />
                  <span className="my-3 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-[#98C1D9]">
                    {height}
                  </span>
                  <span className="w-px flex-1 bg-[#98C1D9]/40" />
                  <span className="h-px w-3 bg-[#98C1D9]/60" />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Slider
                value={[width]}
                min={MIN}
                max={MAX}
                step={0.1}
                onValueChange={(value) => setWidth(value[0])}
                aria-label="Anchura del incisivo central en milímetros"
              />
              <div className="mt-4 flex justify-between font-mono text-[10px] tracking-[0.2em] text-[#E0FBFC]/40">
                <span>{MIN.toFixed(1)} MM</span>
                <span>{((MIN + MAX) / 2).toFixed(1)} MM</span>
                <span>{MAX.toFixed(1)} MM</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setWidth(preset.value)}
                  className={`rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                    Math.abs(width - preset.value) < 0.05
                      ? 'border-[#98C1D9]/70 bg-[#98C1D9]/10 text-[#E0FBFC]'
                      : 'border-[#E0FBFC]/15 text-[#E0FBFC]/55 hover:border-[#E0FBFC]/35 hover:text-[#E0FBFC]'
                  }`}
                >
                  {preset.label.toUpperCase()} · {preset.value.toFixed(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.03] p-7">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">RELACIÓN ANCHO / ALTO</p>
              <p className="mt-5 font-display text-4xl font-bold tracking-tight text-[#E0FBFC]">
                {(width / height).toFixed(2)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#E0FBFC]/60">
                El incisivo central suele mantener una proporción cercana a 0,80. Si baja, el diente parece estrecho y
                alargado; si sube, se percibe corto y ancho.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.03] p-7">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">PROPORCIÓN ÁUREA</p>
              <p className="mt-5 font-display text-4xl font-bold tracking-tight text-[#E0FBFC]">62 %</p>
              <p className="mt-3 text-sm leading-relaxed text-[#E0FBFC]/60">
                Cada diente visible representa aproximadamente el 62 % del anterior: el lateral respecto al central y el
                canino respecto al lateral.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.03] p-7">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">REGLA DEL 1/16</p>
              <p className="mt-3 text-sm leading-relaxed text-[#E0FBFC]/60">
                El ancho del incisivo central equivale, en promedio, a 1/16 de la anchura bicigomática del rostro. Es una
                referencia rápida y útil en la primera cita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}