import { useContext } from 'react';
import { SheetNavigationContext } from './SheetNavigationContext';
import type { SheetNavigationContextValue } from './SheetNavigationContext';

export function useSheetNavigation(): SheetNavigationContextValue {
  const ctx = useContext(SheetNavigationContext);
  if (!ctx) throw new Error('useSheetNavigation must be used inside SheetNavigationProvider');
  return ctx;
}
