/** Shared TypeScript interfaces used across the project. */

export interface NavLink {
  href: string;
  label: string;
}

/** Event type categories — kept equally weighted in nav/structure per product principles. */
export type EventCategorySlug =
  | "cumpleanos"
  | "quinceanero"
  | "bautizo"
  | "baby-shower"
  | "graduacion";

export interface EventCategory {
  slug: EventCategorySlug;
  label: string;
  /** Real "starting from" price in soles, confirmed by the owner. Omit until confirmed — never invent one. */
  startingPrice?: number;
}

export interface EventCard {
  src: string;
  alt: string;
  title: string;
  category: EventCategorySlug;
  /** True for a temporary stock placeholder (never a real TM Cositas job) — rendered with a "Referencial" tag and swapped out once the owner sends real photos. */
  isMock?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** True for a placeholder template card — never a real testimonial. See @data/testimonials. */
  isMock?: boolean;
}
