import type { Feature } from "@lib/types";

/**
 * Feature cards displayed in the Caracteristicas section.
 * Icons are recolored to pink via CSS filter in the component's <style> block.
 */
export const FEATURES: Feature[] = [
  {
    icon: "/icons/birthday.svg",
    iconAlt: "Icono de tarta de cumpleaños",
    title: "Cumpleaños Temáticos",
    description: "Creamos experiencias únicas con temáticas personalizadas para hacer memorable cada cumpleaños.",
  },
  {
    icon: "/icons/wand.svg",
    iconAlt: "Icono de varita mágica",
    title: "Toque Mágico",
    description: "Cada detalle está pensado para sorprender a los invitados y crear momentos especiales.",
  },
  {
    icon: "/icons/balloon.svg",
    iconAlt: "Icono de globos de fiesta",
    title: "Entretenimiento Inolvidable",
    description: "Garantizamos diversión y alegría en cada evento con actividades y decoraciones únicas.",
  },
  {
    icon: "/icons/people.svg",
    iconAlt: "Icono de grupo de personas",
    title: "Para Todos",
    description: "Organizamos eventos para grupos de todos los tamaños, desde reuniones íntimas hasta grandes celebraciones.",
  },
  {
    icon: "/icons/heart.svg",
    iconAlt: "Icono de corazón",
    title: "Con Todo el Amor",
    description: "Transformamos tus sueños en momentos memorables poniendo el corazón en cada detalle.",
  },
  {
    icon: "/icons/star.svg",
    iconAlt: "Icono de estrella",
    title: "Experiencia Garantizada",
    description: "Nuestra experiencia asegura que cada evento sea un éxito que recordarás para siempre.",
  },
];
