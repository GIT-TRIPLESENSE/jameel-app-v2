// import { CircleUserRound } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { brandLogos } from '@/lib';

import type { JameelHomeStyles } from '../styles';

type JameelHeaderProps = {
  onDark?: boolean;
  styles: JameelHomeStyles;
};

export function JameelHeader({ onDark, styles }: JameelHeaderProps) {
  const { t } = useTranslation();
  // const iconColor = onDark ? styles.meta.darkIconColor.color : styles.meta.lightIconColor.color;

  return (
    <View style={styles.header}>
      <View pointerEvents="none" style={styles.logoMark}>
        <Image
          accessibilityLabel={t('jameelHome.header.logoLabel')}
          accessibilityRole="image"
          resizeMode="contain"
          source={onDark ? brandLogos.jameelWhite : brandLogos.jameel}
          style={styles.logoImage}
        />
      </View>
      {/*
        Profile icon hidden by stakeholder request.
        Restore this block together with the CircleUserRound and Pressable imports when profile access returns.
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
      */}
    </View>
  );
}
