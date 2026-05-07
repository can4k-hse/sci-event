import { useEffect, useRef } from 'react';
import cn from 'classnames';
import { Button } from '@sci-event/ui';
import { useSheetNavigation } from '../../navigation';
import styles from './SheetStack.module.css';

export function SheetStack() {
  const { stack, direction, pop, closeAll } = useSheetNavigation();
  const top = stack[stack.length - 1];
  const canGoBack = stack.length > 1;
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    frameRef.current?.scrollTo({ top: 0 });
  }, [top?.key]);

  if (!top) return null;

  return (
    <div className={cn(styles.root, { [styles.fullWidth]: top.fullWidth })}>
      <div className={styles.header}>
        {canGoBack && (
          <Button iconOnly iconName="ChevronLeft" size="lg" variant="bare" onClick={pop} aria-label="Назад" />
        )}
        <div className={styles.closeBtn}>
          <Button iconOnly iconName="X" size="lg" variant="bare" onClick={closeAll} aria-label="Закрыть" />
        </div>
      </div>
      <div
        key={top.key}
        ref={frameRef}
        className={cn(styles.frame, direction === 'push' ? styles.enterPush : styles.enterPop)}
      >
        {top.content}
      </div>
    </div>
  );
}
