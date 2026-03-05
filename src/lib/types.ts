/** Shared TypeScript interfaces used across the project. */

export interface ImageData {
  src: string;
  alt: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

export interface Feature {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export interface EventCard {
  src: string;
  alt: string;
  title: string;
}

export interface ServiceCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}
