
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import enTranslation from './locales/en/translation.json';
import trTranslation from './locales/tr/translation.json';
import azTranslation from './locales/az/translation.json';

i18n
  .use(LanguageDetector) // Detect language preference from the browser
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      tr: { translation: trTranslation },
      az: { translation: azTranslation },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
  });

export default i18n;