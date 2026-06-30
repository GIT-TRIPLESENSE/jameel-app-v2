import { Text, View } from 'react-native';

import type { VehicleMetricDto } from '@/services';

import type { BrandProductsStyles } from '../styles';

type VehicleMetricItemProps = {
  isDivided: boolean;
  label: string;
  metric: VehicleMetricDto;
  styles: BrandProductsStyles;
};

export function VehicleMetricItem({ isDivided, label, metric, styles }: VehicleMetricItemProps) {
  return (
    <View style={[styles.metricItem, isDivided && styles.metricItemDivider]}>
      <Text numberOfLines={1} style={styles.metricLabel}>
        {label}
      </Text>
      <Text numberOfLines={1} style={styles.metricValue}>
        {metric.value}
      </Text>
    </View>
  );
}
