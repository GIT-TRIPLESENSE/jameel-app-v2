import { Text } from 'react-native';

import type { BottomNavigationStyles } from '../styles';

type BottomNavigationLabelProps = {
  isActive: boolean;
  label: string;
  styles: BottomNavigationStyles;
};

export function BottomNavigationLabel({ isActive, label, styles }: BottomNavigationLabelProps) {
  return (
    <Text numberOfLines={1} style={[styles.label, isActive && styles.activeLabel]}>
      {label}
    </Text>
  );
}
