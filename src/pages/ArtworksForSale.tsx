
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import mantum from "./images/vente/mantoum.jpeg";
import shungwu from "./images/vente/shungwu.jpeg";
import artists from "./images/vente/artists.jpeg";

const artworksForSale = [
  {
    title: "Collection Mantoum",
    artist: "Cameroun",
    price: "$2,300,000,000.00",
    description: {
      en: "élégance royale et héritage culturel camerounais intemporel.",
      fr: "royal elegance meets timeless Cameroonian cultural heritage."
    },
    img: mantum,
    available: true
  },
    {
    title: "Shüngwu collection",
    artist: "Cameroun",
    price: "$1,330,000,000.00",
    description: {
      en: "puissance ancestrale et art sacré du peuple Bamileke.",
      fr: "ancestral power and sacred art of the Bamileke people."
    },
    img: shungwu,
    available: true
  },
     {
    title: "Royal artists",
    artist: "Gabon",
    price: "$7,000,000,000.00",
    description: {
      en: "célébration majestueuse des talents et traditions royales africaines.",
      fr: "majestic celebration of African royal talents and traditions."
    },
    img: artists,
    available: true
  },
];

const ArtworksForSale = () => {
  const { t, language } = useLanguage();

  const handleContactForPurchase = (artworkTitle: string) => {
    const subject = `Interest in purchasing: ${artworkTitle}`;
    const body = `Hello,\n\nI am interested in purchasing the artwork "${artworkTitle}". Could you please provide more information about the purchase process?\n\nThank you.`;
    window.location.href = `mailto:contact@globalartconglomerate.store?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">{t.artworksForSaleTitle}</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          {t.artworksForSaleSubtitle}
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {artworksForSale.map((artwork, idx) => (
            <div 
              key={artwork.title} 
              className="rounded-lg shadow bg-card overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in" 
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img 
                src={artwork.img}
                alt={artwork.title} 
                className="w-full h-56 object-cover" 
              />
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{artwork.title}</h3>
                  {artwork.available && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                      {t.availableNow}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {artwork.artist}
                </p>
                <p className="text-xl font-bold text-primary mb-3">
                  {artwork.price}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {artwork.description[language]}
                </p>
                <Button 
                  onClick={() => handleContactForPurchase(artwork.title)}
                  className="w-full"
                  size="sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t.contactForPurchase}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArtworksForSale;
