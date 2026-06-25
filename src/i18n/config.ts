import { getLocales } from 'expo-localization';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultLocale, isSupportedLocale, resources, type SupportedLocale } from './resources';
import { syncRTLDirection } from './rtl';

function getInitialLocale(): SupportedLocale {
  const deviceLanguage = getLocales()[0]?.languageCode;

  if (isSupportedLocale(deviceLanguage)) {
    return deviceLanguage;
  }

  return defaultLocale;
}

export const initialLocale = getInitialLocale();
export const i18n = createInstance();

syncRTLDirection(initialLocale);

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: initialLocale,
    fallbackLng: defaultLocale,
    supportedLngs: Object.keys(resources),
    interpolation: {
      escapeValue: false,
    },
  });
}
