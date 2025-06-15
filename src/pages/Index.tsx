
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

      {/* Section À la une */}
      <section className="w-full mb-14 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center bg-card rounded-xl shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=500" alt="Oeuvre à la une"
            className="h-56 w-full md:w-72 object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"/>
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-1">À la une : La Porte du Temps</h2>
            <p className="text-muted-foreground text-md mb-2">Découvrez cette pièce monumentale de notre collection antique, témoin du passage des civilisations.</p>
            <span className="inline-block text-xs text-primary bg-accent rounded px-2 py-1 w-max">Nouvelle acquisition !</span>
          </div>
        </div>
      </section>

      {/* Sections principales */}
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

      {/* Infos pratiques */}
      <section className="w-full mb-14 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Informations pratiques</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-card rounded-lg shadow p-5 flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-1">Horaires</h3>
            <ul className="text-muted-foreground text-center">
              <li>Lundi - Vendredi : 10h - 18h</li>
              <li>Samedi, Dimanche : 11h - 19h</li>
              <li className="italic text-red-600 mt-1">Fermé le mardi</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg shadow p-5 flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-1">Tarifs</h3>
            <ul className="text-muted-foreground text-center">
              <li>Adulte : 12 €</li>
              <li>Étudiant : 8 €</li>
              <li>Enfant (-12 ans) : Gratuit</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg shadow p-5 flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-1">Adresse</h3>
            <p className="text-muted-foreground text-center">
              123 Avenue Imaginaire<br />75000 Paris, France
            </p>
          </div>
        </div>
      </section>

      {/* Bloc À propos */}
      <section className="w-full mt-10 max-w-3xl">
        <div className="bg-accent/30 rounded-xl shadow text-center p-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-3">À propos du musée</h2>
          <p className="text-muted-foreground mb-2">
            Fondé en 2025, le Musée Inspiré puise son inspiration dans les plus grands musées du monde pour offrir à chacun·e une expérience immersive entre passé, présent et découvertes.
          </p>
          <p className="text-muted-foreground">
            Architecture moderne, expositions interactives et actions éducatives rythment la vie de notre institution.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default Index;

