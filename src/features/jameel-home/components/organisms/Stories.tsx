import { View } from 'react-native';

import type { StoryCard } from '../../types';
import { Section } from '../atoms/Section';
import { StoryItem } from '../molecules/StoryItem';
import type { JameelHomeStyles } from '../styles';

type StoriesProps = {
  stories: StoryCard[];
  styles: JameelHomeStyles;
};

export function Stories({ stories, styles }: StoriesProps) {
  const largeStory = stories.find((story) => story.size === 'large');
  const smallStories = stories.filter((story) => story.size === 'small');

  return (
    <Section titleKey="jameelHome.stories.title" styles={styles}>
      <View style={styles.storyList}>
        {largeStory ? <StoryItem story={largeStory} styles={styles} /> : null}
        <View style={styles.smallStoryGrid}>
          {smallStories.map((story) => (
            <StoryItem key={story.id} story={story} styles={styles} />
          ))}
        </View>
      </View>
    </Section>
  );
}
