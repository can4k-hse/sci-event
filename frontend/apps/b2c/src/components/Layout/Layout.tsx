import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { BottomSheet } from '@sci-event/ui';
import { SheetNavigationProvider, useSheetNavigation } from '../../navigation';
import { SheetStack } from '../SheetStack';
import { BottomNav } from '../BottomNav';
import type { TabId } from '../BottomNav';
import { TAB_PATHS } from '../BottomNav';
import styles from './Layout.module.css';

const PATH_TO_TAB: Record<string, TabId> = Object.fromEntries(
  Object.entries(TAB_PATHS).map(([tab, path]) => [path, tab as TabId])
);

const LayoutInner = () => {
  const { isOpen, stack, closeAll } = useSheetNavigation();
  const topFullWidth = stack[stack.length - 1]?.fullWidth ?? false;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activeTab: TabId = PATH_TO_TAB[pathname] ?? 'home';

  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>
      <BottomNav activeTab={activeTab} onTabChange={(tab) => navigate(TAB_PATHS[tab])} />
      <BottomSheet
        open={isOpen}
        onClose={closeAll}
        className={cn({ [styles.sheetFullWidth]: topFullWidth })}
        overlayClassName={cn({ [styles.overlayFullWidth]: topFullWidth })}
      >
        <SheetStack />
      </BottomSheet>
    </div>
  );
};

const Layout = () => (
  <SheetNavigationProvider>
    <LayoutInner />
  </SheetNavigationProvider>
);

export { Layout };
