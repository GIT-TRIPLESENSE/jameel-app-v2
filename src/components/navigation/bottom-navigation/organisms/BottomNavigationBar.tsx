import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from '@/theme';

import { bottomNavigationItems } from '../data';
import { BottomNavigationTab } from '../molecules/BottomNavigationTab';
import { createBottomNavigationStyles } from '../styles';
import type { BottomNavigationItem } from '../types';
import { isBottomNavigationItemActive } from '../visibility';

type BottomNavigationBarProps = {
  activePath: string;
  items?: BottomNavigationItem[];
  onNavigate: (href: BottomNavigationItem['href']) => void;
};

export function BottomNavigationBar({
  activePath,
  items = bottomNavigationItems,
  onNavigate,
}: BottomNavigationBarProps) {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createBottomNavigationStyles(theme, insets), [insets, theme]);

  return (
    <View pointerEvents="box-none" style={styles.host}>
      <View accessibilityRole="tablist" style={styles.bar}>
        {items.map((item) => {
          const isActive = isBottomNavigationItemActive(item, activePath);

          return (
            <BottomNavigationTab
              accessibilityLabel={t(item.accessibilityLabelKey)}
              isActive={isActive}
              item={item}
              key={item.id}
              label={t(item.labelKey)}
              onPress={() => onNavigate(item.href)}
              styles={styles}
              theme={theme}
            />
          );
        })}
      </View>
    </View>
  );
}
