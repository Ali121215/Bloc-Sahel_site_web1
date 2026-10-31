// Réglages du site : un seul endroit pour les contacts.
// Plus tard, ces valeurs viendront de l'administration.
export const site = {
  nom: 'Bloc Sahel',
  slogan: 'Votre construction, notre priorité.',
  telephones: [
    { affiche: '69 32 06 06', lien: '+23569320606' },
    { affiche: '96 38 38 01', lien: '+23596383801' },
  ],
  whatsapp: '23569320606',
  messageDevis: 'Bonjour, je souhaite un devis.',
  email: 'blocsahel@gmail.com',
  adresse: "Fondoré, N'Djamena (Tchad)",
  carte:
    'https://www.google.com/maps/place/Bloc+Sahel+(Fondor%C3%A9)/@12.1193327,15.0503516,21z/data=!4m6!3m5!1s0x111963118b052567:0x7a5d087d380f86f6!8m2!3d12.1925625!4d15.0569375',
};

export const lienWhatsApp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.messageDevis)}`;
