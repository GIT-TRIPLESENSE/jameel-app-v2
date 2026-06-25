import { ar } from './locales/ar';
import { en } from './locales/en';

export const defaultLocale = 'en';
export const supportedLocales = ['en', 'ar'] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
} as const;

export function isSupportedLocale(locale: string | null | undefined): locale is SupportedLocale {
  return supportedLocales.some((supportedLocale) => supportedLocale === locale);
}
