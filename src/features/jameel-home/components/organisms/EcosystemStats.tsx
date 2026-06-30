import { View } from 'react-native';

import type { EcosystemStat } from '../../types';
import { Section } from '../atoms/Section';
import { EcosystemStatCard } from '../molecules/EcosystemStatCard';
import type { JameelHomeStyles } from '../styles';

type EcosystemStatsProps = {
  stats: EcosystemStat[];
  styles: JameelHomeStyles;
};

export function EcosystemStats({ stats, styles }: EcosystemStatsProps) {
  return (
    <Section titleKey="jameelHome.ecosystem.title" styles={styles}>
      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <EcosystemStatCard key={stat.id} stat={stat} styles={styles} />
        ))}
      </View>
    </Section>
  );
}
