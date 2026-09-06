import type { EventCard, EventCategory } from "@lib/types";

/**
 * Event type categories shown on /deco, in equal-weight order (no single "flagship" type).
 * A category with zero photos today still renders — see Eventos.astro's "próximamente" state.
 */
// `startingPrice` is left unset until the owner confirms real "desde S/" figures per
// category — never fabricate one. Once confirmed, add e.g. `startingPrice: 250`.
export const EVENT_CATEGORIES: EventCategory[] = [
  { slug: "cumpleanos", label: "Cumpleaños Temáticos" },
  { slug: "quinceanero", label: "Quinceañero" },
  { slug: "bautizo", label: "Bautizo" },
  { slug: "baby-shower", label: "Baby Shower" },
  { slug: "graduacion", label: "Graduación" },
];

/**
 * Real event photos, re-verified against each backdrop's own signage/theme
 * (several original captions were mismatched — corrected here, e.g. a farm-theme
 * photo previously labeled "Frozen"). Every entry is a real TM Cositas job.
 */
export const EVENTS: EventCard[] = [
  {
    src: "/image/image5.jpg",
    alt: "Arco y mesa de dulces temática Hot Wheels para el cumpleaños de Juan Diego",
    title: "Hot Wheels — Juan Diego",
    category: "cumpleanos",
  },
  {
    src: "/image/pokemons.jpg",
    alt: "Decoración temática Pokémon con Pikachu y personajes para el cumpleaños de Giacomo",
    title: "Pokémon — Giacomo",
    category: "cumpleanos",
  },
  {
    src: "/image/image4.jpeg",
    alt: "Decoración temática Mario Bros con número 5 luminoso para el cumpleaños de Fabianna",
    title: "Mario Bros — Fabianna",
    category: "cumpleanos",
  },
  {
    src: "/image/mariobros.jpg",
    alt: "Arco de globos y mesa temática Súper Mario para el cumpleaños de Alessandro",
    title: "Súper Mario — Alessandro",
    category: "cumpleanos",
  },
  {
    src: "/image/image1.jpeg",
    alt: "Decoración temática de Harry Potter, andén 9¾, para el cumpleaños de Martina",
    title: "Harry Potter — Martina",
    category: "cumpleanos",
  },
  {
    src: "/image/image6.jpg",
    alt: "Decoración temática Paw Patrol en tonos rosa y turquesa para el cumpleaños de Cielo",
    title: "Paw Patrol — Cielo",
    category: "cumpleanos",
  },
  {
    src: "/image/image2.jpeg",
    alt: "Decoración de fondo marino con personajes sirena para el cumpleaños de Sofía",
    title: "Fondo Marino — Sofía",
    category: "cumpleanos",
  },
  {
    src: "/image/image3.jpeg",
    alt: "Decoración temática La Granja con globos de colores para el cumpleaños de Gianfranco",
    title: "La Granja — Gianfranco",
    category: "cumpleanos",
  },
  {
    src: "/image/imagen8.jpg",
    alt: "Decoración temática La Granja con arco de globos para el cumpleaños de Roque",
    title: "La Granja — Roque",
    category: "cumpleanos",
  },
  {
    src: "/image/imagen7.jpg",
    alt: "Decoración Oh Baby en tonos verde y crema para el baby shower de Alessio",
    title: "Oh Baby — Alessio",
    category: "baby-shower",
  },

  // --- Temporary mock placeholders (free-license stock photos, Pexels) ---
  // NOT real TM Cositas work — rendered with a "Referencial" tag. Delete each
  // entry the moment the owner sends a real photo for that category.
  {
    src: "/image/mock/quinceanero-1.jpg",
    alt: "Foto referencial de estilo quinceañero: tiara y torta rosa",
    title: "Referencial — reemplazar con foto real",
    category: "quinceanero",
    isMock: true,
  },
  {
    src: "/image/mock/bautizo-1.jpg",
    alt: "Foto referencial de estilo bautizo: mesa de dulces blanca con arco de globos",
    title: "Referencial — reemplazar con foto real",
    category: "bautizo",
    isMock: true,
  },
  {
    src: "/image/mock/graduacion-1.jpg",
    alt: "Foto referencial de estilo graduación: banderines y tarjeta de felicitación",
    title: "Referencial — reemplazar con foto real",
    category: "graduacion",
    isMock: true,
  },
  {
    src: "/image/mock/graduacion-2.jpg",
    alt: "Foto referencial de estilo graduación: confeti y tarjeta de felicitación",
    title: "Referencial — reemplazar con foto real",
    category: "graduacion",
    isMock: true,
  },
];
