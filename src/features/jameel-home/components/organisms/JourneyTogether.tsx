import { View } from 'react-native';

import type { JourneyStep } from '../../types';
import { SectionHeader } from '../atoms/SectionHeader';
import { JourneyStepCard } from '../molecules/JourneyStepCard';
import type { JameelHomeStyles } from '../styles';

type JourneyTogetherProps = {
  steps: JourneyStep[];
  styles: JameelHomeStyles;
};

export function JourneyTogether({ steps, styles }: JourneyTogetherProps) {
  return (
    <View style={styles.journeySection}>
      <View style={styles.journeyHeader}>
        <SectionHeader styles={styles} titleKey="jameelHome.journey.title" />
      </View>
      <View style={styles.journeyRail}>
        {steps.map((step, index) => (
          <JourneyStepCard
            index={index}
            isLast={index === steps.length - 1}
            key={step.id}
            step={step}
            styles={styles}
          />
        ))}
      </View>
    </View>
  );
}
