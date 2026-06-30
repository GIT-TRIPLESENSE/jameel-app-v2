import { ChevronDown, CircleUserRound } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import type { JameelHomeStyles } from '../styles';

type JameelHeaderProps = {
  onDark?: boolean;
  styles: JameelHomeStyles;
};

export function JameelHeader({ onDark, styles }: JameelHeaderProps) {
  const { t } = useTranslation();
  const iconColor = onDark ? styles.meta.darkIconColor.color : styles.meta.lightIconColor.color;

  return (
    <View style={styles.header}>
      <Pressable
        accessibilityHint={t('jameelHome.prototypeActionHint')}
        accessibilityLabel={t('jameelHome.header.selectorLabel')}
        accessibilityRole="button"
        onPress={() => undefined}
        style={({ pressed }) => [styles.brandSelector, pressed && styles.pressed]}
      >
        <Text numberOfLines={1} style={styles.brandSelectorText}>
          {t('jameelHome.header.brandSelector')}
        </Text>
        <ChevronDown
          color={styles.meta.selectorIconColor.color}
          size={styles.meta.iconSmall.width}
        />
      </Pressable>
      <View accessibilityRole="image" style={styles.logoMark}>
        <Text numberOfLines={1} style={styles.logoPrimary}>
          {t('jameelHome.header.logoPrimary')}
        </Text>
        <Text numberOfLines={1} style={styles.logoSecondary}>
          {t('jameelHome.header.logoSecondary')}
        </Text>
      </View>
      <Pressable
        accessibilityHint={t('jameelHome.prototypeActionHint')}
        accessibilityLabel={t('jameelHome.header.profileLabel')}
        accessibilityRole="button"
        onPress={() => undefined}
        style={({ pressed }) => [styles.profileButton, pressed && styles.pressed]}
      >
        <CircleUserRound
          color={iconColor}
          size={styles.meta.iconLarge.width}
          strokeWidth={styles.meta.iconStroke.width}
        />
      </Pressable>
    </View>
  );
}
