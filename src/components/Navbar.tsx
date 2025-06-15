
import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Expositions", path: "/expositions" },
  { name: "Visiter", path: "/visit" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-background border-b border-border px-4 py-3 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto gap-2">
        <div className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Mail className="text-primary" size={28} />
          Musée Inspiré
        </div>
        <ul className="flex flex-wrap items-center gap-2 md:gap-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={cn(
                  "px-2 py-1 rounded-md hover:bg-accent transition-colors text-base",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
