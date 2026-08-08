import Image from "next/image";

const FOOTER_LINKS = [
  {
    title: "Boutique",
    links: [
      { label: "Grades VIP", href: "#boutique" },
      { label: "Véhicules", href: "#boutique" },
      { label: "SunCoins", href: "#boutique" },
      { label: "Packs", href: "#boutique" },
    ],
  },
  {
    title: "Communauté",
    links: [
      { label: "Discord", href: "https://discord.gg/sunlight" },
      { label: "Règlement", href: "https://wiki.sunlightfa.dev/" },
      { label: "Support", href: "https://discord.com/channels/1525844654170443887/1525844657454583877" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Politique de remboursement", href: "#" },
      { label: "Confidentialité", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-sun-line px-6 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src="/logo.png" alt="Sunlight FA" fill sizes="32px" className="object-contain" />
            </div>
            <span className="font-display text-base font-semibold text-sun-ice">Sunlight FA</span>
          </div>
          <p className="mt-4 text-sm text-sun-frost/60">
            Boutique officielle du serveur FiveM Sunlight FA. Paiement sécurisé, livraison
            instantanée en jeu.
          </p>
        </div>

        {FOOTER_LINKS.map((section) => (
          <div key={section.title}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-sun-ice">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-sun-frost/60 transition-colors hover:text-sun-ice"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-sun-line pt-6 text-center text-xs text-sun-frost/40">
        © {new Date().getFullYear()} Sunlight FA. Tous droits réservés. Non affilié à Rockstar Games.
      </div>
    </footer>
  );
}
