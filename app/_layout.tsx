import 'react-native-gesture-handler';

import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/urbanist';
import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { ConnectedBottomNavigationBar, shouldShowBottomNavigation } from '@/components';
import { AppProviders } from '@/lib/providers';
import { useAppTheme } from '@/theme';

function RootLayoutContent() {
  const { theme } = useAppTheme();
  const pathname = usePathname();
  const isBottomNavigationVisible = shouldShowBottomNavigation(pathname);

  return (
    <>
      <StatusBar style={theme.statusBarStyle} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      />
      {isBottomNavigationVisible ? <ConnectedBottomNavigationBar /> : null}
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProviders>
      <RootLayoutContent />
    </AppProviders>
  );
}
