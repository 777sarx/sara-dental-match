export const SERIES = {
  A: {
    key: 'A',
    name: 'Rojizo-amarillento',
    note: 'El grupo más frecuente en adultos: del marfil claro al marrón cálido.',
  },
  B: {
    key: 'B',
    name: 'Amarillo-rojizo',
    note: 'Mayor saturación amarilla. Muy habitual en pacientes jóvenes.',
  },
  C: {
    key: 'C',
    name: 'Grisáceo',
    note: 'Tonos apagados y fríos, con menor luminosidad.',
  },
  D: {
    key: 'D',
    name: 'Rojizo-grisáceo',
    note: 'Poco frecuente. Mezcla matices rojizos y grises.',
  },
};

export const SHADES = [
  { code: 'A1', hex: '#F6EFE2', series: 'A', note: 'Máxima luminosidad y alta translucidez. Habitual en pacientes jóvenes.' },
  { code: 'A2', hex: '#EEDFC6', series: 'A', note: 'El tono estándar más utilizado en rehabilitaciones con dientes naturales.' },
  { code: 'A3', hex: '#E6D3B0', series: 'A', note: 'Un paso más saturado. Muy frecuente en pacientes adultos.' },
  { code: 'A3.5', hex: '#DCC59C', series: 'A', note: 'Intermedio entre A3 y A4: perfecto para transiciones de color.' },
  { code: 'A4', hex: '#CDB187', series: 'A', note: 'El más oscuro del grupo A. Pacientes de edad avanzada.' },
  { code: 'B1', hex: '#F7F2DF', series: 'B', note: 'Amarillo muy claro y luminoso, de aspecto cálido y limpio.' },
  { code: 'B2', hex: '#F0E4C5', series: 'B', note: 'Amarillo medio. El tono más usado del grupo B.' },
  { code: 'B3', hex: '#E5D0A6', series: 'B', note: 'Amarillo saturado, frecuente en dientes con esmalte maduro.' },
  { code: 'B4', hex: '#D6BC8D', series: 'B', note: 'Amarillo oscuro. Exige cuidar la translucidez del borde incisal.' },
  { code: 'C1', hex: '#DBD3C7', series: 'C', note: 'Gris claro y poco saturado: un tono neutro de baja intensidad.' },
  { code: 'C2', hex: '#C7BDB1', series: 'C', note: 'Gris medio. Típico de dientes con tratamiento endodóntico.' },
  { code: 'C3', hex: '#B1A89C', series: 'C', note: 'Gris oscuro, con contraste elevado respecto a la encía.' },
  { code: 'C4', hex: '#9B9287', series: 'C', note: 'El tono más oscuro de la guía clásica.' },
  { code: 'D2', hex: '#E1D5C7', series: 'D', note: 'Mezcla de rojizo y gris. Poco frecuente y difícil de igualar.' },
  { code: 'D3', hex: '#D0C3B4', series: 'D', note: 'Rojizo-grisáceo saturado, con poca luminosidad.' },
  { code: 'D4', hex: '#BAAC9D', series: 'D', note: 'El más oscuro del grupo D. Requiere individualización de la cerámica.' },
];

export const SHADES_BY_SERIES = ['A', 'B', 'C', 'D'].map((key) => ({
  ...SERIES[key],
  shades: SHADES.filter((shade) => shade.series === key),
}));