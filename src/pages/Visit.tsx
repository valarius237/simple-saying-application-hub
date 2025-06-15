
import Navbar from "@/components/Navbar";
const Visit = () => (
  <>
    <Navbar />
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Préparez votre visite</h1>
      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Horaires d’ouverture</h2>
        <ul className="text-muted-foreground">
          <li>Lundi - Vendredi : 10h - 18h</li>
          <li>Samedi, Dimanche : 11h - 19h</li>
          <li>Fermé le mardi</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Tarifs</h2>
        <ul className="text-muted-foreground">
          <li>Adulte : 12 €</li>
          <li>Étudiant : 8 €</li>
          <li>Enfant (-12 ans) : Gratuit</li>
        </ul>
      </section>
      <section>
        <h2 className="font-semibold text-lg mb-2">Adresse</h2>
        <p className="text-muted-foreground">123 Avenue Imaginaire, 75000 Paris, France</p>
      </section>
    </main>
  </>
);

export default Visit;
