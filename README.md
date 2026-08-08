# Sunlight FA — Boutique officielle

Boutique premium pour le serveur FiveM **Sunlight FA**, construite avec Next.js 14
(App Router), TypeScript, Tailwind CSS, Framer Motion et Lucide Icons.

## Démarrage

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

## Structure du projet

```
app/                 Routes Next.js (App Router)
  layout.tsx          Layout racine : polices, métadonnées, thème sombre
  template.tsx         Transitions de page fluides
  page.tsx            Page d'accueil : assemble toutes les sections
  globals.css         Styles globaux, thème sombre, curseur, scrollbar

components/          Composants réutilisables
  Navbar.tsx, Hero.tsx, Shop.tsx, ProductCard.tsx, ProductCarousel.tsx,
  CategoryFilter.tsx, SearchBar.tsx, Testimonials.tsx, JoinCta.tsx, Footer.tsx
  Loader.tsx, CustomCursor.tsx, ScrollToTop.tsx, PurchaseNotification.tsx,
  AnimatedCounter.tsx, FeaturedSection.tsx

data/                Données de démonstration (catalogue, avis clients)
lib/                 Fonctions utilitaires + couche d'accès aux données
  utils.ts            cn(), formatPrice(), pickRandom()
  api.ts              Point de branchement futur vers Tebex ou une API custom

types/               Types TypeScript partagés (Product, Testimonial...)
public/              Assets statiques (logo.png)
```

## Brancher une vraie API de paiement (Tebex ou custom)

Toute la couche de données passe par `lib/api.ts`. Pour brancher Tebex
(https://docs.tebex.io) :

1. Remplacer le contenu de `getProducts()` / `getFeaturedProducts()` par un
   `fetch()` vers l'API Headless de Tebex (catégories/paquets).
2. Adapter `checkout(productId)` pour rediriger vers l'URL de checkout Tebex,
   ou pour appeler votre propre endpoint de paiement.
3. Aucun composant n'a besoin d'être modifié : ils consomment déjà des
   `Product[]` typés, quelle que soit leur origine.

## Déploiement — GitHub Pages

Le projet est configuré en **export statique** (`output: "export"` dans
`next.config.js`) : `npm run build` génère un dossier `/out` contenant du
HTML/CSS/JS pur, exactement ce dont GitHub Pages a besoin.

Un workflow GitHub Actions (`.github/workflows/deploy.yml`) build et publie
automatiquement le site à chaque push sur `main`.

**Mise en route (une seule fois) :**

1. Pousser ce projet sur un dépôt GitHub (`main` comme branche par défaut).
2. Dans le repo GitHub : **Settings → Pages → Build and deployment → Source**,
   choisir **GitHub Actions**.
3. Faire un push sur `main` (ou lancer le workflow manuellement depuis l'onglet
   **Actions**) : le site est buildé et publié automatiquement.
4. Le fichier `public/CNAME` (contenant `sunlightfa.dev`) est copié tel quel
   dans `/out` au build : GitHub Pages configure alors le domaine personnalisé
   automatiquement dès que le DNS pointe correctement (étape suivante).

## Relier le domaine Squarespace (sunlightfa.dev)

Le domaine est acheté chez Squarespace mais pointera vers GitHub Pages via le
DNS. Dans le panneau DNS de Squarespace pour `sunlightfa.dev` :

**Pour le domaine racine (`sunlightfa.dev`)** — ajouter 4 enregistrements A
pointant vers les IPs de GitHub Pages :

| Type | Host | Valeur |
|------|------|--------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**Pour le sous-domaine `www`** (optionnel mais recommandé) — ajouter :

| Type | Host | Valeur |
|------|------|--------|
| CNAME | www | `<ton-pseudo-github>.github.io` |

Ensuite, dans **Settings → Pages** du repo GitHub, renseigner `sunlightfa.dev`
comme domaine personnalisé (normalement déjà pré-rempli grâce au fichier
`CNAME`) et cocher **Enforce HTTPS** une fois le certificat généré (peut
prendre jusqu'à 24h après la propagation DNS).

> Squarespace ne permet généralement pas de créer un enregistrement A "nu" en
> plus de gérer le domaine lui-même sans configuration DNS avancée activée —
> si l'option n'apparaît pas, chercher "Utiliser des DNS personnalisés" ou
> "Advanced DNS" dans les paramètres du domaine.

## Personnalisation rapide

- **Catalogue** : `data/products.ts`
- **Avis clients** : `data/testimonials.ts`
- **Palette de couleurs** : `tailwind.config.ts` (objet `colors.sun`)
- **Lien Discord** : `components/JoinCta.tsx` et `components/Footer.tsx`
