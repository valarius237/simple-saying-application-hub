
import Navbar from "@/components/Navbar";
const expositions = [
  {
    title: "Étoiles et Civilisations",
    date: "05 Juin - 12 Septembre 2025",
    desc: "Une exposition immersive sur l’astronomie des anciennes civilisations.",
    img: "photo-1492321936769-b49830bc1d1e"
  },
  {
    title: "Couleurs sacrées",
    date: "En cours",
    desc: "Voyage au cœur des symboles et couleurs de l’art religieux.",
    img: "photo-1466442929976-97f336a657be"
  }
];
const Expositions = () => (
  <>
    <Navbar />
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Expositions</h1>
      <div className="grid gap-6">
        {expositions.map((expo, idx) => (
          <div key={expo.title} className="flex flex-col md:flex-row bg-card shadow rounded-md overflow-hidden">
            <img
              src={`https://images.unsplash.com/${expo.img}?w=400`}
              alt={expo.title}
              className="w-full md:w-60 h-56 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-xl">{expo.title}</h2>
                <p className="text-muted-foreground mb-1">{expo.date}</p>
              </div>
              <p>{expo.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Expositions;
