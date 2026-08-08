import { Testimonial } from "@/types";

/**
 * Avis fictifs à but de démonstration visuelle.
 * À remplacer par de vrais avis (Trustpilot, Discord, formulaire interne...).
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Lucas M.",
    role: "Joueur depuis 8 mois",
    message:
      "Le grade VIP Aurora vaut vraiment le coup, la file d'attente n'existe plus pour moi. Support réactif en plus.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Chloé D.",
    role: "Entrepreneuse RP",
    message:
      "Pack Premium acheté le mois dernier, livraison instantanée in-game. Le staff est hyper à l'écoute.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Nathan R.",
    role: "Joueur régulier",
    message:
      "Bon rapport qualité/prix sur les SunCoins, et l'ambiance générale du serveur est top.",
    rating: 4,
  },
  {
    id: "t4",
    name: "Emma L.",
    role: "Membre du staff RP",
    message:
      "Boutique claire, paiement simple, aucun souci depuis que je suis sur Sunlight FA.",
    rating: 5,
  },
];
