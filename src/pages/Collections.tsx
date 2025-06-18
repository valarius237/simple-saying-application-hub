import Navbar from "@/components/Navbar";

const artworks = [
  // Œuvres de guerre
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    category: "Œuvres de guerre",
    description: "Chef-d'œuvre du cubisme dénonçant les horreurs de la guerre civile espagnole.",
    img: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"
  },
  {
    title: "La Liberté guidant le peuple",
    artist: "Eugène Delacroix",
    year: "1830",
    category: "Œuvres de guerre",
    description: "Symbole de la révolution française et de la lutte pour la liberté.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg"
  },
  {
    title: "Les Désastres de la guerre",
    artist: "Francisco Goya",
    year: "1810-1820",
    category: "Œuvres de guerre",
    description: "Série de gravures dénonçant les atrocités de la guerre napoléonienne en Espagne.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Francisco_de_Goya%2C_Disasters_of_War%2C_plate_3_%28Lo_mismo%29.jpg/640px-Francisco_de_Goya%2C_Disasters_of_War%2C_plate_3_%28Lo_mismo%29.jpg"
  },
  // Œuvres religieuses
  {
    title: "La Chapelle Sixtine",
    artist: "Michel-Ange",
    year: "1508-1512",
    category: "Œuvres religieuses",
    description: "Fresque monumentale représentant des scènes de la Genèse.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sistine_Chapel_ceiling_panorama.jpg/1024px-Sistine_Chapel_ceiling_panorama.jpg"
  },
  {
    title: "La Cène",
    artist: "Léonard de Vinci",
    year: "1495-1498",
    category: "Œuvres religieuses",
    description: "Représentation du dernier repas du Christ avec ses disciples.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg"
  },
  {
    title: "La Création d'Adam",
    artist: "Michel-Ange",
    year: "1512",
    category: "Œuvres religieuses",
    description: "Fresque emblématique de la Chapelle Sixtine représentant la création de l'homme.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg/1024px-Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg"
  },
  // Œuvres européennes
  {
    title: "La Joconde",
    artist: "Léonard de Vinci",
    year: "1503-1519",
    category: "Œuvres européennes",
    description: "Portrait énigmatique, symbole de la Renaissance italienne.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  },
  {
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    year: "1889",
    category: "Œuvres européennes",
    description: "Paysage nocturne post-impressionniste aux mouvements tourbillonnants.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    title: "Les Tournesols",
    artist: "Vincent van Gogh",
    year: "1888",
    category: "Œuvres européennes",
    description: "Série de natures mortes représentant des tournesols dans un vase.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg"
  },
  // Œuvres africaines et asiatiques
  {
    title: "Masques Dogon",
    artist: "Art traditionnel Dogon",
    year: "XIVe siècle",
    category: "Œuvres africaines",
    description: "Masques rituels utilisés dans les cérémonies ancestrales du Mali.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dogon_mask_1.jpg/640px-Dogon_mask_1.jpg"
  },
  {
    title: "Grande Vague de Kanagawa",
    artist: "Katsushika Hokusai",
    year: "1831",
    category: "Œuvres asiatiques",
    description: "Estampe japonaise emblématique du style ukiyo-e.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg"
  },
  {
    title: "Statue de Bouddha de Gandhara",
    artist: "Art gréco-bouddhique",
    year: "IIe-IIIe siècle",
    category: "Œuvres asiatiques",
    description: "Sculpture représentant Bouddha, exemple de l'art gréco-bouddhique.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gandhara_Buddha_%28tnm%29.jpeg/640px-Gandhara_Buddha_%28tnm%29.jpeg"
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
                    src={artwork.img}
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
