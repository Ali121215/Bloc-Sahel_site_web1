// Réglages du site : lus depuis l'administration (Sanity).
import { lireReglages } from '../lib/sanity.js';

const reglages = await lireReglages();

export const site = { ...reglages, messageDevis: 'Bonjour, je souhaite un devis.' };

export const lienWhatsApp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.messageDevis)}`;
