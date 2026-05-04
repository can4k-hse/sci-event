import { useEffect, useRef } from 'react';
import cn from 'classnames';
import { Icon } from '@sci-event/ui';
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
    <div className={styles.root}>
      <div className={styles.header}>
        {canGoBack && (
          <button className={styles.backBtn} onClick={pop} aria-label="Назад">
            <Icon name="ChevronLeft" size={20} />
          </button>
        )}
        {top.title && <span className={styles.title}>{top.title}</span>}
        <button className={styles.closeBtn} onClick={closeAll} aria-label="Закрыть">
          <Icon name="X" size={16} />
        </button>
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
