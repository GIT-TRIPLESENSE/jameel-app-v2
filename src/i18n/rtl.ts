import { I18nManager } from 'react-native';

const rtlLocalePrefixes = ['ar', 'fa', 'he', 'ur'] as const;

export function isLocaleRTL(locale: string): boolean {
  const languageCode = locale.split('-')[0]?.toLowerCase();

  return rtlLocalePrefixes.some((rtlLocalePrefix) => rtlLocalePrefix === languageCode);
}

export function syncRTLDirection(locale: string) {
  const shouldUseRTL = isLocaleRTL(locale);

  I18nManager.allowRTL(true);

  if (I18nManager.isRTL !== shouldUseRTL) {
    I18nManager.forceRTL(shouldUseRTL);
  }

  return {
    changed: I18nManager.isRTL !== shouldUseRTL,
    isRTL: shouldUseRTL,
  };
}
