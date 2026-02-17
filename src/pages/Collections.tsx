import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import treeoflife from "./images/expositions/africa/treeoflife.jpeg"
import thannhauser from "./images/expositions/africa/thannhauser.jpeg"
import ooniking from "./images/expositions/africa/ooniking.jpeg"
import chairofpower from "./images/expositions/africa/chairofpower.jpeg"
import facemask from "./images/expositions/africa/facemask.jpeg"
import throneofnjouteu from "./images/expositions/africa/throneofnjouteu.jpeg"

const artworks = [
   {
    title: "Tree of life",
    artist: "Namibia Afrique",
    year: "British museum",
    category: "african",
    price: "$31,800,000,000.00",
    description: {
      en: "Symbol of life, growth, and connection between all beings.",
      fr: "Symbole de vie, croissance et lien entre tous êtres."
    },
    img: treeoflife
  },
   {
    title: "Thannhauser Collection",
    artist: "Kentucky, USA",
    year: "GUGGENHEIM MUSEUM",
    category: "african",
    price: "$264,680,000,000.00",
    description: {
      en: "Masterpieces of modern art from Cézanne to Picasso.",
      fr: "Chefs-d'œuvre de l'art moderne, de Cézanne à Picasso."
    },
    img: thannhauser
  },
   {
    title: "Ooniking",
    artist: "Zone Afrique",
    year: "British museum",
    category: "african",
    price: "$24,750,000,000.00",
    description: {
      en: "Royal Yoruba sculpture symbolizing power, divinity, and ancestral heritage.",
      fr: "Sculpture royale Yoruba symbolisant pouvoir, divinité et héritage ancestral."
    },
    img: ooniking
  },
   {
    title: "Chair of power",
    artist: "Zone Afrique",
    year: "British museum",
    category: "african",
    price: "$1,700,000,000,000.00",
    description: {
      en: "Regal throne embodying authority, dignity, and cultural symbolism.",
      fr: "Trône royal incarnant autorité, dignité et symbolisme culturel."
    },
    img: chairofpower
  },
   {
    title: "Face mask",
    artist: "Mblo Afrique",
    year: "19th century",
    category: "african",
    price: "$1,300,000,000.00",
    description: {
      en: "Ceremonial mask representing identity, protection, and ancestral spirits.",
      fr: "Masque rituel symbolisant identité, protection et esprits ancestraux."
    },
    img: facemask
  },
   {
    title: "Throne of Njouteu",
    artist: "Zone Afrique",
    year: "Met Paris",
    category: "african",
    price: "$3,245,000,000.00",
    description: {
      en: "Sacred royal seat honoring Njouteu, guardian of tradition.",
      fr: "Trône sacré honorant Njouteu, gardien des traditions."
    },
    img: throneofnjouteu
  },
   {
    title: "Mangaaka",
    artist: "Youmbe group",
    year: "The met",
    category: "african",
    price: "$128,385,000,000.00",
    description: {
      en: "Power figure enforcing justice, protection, and spiritual authority.",
      fr: "Figure de pouvoir imposant justice, protection et autorité spirituelle."
    },
    img: treeoflife
  },
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    category: "war",
    price: "$2,500,000,000.00",
    description: {
      en: "Cubist masterpiece denouncing the horrors of the Spanish Civil War.",
      fr: "Chef-d'œuvre du cubisme dénonçant les horreurs de la guerre civile espagnole."
    },
    img: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"
  },
  {
    title: "La Cène",
    artist: "Léonard de Vinci",
    year: "1495-1498",
    category: "religious",
    price: "$4,200,000,000.00",
    description: {
      en: "Depiction of Christ's last meal with his disciples.",
      fr: "Représentation du dernier repas du Christ avec ses disciples."
    },
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop"
  },
  {
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    year: "1889",
    category: "european",
    price: "$2,100,000,000.00",
    description: {
      en: "Post-impressionist nocturnal landscape with swirling movements.",
      fr: "Paysage nocturne post-impressionniste aux mouvements tourbillonnants."
    },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    title: "Les Tournesols",
    artist: "Vincent van Gogh",
    year: "1888",
    category: "european",
    price: "$1,600,000,000.00",
    description: {
      en: "Series of still lifes depicting sunflowers in a vase.",
      fr: "Série de natures mortes représentant des tournesols dans un vase."
    },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg"
  },
  {
    title: "Grande Vague de Kanagawa",
    artist: "Katsushika Hokusai",
    year: "1831",
    category: "asian",
    price: "$1,200,000,000.00",
    description: {
      en: "Iconic Japanese print in ukiyo-e style.",
      fr: "Estampe japonaise emblématique du style ukiyo-e."
    },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg"
  },
];

const Collections = () => {
  const { t, language } = useLanguage();

  const categories = [
    { key: "african", name: t.africanArtworks },
    { key: "war", name: t.warArtworks },
    { key: "religious", name: t.religiousArtworks },
    { key: "european", name: t.europeanArtworks },
    { key: "asian", name: t.asianArtworks }
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">{t.collectionsTitle}</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          {t.collectionsSubtitle}
        </p>
        
        {categories.map((category, categoryIndex) => (
          <div key={category.key} className="mb-12 animate-fade-in" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
            <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">
              {category.name}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {artworks
                .filter(artwork => artwork.category === category.key)
                .map((artwork, idx) => (
                  <div key={artwork.title} className="rounded-lg shadow bg-card overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: `${(categoryIndex * 100) + (idx * 50)}ms` }}>
                    <img 
                      src={artwork.img}
                      alt={artwork.title} 
                      className="w-full h-48 object-cover" 
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{artwork.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {artwork.artist} • {artwork.year}
                      </p>
                      <p className="text-lg font-bold text-primary mb-2">
                        {artwork.price}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {artwork.description[language]}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Collections;
