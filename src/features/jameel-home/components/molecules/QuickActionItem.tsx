import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import type { QuickAction } from '../../types';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type QuickActionItemProps = {
  action: QuickAction;
  index: number;
  onAction: ActionHandler;
  showDivider: boolean;
  styles: JameelHomeStyles;
};

export function QuickActionItem({
  action,
  index,
  onAction,
  showDivider,
  styles,
}: QuickActionItemProps) {
  const { t } = useTranslation();
  const Icon = action.icon;

  return (
    <Pressable
      accessibilityHint={t('jameelHome.prototypeActionHint')}
      accessibilityLabel={t(action.accessibilityLabelKey)}
      accessibilityRole="button"
      onPress={() => onAction(action.action)}
      style={({ pressed }) => [styles.quickAction, pressed && styles.pressed]}
      testID={`jameel-home-quick-action-${index}`}
    >
      <View style={styles.quickIconWrap}>
        <Icon
          color={styles.meta.jameelAccentColor.color}
          size={styles.meta.iconLarge.width}
          strokeWidth={styles.meta.iconStroke.width}
        />
      </View>
      <Text numberOfLines={2} style={styles.quickActionText}>
        {t(action.titleKey)}
      </Text>
      {showDivider ? <View style={styles.quickDivider} /> : null}
    </Pressable>
  );
}
