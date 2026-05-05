import { createContext } from 'react';
import type { ReactNode } from 'react';

export type SheetScreen = {
  key: string;
  title?: string;
  fullWidth?: boolean;
  content: ReactNode;
};

export type SheetNavigationContextValue = {
  stack: SheetScreen[];
  direction: 'push' | 'pop';
  isOpen: boolean;
  push: (content: ReactNode, meta?: { title?: string; fullWidth?: boolean }) => void;
  pop: () => void;
  closeAll: () => void;
};

export const SheetNavigationContext = createContext<SheetNavigationContextValue | null>(null);
