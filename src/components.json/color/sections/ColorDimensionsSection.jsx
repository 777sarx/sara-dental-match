import React, { useState } from 'react';
import Tooth from '@/components/Tooth';
import { Slider } from '@/components/ui/slider';

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (x) => Math.round(255 * x).toString(16).padStart(2, '0');
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

function realism(m, c, v) {
  const huePenalty = m < 30 ? (30 - m) / 10 : m > 50 ? (m - 50) / 5 : 0;
  const chromaPenalty = c < 15 ? (15 - c) / 15 : c > 45 ? (c - 45) / 30 : 0;
  const valuePenalty = v < 55 ? (55 - v) / 30 : v > 90 ? (v - 90) / 10 : 0;
  const score = Math.min(1, (huePenalty + chromaPenalty + valuePenalty) / 3);
  const verdict =
    score < 0.1
      ? { label: 'ÓPTIMO', color: '#98C1D9' }
      : score < 0.4
      ? { label: 'REALISTA', color: '#A9D9B8' }
      : { label: 'IRREAL', color: '#E08A8A' };
  return { ...verdict, score };
}

const DIMENSIONS = [
  {
    key: 'matiz',
    label: 'MATIZ',
    hint: 'Familia de color',
    desc: 'La longitud de onda dominante: del amarillo cálido al ámbar. Es lo que primero identifica el ojo.',
    min: 20,
    max: 55,
    step: 1,
    unit: '°',
  },
  {
    key: 'croma',
    label: 'CROMA',
    hint: 'Intensidad',
    desc: 'La saturación del tono. A más croma, más vivo; a menos, más grisáceo y apagado.',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    key: 'valor',
    label: 'VALOR',
    hint: 'Luminosidad',
    desc: 'La cantidad de luz que refleja el diente. Es la dimensión más importante para el ojo humano.',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
];

export default function ColorDimensionsSection() {
  const [matiz, setMatiz] = useState(38);
  const [croma, setCroma] = useState(34);
  const [valor, setValor] = useState(72);

  const color = `hsl(${matiz} ${croma}% ${valor}%)`;
  const hex = hslToHex(matiz, croma, valor);
  const r = realism(matiz, croma, valor);
  const meter = (1 - r.score) * 100;

  const values = { matiz, croma, valor };
  const setters = { matiz: setMatiz, croma: setCroma, valor: setValor };

  return (
    <section id="dimensiones" className="scroll-mt-24 border-t border-[#E0FBFC]/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#98C1D9]">05 — MATIZ · CROMA · VALOR</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-[#E0FBFC] md:text-5xl">
            Las tres dimensiones del color
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#E0FBFC]/65 md:text-lg">
            Todo color dental se descompone en tres ejes. Ajusta cada uno y observa cómo el mismo diente cambia de
            familia, de intensidad y de luz.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="relative flex flex-col items-center justify-center rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.02] p-10 md:p-14">
            <div
              className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-40 blur-[90px]"
              style={{ background: `radial-gradient(circle at 50% 45%, ${color}, transparent 70%)` }}
            />
            <div className="relative h-72 w-56 md:h-80 md:w-64">
              <Tooth variant="incisivo" color={color} className="h-full w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="relative mt-10 flex items-center gap-4 rounded-full border border-[#E0FBFC]/15 bg-[#050A0F]/70 px-5 py-2.5 backdrop-blur-md">
              <span className="h-4 w-4 rounded-full ring-1 ring-[#E0FBFC]/20" style={{ backgroundColor: color }} />
              <span className="font-mono text-[11px] tracking-[0.22em] text-[#E0FBFC]">{hex.toUpperCase()}</span>
            </div>
            <div className="relative mt-6 w-full max-w-xs">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: r.color }} />
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">REALISMO</span>
                <span className="ml-auto font-display text-lg font-bold tracking-tight" style={{ color: r.color }}>
                  {r.label}
                </span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#E0FBFC]/10">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${meter}%`, backgroundColor: r.color }}
                />
              </div>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-[#E0FBFC]/45">
                Un diente natural se mueve entre amarillo cálido y ámbar, con croma medio y valor alto.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {DIMENSIONS.map((dim) => (
              <div key={dim.key} className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.03] p-7">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">{dim.label}</p>
                    <p className="mt-1 font-display text-lg font-bold tracking-tight text-[#E0FBFC]">{dim.hint}</p>
                  </div>
                  <span className="font-mono text-2xl font-bold tracking-tight text-[#E0FBFC]">
                    {values[dim.key]}
                    <span className="ml-1 text-sm text-[#E0FBFC]/40">{dim.unit}</span>
                  </span>
                </div>
                <div className="mt-6">
                  <Slider
                    value={[values[dim.key]]}
                    min={dim.min}
                    max={dim.max}
                    step={dim.step}
                    onValueChange={(v) => setters[dim.key](v[0])}
                    aria-label={dim.label}
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#E0FBFC]/55">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}