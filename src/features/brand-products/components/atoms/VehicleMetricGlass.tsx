import { LinearGradient } from 'expo-linear-gradient';

import type { BrandProductsStyles } from '../styles';

type VehicleMetricGlassProps = {
  styles: BrandProductsStyles;
};

export function VehicleMetricGlass({ styles }: VehicleMetricGlassProps) {
  return (
    <>
      <LinearGradient
        colors={styles.meta.metricGlassSurface.colors}
        end={styles.meta.metricGlassSurface.end}
        locations={styles.meta.metricGlassSurface.locations}
        pointerEvents="none"
        start={styles.meta.metricGlassSurface.start}
        style={styles.metricGlassLayer}
      />
      <LinearGradient
        colors={styles.meta.metricGlassSheen.colors}
        end={styles.meta.metricGlassSheen.end}
        locations={styles.meta.metricGlassSheen.locations}
        pointerEvents="none"
        start={styles.meta.metricGlassSheen.start}
        style={styles.metricGlassLayer}
      />
      <LinearGradient
        colors={styles.meta.metricGlassDepth.colors}
        end={styles.meta.metricGlassDepth.end}
        locations={styles.meta.metricGlassDepth.locations}
        pointerEvents="none"
        start={styles.meta.metricGlassDepth.start}
        style={styles.metricGlassLayer}
      />
    </>
  );
}
