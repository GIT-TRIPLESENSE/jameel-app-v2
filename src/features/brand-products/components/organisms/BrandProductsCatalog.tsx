import { View } from 'react-native';

import type { BrandCatalogDto, VehicleDto, VehicleFilterId } from '@/services';

import type { BrandProductsStyles } from '../styles';
import { BrandFilterBar } from './BrandFilterBar';
import { VehicleList } from './VehicleList';

type BrandProductsCatalogProps = {
  catalog: BrandCatalogDto;
  onFilterChange: (filterId: VehicleFilterId) => void;
  selectedFilterId: VehicleFilterId;
  styles: BrandProductsStyles;
  vehicles: VehicleDto[];
};

export function BrandProductsCatalog({
  catalog,
  onFilterChange,
  selectedFilterId,
  styles,
  vehicles,
}: BrandProductsCatalogProps) {
  return (
    <View style={styles.catalog}>
      <BrandFilterBar
        filters={catalog.filters}
        onFilterChange={onFilterChange}
        selectedFilterId={selectedFilterId}
        styles={styles}
      />
      <VehicleList styles={styles} vehicles={vehicles} />
    </View>
  );
}
