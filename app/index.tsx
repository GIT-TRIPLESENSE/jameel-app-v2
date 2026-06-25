import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { type AppTheme, useAppTheme } from '@/theme';

export default function IndexRoute() {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>{t('scaffold.placeholderTitle')}</Text>
        <Text style={styles.body}>{t('scaffold.placeholderBody')}</Text>
      </View>
    </SafeAreaView>
  );
}

function createStyles(theme: AppTheme) {
  return StyleSheet.create({
    safeArea: {
      flex: theme.layout.screenFlex,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: theme.layout.screenFlex,
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.md,
      padding: theme.spacing.lg,
    },
    title: {
      color: theme.colors.text,
      fontSize: theme.typography.sizes.title,
      fontWeight: theme.typography.weights.semibold,
      lineHeight: theme.typography.lineHeights.title,
      textAlign: 'center',
    },
    body: {
      color: theme.colors.textMuted,
      fontSize: theme.typography.sizes.body,
      fontWeight: theme.typography.weights.regular,
      lineHeight: theme.typography.lineHeights.body,
      maxWidth: theme.layout.contentMaxWidth,
      textAlign: 'center',
    },
  });
}
