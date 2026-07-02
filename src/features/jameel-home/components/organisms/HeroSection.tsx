import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text, View, type ImageStyle } from 'react-native';

import { jameelHomeHeroImage } from '../../data';
import { PrototypeButton } from '../atoms/PrototypeButton';
import { JameelHeader } from '../molecules/JameelHeader';
import type { JameelHomeStyles } from '../styles';

type HeroSectionProps = {
  onBrandChoicePress: () => void;
  styles: JameelHomeStyles;
};

export function HeroSection({ onBrandChoicePress, styles }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <ImageBackground
      accessibilityLabel={t('jameelHome.hero.imageAlt')}
      imageStyle={styles.heroImage as ImageStyle}
      resizeMode="cover"
      source={jameelHomeHeroImage}
      style={styles.hero}
    >
      <LinearGradient
        colors={styles.meta.heroPetrolScrim.colors}
        end={styles.meta.heroPetrolScrim.end}
        locations={styles.meta.heroPetrolScrim.locations}
        pointerEvents="none"
        start={styles.meta.heroPetrolScrim.start}
        style={styles.heroScrim}
      />
      <JameelHeader onDark styles={styles} />
      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>{t('jameelHome.hero.title')}</Text>
        <Text style={styles.heroBody}>{t('jameelHome.hero.body')}</Text>
        <PrototypeButton
          label={t('jameelHome.hero.cta')}
          onPress={onBrandChoicePress}
          styles={styles}
          variant="light"
        />
      </View>
    </ImageBackground>
  );
}
