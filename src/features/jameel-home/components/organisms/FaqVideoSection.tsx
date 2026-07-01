import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, PanResponder, Text, View } from 'react-native';

import type { FaqVideo } from '../../types';
import { FaqVideoCard } from '../molecules/FaqVideoCard';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type FaqVideoSectionProps = {
  onAction: ActionHandler;
  styles: JameelHomeStyles;
  videos: FaqVideo[];
};

function getRelativeStackIndex(index: number, activeIndex: number, totalItems: number) {
  let relativeIndex = index - activeIndex;

  if (relativeIndex > totalItems / 2) {
    relativeIndex -= totalItems;
  }

  if (relativeIndex < -totalItems / 2) {
    relativeIndex += totalItems;
  }

  return relativeIndex;
}

export function FaqVideoSection({ onAction, styles, videos }: FaqVideoSectionProps) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragX] = useState(() => new Animated.Value(0));
  const progress = Animated.divide(dragX, -styles.meta.faqCarouselCardWidth);
  const hasMultipleVideos = videos.length > 1;

  const goToIndex = useCallback(
    (nextIndex: number, direction: -1 | 1) => {
      Animated.timing(dragX, {
        duration: 180,
        toValue: -direction * styles.meta.faqCarouselCardWidth,
        useNativeDriver: true,
      }).start(() => {
        dragX.setValue(0);
        setActiveIndex(nextIndex);
      });
    },
    [dragX, styles.meta.faqCarouselCardWidth],
  );

  const resetDrag = useCallback(() => {
    Animated.spring(dragX, {
      damping: 18,
      mass: 0.8,
      stiffness: 180,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, [dragX]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) =>
          hasMultipleVideos &&
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
          Math.abs(gestureState.dx) > 6,
        onPanResponderMove: (_, gestureState) => {
          dragX.setValue(gestureState.dx);
        },
        onPanResponderRelease: (_, gestureState) => {
          const shouldChangeCard =
            Math.abs(gestureState.dx) > 46 || Math.abs(gestureState.vx) > 0.5;

          if (!shouldChangeCard || !hasMultipleVideos) {
            resetDrag();
            return;
          }

          const direction = gestureState.dx < 0 ? 1 : -1;
          const nextIndex = (activeIndex + direction + videos.length) % videos.length;
          goToIndex(nextIndex, direction);
        },
        onPanResponderTerminate: resetDrag,
      }),
    [activeIndex, dragX, goToIndex, hasMultipleVideos, resetDrag, videos.length],
  );

  return (
    <View style={styles.faqSection}>
      <View style={styles.faqSectionHeader}>
        <Text style={styles.faqSectionTitle}>
          <Text style={styles.faqSectionTitleAccent}>{t('jameelHome.faq.titleAccent')}</Text>
          {t('jameelHome.faq.titleRest')}
        </Text>
      </View>
      <View style={styles.faqCarouselViewport} {...panResponder.panHandlers}>
        <View style={styles.faqCarouselDeck}>
          {videos.map((video, index) => {
            const relativeIndex = getRelativeStackIndex(index, activeIndex, videos.length);
            const isActiveCard = relativeIndex === 0;

            if (Math.abs(relativeIndex) > 1) {
              return null;
            }

            const stackPosition = Animated.subtract(relativeIndex, progress);
            const animatedStyle = {
              transform: [
                {
                  translateX: stackPosition.interpolate({
                    extrapolate: 'clamp',
                    inputRange: [-2, -1, 0, 1, 2],
                    outputRange: [
                      -styles.meta.faqCarouselSideOffset * 1.2,
                      -styles.meta.faqCarouselSideOffset,
                      0,
                      styles.meta.faqCarouselSideOffset,
                      styles.meta.faqCarouselSideOffset * 1.2,
                    ],
                  }),
                },
                {
                  scale: stackPosition.interpolate({
                    extrapolate: 'clamp',
                    inputRange: [-2, -1, 0, 1, 2],
                    outputRange: [0.74, 0.84, 1, 0.84, 0.74],
                  }),
                },
                {
                  rotate: stackPosition.interpolate({
                    extrapolate: 'clamp',
                    inputRange: [-2, -1, 0, 1, 2],
                    outputRange: ['-7deg', '-4deg', '0deg', '4deg', '7deg'],
                  }),
                },
              ],
            };

            return (
              <FaqVideoCard
                animatedStyle={animatedStyle}
                index={index}
                isActive={isActiveCard}
                key={video.id}
                onAction={onAction}
                stackOrderStyle={
                  isActiveCard
                    ? styles.meta.faqCardStackOrderActive
                    : styles.meta.faqCardStackOrderSide
                }
                styles={styles}
                video={video}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
