import { PlayCircle } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Text, View, type ImageStyle } from 'react-native';

import { jameelHomeImages } from '../../data';
import type { GuideHighlight } from '../../types';
import { SectionHeader } from '../atoms/SectionHeader';
import type { JameelHomeStyles } from '../styles';

type GuideStoryProps = {
  highlights: GuideHighlight[];
  styles: JameelHomeStyles;
};

export function GuideStory({ highlights, styles }: GuideStoryProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.guideSection}>
      <SectionHeader
        eyebrowKey="jameelHome.guide.eyebrow"
        styles={styles}
        titleKey="jameelHome.guide.title"
      />
      <ImageBackground
        accessibilityLabel={t('jameelHome.guide.imageAlt')}
        imageStyle={styles.guideImage as ImageStyle}
        resizeMode="cover"
        source={{ uri: jameelHomeImages.guide }}
        style={styles.guideMedia}
      >
        <View style={styles.guideScrim} />
        <View style={styles.guidePlay}>
          <PlayCircle
            color={styles.meta.darkIconColor.color}
            size={styles.meta.iconLarge.width}
            strokeWidth={styles.meta.iconStroke.width}
          />
        </View>
        <View style={styles.guideContent}>
          <Text style={styles.guideBody}>{t('jameelHome.guide.body')}</Text>
          <View style={styles.guidePills}>
            {highlights.map((highlight) => (
              <View key={highlight.id} style={styles.guidePill}>
                <Text numberOfLines={1} style={styles.guidePillText}>
                  {t(highlight.labelKey)}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
