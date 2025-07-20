
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";

// Import partner logos
import hsbcLogo from "../assets/partners/hsbc-logo.png";
import medmeraLogo from "../assets/partners/medmera-bank-logo.png";
import citibankLogo from "../assets/partners/citibank-logo.png";
import goldmanLogo from "../assets/partners/goldman-sachs-logo.png";
import novartisLogo from "../assets/partners/novartis-logo.png";
import accordLogo from "../assets/partners/accord-logo.png";

// Import building and room images
import buildingWithLogo from "../assets/building-with-logo.jpg";
import newConferenceRoom from "../assets/conference-room-new.jpg";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-background px-2">
        <section className="text-center mt-10 mb-16 max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.welcomeTitle}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {t.welcomeSubtitle}
          </p>
        </section>

        {/* Section À la une */}
        <section className="w-full mb-14 max-w-4xl animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-col md:flex-row items-center bg-card rounded-xl shadow-md overflow-hidden hover-scale transition-all duration-300">
            <div className="h-56 w-full md:w-72 flex items-center justify-center bg-gradient-to-br from-accent to-accent/50 rounded-t-xl md:rounded-l-xl md:rounded-t-none">
              <Logo size="lg" showText={false} />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-1">{t.featuredTitle}</h2>
              <p className="text-muted-foreground text-md mb-2">{t.featuredSubtitle}</p>
              <span className="inline-block text-xs text-primary bg-accent rounded px-2 py-1 w-max">{t.newAcquisition}</span>
            </div>
          </div>
        </section>

        {/* Sections principales */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl">
          <div className="bg-card rounded-lg shadow text-center p-6 flex flex-col items-center hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <img className="rounded-lg object-cover h-44 mb-4" src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400" alt="Collections"/>
            <h2 className="text-lg font-semibold mb-2">{t.collections}</h2>
            <p className="text-muted-foreground mb-3">Œuvres majeures et pièces rares accessibles à tous.</p>
          </div>
          <div className="bg-card rounded-lg shadow text-center p-6 flex flex-col items-center hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <img className="rounded-lg object-cover h-44 mb-4" src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400" alt="Expositions"/>
            <h2 className="text-lg font-semibold mb-2">{t.expositions}</h2>
            <p className="text-muted-foreground mb-3">Des expositions temporaires pour voyager dans le temps.</p>
          </div>
          <div className="bg-card rounded-lg shadow text-center p-6 flex flex-col items-center hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <img className="rounded-lg object-cover h-44 mb-4" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400" alt="Visiter"/>
            <h2 className="text-lg font-semibold mb-2">{t.visit}</h2>
            <p className="text-muted-foreground mb-3">Préparer sa visite, horaires, tarifs et infos pratiques.</p>
          </div>
        </section>

        {/* Infos pratiques */}
        <section className="w-full mb-14 max-w-6xl animate-fade-in" style={{ animationDelay: '600ms' }}>
          <h2 className="text-2xl font-bold mb-6 text-center">{t.practicalInfo}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card rounded-lg shadow p-5 flex flex-col items-center hover-scale transition-all duration-300">
              <h3 className="font-semibold text-lg mb-1">{t.schedules}</h3>
              <ul className="text-muted-foreground text-center">
                <li>Lundi - Vendredi : 10h - 18h</li>
                <li>Samedi, Dimanche : 11h - 19h</li>
                <li className="italic text-red-600 mt-1">{t.closedTuesday}</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg shadow p-5 flex flex-col items-center hover-scale transition-all duration-300">
              <h3 className="font-semibold text-lg mb-1">{t.prices}</h3>
              <ul className="text-muted-foreground text-center">
                <li>{t.adult}</li>
                <li>{t.student}</li>
                <li>{t.child}</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg shadow p-5 flex flex-col items-center hover-scale transition-all duration-300">
              <h3 className="font-semibold text-lg mb-1">{t.address}</h3>
              <p className="text-muted-foreground text-center">
                123 Avenue Imaginaire<br />75000 Paris, France
              </p>
            </div>
          </div>
        </section>

        {/* Section Partenaires */}
        <section className="w-full mb-16 max-w-6xl animate-fade-in" style={{ animationDelay: '700ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.partnersTitle}</h2>
            <p className="text-muted-foreground text-lg">{t.partnersSubtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="bg-card rounded-lg shadow p-4 flex items-center justify-center h-24 w-full hover-scale transition-all duration-300">
              <img src={hsbcLogo} alt="HSBC" className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex items-center justify-center h-24 w-full hover-scale transition-all duration-300">
              <img src={medmeraLogo} alt="MedMera Bank" className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex items-center justify-center h-24 w-full hover-scale transition-all duration-300">
              <img src={citibankLogo} alt="Citibank" className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex items-center justify-center h-24 w-full hover-scale transition-all duration-300">
              <img src={goldmanLogo} alt="Goldman Sachs" className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex items-center justify-center h-24 w-full hover-scale transition-all duration-300">
              <img src={novartisLogo} alt="Novartis Foundation" className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-card rounded-lg shadow p-4 flex items-center justify-center h-24 w-full hover-scale transition-all duration-300">
              <img src={accordLogo} alt="Accord Pharmaceuticals" className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </section>

        {/* Section Notre Bâtiment */}
        <section className="w-full mb-16 max-w-6xl animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.ourBuilding}</h2>
            <p className="text-muted-foreground text-lg">{t.buildingDescription}</p>
          </div>
          <div className="bg-card rounded-xl shadow-lg overflow-hidden hover-scale transition-all duration-300">
            <img 
              src={buildingWithLogo} 
              alt="Global Art Conglomerate Building" 
              className="w-full h-96 object-cover"
            />
          </div>
        </section>

        {/* Section Espaces Intérieurs */}
        <section className="w-full mb-16 max-w-6xl animate-fade-in" style={{ animationDelay: '900ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.interiorSpaces}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover-scale transition-all duration-300">
              <img 
                src={newConferenceRoom} 
                alt="Conference Room" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.conferenceRoom}</h3>
                <p className="text-muted-foreground">Espace moderne pour nos événements et conférences artistiques.</p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover-scale transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop" 
                alt="Executive Office" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.executiveOffice}</h3>
                <p className="text-muted-foreground">Bureau de direction avec une vue imprenable sur la collection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Équipe Dirigeante */}
        <section className="w-full mb-16 max-w-6xl animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{t.leadership}</h2>
            <p className="text-muted-foreground text-lg">{t.leadershipDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b14997c8?w=150&h=150&fit=crop&crop=face" 
                alt="Marie Dubois" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1">Marie Dubois</h3>
              <p className="text-primary font-medium mb-2">Directrice Générale</p>
              <p className="text-muted-foreground text-sm">25 ans d'expérience dans l'art contemporain</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                alt="Jean Martin" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1">Jean Martin</h3>
              <p className="text-primary font-medium mb-2">Directeur Artistique</p>
              <p className="text-muted-foreground text-sm">Expert en curation et acquisitions d'art</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face" 
                alt="Sophie Laurent" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1">Sophie Laurent</h3>
              <p className="text-primary font-medium mb-2">Responsable Collections</p>
              <p className="text-muted-foreground text-sm">Spécialiste en conservation et restauration</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 text-center hover-scale transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Pierre Bernard" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1">Pierre Bernard</h3>
              <p className="text-primary font-medium mb-2">Directeur Financier</p>
              <p className="text-muted-foreground text-sm">Gestion stratégique et développement</p>
            </div>
          </div>
        </section>

        {/* Bloc À propos */}
        <section className="w-full mt-10 max-w-3xl animate-fade-in" style={{ animationDelay: '1100ms' }}>
          <div className="bg-accent/30 rounded-xl shadow text-center p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-3">{t.aboutMuseumTitle}</h2>
            <p className="text-muted-foreground mb-2">
              {t.aboutMuseumText1}
            </p>
            <p className="text-muted-foreground">
              {t.aboutMuseumText2}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
