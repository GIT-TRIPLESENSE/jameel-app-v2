import { View } from 'react-native';

import type { DealerNetworkLocationDto } from '@/services';

import { DealerNetworkLocationCard } from '../molecules/DealerNetworkLocationCard';
import type { DealerNetworkStyles } from '../styles';

type DealerNetworkLocationListProps = {
  activeLocationId?: string;
  locations: DealerNetworkLocationDto[];
  onSelectLocation: (locationId: string) => void;
  styles: DealerNetworkStyles;
};

export function DealerNetworkLocationList({
  activeLocationId,
  locations,
  onSelectLocation,
  styles,
}: DealerNetworkLocationListProps) {
  return (
    <View style={styles.locationList}>
      {locations.map((location) => (
        <DealerNetworkLocationCard
          isSelected={location.id === activeLocationId}
          key={location.id}
          location={location}
          onSelectLocation={onSelectLocation}
          styles={styles}
        />
      ))}
    </View>
  );
}
