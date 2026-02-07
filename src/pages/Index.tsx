import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";
import { useEffect } from "react";
import {
  Lightbulb,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Shield,
  BarChart3,
  MapPin,
} from "lucide-react";

// Import partner logos
import hsbcLogo from "../assets/partners/hsbc-logo.png";
import medmeraLogo from "../assets/partners/medmera-bank-logo.png";
import citibankLogo from "../assets/partners/citibank-logo.png";
import goldmanLogo from "../assets/partners/goldman-sachs-logo.png";
import novartisLogo from "../assets/partners/novartis-logo.png";
import accordLogo from "../assets/partners/accord-logo.png";

// Import building and room images
import buildingGlobalArt from "../assets/immeuble.png";
import newConferenceRoom from "../assets/conference-room-new.jpg";
import cheikh from "../assets/cheikh.jpg";
import sophieLaurentCurator from "../assets/sophie-laurent-curator.jpg";
import pierreBernardDirector from "../assets/pierre-bernard-director.jpg";

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // SEO Meta tags
    document.title = "Global Art Conglomerate - Musée d'Art Mondial";

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Global Art Conglomerate - Premier musée d'art mondial offrant conseils, achats, ventes, valorisation, conservation, monitoring et placement d'œuvres d'art. Partenaires: HSBC, Goldman Sachs, Citibank.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Global Art Conglomerate - Premier musée d'art mondial offrant conseils, achats, ventes, valorisation, conservation, monitoring et placement d'œuvres d'art. Partenaires: HSBC, Goldman Sachs, Citibank.";
      document.head.appendChild(meta);
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "musée art, galerie art, œuvres art, conseils artistiques, achat art, vente art, conservation art, placement art, Global Art Conglomerate",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        "musée art, galerie art, œuvres art, conseils artistiques, achat art, vente art, conservation art, placement art, Global Art Conglomerate";
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Global Art Conglomerate - Musée d'Art Mondial",
      );
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = "Global Art Conglomerate - Musée d'Art Mondial";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Premier musée d'art mondial offrant des services complets de gestion d'œuvres d'art avec nos partenaires financiers prestigieux.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content =
        "Premier musée d'art mondial offrant des services complets de gestion d'œuvres d'art avec nos partenaires financiers prestigieux.";
      document.head.appendChild(meta);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute("content", "website");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      meta.content = "website";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-background px-2">
        <section className="text-center mt-10 mb-16 max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.welcomeTitle}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {t.welcomeSubtitle}
          </p>
        </section>

        {/* Section À la une */}
        <section
          className="w-full mb-14 max-w-4xl animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex flex-col md:flex-row items-stretch bg-card rounded-xl shadow-md overflow-hidden hover-scale transition-all duration-300">
            <div className="w-full md:w-72 flex items-center justify-center bg-gradient-to-br from-accent to-accent/50 rounded-t-xl md:rounded-l-xl md:rounded-t-none p-0">
              <img
                src="/favicon-new.png"
                alt="Global Art Conglomerate"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-1">{t.featuredTitle}</h2>
              <p className="text-muted-foreground text-md mb-2">
                {t.featuredSubtitle}
              </p>
              <span className="inline-block text-xs text-primary bg-accent rounded px-2 py-1 w-max">
                {t.newAcquisition}
              </span>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section
          className="w-full mb-16 max-w-6xl animate-fade-in"
          style={{ animationDelay: "150ms" }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.servicesTitle}</h2>
            <p className="text-muted-foreground text-lg">
              {t.servicesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.advisory}</h3>
              <p className="text-muted-foreground text-sm">{t.advisoryDesc}</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.purchase}</h3>
              <p className="text-muted-foreground text-sm">{t.purchaseDesc}</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.sale}</h3>
              <p className="text-muted-foreground text-sm">{t.saleDesc}</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.valorisation}</h3>
              <p className="text-muted-foreground text-sm">
                {t.valorisationDesc}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.conservation}</h3>
              <p className="text-muted-foreground text-sm">
                {t.conservationDesc}
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.monitoring}</h3>
              <p className="text-muted-foreground text-sm">
                {t.monitoringDesc}
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.placing}</h3>
              <p className="text-muted-foreground text-sm">{t.placingDesc}</p>
            </div>
          </div>
        </section>

        {/* Section Partenaires */}
        <section
          className="w-full mb-16 max-w-6xl animate-fade-in"
          style={{ animationDelay: "700ms" }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.partnersTitle}</h2>
            <p className="text-muted-foreground text-lg">
              {t.partnersSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center justify-center h-32 w-full hover-scale transition-all duration-300">
              <img
                src={hsbcLogo}
                alt="HSBC"
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">HSBC</p>
                <p className="text-xs text-muted-foreground">{t.hsbcMotto}</p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center justify-center h-32 w-full hover-scale transition-all duration-300">
              <img
                src={medmeraLogo}
                alt="MedMera Bank"
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">
                  MedMera Bank
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.medmeraMotto}
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center justify-center h-32 w-full hover-scale transition-all duration-300">
              <img
                src={citibankLogo}
                alt="Citibank"
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">
                  Citibank
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.citibankMotto}
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center justify-center h-32 w-full hover-scale transition-all duration-300">
              <img
                src={goldmanLogo}
                alt="Goldman Sachs"
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">
                  Goldman Sachs
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.goldmanMotto}
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center justify-center h-32 w-full hover-scale transition-all duration-300">
              <img
                src={novartisLogo}
                alt="Novartis Foundation"
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">
                  Novartis
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.novartisMotto}
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex flex-col items-center justify-center h-32 w-full hover-scale transition-all duration-300">
              <img
                src={accordLogo}
                alt="Accord Pharmaceuticals"
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">Accord</p>
                <p className="text-xs text-muted-foreground">{t.accordMotto}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Notre Bâtiment */}
        <section
          className="w-full mb-16 max-w-6xl animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.ourBuilding}</h2>
            <p className="text-muted-foreground text-lg">
              {t.buildingDescription}
            </p>
          </div>
          <div className="bg-card rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300">
            <img
              src={buildingGlobalArt}
              alt="Global Art Conglomerate Building"
              className="w-full h-96 object-cover"
            />
          </div>
        </section>

        {/* Section Espaces Intérieurs */}
        <section
          className="w-full mb-16 max-w-6xl animate-fade-in"
          style={{ animationDelay: "900ms" }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.interiorSpaces}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover-scale transition-all duration-300">
              <img
                src={newConferenceRoom}
                alt="Conference Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t.conferenceRoom}
                </h3>
                <p className="text-muted-foreground">
                  Espace moderne pour nos événements et conférences artistiques.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover-scale transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop"
                alt="Executive Office"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t.executiveOffice}
                </h3>
                <p className="text-muted-foreground">
                  Bureau de direction avec une vue imprenable sur la collection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Équipe Dirigeante */}
        <section
          className="w-full mb-16 max-w-6xl animate-fade-in"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.leadership}</h2>
            <p className="text-muted-foreground text-lg">
              {t.leadershipDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
                alt=""
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover bg-gray-200"
              />
              <h3 className="text-lg font-semibold mb-1">Georges Spencer</h3>
              <p className="text-primary font-medium mb-2">
                {t.generalManager}
              </p>
              <p className="text-muted-foreground text-sm">
                25 {t.yearsExperience}
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Andrew Gerald Spencer"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1">
                Andrew Gerald Spencer
              </h3>
              <p className="text-primary font-medium mb-2">
                {t.artisticDirector}
              </p>
              <p className="text-muted-foreground text-sm">{t.artExpertise}</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <img
                src={sophieLaurentCurator}
                alt="Estrella Lopez"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1">Estrella Lopez</h3>
              <p className="text-primary font-medium mb-2">
                {t.collectionsManager}
              </p>
              <p className="text-muted-foreground text-sm">
                {t.conservationSpecialist}
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <img
                src={cheikh}
                alt="Cheikh Tamin Ben Hamad Ben Khalifa Al-Thani"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1">
                Cheikh Tamin Ben Hamad Ben Khalifa Al-Thani
              </h3>
              <p className="text-primary font-medium mb-2">
                {t.financialDirector}
              </p>
              <p className="text-muted-foreground text-sm">
                {t.strategicManagement}
              </p>
            </div>
          </div>
        </section>

        {/* Bloc À propos */}
        <section
          className="w-full mt-10 max-w-3xl animate-fade-in"
          style={{ animationDelay: "1100ms" }}
        >
          <div className="bg-accent/30 rounded-xl shadow text-center p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-3">
              {t.aboutMuseumTitle}
            </h2>
            <p className="text-muted-foreground mb-2">{t.aboutMuseumText1}</p>
            <p className="text-muted-foreground">{t.aboutMuseumText2}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
