import { Testimonial } from "@/types";

/**
 * Avis fictifs à but de démonstration visuelle.
 * À remplacer par de vrais avis (Trustpilot, Discord, formulaire interne...).
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "m1k2",
    role: "Nouveau joueur",
    message:
      "Le Prestige vaut vraiment le coup, la file d'attente n'existe plus pour moi. Support réactif en plus.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Flo",
    role: "Entrepreneur RP",
    message:
      "MVP acheté ce mois ci, livraison instantanée in-game. Le staff est hyper à l'écoute.",
    rating: 4,
  },
  {
    id: "t3",
    name: "Mouse",
    role: "Joueur régulier",
    message:
      "Bon rapport qualité/prix sur les SunCoins, et l'ambiance générale du serveur est top.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Catalina",
    role: "Membre du staff",
    message:
      "Boutique claire, paiement simple, aucun souci depuis que je suis sur Sunlight FA.",
    rating: 5,
  },
];
