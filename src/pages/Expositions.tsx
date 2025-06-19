
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const expositions = [
  {
    title: {
      en: "Guernica: Testimony of an Era",
      fr: "Guernica : Témoignage d'une époque"
    },
    date: {
      en: "March 15 - June 30, 2025",
      fr: "15 Mars - 30 Juin 2025"
    },
    desc: {
      en: "An exhibition dedicated to Picasso's masterpiece, exploring the historical context of the Spanish Civil War and the impact of this work on modern art.",
      fr: "Une exposition dédiée au chef-d'œuvre de Picasso, explorant le contexte historique de la guerre civile espagnole et l'impact de cette œuvre sur l'art moderne."
    },
    img: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    artwork: {
      en: "Guernica by Pablo Picasso (1937)",
      fr: "Guernica de Pablo Picasso (1937)"
    }
  },
  {
    title: {
      en: "Sacred Art: The Sistine Chapel Unveiled",
      fr: "Art Sacré : La Chapelle Sixtine dévoilée"
    },
    date: {
      en: "Ongoing until August 25, 2025",
      fr: "En cours jusqu'au 25 Août 2025"
    },
    desc: {
      en: "Discover the secrets of Michelangelo's fresco through high-definition reproductions and detailed analyses of this monumental work.",
      fr: "Découvrez les secrets de la fresque de Michel-Ange à travers des reproductions haute définition et des analyses détaillées de cette œuvre monumentale."
    },
    img: "https://www.musei-vaticani.va/content/dam/musei-vaticani/immagini/collezioni/musei/cappella-sistina/00-Cappella-Sistina.jpg",
    artwork: {
      en: "The Sistine Chapel by Michelangelo (1508-1512)",
      fr: "La Chapelle Sixtine de Michel-Ange (1508-1512)"
    }
  },
  {
    title: {
      en: "Treasures of Africa: Masks and Rituals",
      fr: "Trésors d'Afrique : Masques et Rituels"
    },
    date: {
      en: "September 10 - December 15, 2025",
      fr: "10 Septembre - 15 Décembre 2025"
    },
    desc: {
      en: "An immersion into traditional African art with an exceptional collection of Dogon masks and their spiritual significance.",
      fr: "Une immersion dans l'art traditionnel africain avec une collection exceptionnelle de masques Dogon et leur signification spirituelle."
    },
    img: "https://www.quaibranly.fr/fileadmin/_processed_/0/f/csm_70.1998.2.1_1_79e3b11d12.jpg",
    artwork: {
      en: "Traditional Dogon masks (14th century)",
      fr: "Masques Dogon traditionnels (XIVe siècle)"
    }
  },
  {
    title: {
      en: "Van Gogh: Nights and Lights",
      fr: "Van Gogh : Nuits et Lumières"
    },
    date: {
      en: "June 5 - September 12, 2025",
      fr: "05 Juin - 12 Septembre 2025"
    },
    desc: {
      en: "An exhibition dedicated to Van Gogh's nocturnal works, exploring his fascination with light effects and starry landscapes.",
      fr: "Une exposition dédiée aux œuvres nocturnes de Van Gogh, explorant sa fascination pour les effets de lumière et les paysages étoilés."
    },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    artwork: {
      en: "The Starry Night by Vincent van Gogh (1889)",
      fr: "La Nuit étoilée de Vincent van Gogh (1889)"
    }
  },
  {
    title: {
      en: "Buddhist Art: Serenity and Spirituality",
      fr: "Art Bouddhique : Sérénité et Spiritualité"
    },
    date: {
      en: "Ongoing",
      fr: "En cours"
    },
    desc: {
      en: "Journey to the heart of Buddhist art with sculptures and iconic representations from different eras and regions.",
      fr: "Voyage au cœur de l'art bouddhique avec des sculptures et représentations emblématiques de différentes époques et régions."
    },
    img: "https://www.metmuseum.org/toah/images/hb/hb_1987.142.3.jpg",
    artwork: {
      en: "Gandhara Buddha Statue (2nd-3rd century)",
      fr: "Statue de Bouddha de Gandhara (IIe-IIIe siècle)"
    }
  }
];

const Expositions = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">{t.expositionsTitle}</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          {t.expositionsSubtitle}
        </p>
        
        <div className="grid gap-8">
          {expositions.map((expo, idx) => (
            <div key={expo.title[language]} className="flex flex-col md:flex-row bg-card shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <img
                src={expo.img}
                alt={expo.title[language]}
                className="w-full md:w-72 h-64 md:h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="font-bold text-xl mb-2 text-primary">{expo.title[language]}</h2>
                  <p className="text-muted-foreground mb-2 font-medium">{expo.date[language]}</p>
                  {expo.artwork && (
                    <p className="text-sm text-primary/80 mb-3 italic">
                      {t.featuredArtwork} {expo.artwork[language]}
                    </p>
                  )}
                </div>
                <p className="text-base leading-relaxed">{expo.desc[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Expositions;
