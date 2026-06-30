import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';

import type { VehicleFilterDto, VehicleFilterId } from '@/services';

import { BrandFilterChip } from '../atoms/BrandFilterChip';
import type { BrandProductsStyles } from '../styles';

type BrandFilterBarProps = {
  filters: VehicleFilterDto[];
  onFilterChange: (filterId: VehicleFilterId) => void;
  selectedFilterId: VehicleFilterId;
  styles: BrandProductsStyles;
};

export function BrandFilterBar({
  filters,
  onFilterChange,
  selectedFilterId,
  styles,
}: BrandFilterBarProps) {
  const { t } = useTranslation();

  return (
    <ScrollView
      contentContainerStyle={styles.filterScrollContent}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((filter) => (
        <BrandFilterChip
          filter={filter}
          isActive={selectedFilterId === filter.id}
          key={filter.id}
          label={t(filter.labelKey)}
          onPress={onFilterChange}
          styles={styles}
        />
      ))}
    </ScrollView>
  );
}
