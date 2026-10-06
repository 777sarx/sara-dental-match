import React, { useId } from 'react';

const PATHS = {
  incisivo:
    'M60 8C88 8 104 20 106 44c2 24 0 68-6 86-4 12-22 16-40 16s-36-4-40-16c-6-18-8-62-6-86C16 20 32 8 60 8Z',
  cuadrada:
    'M30 10h60c9 0 14 6 14 14v96c0 9-5 16-14 16H30c-9 0-14-7-14-16V24c0-8 5-14 14-14Z',
  ovoide:
    'M60 8c26 0 42 19 42 50v40c0 26-17 42-42 42S18 124 18 98V58C18 27 34 8 60 8Z',
  triangular:
    'M52 12h16c6 0 10 4 13 13 8 24 14 74 16 99 1 10-6 18-16 18H39c-10 0-17-8-16-18 2-25 8-75 16-99 3-9 7-13 13-13Z',
};

export default function Tooth({ variant = 'incisivo', color = '#F6EFE2', className = '', guides = false }) {
  const id = useId().replace(/:/g, '');
  const path = PATHS[variant] || PATHS.incisivo;

  return (
    <svg viewBox="0 0 120 150" className={className} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id={`gloss-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="42%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#050A0F" stopOpacity="0.28" />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <path d={path} />
        </clipPath>
      </defs>

      <path d={path} fill={color} stroke="rgba(224,251,252,0.22)" strokeWidth="1.4" />
      <g clipPath={`url(#clip-${id})`}>
        <rect x="0" y="0" width="120" height="150" fill={`url(#gloss-${id})`} />
      </g>

      {guides && (
        <g fill="none" stroke="rgba(224,251,252,0.5)" strokeWidth="0.9" strokeDasharray="4 5">
          <line x1="60" y1="0" x2="60" y2="150" />
          <line x1="0" y1="38" x2="120" y2="38" />
          <line x1="0" y1="112" x2="120" y2="112" />
        </g>
      )}
    </svg>
  );
}