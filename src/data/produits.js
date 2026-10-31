// Les six produits. Plus tard, cette liste sera gérée depuis l'administration.
// piecesParM2 : nombre de pièces pour 1 m² posé (indicatif, hors joints).
// null = pas de calcul automatique (le hourdis dépend du plancher).
export const produits = [
  {
    id: 'bloc-creux-20',
    nom: 'Bloc creux 20',
    dimensions: '400 × 200 × 200 mm',
    usage: 'Murs porteurs, façades et clôtures.',
    description:
      "Le bloc creux de 20 cm d'épaisseur sert aux murs qui portent : maisons, façades et clôtures. Son épaisseur donne un mur solide.",
    piecesParM2: 12.5,
  },
  {
    id: 'bloc-creux-15',
    nom: 'Bloc creux 15',
    dimensions: '400 × 150 × 200 mm',
    usage: 'Cloisons et murs intérieurs.',
    description:
      "Le bloc creux de 15 cm d'épaisseur sert aux cloisons et aux murs intérieurs, là où l'on veut gagner de la place.",
    piecesParM2: 12.5,
  },
  {
    id: 'hourdis',
    nom: 'Hourdis',
    dimensions: '530 × 150 × 200 mm',
    usage: 'Planchers à poutrelles.',
    description:
      "Le hourdis se pose entre les poutrelles pour former un plancher. La quantité dépend de la surface et de l'espacement des poutrelles : demandez-nous un devis.",
    piecesParM2: null,
  },
  {
    id: 'pave-225',
    nom: 'Pavé 225',
    dimensions: '225 × 112,5 × 60 mm',
    usage: 'Cours, allées et parkings.',
    description:
      'Le pavé 225 sert à couvrir les cours, les allées et les parkings. Il se pose à plat sur un sol préparé.',
    piecesParM2: 40,
  },
  {
    id: 'pave-200',
    nom: 'Pavé 200',
    dimensions: '200 × 100 × 60 mm',
    usage: 'Trottoirs et terrasses.',
    description:
      'Le pavé 200 est adapté aux trottoirs et aux terrasses. Sa taille permet de bien suivre les contours.',
    piecesParM2: 50,
  },
  {
    id: 'pave-250',
    nom: 'Pavé 250',
    dimensions: '250 × 250 × 60 mm',
    usage: 'Grandes surfaces, cours et entrées.',
    description:
      'Le pavé 250 est un grand pavé carré pour les grandes surfaces, les cours et les entrées. Moins de pièces à poser pour la même surface.',
    piecesParM2: 16,
  },
];

export function trouverProduit(id) {
  return produits.find((p) => p.id === id);
}
