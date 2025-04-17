// lib/i18n.ts
import 'server-only'

const dictionaries = {
  en: () => import('@/locales/en/common.json').then((mod) => mod.default),
  zh: () => import('@/locales/zh/common.json').then((mod) => mod.default),
};

export const getDictionary = async (locale: 'en' | 'zh') => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
