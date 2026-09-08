export interface Destination {
  name: Record<string, string>;
  slug: string;
  description: Record<string, string>;
  image: string;
}

export const destinations: Destination[] = [
  {
    name: { es: "Cusco", en: "Cusco", pt: "Cusco" },
    slug: "Cusco",
    description: {
      es: "Descubre la antigua capital del Imperio Inca, sus ruinas, valles sagrados y la majestuosa Machu Picchu.",
      en: "Discover the ancient capital of the Inca Empire, its ruins, sacred valleys, and majestic Machu Picchu.",
      pt: "Descubra a antiga capital do Império Inca, suas ruínas, vales sagrados e a majestosa Machu Picchu.",
    },
    image: "/images/Tour-a-Machu-Picchu-03.webp",
  },
  {
    name: { es: "Arequipa", en: "Arequipa", pt: "Arequipa" },
    slug: "Arequipa",
    description: {
      es: "La Ciudad Blanca te espera con el Cañón del Colca, el Volcán Misti y una gastronomía incomparable.",
      en: "The White City awaits you with the Colca Canyon, Misti Volcano, and incomparable cuisine.",
      pt: "A Cidade Branca espera você com o Canyón do Colca, Vulcão Misti e uma gastronomia incomparável.",
    },
    image: "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
  },
  {
    name: { es: "Ica", en: "Ica", pt: "Ica" },
    slug: "Ica",
    description: {
      es: "Aventura en las dunas de Huacachina, sandboarding, buggies y las enigmáticas Líneas de Nazca.",
      en: "Adventure in the Huacachina dunes, sandboarding, buggies, and the enigmatic Nazca Lines.",
      pt: "Aventura nas dunas de Huacachina, sandboarding, buggies e as enigmáticas Linhas de Nazca.",
    },
    image: "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
  },
  {
    name: { es: "Puno", en: "Puno", pt: "Puno" },
    slug: "Puno",
    description: {
      es: "Bórrate en el Lago Titicaca, islas flotantes de los Uros y la cultura viva de los Andes.",
      en: "Lose yourself in Lake Titicaca, the floating Uros islands, and the living culture of the Andes.",
      pt: "Perca-se no Lago Titicaca, ilhas flutuantes dos Uros e a cultura viva dos Andes.",
    },
    image: "/images/puno.webp",
  },
];
