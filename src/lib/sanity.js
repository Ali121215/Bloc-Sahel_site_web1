// Lecture du contenu géré dans Sanity (administration).
// Le contenu est lu au moment de la construction du site (build) : à chaque
// publication dans l'administration, le site est reconstruit automatiquement.
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'i1ufe9i1',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false, // données fraîches à chaque construction
  // Réservé aux tests locaux avec un faux serveur :
  ...(import.meta.env.SANITY_API_HOST
    ? { apiHost: import.meta.env.SANITY_API_HOST, useProjectHostname: false }
    : {}),
});

// Texte en 3 langues : on prend la langue demandée, sinon le français.
export const traduire = (texte, langue = 'fr') => texte?.[langue] || texte?.fr || '';

const chiffres = (numero) => String(numero).replace(/\D/g, '');

export async function lireProduits() {
  const docs = await client.fetch(`*[_type == "produit" && visible != false] | order(ordre asc, nom.fr asc)`);
  if (!docs.length) throw new Error('Sanity : aucun produit publié. Vérifiez le Studio.');
  return docs.map((d) => ({
    id: d.slug.current,
    nom: traduire(d.nom),
    dimensions: d.dimensions,
    usage: traduire(d.usage),
    description: traduire(d.description),
    piecesParM2: d.piecesParM2 ?? null,
  }));
}

export async function lireReglages() {
  const d = await client.fetch(`*[_type == "reglages" && _id == "reglages"][0]`);
  if (!d) throw new Error('Sanity : « Réglages du site » est introuvable ou non publié.');
  return {
    nom: d.nom,
    slogan: traduire(d.slogan),
    telephones: d.telephones.map((t) => ({ affiche: t, lien: `+235${chiffres(t)}` })),
    whatsapp: `235${chiffres(d.whatsapp)}`,
    email: d.email,
    adresse: traduire(d.adresse),
    carte: d.carte,
  };
}
