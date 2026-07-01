import { CircleUserRound } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, View } from 'react-native';

import { BrandContextMenu, type BrandContextSelection } from '@/components';
import { brandLogos } from '@/lib';

import type { JameelHomeStyles } from '../styles';

type JameelHeaderProps = {
  onDark?: boolean;
  onBrandContextSelect?: (selection: BrandContextSelection) => void;
  styles: JameelHomeStyles;
};

export function JameelHeader({ onBrandContextSelect, onDark, styles }: JameelHeaderProps) {
  const { t } = useTranslation();
  const iconColor = onDark ? styles.meta.darkIconColor.color : styles.meta.lightIconColor.color;
  const selectorIconColor = styles.meta.selectorIconColor.color;

  return (
    <View style={styles.header}>
      <BrandContextMenu
        iconColor={selectorIconColor}
        onSelect={onBrandContextSelect}
        pressedStyle={styles.pressed}
        selectedId="jameel"
        selectorAccessibilityLabel={t('jameelHome.header.selectorLabel')}
        selectorHitSlop={styles.meta.selectorHitSlop}
        selectorLabel={t('jameelHome.header.brandSelector')}
        selectorStyle={[styles.brandSelector, onDark ? styles.brandSelectorOnDark : null]}
        selectorTextStyle={[
          styles.brandSelectorText,
          onDark ? styles.brandSelectorTextOnDark : null,
        ]}
      />
      <View pointerEvents="none" style={styles.logoMark}>
        <Image
          accessibilityLabel={t('jameelHome.header.logoLabel')}
          accessibilityRole="image"
          resizeMode="contain"
          source={onDark ? brandLogos.jameelWhite : brandLogos.jameel}
          style={styles.logoImage}
        />
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
