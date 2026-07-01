import { ChevronRight } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import type { HomeSolutionPath } from '../../types';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type SolutionPathCardProps = {
  onAction: ActionHandler;
  path: HomeSolutionPath;
  styles: JameelHomeStyles;
};

export function SolutionPathCard({ onAction, path, styles }: SolutionPathCardProps) {
  const { t } = useTranslation();

  return (
    <Pressable
      accessibilityLabel={t(path.ctaKey)}
      accessibilityRole="button"
      onPress={() => onAction(path.action)}
      style={({ pressed }) => [styles.quizEntryCard, pressed && styles.pressed]}
    >
      <View style={styles.quizEntryCopy}>
        <Text numberOfLines={1} style={styles.quizEntryTitle}>
          {t(path.titleKey)}
        </Text>
        <Text style={styles.quizEntryBody}>{t(path.bodyKey)}</Text>
      </View>
      <View style={styles.quizEntryArrow}>
        <ChevronRight
          color={styles.meta.jameelAccentColor.color}
          size={styles.meta.iconMedium.width}
          strokeWidth={styles.meta.iconStroke.width}
        />
      </View>
    </Pressable>
  );
}
