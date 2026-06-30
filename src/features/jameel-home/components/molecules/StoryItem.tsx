import { useTranslation } from 'react-i18next';
import { ImageBackground, Text, View, type ImageStyle } from 'react-native';

import type { StoryCard } from '../../types';
import type { JameelHomeStyles } from '../styles';

type StoryItemProps = {
  story: StoryCard;
  styles: JameelHomeStyles;
};

export function StoryItem({ story, styles }: StoryItemProps) {
  const { t } = useTranslation();
  const isLarge = story.size === 'large';

  return (
    <ImageBackground
      accessibilityLabel={t(story.imageAltKey)}
      imageStyle={styles.storyImage as ImageStyle}
      resizeMode="cover"
      source={{ uri: story.imageUri }}
      style={[styles.storyCard, isLarge ? styles.storyCardLarge : styles.storyCardSmall]}
    >
      <View style={styles.storyScrim} />
      <View style={styles.storyContent}>
        <Text numberOfLines={1} style={styles.storyBadge}>
          {t(story.badgeKey)}
        </Text>
        <Text style={isLarge ? styles.storyTitleLarge : styles.storyTitleSmall}>
          {t(story.titleKey)}
        </Text>
        {story.bodyKey ? <Text style={styles.storyBody}>{t(story.bodyKey)}</Text> : null}
      </View>
    </ImageBackground>
  );
}
