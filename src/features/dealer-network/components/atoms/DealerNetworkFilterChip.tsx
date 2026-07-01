import { useTranslation } from 'react-i18next';
import { Pressable, Text } from 'react-native';

import type { DealerNetworkFilterDto, DealerNetworkFilterId } from '@/services';

import type { DealerNetworkStyles } from '../styles';

type DealerNetworkFilterChipProps = {
  filter: DealerNetworkFilterDto;
  isActive: boolean;
  onFilterChange: (filterId: DealerNetworkFilterId) => void;
  styles: DealerNetworkStyles;
};

export function DealerNetworkFilterChip({
  filter,
  isActive,
  onFilterChange,
  styles,
}: DealerNetworkFilterChipProps) {
  const { t } = useTranslation();

  return (
    <Pressable
      accessibilityLabel={t(filter.labelKey)}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      onPress={() => onFilterChange(filter.id)}
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
        {t(filter.labelKey)}
      </Text>
    </Pressable>
  );
}
