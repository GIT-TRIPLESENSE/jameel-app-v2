import { View } from 'react-native';

import type { ScenarioCard } from '../../types';
import { Section } from '../atoms/Section';
import { ScenarioItem } from '../molecules/ScenarioItem';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type MobilityScenariosProps = {
  onAction: ActionHandler;
  scenarios: ScenarioCard[];
  styles: JameelHomeStyles;
};

export function MobilityScenarios({ onAction, scenarios, styles }: MobilityScenariosProps) {
  return (
    <Section titleKey="jameelHome.scenarios.title" styles={styles}>
      <View style={styles.scenarioList}>
        {scenarios.map((scenario) => (
          <ScenarioItem key={scenario.id} onAction={onAction} scenario={scenario} styles={styles} />
        ))}
      </View>
    </Section>
  );
}
