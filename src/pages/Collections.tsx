
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
    price: "$1,800,000,00",
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
    price: "$12,680,000,00",
    description: {
      en: "Masterpieces of modern art from Cézanne to Picasso.",
      fr: "Chefs-d’œuvre de l’art moderne, de Cézanne à Picasso."
    },
    img: thannhauser
  },
   {
    title: "Ooniking",
    artist: "Zone Afrique",
    year: "British museum",
    category: "african",
    price: "$750,000,00",
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
    price: "$7,000,000,00",
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
    price: "$1,300,000,00",
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
    price: "$3,245,000,00",
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
    price: "$1,385,000,00",
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
    price: "€2,500,000",
    description: {
      en: "Cubist masterpiece denouncing the horrors of the Spanish Civil War.",
      fr: "Chef-d'œuvre du cubisme dénonçant les horreurs de la guerre civile espagnole."
    },
    img: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"
  },
  {
    title: "La Liberté guidant le peuple",
    artist: "Eugène Delacroix",
    year: "1830",
    category: "war",
    price: "€1,800,000",
    description: {
      en: "Symbol of the French Revolution and the struggle for freedom.",
      fr: "Symbole de la révolution française et de la lutte pour la liberté."
    },
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg"
  },
  {
    title: "Les Désastres de la guerre",
    artist: "Francisco Goya",
    year: "1810-1820",
    category: "war",
    price: "€950,000",
    description: {
      en: "Series of engravings denouncing the atrocities of the Napoleonic War in Spain.",
      fr: "Série de gravures dénonçant les atrocités de la guerre napoléonienne en Espagne."
    },
    img: "https://www.museodelprado.es/typo3temp/pics/690988c1bb.jpg"
  },
  {
    title: "La Chapelle Sixtine",
    artist: "Michel-Ange",
    year: "1508-1512",
    category: "religious",
    price: "€5,000,000",
    description: {
      en: "Monumental fresco depicting scenes from Genesis.",
      fr: "Fresque monumentale représentant des scènes de la Genèse."
    },
    img: "https://www.musei-vaticani.va/content/dam/musei-vaticani/immagini/collezioni/musei/cappella-sistina/00-Cappella-Sistina.jpg"
  },
  {
    title: "La Cène",
    artist: "Léonard de Vinci",
    year: "1495-1498",
    category: "religious",
    price: "€4,200,000",
    description: {
      en: "Depiction of Christ's last meal with his disciples.",
      fr: "Représentation du dernier repas du Christ avec ses disciples."
    },
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg"
  },
  {
    title: "La Création d'Adam",
    artist: "Michel-Ange",
    year: "1512",
    category: "religious",
    price: "€3,800,000",
    description: {
      en: "Iconic fresco from the Sistine Chapel depicting the creation of man.",
      fr: "Fresque emblématique de la Chapelle Sixtine représentant la création de l'homme."
    },
    img: "https://www.musei-vaticani.va/content/dam/musei-vaticani/immagini/collezioni/musei/cappella-sistina/01-Cappella-Sistina-Creazione-di-Adamo.jpg"
  },
  {
    title: "La Joconde",
    artist: "Léonard de Vinci",
    year: "1503-1519",
    category: "european",
    price: "€3,000,000",
    description: {
      en: "Enigmatic portrait, symbol of the Italian Renaissance.",
      fr: "Portrait énigmatique, symbole de la Renaissance italienne."
    },
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  },
  {
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    year: "1889",
    category: "european",
    price: "€2,100,000",
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
    price: "€1,600,000",
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
    price: "€1,200,000",
    description: {
      en: "Iconic Japanese print in ukiyo-e style.",
      fr: "Estampe japonaise emblématique du style ukiyo-e."
    },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg"
  },
  {
    title: "Statue de Bouddha de Gandhara",
    artist: "Art gréco-bouddhique",
    year: "IIe-IIIe siècle",
    category: "asian",
    price: "€890,000",
    description: {
      en: "Sculpture representing Buddha, example of Greco-Buddhist art.",
      fr: "Sculpture représentant Bouddha, exemple de l'art gréco-bouddhique."
    },
    img: "https://www.metmuseum.org/toah/images/hb/hb_1987.142.3.jpg"
  }
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
