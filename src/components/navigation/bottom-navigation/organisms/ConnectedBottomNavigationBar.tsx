import { usePathname, useRouter } from 'expo-router';
import { useMemo } from 'react';

import { createBottomNavigationItems } from '../data';
import { getBrandIdFromPathname } from '../visibility';
import { BottomNavigationBar } from './BottomNavigationBar';

export function ConnectedBottomNavigationBar() {
  const pathname = usePathname();
  const router = useRouter();
  const brandId = getBrandIdFromPathname(pathname);
  const items = useMemo(() => createBottomNavigationItems(brandId), [brandId]);

  return (
    <BottomNavigationBar
      activePath={pathname}
      items={items}
      onNavigate={(href) => router.push(href)}
    />
  );
}
