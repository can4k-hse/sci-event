import cn from 'classnames';
import { Icon, Text } from '@sci-event/ui';
import type { IconName, ColorToken } from '@sci-event/ui';
import type { BottomNavProps, TabId } from './BottomNav.types';
import styles from './BottomNav.module.css';

const COLOR_ACTIVE: ColorToken = 'color-violet-500';
const COLOR_INACTIVE: ColorToken = 'color-neutral-400';

type Tab = {
  id: TabId;
  label: string;
  icon: IconName;
};

const TABS: Tab[] = [
  { id: 'home', label: 'Главная', icon: 'Home' },
  { id: 'program', label: 'Программа', icon: 'Calendar' },
  { id: 'qr', label: 'QR код', icon: 'Grid' },
  { id: 'notifications', label: 'Уведомления', icon: 'Bell' },
  { id: 'more', label: 'Еще', icon: 'MoreHorizontal' },
];

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => (
  <nav className={styles.nav}>
    {TABS.map((tab) => {
      const isActive = tab.id === activeTab;
      return (
        <button
          key={tab.id}
          className={cn(styles.tab, { [styles.tabActive]: isActive })}
          onClick={() => onTabChange(tab.id)}
        >
          <Icon name={tab.icon} size={24} strokeWidth={1.5} color={isActive ? COLOR_ACTIVE : COLOR_INACTIVE} />
          <Text as="span" size="sm" weight={isActive ? 'semibold' : 'medium'} color={isActive ? COLOR_ACTIVE : COLOR_INACTIVE} className={styles.tabLabel}>
            {tab.label}
          </Text>
        </button>
      );
    })}
  </nav>
);
