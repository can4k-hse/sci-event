import { useState } from 'react';
import type { ReactNode } from 'react';
import { SheetNavigationContext } from './SheetNavigationContext';
import type { SheetScreen } from './SheetNavigationContext';

type Props = { children: ReactNode };

export function SheetNavigationProvider({ children }: Props) {
  const [stack, setStack] = useState<SheetScreen[]>([]);
  const [direction, setDirection] = useState<'push' | 'pop'>('push');

  const push = (content: ReactNode, meta?: { title?: string; fullWidth?: boolean }) => {
    setDirection('push');
    setStack(prev => [...prev, { key: Date.now().toString(), title: meta?.title, fullWidth: meta?.fullWidth, content }]);
  };

  const pop = () => {
    setDirection('pop');
    setStack(prev => prev.slice(0, -1));
  };

  const closeAll = () => {
    setDirection('pop');
    setStack([]);
  };

  return (
    <SheetNavigationContext.Provider value={{ stack, direction, isOpen: stack.length > 0, push, pop, closeAll }}>
      {children}
    </SheetNavigationContext.Provider>
  );
}
