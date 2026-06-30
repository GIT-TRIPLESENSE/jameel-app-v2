import { View } from 'react-native';

import type { ExpertHubItem } from '../../types';
import { Section } from '../atoms/Section';
import { ExpertHubItemCard } from '../molecules/ExpertHubItemCard';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type ExpertHubProps = {
  items: ExpertHubItem[];
  onAction: ActionHandler;
  styles: JameelHomeStyles;
};

export function ExpertHub({ items, onAction, styles }: ExpertHubProps) {
  return (
    <Section titleKey="jameelHome.expertHub.title" styles={styles}>
      <View style={styles.expertList}>
        {items.map((item) => (
          <ExpertHubItemCard item={item} key={item.id} onAction={onAction} styles={styles} />
        ))}
      </View>
    </Section>
  );
}
