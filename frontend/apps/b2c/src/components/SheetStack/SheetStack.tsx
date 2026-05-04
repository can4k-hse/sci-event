import { useEffect, useRef } from 'react';
import cn from 'classnames';
import { Button, Text } from '@sci-event/ui';
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
          <Button iconOnly iconName="ChevronLeft" size="md" variant="secondary" onClick={pop} aria-label="Назад" />
        )}
        {top.title && <Text as="span" size="md" weight="semibold" className={styles.title}>{top.title}</Text>}
        <Button iconOnly iconName="X" size="md" variant="secondary" onClick={closeAll} aria-label="Закрыть" />
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
