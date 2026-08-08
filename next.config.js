/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export statique : nécessaire pour héberger sur GitHub Pages (pas de serveur Node).
  // `next build` génère alors un dossier /out prêt à être publié tel quel.
  output: "export",
  // Chaque route devient un dossier avec un index.html (ex: /boutique/index.html),
  // ce qui évite les soucis de routing sur un hébergement de fichiers statiques.
  trailingSlash: true,
  images: {
    // L'optimisation d'image de Next.js nécessite un serveur : indisponible en
    // export statique, donc désactivée. Les images sont servies telles quelles.
    unoptimized: true,
  },
};

module.exports = nextConfig;
