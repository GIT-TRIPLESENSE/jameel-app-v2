import { ChevronDown, CircleUserRound } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, Text, View } from 'react-native';

import { brandLogos } from '@/lib';

import type { BrandProductsStyles } from '../styles';

type BrandProductsHeaderProps = {
  selectorLabelKey: string;
  styles: BrandProductsStyles;
};

export function BrandProductsHeader({ selectorLabelKey, styles }: BrandProductsHeaderProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <Pressable
        accessibilityLabel={t('brandProducts.header.selectorLabel')}
        accessibilityRole="button"
        style={({ pressed }) => [styles.brandSelector, pressed && styles.pressed]}
      >
        <Text numberOfLines={1} style={styles.brandSelectorText}>
          {t(selectorLabelKey)}
        </Text>
        <ChevronDown color={styles.meta.darkIconColor.color} size={styles.meta.iconSmall.width} />
      </Pressable>

      <View pointerEvents="none" style={styles.logoMark}>
        <Image
          accessibilityLabel={t('jameelHome.header.logoLabel')}
          accessibilityRole="image"
          resizeMode="contain"
          source={brandLogos.jameel}
          style={styles.logoImage}
        />
      </View>

      <Pressable
        accessibilityLabel={t('brandProducts.header.profileLabel')}
        accessibilityRole="button"
        style={({ pressed }) => [styles.profileButton, pressed && styles.pressed]}
      >
        <CircleUserRound
          color={styles.meta.darkIconColor.color}
          size={styles.meta.iconMedium.width}
          strokeWidth={styles.meta.iconMedium.strokeWidth}
        />
      </Pressable>
    </View>
  );
}
