import { Pressable, Text } from 'react-native';

import type { VehicleFilterDto, VehicleFilterId } from '@/services';

import type { BrandProductsStyles } from '../styles';

type BrandFilterChipProps = {
  filter: VehicleFilterDto;
  isActive: boolean;
  label: string;
  onPress: (filterId: VehicleFilterId) => void;
  styles: BrandProductsStyles;
};

export function BrandFilterChip({
  filter,
  isActive,
  label,
  onPress,
  styles,
}: BrandFilterChipProps) {
  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      onPress={() => onPress(filter.id)}
      style={({ pressed }) => [
        styles.filterChip,
        isActive && styles.filterChipActive,
        pressed && styles.pressed,
      ]}
    >
      <Text
        numberOfLines={1}
        style={[styles.filterChipText, isActive && styles.filterChipTextActive]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
