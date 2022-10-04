import i18n from "i18next";
import detector from "i18next-browser-languagedetector";

import translationFr from "./fr.translation.json";
import translationAr from "./ar.translation.json";

// the translations
const resources = {
  fr: {
    translation: translationFr,
  },
  ar: {
    translation: translationAr,
  },
};

i18n.use(detector).init({
  compatibilityJSON: 'v3',
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
