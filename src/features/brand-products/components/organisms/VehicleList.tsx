import { View } from 'react-native';

import type { VehicleDto } from '@/services';

import { VehicleCard } from '../molecules/VehicleCard';
import type { BrandProductsStyles } from '../styles';

type VehicleListProps = {
  styles: BrandProductsStyles;
  vehicles: VehicleDto[];
};

export function VehicleList({ styles, vehicles }: VehicleListProps) {
  return (
    <View style={styles.vehicleList}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} styles={styles} vehicle={vehicle} />
      ))}
    </View>
  );
}
