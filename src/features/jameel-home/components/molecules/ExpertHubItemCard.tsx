import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import type { ExpertHubItem } from '../../types';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type ExpertHubItemCardProps = {
  item: ExpertHubItem;
  onAction: ActionHandler;
  styles: JameelHomeStyles;
};

export function ExpertHubItemCard({ item, onAction, styles }: ExpertHubItemCardProps) {
  const { t } = useTranslation();

  return (
    <Pressable
      accessibilityHint={t('jameelHome.prototypeActionHint')}
      accessibilityLabel={t(item.ctaKey)}
      accessibilityRole="button"
      onPress={() => onAction(item.action)}
      style={({ pressed }) => [styles.expertItem, pressed && styles.pressed]}
    >
      <View style={styles.expertCopy}>
        <Text style={styles.expertQuestion}>{t(item.questionKey)}</Text>
        <Text style={styles.expertAnswer}>{t(item.answerKey)}</Text>
      </View>
      <Text numberOfLines={1} style={styles.expertCta}>
        {t(item.ctaKey)}
      </Text>
    </Pressable>
  );
}
