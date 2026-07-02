import { useMemo, useRef } from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/theme';

import {
  brandEntries,
  journeySteps,
  // faqVideos,
  // membershipSignals,
  peopleRoles,
  solutionPaths,
} from '../data';
import type { PrototypeAction } from '../types';
import { createJameelHomeStyles } from './styles';
// import { FaqVideoSection } from './organisms/FaqVideoSection';
import { HeroSection } from './organisms/HeroSection';
import { JourneyTogether } from './organisms/JourneyTogether';
// import { MembershipContinuity } from './organisms/MembershipContinuity';
import { PeopleEcosystem } from './organisms/PeopleEcosystem';
import { SolutionPaths } from './organisms/SolutionPaths';

type JameelHomeScreenProps = {
  onAction?: (action: PrototypeAction) => void;
};

export function JameelHomeScreen({ onAction }: JameelHomeScreenProps) {
  const { theme } = useAppTheme();
  const { width } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);
  const heroHeightRef = useRef(0);
  const isCompact = width < theme.layout.mobileContentMaxWidth;
  const styles = useMemo(
    () => createJameelHomeStyles(theme, isCompact, width),
    [theme, isCompact, width],
  );
  const quizPath = solutionPaths.find((path) => path.id === 'guided');

  const handleAction = (action: PrototypeAction) => {
    onAction?.(action);
  };

  const handleBrandChoiceAnchor = () => {
    scrollViewRef.current?.scrollTo({
      animated: true,
      y: heroHeightRef.current,
    });
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        testID="jameel-home-scroll"
      >
        <View
          onLayout={(event) => {
            heroHeightRef.current = event.nativeEvent.layout.height;
          }}
        >
          <HeroSection onBrandChoicePress={handleBrandChoiceAnchor} styles={styles} />
        </View>
        <View style={styles.mainContent}>
          {quizPath ? (
            <SolutionPaths
              entries={brandEntries}
              onAction={handleAction}
              quizPath={quizPath}
              styles={styles}
            />
          ) : null}
          <JourneyTogether steps={journeySteps} styles={styles} />
          {/*
            EV expert hub hidden by stakeholder request.
            Restore this block together with the faqVideos import when the section comes back.
            <FaqVideoSection onAction={handleAction} styles={styles} videos={faqVideos} />
          */}
          {/*
            Membership hidden by stakeholder request.
            Restore this block together with the membershipSignals import when the section comes back.
            <MembershipContinuity
            onAction={handleAction}
            signals={membershipSignals}
            styles={styles}
            />
          */}
          <PeopleEcosystem onAction={handleAction} roles={peopleRoles} styles={styles} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
