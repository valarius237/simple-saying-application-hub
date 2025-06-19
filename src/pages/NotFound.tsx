
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">
            {language === 'en' ? 'Oops! Page not found' : 'Oops! Page non trouvée'}
          </p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            {language === 'en' ? 'Return to Home' : 'Retour à l\'accueil'}
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
