import { ChevronRight } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import type { ScenarioCard } from '../../types';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type ScenarioItemProps = {
  onAction: ActionHandler;
  scenario: ScenarioCard;
  styles: JameelHomeStyles;
};

export function ScenarioItem({ onAction, scenario, styles }: ScenarioItemProps) {
  const { t } = useTranslation();
  const Icon = scenario.icon;

  return (
    <Pressable
      accessibilityHint={t('jameelHome.prototypeActionHint')}
      accessibilityLabel={t(scenario.ctaKey)}
      accessibilityRole="button"
      onPress={() => onAction(scenario.action)}
      style={({ pressed }) => [styles.scenarioCard, pressed && styles.pressed]}
    >
      <View style={styles.scenarioIcon}>
        <Icon color={styles.meta.jameelAccentColor.color} size={styles.meta.iconMedium.width} />
      </View>
      <View style={styles.scenarioContent}>
        <Text numberOfLines={1} style={styles.scenarioLabel}>
          {t(scenario.labelKey)}
        </Text>
        <Text style={styles.scenarioTitle}>{t(scenario.titleKey)}</Text>
      </View>
      <ChevronRight color={styles.meta.lightIconColor.color} size={styles.meta.iconMedium.width} />
    </Pressable>
  );
}
