
import Navbar from "@/components/Navbar";
const imgs = [
  "photo-1494891848038-7bd202a2afeb",
  "photo-1473177104440-ffee2f376098",
  "photo-1466442929976-97f336a657be"
];

const Collections = () => (
  <>
    <Navbar />
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Nos Collections</h1>
      <p className="mb-6 text-lg text-muted-foreground">Découvrez nos œuvres majeures issues de différentes époques et cultures.</p>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {imgs.map((img, idx) => (
          <div key={img} className="rounded-lg shadow bg-card overflow-hidden hover:scale-105 transition-transform">
            <img src={`https://images.unsplash.com/${img}?w=600`} alt={`Collection ${idx+1}`} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">Œuvre n°{idx+1}</h2>
              <p className="text-muted-foreground text-sm">Description courte de l'œuvre exposée.</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Collections;
