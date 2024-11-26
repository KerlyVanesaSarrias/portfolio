import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';

i18n
  .use(HttpApi) // Carga traducciones desde archivos externos
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Conecta con React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo
    interpolation: { escapeValue: false },
  });

export default i18n;
