import { useTranslation } from 'react-i18next';
import {
  Animated,
  ImageBackground,
  Pressable,
  Text,
  View,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import type { FaqVideo } from '../../types';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type FaqVideoCardProps = {
  animatedStyle: StyleProp<ViewStyle>;
  index: number;
  isActive: boolean;
  onAction: ActionHandler;
  stackOrderStyle: StyleProp<ViewStyle>;
  styles: JameelHomeStyles;
  video: FaqVideo;
};

export function FaqVideoCard({
  animatedStyle,
  index,
  isActive,
  onAction,
  stackOrderStyle,
  styles,
  video,
}: FaqVideoCardProps) {
  const { t } = useTranslation();

  return (
    <Animated.View
      pointerEvents={isActive ? 'auto' : 'none'}
      style={[
        styles.faqCarouselCardLayer,
        index === 0 && styles.faqCardFirst,
        stackOrderStyle,
        animatedStyle,
      ]}
    >
      <Pressable
        accessibilityLabel={t(video.ctaKey)}
        accessibilityRole="button"
        onPress={() => onAction('watch-video')}
        style={({ pressed }) => [styles.faqCard, pressed && styles.pressed]}
      >
        <ImageBackground
          accessibilityLabel={t(video.imageAltKey)}
          imageStyle={styles.faqImage as ImageStyle}
          resizeMode="cover"
          source={{ uri: video.imageUri }}
          style={styles.faqMedia}
        >
          <View style={[styles.faqScrim, !isActive && styles.faqSideScrim]} />
          <View style={styles.faqStoryCopy}>
            <Text numberOfLines={2} style={styles.faqTitle}>
              {t(video.titleKey)}
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
    </Animated.View>
  );
}
