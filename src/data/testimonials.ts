import type { Testimonial } from "@lib/types";

/**
 * No real testimonials exist yet (see PRODUCT.md — "no testimonials, reviews,
 * pricing, or case studies exist yet, do not fabricate any"). These are
 * honest template placeholders (isMock: true, no invented names/quotes
 * attributed to a real person) so the owner can preview the section's layout.
 * Replace each entry with a real quote (WhatsApp thank-you message, Google
 * review, Instagram comment) the moment one exists, and drop `isMock`.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Aquí va el comentario de tu primera clienta feliz.",
    name: "—",
    role: "Testimonio pendiente",
    isMock: true,
  },
  {
    quote: "Una reseña real de WhatsApp o Google se vería así de destacada.",
    name: "—",
    role: "Testimonio pendiente",
    isMock: true,
  },
  {
    quote: "Cada comentario real suma confianza para la siguiente celebración.",
    name: "—",
    role: "Testimonio pendiente",
    isMock: true,
  },
  {
    quote: "Este espacio está listo para tus mejores reseñas.",
    name: "—",
    role: "Testimonio pendiente",
    isMock: true,
  },
];
