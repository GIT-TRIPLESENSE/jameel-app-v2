import { Pressable, View } from 'react-native';

import type { AppTheme } from '@/theme';

import { BottomNavigationIcon } from '../atoms/BottomNavigationIcon';
import { BottomNavigationLabel } from '../atoms/BottomNavigationLabel';
import type { BottomNavigationStyles } from '../styles';
import type { BottomNavigationItem } from '../types';

type BottomNavigationTabProps = {
  accessibilityLabel: string;
  isActive: boolean;
  item: BottomNavigationItem;
  label: string;
  onPress: () => void;
  styles: BottomNavigationStyles;
  theme: AppTheme;
};

export function BottomNavigationTab({
  accessibilityLabel,
  isActive,
  item,
  label,
  onPress,
  styles,
  theme,
}: BottomNavigationTabProps) {
  const iconColor = isActive ? theme.colors.textOnDark : theme.colors.text;

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      onPress={onPress}
      style={({ pressed }) => [styles.itemPressable, pressed && styles.pressed]}
    >
      <View style={[styles.itemContent, isActive && styles.activeItemContent]}>
        <BottomNavigationIcon color={iconColor} icon={item.icon} theme={theme} />
        <BottomNavigationLabel isActive={isActive} label={label} styles={styles} />
      </View>
    </Pressable>
  );
}
