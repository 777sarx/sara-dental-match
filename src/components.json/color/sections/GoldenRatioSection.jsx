import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';

const IDEAL = 0.618;
const PRESETS = [
  { label: 'Estrecha', value: 0.52 },
  { label: 'Áurea', value: 0.618 },
  { label: 'Amplia', value: 0.72 },
];
const CENTRAL = 120;
const HEIGHT = 150;
const GAP = 10;
const TOOTH_PATH =
  'M60 8C88 8 104 20 106 44c2 24 0 68-6 86-4 12-22 16-40 16s-36-4-40-16c-6-18-8-62-6-86C16 20 32 8 60 8Z';
const TEETH = ['Canino', 'Lateral', 'Central', 'Central', 'Lateral', 'Canino'];

function harmony(r) {
  const d = Math.abs(r - IDEAL);
  if (d < 0.03) return { label: 'ÓPTIMA', color: '#98C1D9' };
  if (d < 0.08) return { label: 'ACEPTABLE', color: '#E4C77A' };
  return { label: 'DESARMÓNICA', color: '#E08A8A' };
}

export default function GoldenRatioSection() {
  const [ratio, setRatio] = useState(IDEAL);
  const lateral = CENTRAL * ratio;
  const canine = lateral * ratio;
  const widths = [canine, lateral, CENTRAL, CENTRAL, lateral, canine];
  const totalWidth = widths.reduce((s, w) => s + w, 0) + GAP * (widths.length - 1);
  const h = harmony(ratio);

  let x = 0;
  const slots = widths.map((w) => {
    const slot = { x, w };
    x += w + GAP;
    return slot;
  });

  const meter = (1 - Math.min(1, Math.abs(ratio - IDEAL) / 0.16)) * 100;

  return (
    <section id="proporcion" className="scroll-mt-24 border-t border-[#E0FBFC]/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#98C1D9]">04 — PROPORCIÓN ÁUREA</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-[#E0FBFC] md:text-5xl">
            Simulador de armonía
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#E0FBFC]/65 md:text-lg">
            En la vista frontal, cada diente visible representa el 62 % del anterior. Mueve la proporción y observa
            cómo la sonrisa se ordena —o se descompone— al alejarse de la proporción áurea.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.02] p-6 md:p-12">
            <svg viewBox={`0 0 ${totalWidth} ${HEIGHT + 40}`} className="w-full" preserveAspectRatio="xMidYMid meet">
              <line x1="0" y1={HEIGHT + 2} x2={totalWidth} y2={HEIGHT + 2} stroke="rgba(224,251,252,0.12)" strokeWidth="1" />
              {slots.map((slot, i) => (
                <path
                  key={`t-${i}`}
                  d={TOOTH_PATH}
                  transform={`translate(${slot.x}, 0) scale(${slot.w / CENTRAL}, 1)`}
                  fill="#EFE7DA"
                  stroke="rgba(224,251,252,0.25)"
                  strokeWidth="1.4"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              {slots.map((slot, i) => (
                <text
                  key={`l-${i}`}
                  x={slot.x + slot.w / 2}
                  y={HEIGHT + 24}
                  textAnchor="middle"
                  fontFamily="ui-monospace, monospace"
                  fontSize="9"
                  letterSpacing="2"
                  fill="rgba(224,251,252,0.45)"
                >
                  {TEETH[i].toUpperCase().slice(0, 3)}
                </text>
              ))}
            </svg>

            <div className="mt-10">
              <Slider
                value={[ratio]}
                min={0.45}
                max={0.78}
                step={0.01}
                onValueChange={(v) => setRatio(v[0])}
                aria-label="Proporción entre dientes adyacentes"
              />
              <div className="mt-4 flex justify-between font-mono text-[10px] tracking-[0.2em] text-[#E0FBFC]/40">
                <span>0,45</span>
                <span>ÁUREA 0,62</span>
                <span>0,78</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setRatio(p.value)}
                  className={`rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                    Math.abs(ratio - p.value) < 0.005
                      ? 'border-[#98C1D9]/70 bg-[#98C1D9]/10 text-[#E0FBFC]'
                      : 'border-[#E0FBFC]/15 text-[#E0FBFC]/55 hover:border-[#E0FBFC]/35 hover:text-[#E0FBFC]'
                  }`}
                >
                  {p.label.toUpperCase()} · {p.value.toFixed(2)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.03] p-7">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">PROPORCIÓN ACTUAL</p>
              <p className="mt-5 font-display text-4xl font-bold tracking-tight text-[#E0FBFC]">
                {(ratio * 100).toFixed(0)} %
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#E0FBFC]/60">
                El lateral equivale a este porcentaje del central, y el canino al mismo porcentaje del lateral.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.03] p-7">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">ARMONÍA</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: h.color }} />
                <span className="font-display text-2xl font-bold tracking-tight" style={{ color: h.color }}>
                  {h.label}
                </span>
              </div>
              <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-[#E0FBFC]/10">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${meter}%`, backgroundColor: h.color }}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#E0FBFC]/60">
                La proporción áurea ideal es 0,618. Cuanto más cerca, más se ordena visualmente la sonrisa.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E0FBFC]/10 bg-white/[0.03] p-7">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#98C1D9]">ANCHOS RELATIVOS</p>
              <ul className="mt-5 space-y-3 text-sm text-[#E0FBFC]/70">
                <li className="flex justify-between"><span>Central</span><span className="font-mono text-[#E0FBFC]">100 %</span></li>
                <li className="flex justify-between"><span>Lateral</span><span className="font-mono text-[#E0FBFC]">{(ratio * 100).toFixed(0)} %</span></li>
                <li className="flex justify-between"><span>Canino</span><span className="font-mono text-[#E0FBFC]">{(ratio * ratio * 100).toFixed(0)} %</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}