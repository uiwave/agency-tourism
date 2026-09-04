import es from "./es.json";
import en from "./en.json";
import pt from "./pt.json";

const locales = { es, en, pt } as const;

export function getTranslations(lang: string) {
  return locales[lang as keyof typeof locales] || locales.es;
}
