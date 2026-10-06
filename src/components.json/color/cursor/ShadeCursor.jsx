import React, { useEffect, useRef, useState } from 'react';

export default function ShadeCursor({ hover }) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover), (pointer: fine), (any-pointer: fine)');
    const isTouchDevice = () =>
      navigator.maxTouchPoints > 0 || window.matchMedia('(any-pointer: coarse)').matches;
    const apply = () => {
      const on = query.matches || !isTouchDevice();
      setEnabled(on);
      document.documentElement.classList.toggle('has-custom-cursor', on);
    };
    apply();
    query.addEventListener?.('change', apply);
    return () => {
      query.removeEventListener?.('change', apply);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let frame = 0;

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[100] will-change-transform">
      <div className="-translate-x-1/2">
        <div
          className="flex flex-col items-center"
          style={{ opacity: hover.active ? 1 : 0.25, transition: 'opacity 320ms ease' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#E0FBFC]/80" />
          <span className="h-4 w-px bg-[#E0FBFC]/30" />

          <div className="rounded-2xl border border-[#E0FBFC]/25 bg-white/10 p-[3px] shadow-[0_24px_60px_-22px_rgba(0,0,0,0.95)] backdrop-blur-md">
            <div
              className="relative h-[64px] w-[44px] overflow-hidden rounded-[13px]"
              style={{
                backgroundColor: hover.color,
                transition: 'background-color 620ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <span
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(155deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.06) 45%, rgba(5,10,15,0.24) 100%)',
                }}
              />
            </div>
          </div>

          <span className="h-3 w-[3px] rounded-full bg-[#E0FBFC]/25" />

          <div className="rounded-full border border-[#E0FBFC]/25 bg-[#050A0F]/80 px-3 py-1 backdrop-blur-md">
            <span className="font-mono text-[10px] tracking-[0.26em] text-[#E0FBFC]">{hover.label || '—'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}