import { View } from 'react-native';

import type { BrandEntry, HomeSolutionPath } from '../../types';
import { SectionHeader } from '../atoms/SectionHeader';
import { BrandEntryCard } from '../molecules/BrandEntryCard';
// import { SolutionPathCard } from '../molecules/SolutionPathCard';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type SolutionPathsProps = {
  entries: BrandEntry[];
  onAction: ActionHandler;
  quizPath: HomeSolutionPath;
  styles: JameelHomeStyles;
};

export function SolutionPaths({ entries, onAction, quizPath, styles }: SolutionPathsProps) {
  // Quiz banner hidden by stakeholder request; keep the path prop wired for a quick restore.
  void quizPath;

  return (
    <View style={styles.alternatingSection}>
      <SectionHeader styles={styles} titleKey="jameelHome.solutions.title" />
      <View style={styles.solutionStack}>
        <View style={styles.brandGrid}>
          {entries.map((entry) => (
            <BrandEntryCard entry={entry} key={entry.id} onAction={onAction} styles={styles} />
          ))}
        </View>
        {/*
          Banner quiz hidden by stakeholder request.
          Restore this block together with the SolutionPathCard import when the quiz entry comes back.
          <SolutionPathCard onAction={onAction} path={quizPath} styles={styles} />
        */}
      </View>
    </View>
  );
}
