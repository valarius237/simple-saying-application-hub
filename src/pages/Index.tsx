
// Page d'accueil inspirée du British Museum

import Navbar from "@/components/Navbar";

const Index = () => (
  <>
    <Navbar />
    <main className="flex flex-col items-center justify-center min-h-screen bg-background px-2">
      <section className="text-center mt-10 mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue au Musée Inspiré</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Un lieu où l’histoire, l’art et la découverte se croisent pour émerveiller petits et grands. Explorez nos collections uniques et expositions temporaires !
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl">
        <div className="bg-card rounded-lg shadow text-center p-6 flex flex-col items-center">
          <img className="rounded-lg object-cover h-44 mb-4" src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400" alt="Collections"/>
          <h2 className="text-lg font-semibold mb-2">Collections</h2>
          <p className="text-muted-foreground mb-3">Œuvres majeures et pièces rares accessibles à tous.</p>
        </div>
        <div className="bg-card rounded-lg shadow text-center p-6 flex flex-col items-center">
          <img className="rounded-lg object-cover h-44 mb-4" src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400" alt="Expositions"/>
          <h2 className="text-lg font-semibold mb-2">Expositions</h2>
          <p className="text-muted-foreground mb-3">Des expositions temporaires pour voyager dans le temps.</p>
        </div>
        <div className="bg-card rounded-lg shadow text-center p-6 flex flex-col items-center">
          <img className="rounded-lg object-cover h-44 mb-4" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400" alt="Visiter"/>
          <h2 className="text-lg font-semibold mb-2">Visiter</h2>
          <p className="text-muted-foreground mb-3">Préparer sa visite, horaires, tarifs et infos pratiques.</p>
        </div>
      </section>
    </main>
  </>
);

export default Index;
