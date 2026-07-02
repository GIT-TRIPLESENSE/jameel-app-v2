import { View } from 'react-native';

import type { BrandEntry, HomeSolutionPath } from '../../types';
import { SectionHeader } from '../atoms/SectionHeader';
import { BrandEntryCard } from '../molecules/BrandEntryCard';
import { SolutionPathCard } from '../molecules/SolutionPathCard';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type SolutionPathsProps = {
  entries: BrandEntry[];
  onAction: ActionHandler;
  quizPath: HomeSolutionPath;
  styles: JameelHomeStyles;
};

export function SolutionPaths({ entries, onAction, quizPath, styles }: SolutionPathsProps) {
  return (
    <View style={styles.alternatingSection}>
      <SectionHeader styles={styles} titleKey="jameelHome.solutions.title" />
      <View style={styles.solutionStack}>
        <View style={styles.brandGrid}>
          {entries.map((entry) => (
            <BrandEntryCard entry={entry} key={entry.id} onAction={onAction} styles={styles} />
          ))}
        </View>
        <SolutionPathCard onAction={onAction} path={quizPath} styles={styles} />
      </View>
    </View>
  );
}
