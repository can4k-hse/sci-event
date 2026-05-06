export type TabId = 'home' | 'program' | 'qr' | 'notifications' | 'more';

export type BottomNavProps = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

export const TAB_PATHS: Record<TabId, string> = {
  home: '/',
  program: '/program',
  qr: '/qr',
  notifications: '/notifications',
  more: '/more',
};
