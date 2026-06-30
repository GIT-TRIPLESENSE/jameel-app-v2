import { useMemo, useState } from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { BrandId, VehicleFilterId } from '@/services';
import { useAppTheme } from '@/theme';

import { createBrandProductsTheme } from '../brand-theme';
import { useBrandCatalog } from '../hooks/useBrandCatalog';
import { BrandProductsHeader } from './molecules/BrandProductsHeader';
import { BrandProductsCatalog } from './organisms/BrandProductsCatalog';
import { BrandProductsHero } from './organisms/BrandProductsHero';
import { BrandProductsState } from './organisms/BrandProductsState';
import { createBrandProductsStyles } from './styles';

type BrandProductsScreenProps = {
  brandId: BrandId;
};

export function BrandProductsScreen({ brandId }: BrandProductsScreenProps) {
  const { theme } = useAppTheme();
  const { width } = useWindowDimensions();
  const [filterState, setFilterState] = useState<{
    brandId: BrandId;
    selectedFilterId: VehicleFilterId;
  }>({
    brandId,
    selectedFilterId: 'all',
  });
  const isCompact = width < theme.layout.mobileContentMaxWidth;
  const brandTheme = useMemo(() => createBrandProductsTheme(theme, brandId), [brandId, theme]);
  const styles = useMemo(
    () => createBrandProductsStyles(theme, brandTheme, isCompact),
    [brandTheme, isCompact, theme],
  );
  const { data: catalog, isError, isPending } = useBrandCatalog(brandId);
  const selectedFilterId = filterState.brandId === brandId ? filterState.selectedFilterId : 'all';

  const handleFilterChange = (filterId: VehicleFilterId) => {
    setFilterState({
      brandId,
      selectedFilterId: filterId,
    });
  };

  const visibleVehicles = useMemo(() => {
    if (!catalog) {
      return [];
    }

    if (selectedFilterId === 'all') {
      return catalog.vehicles;
    }

    return catalog.vehicles.filter((vehicle) => vehicle.filterIds.includes(selectedFilterId));
  }, [catalog, selectedFilterId]);

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <BrandProductsHeader selectorLabelKey={brandTheme.selectorLabelKey} styles={styles} />
          <BrandProductsHero
            headlineBrandKey={brandTheme.headlineBrandKey}
            headlineRestKey={brandTheme.headlineRestKey}
            styles={styles}
          />
          {isPending ? (
            <BrandProductsState
              bodyKey="brandProducts.loading.body"
              styles={styles}
              titleKey="brandProducts.loading.title"
            />
          ) : null}
          {isError ? (
            <BrandProductsState
              bodyKey="brandProducts.error.body"
              styles={styles}
              titleKey="brandProducts.error.title"
            />
          ) : null}
          {catalog ? (
            <BrandProductsCatalog
              catalog={catalog}
              onFilterChange={handleFilterChange}
              selectedFilterId={selectedFilterId}
              styles={styles}
              vehicles={visibleVehicles}
            />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
