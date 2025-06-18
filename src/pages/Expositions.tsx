
import Navbar from "@/components/Navbar";

const expositions = [
  {
    title: "Guernica : Témoignage d'une époque",
    date: "15 Mars - 30 Juin 2025",
    desc: "Une exposition dédiée au chef-d'œuvre de Picasso, explorant le contexte historique de la guerre civile espagnole et l'impact de cette œuvre sur l'art moderne.",
    img: "photo-1494891848038-7bd202a2afeb",
    artwork: "Guernica de Pablo Picasso (1937)"
  },
  {
    title: "Art Sacré : La Chapelle Sixtine dévoilée",
    date: "En cours jusqu'au 25 Août 2025",
    desc: "Découvrez les secrets de la fresque de Michel-Ange à travers des reproductions haute définition et des analyses détaillées de cette œuvre monumentale.",
    img: "photo-1466442929976-97f336a657be",
    artwork: "La Chapelle Sixtine de Michel-Ange (1508-1512)"
  },
  {
    title: "Trésors d'Afrique : Masques et Rituels",
    date: "10 Septembre - 15 Décembre 2025",
    desc: "Une immersion dans l'art traditionnel africain avec une collection exceptionnelle de masques Dogon et leur signification spirituelle.",
    img: "photo-1469041797191-50ace28483c3",
    artwork: "Masques Dogon traditionnels (XIVe siècle)"
  },
  {
    title: "Étoiles et Civilisations",
    date: "05 Juin - 12 Septembre 2025",
    desc: "Une exposition immersive sur l'astronomie des anciennes civilisations.",
    img: "photo-1492321936769-b49830bc1d1e"
  },
  {
    title: "Couleurs sacrées",
    date: "En cours",
    desc: "Voyage au cœur des symboles et couleurs de l'art religieux.",
    img: "photo-1466442929976-97f336a657be"
  }
];

const Expositions = () => (
  <>
    <Navbar />
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Expositions</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Explorez nos expositions temporaires mettant en valeur des œuvres exceptionnelles 
        de notre collection permanente et des prêts prestigieux.
      </p>
      
      <div className="grid gap-8">
        {expositions.map((expo, idx) => (
          <div key={expo.title} className="flex flex-col md:flex-row bg-card shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={`https://images.unsplash.com/${expo.img}?w=500`}
              alt={expo.title}
              className="w-full md:w-72 h-64 md:h-56 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h2 className="font-bold text-xl mb-2 text-primary">{expo.title}</h2>
                <p className="text-muted-foreground mb-2 font-medium">{expo.date}</p>
                {expo.artwork && (
                  <p className="text-sm text-primary/80 mb-3 italic">
                    Œuvre vedette : {expo.artwork}
                  </p>
                )}
              </div>
              <p className="text-base leading-relaxed">{expo.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Expositions;
