
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";

const Footer = () => {
  const { t } = useLanguage();

  const navigation = [
    { name: t.home, path: "/" },
    { name: t.collections, path: "/collections" },
    { name: t.artworksForSale, path: "/artworks-for-sale" },
    { name: t.about, path: "/about" },
    { name: t.contact, path: "/contact" },
  ];

  return (
    <footer className="bg-card/70 border-t border-border mt-16 pt-8 pb-6 px-3 animate-fade-in">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo & contact */}
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-2 mb-3">
            <Logo size="sm" />
          </div>
          <div className="text-muted-foreground text-sm space-y-1 mb-3">
            <div>412 N Main St Ste100 Buffalo, WY 82834 USA</div>
            <a href="mailto:contact@musee-inspire.fr" className="hover:underline">contact@musee-inspire.fr</a>
            <div>Tél&nbsp;: +44 7520 640943</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 md:items-end animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="font-semibold mb-1">{t.navigation}</span>
          {navigation.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-muted-foreground/80 hover:text-primary transition-colors text-sm hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="text-muted-foreground text-xs text-center mt-8">
        © Global Art Conglomerate — {t.allRightsReserved}
      </div>
    </footer>
  );
};

export default Footer;
