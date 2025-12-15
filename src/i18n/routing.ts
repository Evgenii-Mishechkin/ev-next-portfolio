export const routing = {
  locales: ['en', 'ru', 'me'],
  defaultLocale: 'en'
} as const;

export type Locale = (typeof routing.locales)[number];

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' &&
    routing.locales.includes(value as Locale);
}
