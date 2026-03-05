import type { ServiceCard, ProcessStep } from "@lib/types";

/**
 * Service cards displayed in the portada section of /servicios.
 */
export const SERVICES: ServiceCard[] = [
  {
    icon: "/icons/cake.svg",
    iconAlt: "Icono de tarta de cumpleaños",
    title: "Cumpleaños Temáticos",
    description:
      "Creamos decoraciones únicas y personalizadas para hacer de tu cumpleaños un evento mágico e inolvidable.",
  },
  {
    icon: "/icons/balloon.svg",
    iconAlt: "Icono de globos de fiesta",
    title: "Fiestas Infantiles",
    description:
      "Diseñamos ambientes llenos de color y magia para que los más pequeños disfruten al máximo su celebración.",
  },
  {
    icon: "/icons/star.svg",
    iconAlt: "Icono de estrella",
    title: "Eventos Especiales",
    description:
      "Bodas, quinceañeros, bautizos y más. Transformamos cualquier espacio en el escenario perfecto para tu evento.",
  },
];

/**
 * Process steps displayed in the crear section of /servicios.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: "/icons/chat.svg",
    iconAlt: "Icono de conversación",
    title: "Consulta",
    description:
      "Conversamos contigo para entender tu visión, preferencias y presupuesto. Cada detalle importa.",
  },
  {
    icon: "/icons/design.svg",
    iconAlt: "Icono de diseño creativo",
    title: "Diseño",
    description:
      "Creamos una propuesta personalizada con todos los elementos que harán de tu evento algo único.",
  },
  {
    icon: "/icons/check.svg",
    iconAlt: "Icono de tarea completada",
    title: "Ejecución",
    description:
      "Montamos todo con precisión y cuidado para que llegues y disfrutes sin preocupaciones.",
  },
];
