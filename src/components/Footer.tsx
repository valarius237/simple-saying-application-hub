
import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const navigation = [
  { name: "Accueil", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Expositions", path: "/expositions" },
  { name: "Visiter", path: "/visit" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const social = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-card/70 border-t border-border mt-16 pt-8 pb-6 px-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo & contact */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="text-primary" size={22} />
            <span className="font-bold text-lg text-primary">Musée Inspiré</span>
          </div>
          <div className="text-muted-foreground text-sm space-y-1 mb-3">
            <div>123 Avenue Imaginaire, 75000 Paris</div>
            <a href="mailto:contact@musee-inspire.fr" className="hover:underline">contact@musee-inspire.fr</a>
            <div>Tél&nbsp;: 01 23 45 67 89</div>
          </div>
          <div className="flex gap-3 mt-3" aria-label="Réseaux sociaux">
            {social.map(({ name, icon: Icon, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-accent/70 p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                title={name}
                aria-label={name}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 md:items-end">
          <span className="font-semibold mb-1">Navigation</span>
          {navigation.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-muted-foreground/80 hover:text-primary transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="text-muted-foreground text-xs text-center mt-8">
        © {new Date().getFullYear()} Musée Inspiré — Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
