
import Navbar from "@/components/Navbar";

const artworks = [
  // Œuvres de guerre
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    category: "Œuvres de guerre",
    description: "Chef-d'œuvre du cubisme dénonçant les horreurs de la guerre civile espagnole.",
    img: "photo-1494891848038-7bd202a2afeb"
  },
  {
    title: "La Liberté guidant le peuple",
    artist: "Eugène Delacroix",
    year: "1830",
    category: "Œuvres de guerre",
    description: "Symbole de la révolution française et de la lutte pour la liberté.",
    img: "photo-1461749280684-dccba630e2f6"
  },
  // Œuvres religieuses
  {
    title: "La Chapelle Sixtine",
    artist: "Michel-Ange",
    year: "1508-1512",
    category: "Œuvres religieuses",
    description: "Fresque monumentale représentant des scènes de la Genèse.",
    img: "photo-1466442929976-97f336a657be"
  },
  {
    title: "La Cène",
    artist: "Léonard de Vinci",
    year: "1495-1498",
    category: "Œuvres religieuses",
    description: "Représentation du dernier repas du Christ avec ses disciples.",
    img: "photo-1473177104440-ffee2f376098"
  },
  // Œuvres européennes
  {
    title: "La Joconde",
    artist: "Léonard de Vinci",
    year: "1503-1519",
    category: "Œuvres européennes",
    description: "Portrait énigmatique, symbole de la Renaissance italienne.",
    img: "photo-1452378174528-3090a4bba7b2"
  },
  {
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    year: "1889",
    category: "Œuvres européennes",
    description: "Paysage nocturne post-impressionniste aux mouvements tourbillonnants.",
    img: "photo-1494891848038-7bd202a2afeb"
  },
  // Œuvres africaines et asiatiques
  {
    title: "Masques Dogon",
    artist: "Art traditionnel Dogon",
    year: "XIVe siècle",
    category: "Œuvres africaines",
    description: "Masques rituels utilisés dans les cérémonies ancestrales du Mali.",
    img: "photo-1469041797191-50ace28483c3"
  },
  {
    title: "Grande Vague de Kanagawa",
    artist: "Katsushika Hokusai",
    year: "1831",
    category: "Œuvres asiatiques",
    description: "Estampe japonaise emblématique du style ukiyo-e.",
    img: "photo-1466442929976-97f336a657be"
  }
];

const Collections = () => (
  <>
    <Navbar />
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Nos Collections</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Découvrez nos œuvres majeures issues de différentes époques et cultures, 
        des chefs-d'œuvre de guerre aux trésors religieux, en passant par l'art européen, 
        africain et asiatique.
      </p>
      
      {/* Regroupement par catégories */}
      {["Œuvres de guerre", "Œuvres religieuses", "Œuvres européennes", "Œuvres africaines", "Œuvres asiatiques"].map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">
            {category}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {artworks
              .filter(artwork => artwork.category === category)
              .map((artwork, idx) => (
                <div key={artwork.title} className="rounded-lg shadow bg-card overflow-hidden hover:scale-105 transition-transform">
                  <img 
                    src={`https://images.unsplash.com/${artwork.img}?w=600`} 
                    alt={artwork.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {artwork.artist} • {artwork.year}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {artwork.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </main>
  </>
);

export default Collections;
