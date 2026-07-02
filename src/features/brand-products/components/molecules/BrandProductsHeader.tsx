// import { CircleUserRound } from 'lucide-react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, View } from 'react-native';

import { BrandContextMenu, type BrandContextSelection } from '@/components';
import { brandLogos } from '@/lib';
import type { BrandId } from '@/services';

import type { BrandProductsStyles } from '../styles';

type BrandProductsHeaderProps = {
  brandId: BrandId;
  onBrandContextSelect?: (selection: BrandContextSelection) => void;
  onJameelHomePress?: () => void;
  selectorLabelKey: string;
  styles: BrandProductsStyles;
};

export function BrandProductsHeader({
  brandId,
  onBrandContextSelect,
  onJameelHomePress,
  selectorLabelKey,
  styles,
}: BrandProductsHeaderProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <Pressable
        accessibilityLabel={t('brandProducts.header.homeLabel')}
        accessibilityRole="button"
        onPress={onJameelHomePress}
        style={({ pressed }) => [styles.headerBackButton, pressed && styles.pressed]}
      >
        <ArrowLeft
          color={styles.meta.darkIconColor.color}
          size={styles.meta.iconMedium.width}
          strokeWidth={styles.meta.iconMedium.strokeWidth}
        />
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

      <BrandContextMenu
        iconColor={styles.meta.darkIconColor.color}
        menuAlignment="right"
        onSelect={onBrandContextSelect}
        pressedStyle={styles.pressed}
        selectedId={brandId}
        selectorAccessibilityLabel={t('brandProducts.header.selectorLabel')}
        selectorLabel={t(selectorLabelKey)}
        selectorStyle={styles.brandSelector}
        selectorTextStyle={styles.brandSelectorText}
      />

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
