import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.collections, path: "/collections" },
    { name: t.artworksForSale, path: "/artworks-for-sale" },
    { name: t.about, path: "/about" },
    { name: t.contact, path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border px-4 py-3 sticky top-0 z-50 animate-fade-in">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-primary hover-scale transition-all duration-300">
          <Building2 className="text-primary animate-pulse" size={28} />
          Global Art Conglomerate
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md hover:bg-accent transition-all duration-300 text-base relative group",
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Language Selector Desktop */}
          <div className="flex items-center gap-3 border-l pl-4">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-muted-foreground" />
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleLanguageChange('en')}
                className="transition-all duration-300 hover:scale-105"
              >
                EN
              </Button>
              <Button
                variant={language === 'fr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleLanguageChange('fr')}
                className="transition-all duration-300 hover:scale-105"
              >
                FR
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          {/* Language Selector Mobile */}
          <div className="flex items-center gap-1">
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleLanguageChange('en')}
              className="h-8 w-8 p-0 text-xs"
            >
              EN
            </Button>
            <Button
              variant={language === 'fr' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleLanguageChange('fr')}
              className="h-8 w-8 p-0 text-xs"
            >
              FR
            </Button>
          </div>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="animate-scale-in" />
            ) : (
              <Menu size={24} className="animate-scale-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
        isMenuOpen 
          ? "max-h-96 opacity-100 animate-slide-in-right" 
          : "max-h-0 opacity-0"
      )}>
        <div className="py-4 space-y-2 animate-fade-in">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-md hover:bg-accent transition-all duration-300 text-base",
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
