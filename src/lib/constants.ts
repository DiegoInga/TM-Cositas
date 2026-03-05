/**
 * Centralized app-wide constants.
 * Update here once — every component picks up the change automatically.
 */

/** Direct WhatsApp contact number for TM Cositas. */
export const WHATSAPP_URL = "https://wa.me/51908618955";

/** External social media profile URLs. */
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/tmcositas",
  instagram: "https://www.instagram.com/tmcositas",
  tiktok: "https://www.tiktok.com/@tmcositas",
  whatsapp: WHATSAPP_URL,
} as const;
