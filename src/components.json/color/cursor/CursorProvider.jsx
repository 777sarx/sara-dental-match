import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import ShadeCursor from '@/components/cursor/ShadeCursor';

const CursorContext = createContext(null);

const IDLE = { label: '', color: '#E0FBFC', active: false };

export function useCursor() {
  const context = useContext(CursorContext);
  return context || { setHover: () => {}, clear: () => {} };
}

export default function CursorProvider({ children }) {
  const [hover, setHoverState] = useState(IDLE);

  const setHover = useCallback((next) => {
    setHoverState({ ...IDLE, ...next, active: true });
  }, []);

  const clear = useCallback(() => setHoverState(IDLE), []);

  const value = useMemo(() => ({ setHover, clear }), [setHover, clear]);

  return (
    <CursorContext.Provider value={value}>
      {children}
      <ShadeCursor hover={hover} />
    </CursorContext.Provider>
  );
}