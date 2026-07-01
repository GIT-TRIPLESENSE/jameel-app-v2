import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import type { JourneyStep } from '../../types';
import type { JameelHomeStyles } from '../styles';

type JourneyStepCardProps = {
  index: number;
  isLast: boolean;
  step: JourneyStep;
  styles: JameelHomeStyles;
};

export function JourneyStepCard({ index, isLast, step, styles }: JourneyStepCardProps) {
  const { t } = useTranslation();
  const Icon = step.icon;
  const cardStyle = {
    before: styles.journeyStepPrimary,
    during: styles.journeyStepSoft,
    after: styles.journeyStepDeep,
  }[step.id];
  const separatorStyle = {
    before: styles.journeySeparatorToSoft,
    during: styles.journeySeparatorToDeep,
    after: undefined,
  }[step.id];

  return (
    <View
      style={[
        styles.journeyStep,
        cardStyle,
        index === 0 && styles.journeyStepFirst,
        isLast && styles.journeyStepLast,
      ]}
    >
      {!isLast ? <View style={[styles.journeySeparatorShape, separatorStyle]} /> : null}
      <View style={styles.journeyCopy}>
        <Text numberOfLines={1} style={styles.journeyLabel}>
          {t(step.labelKey)}
        </Text>
        <Text numberOfLines={1} style={styles.journeyTitle}>
          {t(step.titleKey)}
        </Text>
        <Text numberOfLines={2} style={styles.journeyBody}>
          {t(step.bodyKey)}
        </Text>
      </View>
      <View style={styles.journeyIcon}>
        <Icon
          color={styles.meta.darkIconColor.color}
          size={styles.meta.iconMedium.width}
          strokeWidth={styles.meta.iconStroke.width}
        />
      </View>
    </View>
  );
}
