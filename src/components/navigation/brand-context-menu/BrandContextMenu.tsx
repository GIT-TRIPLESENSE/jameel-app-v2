import { Check, ChevronDown } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type Insets,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import type { BrandId } from '@/services';
import { useAppTheme, type AppTheme } from '@/theme';

export type BrandContextSelection = BrandId | 'jameel';

type BrandContextOption = {
  id: BrandContextSelection;
  labelKey: string;
};

const brandContextOptions: BrandContextOption[] = [
  {
    id: 'jameel',
    labelKey: 'brandSwitcher.options.jameel',
  },
  {
    id: 'zeekr',
    labelKey: 'brandSwitcher.options.zeekr',
  },
  {
    id: 'geely',
    labelKey: 'brandSwitcher.options.geely',
  },
];

type BrandContextMenuProps = {
  iconColor: string;
  onSelect?: (selection: BrandContextSelection) => void;
  pressedStyle?: StyleProp<ViewStyle>;
  selectedId: BrandContextSelection;
  selectorAccessibilityLabel: string;
  selectorHitSlop?: Insets;
  selectorLabel: string;
  selectorStyle: StyleProp<ViewStyle>;
  selectorTextStyle: StyleProp<TextStyle>;
};

export function BrandContextMenu({
  iconColor,
  onSelect,
  pressedStyle,
  selectedId,
  selectorAccessibilityLabel,
  selectorHitSlop,
  selectorLabel,
  selectorStyle,
  selectorTextStyle,
}: BrandContextMenuProps) {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const [isOpen, setIsOpen] = useState(false);
  const styles = useMemo(() => createBrandContextMenuStyles(theme), [theme]);

  const handleSelect = (selection: BrandContextSelection) => {
    setIsOpen(false);
    onSelect?.(selection);
  };

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityHint={t('brandSwitcher.selectorHint')}
        accessibilityLabel={selectorAccessibilityLabel}
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        hitSlop={selectorHitSlop}
        onPress={() => setIsOpen((current) => !current)}
        style={({ pressed }) => [selectorStyle, pressed && pressedStyle]}
        testID="brand-context-selector"
      >
        <Text numberOfLines={1} style={selectorTextStyle}>
          {selectorLabel}
        </Text>
        <ChevronDown color={iconColor} size={theme.icon.sm} />
      </Pressable>

      {isOpen ? (
        <View
          accessibilityLabel={t('brandSwitcher.menuLabel')}
          style={styles.menu}
          testID="brand-context-menu"
        >
          {brandContextOptions.map((option) => {
            const isSelected = option.id === selectedId;
            const optionLabel = t(option.labelKey);

            return (
              <Pressable
                accessibilityLabel={t('brandSwitcher.optionLabel', {
                  brand: optionLabel,
                })}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                key={option.id}
                onPress={() => handleSelect(option.id)}
                style={({ pressed }) => [
                  styles.option,
                  isSelected && styles.optionSelected,
                  pressed && styles.optionPressed,
                ]}
              >
                <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                  {optionLabel}
                </Text>
                {isSelected ? (
                  <Check
                    color={theme.colors.jameel.primary}
                    size={theme.icon.sm}
                    strokeWidth={theme.icon.stroke}
                  />
                ) : null}
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

function createBrandContextMenuStyles(theme: AppTheme) {
  return StyleSheet.create({
    container: {
      position: 'relative',
      zIndex: 20,
      elevation: 20,
    },
    menu: {
      ...theme.shadow.soft,
      position: 'absolute',
      top: theme.layout.headerControlMinHeight + theme.spacing.sm,
      left: theme.spacing.none,
      minWidth: theme.layout.brandCardMinHeight - theme.spacing.xxl,
      borderRadius: theme.radii.lg,
      backgroundColor: theme.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.border,
      padding: theme.spacing.md,
      gap: theme.spacing.sm,
      zIndex: 30,
      elevation: 30,
    },
    option: {
      minHeight: theme.layout.filterChipMinHeight,
      borderRadius: theme.radii.pill,
      paddingHorizontal: theme.spacing.base,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.base,
    },
    optionSelected: {
      backgroundColor: theme.colors.surfaceMuted,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.border,
    },
    optionPressed: {
      opacity: theme.opacity.pressed,
    },
    optionText: {
      color: theme.colors.text,
      fontFamily: theme.typography.fontFamilies.regular,
      fontSize: theme.typography.sizes.body,
      lineHeight: theme.typography.lineHeights.body,
    },
    optionTextSelected: {
      fontFamily: theme.typography.fontFamilies.bold,
    },
  });
}
