import { useMemo, useState } from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

import type { BrandContextSelection } from '@/components';
import type { BrandId, DealerNetworkFilterId, DealerNetworkLocationDto } from '@/services';
import { useAppTheme } from '@/theme';

import { createDealerNetworkTheme } from '../brand-theme';
import { useDealerNetwork } from '../hooks/useDealerNetwork';
import { DealerNetworkHeader } from './molecules/DealerNetworkHeader';
import { DealerNetworkSearchBar } from './molecules/DealerNetworkSearchBar';
import { DealerNetworkDetail } from './organisms/DealerNetworkDetail';
import { DealerNetworkFilterBar } from './organisms/DealerNetworkFilterBar';
import { DealerNetworkHero } from './organisms/DealerNetworkHero';
import { DealerNetworkLocationList } from './organisms/DealerNetworkLocationList';
import { DealerNetworkMap } from './organisms/DealerNetworkMap';
import { DealerNetworkState } from './organisms/DealerNetworkState';
import { createDealerNetworkStyles } from './styles';

type DealerNetworkScreenProps = {
  brandId: BrandId;
  onBrandContextSelect?: (selection: BrandContextSelection) => void;
};

function getSearchableLocationText(
  location: DealerNetworkLocationDto,
  translate: (key: string) => string,
) {
  return [
    translate(location.nameKey),
    translate(location.cityKey),
    translate(location.addressKey),
    translate(location.certificationKey),
    translate(`dealerNetwork.types.${location.type}`),
  ]
    .join(' ')
    .toLocaleLowerCase();
}

export function DealerNetworkScreen({ brandId, onBrandContextSelect }: DealerNetworkScreenProps) {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const { width } = useWindowDimensions();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLocationId, setActiveLocationId] = useState<string | undefined>();
  const [filterState, setFilterState] = useState<{
    brandId: BrandId;
    selectedFilterId: DealerNetworkFilterId;
  }>({
    brandId,
    selectedFilterId: 'all',
  });
  const isCompact = width < theme.layout.mobileContentMaxWidth;
  const brandTheme = useMemo(() => createDealerNetworkTheme(theme, brandId), [brandId, theme]);
  const styles = useMemo(
    () => createDealerNetworkStyles(theme, brandTheme, isCompact),
    [brandTheme, isCompact, theme],
  );
  const { data: network, isError, isPending } = useDealerNetwork(brandId);
  const selectedFilterId = filterState.brandId === brandId ? filterState.selectedFilterId : 'all';

  const handleFilterChange = (filterId: DealerNetworkFilterId) => {
    setFilterState({
      brandId,
      selectedFilterId: filterId,
    });
    setActiveLocationId(undefined);
  };

  const visibleLocations = useMemo(() => {
    if (!network) {
      return [];
    }

    const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();

    return network.locations.filter((location) => {
      const matchesFilter = selectedFilterId === 'all' || location.type === selectedFilterId;

      if (!matchesFilter) {
        return false;
      }

      if (!normalizedSearchTerm) {
        return true;
      }

      return getSearchableLocationText(location, t).includes(normalizedSearchTerm);
    });
  }, [network, searchTerm, selectedFilterId, t]);

  const activeLocation =
    visibleLocations.find((location) => location.id === activeLocationId) ?? visibleLocations[0];

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <DealerNetworkHeader
            brandId={brandId}
            onBrandContextSelect={onBrandContextSelect}
            selectorLabelKey={brandTheme.selectorLabelKey}
            styles={styles}
          />
          <DealerNetworkHero
            headlineBrandKey={brandTheme.headlineBrandKey}
            headlineRestKey={brandTheme.headlineRestKey}
            styles={styles}
          />
          <DealerNetworkSearchBar
            onSearchTermChange={setSearchTerm}
            searchTerm={searchTerm}
            styles={styles}
          />

          {isPending ? (
            <DealerNetworkState
              bodyKey="dealerNetwork.loading.body"
              styles={styles}
              titleKey="dealerNetwork.loading.title"
            />
          ) : null}
          {isError ? (
            <DealerNetworkState
              bodyKey="dealerNetwork.error.body"
              styles={styles}
              titleKey="dealerNetwork.error.title"
            />
          ) : null}
          {network ? (
            <View style={styles.networkContent}>
              <DealerNetworkFilterBar
                filters={network.filters}
                onFilterChange={handleFilterChange}
                selectedFilterId={selectedFilterId}
                styles={styles}
              />
              {activeLocation ? (
                <>
                  <DealerNetworkMap
                    activeLocationId={activeLocation.id}
                    locations={visibleLocations}
                    onSelectLocation={setActiveLocationId}
                    styles={styles}
                    summary={network.summary}
                  />
                  <DealerNetworkDetail location={activeLocation} styles={styles} />
                  <DealerNetworkLocationList
                    activeLocationId={activeLocation.id}
                    locations={visibleLocations}
                    onSelectLocation={setActiveLocationId}
                    styles={styles}
                  />
                </>
              ) : (
                <DealerNetworkState
                  bodyKey="dealerNetwork.empty.body"
                  styles={styles}
                  titleKey="dealerNetwork.empty.title"
                />
              )}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
