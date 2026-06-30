import type { LucideIcon } from 'lucide-react-native';

import type { AppTheme } from '@/theme';

type BottomNavigationIconProps = {
  color: string;
  icon: LucideIcon;
  theme: AppTheme;
};

export function BottomNavigationIcon({ color, icon: Icon, theme }: BottomNavigationIconProps) {
  return <Icon color={color} size={theme.icon.lg} strokeWidth={theme.icon.stroke} />;
}
