
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">{t.aboutTitle}</h1>
        <p className="text-muted-foreground mb-4">{t.aboutText}</p>
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=450" alt="Musée" className="rounded-lg shadow-lg w-full md:w-72 h-60 object-cover hover-scale transition-all duration-300"/>
          <div>
            <h2 className="font-semibold mb-2">{t.ourHistory}</h2>
            <p>{t.historyText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
