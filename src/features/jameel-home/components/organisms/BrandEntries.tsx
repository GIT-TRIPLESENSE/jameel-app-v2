import { View } from 'react-native';

import type { BrandEntry } from '../../types';
import { Section } from '../atoms/Section';
import { BrandEntryCard } from '../molecules/BrandEntryCard';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type BrandEntriesProps = {
  entries: BrandEntry[];
  onAction: ActionHandler;
  styles: JameelHomeStyles;
};

export function BrandEntries({ entries, onAction, styles }: BrandEntriesProps) {
  return (
    <Section titleKey="jameelHome.brands.title" styles={styles}>
      <View style={styles.brandGrid}>
        {entries.map((entry) => (
          <BrandEntryCard entry={entry} key={entry.id} onAction={onAction} styles={styles} />
        ))}
      </View>
    </Section>
  );
}
