import { CircleUserRound } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, View } from 'react-native';

import { BrandContextMenu, type BrandContextSelection } from '@/components';
import { brandLogos } from '@/lib';
import type { BrandId } from '@/services';

import type { DealerNetworkStyles } from '../styles';

type DealerNetworkHeaderProps = {
  brandId: BrandId;
  onBrandContextSelect?: (selection: BrandContextSelection) => void;
  selectorLabelKey: string;
  styles: DealerNetworkStyles;
};

export function DealerNetworkHeader({
  brandId,
  onBrandContextSelect,
  selectorLabelKey,
  styles,
}: DealerNetworkHeaderProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <BrandContextMenu
        iconColor={styles.meta.darkIconColor.color}
        onSelect={onBrandContextSelect}
        pressedStyle={styles.pressed}
        selectedId={brandId}
        selectorAccessibilityLabel={t('dealerNetwork.header.selectorLabel')}
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

      <Pressable
        accessibilityLabel={t('dealerNetwork.header.profileLabel')}
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
