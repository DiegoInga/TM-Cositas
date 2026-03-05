import type { ImageData } from "@lib/types";

/**
 * Carousel images shared between Inicio and Reserva sections.
 * Alt texts describe the actual decoration scenes shown in each photo.
 */
export const CAROUSEL_IMAGES: ImageData[] = [
  { src: "/image/image1.jpeg", alt: "Decoración temática de 9 3/4 con globos y colores dorado y rojo" },
  { src: "/image/image2.jpeg", alt: "Decoración de fiesta infantil con globos de colores y mesa de dulces" },
  { src: "/image/image3.jpeg", alt: "Decoración temática de Mario Bros con setas, estrellas y colores rojo y azul" },
  { src: "/image/image4.jpeg", alt: "Decoración de quinceañero con arreglo floral y luces decorativas" },
];

/**
 * Extended gallery images used in the Reserva section.
 */
export const GALLERY_IMAGES: ImageData[] = [
  ...CAROUSEL_IMAGES,
  { src: "/image/imagen8.jpg", alt: "Decoración de Pokémon con Pikachu y globos amarillos" },
  { src: "/image/imagen7.jpg", alt: "Decoración de bautizo con globos blancos y centro de mesa floral" },
];
