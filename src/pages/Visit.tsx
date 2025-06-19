
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Visit = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">{t.prepareVisit}</h1>
        <section className="mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <h2 className="font-semibold text-lg mb-2">{t.openingHours}</h2>
          <ul className="text-muted-foreground">
            <li>Lundi - Vendredi : 10h - 18h</li>
            <li>Samedi, Dimanche : 11h - 19h</li>
            <li>{t.closedTuesday}</li>
          </ul>
        </section>
        <section className="mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="font-semibold text-lg mb-2">{t.prices}</h2>
          <ul className="text-muted-foreground">
            <li>{t.adult}</li>
            <li>{t.student}</li>
            <li>{t.child}</li>
          </ul>
        </section>
        <section className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h2 className="font-semibold text-lg mb-2">{t.address}</h2>
          <p className="text-muted-foreground">123 Avenue Imaginaire, 75000 Paris, France</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Visit;
