import { ChevronRight } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import type { EcosystemStat } from '../../types';
import type { JameelHomeStyles } from '../styles';

type EcosystemStatCardProps = {
  stat: EcosystemStat;
  styles: JameelHomeStyles;
};

export function EcosystemStatCard({ stat, styles }: EcosystemStatCardProps) {
  const { t } = useTranslation();
  const Icon = stat.icon;

  return (
    <View style={styles.statCard}>
      <Icon
        color={styles.meta.jameelAccentColor.color}
        size={styles.meta.iconLarge.width}
        strokeWidth={styles.meta.iconStroke.width}
      />
      <Text numberOfLines={1} style={styles.statValue}>
        {t(stat.valueKey)}
      </Text>
      <Text numberOfLines={2} style={styles.statLabel}>
        {t(stat.labelKey)}
      </Text>
      <ChevronRight color={styles.meta.lightIconColor.color} size={styles.meta.iconMedium.width} />
    </View>
  );
}
