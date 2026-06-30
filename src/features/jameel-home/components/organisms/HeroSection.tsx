import { useTranslation } from 'react-i18next';
import { ImageBackground, Text, View, type ImageStyle } from 'react-native';

import { jameelHomeImages } from '../../data';
import { PrototypeButton } from '../atoms/PrototypeButton';
import { JameelHeader } from '../molecules/JameelHeader';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type HeroSectionProps = {
  onAction: ActionHandler;
  styles: JameelHomeStyles;
};

export function HeroSection({ onAction, styles }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <ImageBackground
      accessibilityLabel={t('jameelHome.hero.imageAlt')}
      imageStyle={styles.heroImage as ImageStyle}
      resizeMode="cover"
      source={{ uri: jameelHomeImages.hero }}
      style={styles.hero}
    >
      <View style={styles.heroScrim} />
      <JameelHeader onDark styles={styles} />
      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>{t('jameelHome.hero.title')}</Text>
        <Text style={styles.heroBody}>{t('jameelHome.hero.body')}</Text>
        <PrototypeButton
          label={t('jameelHome.hero.cta')}
          onPress={() => onAction('start-quiz')}
          styles={styles}
          variant="light"
        />
      </View>
    </ImageBackground>
  );
}
