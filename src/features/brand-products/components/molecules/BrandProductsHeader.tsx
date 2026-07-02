// import { CircleUserRound } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { BrandContextMenu, type BrandContextSelection } from '@/components';
import { brandLogos } from '@/lib';
import type { BrandId } from '@/services';

import type { BrandProductsStyles } from '../styles';

type BrandProductsHeaderProps = {
  brandId: BrandId;
  onBrandContextSelect?: (selection: BrandContextSelection) => void;
  selectorLabelKey: string;
  styles: BrandProductsStyles;
};

export function BrandProductsHeader({
  brandId,
  onBrandContextSelect,
  selectorLabelKey,
  styles,
}: BrandProductsHeaderProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <BrandContextMenu
        iconColor={styles.meta.darkIconColor.color}
        onSelect={onBrandContextSelect}
        pressedStyle={styles.pressed}
        selectedId={brandId}
        selectorAccessibilityLabel={t('brandProducts.header.selectorLabel')}
        selectorLabel={t(selectorLabelKey)}
        selectorStyle={styles.brandSelector}
        selectorTextStyle={styles.brandSelectorText}
      />

      <View pointerEvents="none" style={styles.logoMark}>
        <Image
          accessibilityLabel={t('jameelHome.header.logoLabel')}
          accessibilityRole="image"
          resizeMode="contain"
          source={brandLogos.jameel}
          style={styles.logoImage}
        />
      </View>

      {/*
        Profile icon hidden by stakeholder request.
        Restore this block together with the CircleUserRound and Pressable imports when profile access returns.
        <Pressable
        accessibilityLabel={t('brandProducts.header.profileLabel')}
        accessibilityRole="button"
        style={({ pressed }) => [styles.profileButton, pressed && styles.pressed]}
        >
        <CircleUserRound
        color={styles.meta.darkIconColor.color}
        size={styles.meta.iconLarge.width}
        strokeWidth={styles.meta.iconLarge.strokeWidth}
        />
        </Pressable>
      */}
    </View>
  );
}
