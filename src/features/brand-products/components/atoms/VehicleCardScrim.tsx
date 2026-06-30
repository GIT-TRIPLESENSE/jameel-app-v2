import { LinearGradient } from 'expo-linear-gradient';

import type { BrandProductsStyles } from '../styles';

type VehicleCardScrimProps = {
  styles: BrandProductsStyles;
};

export function VehicleCardScrim({ styles }: VehicleCardScrimProps) {
  return (
    <LinearGradient
      colors={styles.meta.vehicleScrim.colors}
      end={styles.meta.vehicleScrim.end}
      locations={styles.meta.vehicleScrim.locations}
      pointerEvents="none"
      start={styles.meta.vehicleScrim.start}
      style={styles.vehicleImageScrim}
    />
  );
}
