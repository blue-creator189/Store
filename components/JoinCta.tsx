import Image from "next/image";

/**
 * Bloc d'appel à l'action final, avant le footer.
 * Le lien Discord est un placeholder à remplacer par l'invitation réelle.
 */
export default function JoinCta() {
  return (
    <section id="rejoindre" className="mx-auto max-w-5xl px-6 py-24">
      <div className="glass-panel relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-glow-lg">
        <div className="pointer-events-none absolute inset-0 bg-sun-radial" />

        <div className="relative mx-auto mb-6 h-16 w-16">
          <Image src="/logo.png" alt="Sunlight FA" fill sizes="64px" className="object-contain" />
        </div>

        <h2 className="relative font-display text-3xl font-bold text-sun-ice md:text-4xl">
          Prêt à rejoindre <span className="text-gradient">Sunlight FA</span> ?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sun-frost/70">
          Rejoignez notre Discord pour suivre l&apos;actualité du serveur, obtenir de l&apos;aide
          et récupérer vos avantages après achat.
        </p>

        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 inline-block rounded-full bg-sun-gradient px-8 py-3 font-semibold text-sun-void shadow-glow transition-transform hover:scale-105"
        >
          Rejoindre le Discord
        </a>
      </div>
    </section>
  );
}
