import { usePathname, useRouter } from 'expo-router';

import { BottomNavigationBar } from './BottomNavigationBar';

export function ConnectedBottomNavigationBar() {
  const pathname = usePathname();
  const router = useRouter();

  return <BottomNavigationBar activePath={pathname} onNavigate={(href) => router.push(href)} />;
}
