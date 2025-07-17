
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const artworksForSale = [
  {
    title: "Sunset Dreams",
    artist: "Modern Artist",
    year: "2023",
    price: "$45,000.00",
    description: {
      en: "Contemporary abstract painting capturing the essence of twilight emotions.",
      fr: "Peinture abstraite contemporaine capturant l'essence des émotions crépusculaires."
    },
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=400&fit=crop",
    available: true
  },
  {
    title: "Ocean Whispers", 
    artist: "Contemporary Gallery",
    year: "2024",
    price: "$32,500.00",
    description: {
      en: "Mixed media artwork inspired by coastal landscapes and marine life.",
      fr: "Œuvre mixed-media inspirée des paysages côtiers et de la vie marine."
    },
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    available: true
  },
  {
    title: "Urban Symphony",
    artist: "City Arts Collective", 
    year: "2023",
    price: "$28,750.00",
    description: {
      en: "Dynamic sculpture representing the rhythm and energy of metropolitan life.",
      fr: "Sculpture dynamique représentant le rythme et l'énergie de la vie métropolitaine."
    },
    img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=400&fit=crop",
    available: true
  },
  {
    title: "Memory Fragments",
    artist: "Nostalgic Studio",
    year: "2024", 
    price: "$15,200.00",
    description: {
      en: "Collage artwork exploring themes of memory, time, and personal history.",
      fr: "Œuvre en collage explorant les thèmes de la mémoire, du temps et de l'histoire personnelle."
    },
    img: "https://images.unsplash.com/photo-1577720643272-265f09367456?w=500&h=400&fit=crop",
    available: true
  },
  {
    title: "Golden Harmony",
    artist: "Elegance Atelier",
    year: "2023",
    price: "$67,800.00", 
    description: {
      en: "Luxurious oil painting with gold leaf details, representing prosperity and balance.",
      fr: "Peinture à l'huile luxueuse avec détails de feuille d'or, représentant prospérité et équilibre."
    },
    img: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=500&h=400&fit=crop",
    available: true
  },
  {
    title: "Digital Renaissance",
    artist: "Tech Art Studio",
    year: "2024",
    price: "$89,500.00",
    description: {
      en: "Innovative digital art piece combining classical techniques with modern technology.",
      fr: "Œuvre d'art numérique innovante combinant techniques classiques et technologie moderne."
    },
    img: "https://images.unsplash.com/photo-1549277513-6294e5e4cb00?w=500&h=400&fit=crop",
    available: true
  }
];

const ArtworksForSale = () => {
  const { t, language } = useLanguage();

  const handleContactForPurchase = (artworkTitle: string) => {
    const subject = `Interest in purchasing: ${artworkTitle}`;
    const body = `Hello,\n\nI am interested in purchasing the artwork "${artworkTitle}". Could you please provide more information about the purchase process?\n\nThank you.`;
    window.location.href = `mailto:sales@musee-inspire.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                  {artwork.artist} • {artwork.year}
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
