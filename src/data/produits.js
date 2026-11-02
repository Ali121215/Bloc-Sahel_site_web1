// Les produits : lus depuis l'administration (Sanity).
// piecesParM2 : nombre de pièces pour 1 m² posé (indicatif, hors joints).
// null = pas de calcul automatique (le hourdis dépend du plancher).
import { lireProduits } from '../lib/sanity.js';

export const produits = await lireProduits();

export function trouverProduit(id) {
  return produits.find((p) => p.id === id);
}
