import { ScrollView } from 'react-native';

import type { DealerNetworkFilterDto, DealerNetworkFilterId } from '@/services';

import { DealerNetworkFilterChip } from '../atoms/DealerNetworkFilterChip';
import type { DealerNetworkStyles } from '../styles';

type DealerNetworkFilterBarProps = {
  filters: DealerNetworkFilterDto[];
  onFilterChange: (filterId: DealerNetworkFilterId) => void;
  selectedFilterId: DealerNetworkFilterId;
  styles: DealerNetworkStyles;
};

export function DealerNetworkFilterBar({
  filters,
  onFilterChange,
  selectedFilterId,
  styles,
}: DealerNetworkFilterBarProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.filterScrollContent}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((filter) => (
        <DealerNetworkFilterChip
          filter={filter}
          isActive={filter.id === selectedFilterId}
          key={filter.id}
          onFilterChange={onFilterChange}
          styles={styles}
        />
      ))}
    </ScrollView>
  );
}
