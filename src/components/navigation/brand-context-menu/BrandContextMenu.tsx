import { Check, ChevronDown } from 'lucide-react-native';
import { useMemo, useRef, useState } from 'react';
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
  menuAlignment?: 'left' | 'right';
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
  menuAlignment = 'left',
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
  const [hoveredOptionId, setHoveredOptionId] = useState<BrandContextSelection | null>(null);
  const handledSelectionRef = useRef<BrandContextSelection | null>(null);
  const styles = useMemo(() => createBrandContextMenuStyles(theme), [theme]);

  const handleSelect = (selection: BrandContextSelection) => {
    if (handledSelectionRef.current === selection) {
      return;
    }

    handledSelectionRef.current = selection;
    setIsOpen(false);
    setHoveredOptionId(null);
    onSelect?.(selection);
  };

  const handleSelectorPress = () => {
    handledSelectionRef.current = null;

    setIsOpen((current) => {
      if (current) {
        setHoveredOptionId(null);
      }

      return !current;
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityHint={t('brandSwitcher.selectorHint')}
        accessibilityLabel={selectorAccessibilityLabel}
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        hitSlop={selectorHitSlop}
        onPress={handleSelectorPress}
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
          style={[styles.menu, menuAlignment === 'right' ? styles.menuRight : styles.menuLeft]}
          testID="brand-context-menu"
        >
          {brandContextOptions.map((option) => {
            const isSelected = option.id === selectedId;
            const isHovered = option.id === hoveredOptionId;
            const optionLabel = t(option.labelKey);

            return (
              <Pressable
                accessibilityLabel={t('brandSwitcher.optionLabel', {
                  brand: optionLabel,
                })}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                key={option.id}
                onHoverIn={() => setHoveredOptionId(option.id)}
                onHoverOut={() =>
                  setHoveredOptionId((currentOptionId) =>
                    currentOptionId === option.id ? null : currentOptionId,
                  )
                }
                onPress={() => handleSelect(option.id)}
                onPressIn={() => handleSelect(option.id)}
                style={({ pressed }) => [
                  styles.option,
                  isHovered && styles.optionHovered,
                  isSelected && styles.optionSelected,
                  isHovered && isSelected && styles.optionSelectedHovered,
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
      zIndex: 50,
      elevation: 50,
      overflow: 'visible',
    },
    menu: {
      ...theme.shadow.soft,
      position: 'absolute',
      top: theme.layout.headerControlMinHeight + theme.spacing.sm,
      width: theme.layout.headerBrandSelectorWidth + theme.spacing.xl,
      borderRadius: theme.radii.lg,
      backgroundColor: theme.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.border,
      padding: theme.spacing.md,
      gap: theme.spacing.sm,
      zIndex: 60,
      elevation: 60,
    },
    menuLeft: {
      left: theme.spacing.none,
    },
    menuRight: {
      right: theme.spacing.none,
    },
    option: {
      minHeight: theme.layout.headerControlMinHeight,
      borderRadius: theme.radii.pill,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.surface,
      paddingHorizontal: theme.spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.md,
    },
    optionHovered: {
      backgroundColor: theme.colors.surfaceSoft,
      borderColor: theme.colors.border,
    },
    optionSelected: {
      backgroundColor: theme.colors.surfaceMuted,
      borderColor: theme.colors.border,
    },
    optionSelectedHovered: {
      borderColor: theme.colors.jameel.primary,
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
