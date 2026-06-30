import { useMemo } from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/theme';

import {
  brandEntries,
  ecosystemStats,
  expertHubItems,
  quickActions,
  scenarioCards,
  storyCards,
} from '../data';
import type { PrototypeAction } from '../types';
import { createJameelHomeStyles } from './styles';
import { BrandEntries } from './organisms/BrandEntries';
import { ClosingDecision } from './organisms/ClosingDecision';
import { EcosystemStats } from './organisms/EcosystemStats';
import { ExpertHub } from './organisms/ExpertHub';
import { HeroSection } from './organisms/HeroSection';
import { MembershipPreview } from './organisms/MembershipPreview';
import { MobilityScenarios } from './organisms/MobilityScenarios';
import { QuickActions } from './organisms/QuickActions';
import { Stories } from './organisms/Stories';

type JameelHomeScreenProps = {
  onAction?: (action: PrototypeAction) => void;
};

export function JameelHomeScreen({ onAction }: JameelHomeScreenProps) {
  const { theme } = useAppTheme();
  const { width } = useWindowDimensions();
  const isCompact = width < theme.layout.mobileContentMaxWidth;
  const styles = useMemo(() => createJameelHomeStyles(theme, isCompact), [theme, isCompact]);

  const handleAction = (action: PrototypeAction) => {
    onAction?.(action);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        testID="jameel-home-scroll"
      >
        <HeroSection onAction={handleAction} styles={styles} />
        <View style={styles.mainContent}>
          <QuickActions actions={quickActions} onAction={handleAction} styles={styles} />
          <BrandEntries entries={brandEntries} onAction={handleAction} styles={styles} />
          <MobilityScenarios scenarios={scenarioCards} onAction={handleAction} styles={styles} />
          <EcosystemStats stats={ecosystemStats} styles={styles} />
          <ExpertHub items={expertHubItems} onAction={handleAction} styles={styles} />
          <Stories stories={storyCards} styles={styles} />
          <MembershipPreview onAction={handleAction} styles={styles} />
          <ClosingDecision onAction={handleAction} styles={styles} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
