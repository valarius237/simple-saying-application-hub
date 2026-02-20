import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  // Navigation
  home: string;
  collections: string;
  expositions: string;
  visit: string;
  about: string;
  contact: string;
  artworksForSale: string;
  
  // Home page
  welcomeTitle: string;
  welcomeSubtitle: string;
  featuredTitle: string;
  featuredSubtitle: string;
  newAcquisition: string;
  practicalInfo: string;
  schedules: string;
  prices: string;
  address: string;
  adult: string;
  student: string;
  child: string;
  free: string;
  closedTuesday: string;
  aboutMuseumTitle: string;
  aboutMuseumText1: string;
  aboutMuseumText2: string;
  ourBuilding: string;
  buildingDescription: string;
  interiorSpaces: string;
  conferenceRoom: string;
  executiveOffice: string;
  leadership: string;
  leadershipDescription: string;
  generalManager: string;
  artisticDirector: string;
  collectionsManager: string;
  financialDirector: string;
  yearsExperience: string;
  artExpertise: string;
  conservationSpecialist: string;
  strategicManagement: string;
  
  // Partners companies info
  hsbcMotto: string;
  medmeraMotto: string;
  citibankMotto: string;
  goldmanMotto: string;
  novartisMotto: string;
  accordMotto: string;
  
  // Collections page
  collectionsTitle: string;
  collectionsSubtitle: string;
  warArtworks: string;
  religiousArtworks: string;
  europeanArtworks: string;
  africanArtworks: string;
  asianArtworks: string;
  
  // Artworks for sale page
  artworksForSaleTitle: string;
  artworksForSaleSubtitle: string;
  availableNow: string;
  contactForPurchase: string;
  
  // Expositions page
  expositionsTitle: string;
  expositionsSubtitle: string;
  featuredArtwork: string;
  
  // Visit page
  prepareVisit: string;
  openingHours: string;
  
  // About page
  aboutTitle: string;
  ourHistory: string;
  aboutText: string;
  historyText: string;
  
  // Contact page
  contactUs: string;
  yourName: string;
  yourEmail: string;
  yourMessage: string;
  send: string;
  sending: string;
  messageSent: string;
  messageError: string;
  connectionError: string;
  thankYou: string;
  
  // Footer
  socialNetworks: string;
  navigation: string;
  allRightsReserved: string;
  
  // Partners section
  partnersTitle: string;
  partnersSubtitle: string;
  
  // Services section
  servicesTitle: string;
  servicesSubtitle: string;
  advisory: string;
  advisoryDesc: string;
  purchase: string;
  purchaseDesc: string;
  sale: string;
  saleDesc: string;
  valorisation: string;
  valorisationDesc: string;
  conservation: string;
  conservationDesc: string;
  monitoring: string;
  monitoringDesc: string;
  placing: string;
  placingDesc: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    collections: 'Collections',
    expositions: 'Exhibitions',
    visit: 'Visit',
    about: 'About',
    contact: 'Contact',
    artworksForSale: 'Artworks for Sale',
    
    // Home page
    welcomeTitle: 'Welcome to Global Art Conglomerate',
    welcomeSubtitle: 'Welcome to our website. A place where great ideas meet with high ambitions to preserve our cultures and promote global growth and prosperity.',
    featuredTitle: 'Featured: The Gate of Time',
    featuredSubtitle: 'Discover this monumental piece from our ancient collection, witness to the passage of civilizations.',
    newAcquisition: 'New acquisition!',
    practicalInfo: 'Practical information',
    schedules: 'Opening hours',
    prices: 'Prices',
    address: 'Address',
    adult: 'Adult: €12',
    student: 'Student: €8',
    child: 'Child (under 12): Free',
    free: 'Free',
    closedTuesday: 'Closed on Tuesday',
    aboutMuseumTitle: 'About the museum',
    aboutMuseumText1: 'Founded in 1969 in London and based in the United Statesof America this organization aims to preserve and promote major collections of ancient and cultural art objects throughout the world.',
    aboutMuseumText2: 'In partnership with several museums across the globe, we offer you the opportunity to integrate the art world into a self-sustaining dynamic.',
    ourBuilding: 'Our Building',
    buildingDescription: 'Modern architecture that reflects our contemporary artistic vision.',
    interiorSpaces: 'Interior Spaces',
    conferenceRoom: 'Conference Room',
    executiveOffice: 'Executive Office',
    leadership: 'Our Leadership Team',
    leadershipDescription: 'Passionate experts who guide our artistic vision.',
    generalManager: 'Chief Operating Officer',
    artisticDirector: 'Pioneer-Founder',
    collectionsManager: 'Collections Manager',
    financialDirector: 'Official Partner & Director Of Qatari Investment Group',
    yearsExperience: 'years of experience in contemporary art',
    artExpertise: 'Expert in curation and art acquisitions',
    conservationSpecialist: 'Specialist in conservation and restoration',
    strategicManagement: 'Strategic management and development',
    
    // Partners companies info
    hsbcMotto: 'The World\'s Local Bank',
    medmeraMotto: 'Banking Excellence for Healthcare',
    citibankMotto: 'Citi Never Sleeps',
    goldmanMotto: 'Progress is Everyone\'s Business',
    novartisMotto: 'Reimagining Medicine',
    accordMotto: 'Expanding Access to Medicine',
    
    // Collections page
    collectionsTitle: 'Our Collections',
    collectionsSubtitle: 'Discover our major works from different eras and cultures, from war masterpieces to religious treasures, including European, African and Asian art.',
    warArtworks: 'War Art',
    religiousArtworks: 'Religious Art',
    europeanArtworks: 'European Art',
    africanArtworks: 'African Art',
    asianArtworks: 'Asian Art',
    
    // Artworks for sale page
    artworksForSaleTitle: 'Artworks for Sale',
    artworksForSaleSubtitle: 'Discover our exclusive selection of artworks available for purchase. Each piece comes with a certificate of authenticity.',
    availableNow: 'Available now',
    contactForPurchase: 'Contact us for purchase',
    
    // Expositions page
    expositionsTitle: 'Exhibitions',
    expositionsSubtitle: 'Explore our temporary exhibitions showcasing exceptional works from our permanent collection and prestigious loans.',
    featuredArtwork: 'Featured artwork:',
    
    // Visit page
    prepareVisit: 'Prepare your visit',
    openingHours: 'Opening hours',
    
    // About page
    aboutTitle: 'About the museum',
    ourHistory: 'Our history',
    aboutText: 'Our museum is inspired by the greatest establishments worldwide. Modern architecture, interactive presentation, and an ever-evolving collection: everything is designed to offer an unforgettable experience to visitors, young and old.',
    historyText: 'Founded in 1969 in London and based in the United Statesof America this organization aims to preserve and promote major collections of ancient and cultural art objects throughout the world.',
    
    // Contact page
    contactUs: 'Contact us',
    yourName: 'Your name',
    yourEmail: 'Your email',
    yourMessage: 'Your message...',
    send: 'Send',
    sending: 'Sending...',
    messageSent: 'Message sent!',
    messageError: 'Sending failed. Try again later.',
    connectionError: 'Connection problem. Try again.',
    thankYou: 'Thank you for your message. We will respond quickly.',
    
    // Footer
    socialNetworks: 'Social networks',
    navigation: 'Navigation',
    allRightsReserved: 'All rights reserved.',
    
    // Partners section
    partnersTitle: 'Our Partners',
    partnersSubtitle: 'They accompany us in our mission to democratize art',
    
    // Services section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Professional art services for collectors, investors and art enthusiasts',
    advisory: 'Advisory',
    advisoryDesc: 'Expert guidance for art investments and collection strategies',
    purchase: 'Purchase',
    purchaseDesc: 'Assistance in acquiring exceptional artworks and rare pieces',
    sale: 'Sale',
    saleDesc: 'Professional support for selling artworks at optimal value',
    valorisation: 'Valorisation',
    valorisationDesc: 'Professional appraisal and valuation of art collections',
    conservation: 'Conservation',
    conservationDesc: 'Expert preservation and restoration of precious artworks',
    monitoring: 'Monitoring',
    monitoringDesc: 'Continuous surveillance and care of your art investments',
    placing: 'Placing',
    placingDesc: 'Strategic placement of artworks in exhibitions and collections'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    collections: 'Collections',
    expositions: 'Expositions',
    visit: 'Visiter',
    about: 'À propos',
    contact: 'Contact',
    artworksForSale: 'Œuvres à vendre',
    
    // Home page
    welcomeTitle: 'Bienvenue au Global Art Conglomerate',
    welcomeSubtitle: 'Bienvenue dans notre site Web. Un endroit où les grands esprits rencontrent les grandes ambitions pour préserver nos cultures et promouvoir la croissance globale y compris la prospérité.',
    featuredTitle: 'À la une : La Porte du Temps',
    featuredSubtitle: 'Découvrez cette pièce monumentale de notre collection antique, témoin du passage des civilisations.',
    newAcquisition: 'Nouvelle acquisition !',
    practicalInfo: 'Informations pratiques',
    schedules: 'Horaires',
    prices: 'Tarifs',
    address: 'Adresse',
    adult: 'Adulte : 12 €',
    student: 'Étudiant : 8 €',
    child: 'Enfant (-12 ans) : Gratuit',
    free: 'Gratuit',
    closedTuesday: 'Fermé le mardi',
    aboutMuseumTitle: 'À propos du musée',
    aboutMuseumText1: "Fondé en 1969 à Londres et basée aux États Unis, cette organisation a pour but la conservation et la mise en valeur des grandes collections d’objets d’art antiques et culturels à travers le monde entier.",
    aboutMuseumText2: 'En partenariat avec plusieurs musées à travers le monde, nous vous offrons la possibilité d’intégrer le monde artistique dans une dynamisme autosuffisante.',
    ourBuilding: 'Notre Bâtiment',
    buildingDescription: 'Une architecture moderne qui reflète notre vision artistique contemporaine.',
    interiorSpaces: 'Espaces Intérieurs',
    conferenceRoom: 'Salle de Conférence',
    executiveOffice: 'Bureau Exécutif',
    leadership: 'Notre Équipe Dirigeante',
    leadershipDescription: 'Des experts passionnés qui guident notre vision artistique.',
    generalManager: "Directeur d'exploitation",
    artisticDirector: 'Pionnier-Fondateur',
    collectionsManager: 'Responsable Collections',
    financialDirector: 'Partenaire Officiel et Directeur du Fond d\'Investissement Qatari',
    yearsExperience: 'ans d\'expérience dans l\'art contemporain',
    artExpertise: 'Expert en curation et acquisitions d\'art',
    conservationSpecialist: 'Spécialiste en conservation et restauration',
    strategicManagement: 'Gestion stratégique et développement',
    
    // Partners companies info
    hsbcMotto: 'The World\'s Local Bank',
    medmeraMotto: 'Banking Excellence for Healthcare',
    citibankMotto: 'Citi Never Sleeps',
    goldmanMotto: 'Progress is Everyone\'s Business',
    novartisMotto: 'Reimagining Medicine',
    accordMotto: 'Expanding Access to Medicine',
    
    // Collections page
    collectionsTitle: 'Nos Collections',
    collectionsSubtitle: 'Découvrez nos œuvres majeures issues de différentes époques et cultures, des chefs-d\'œuvre de guerre aux trésors religieux, en passant par l\'art européen, africain et asiatique.',
    warArtworks: 'Œuvres de guerre',
    religiousArtworks: 'Œuvres religieuses',
    europeanArtworks: 'Œuvres européennes',
    africanArtworks: 'Œuvres africaines',
    asianArtworks: 'Œuvres asiatiques',
    
    // Artworks for sale page
    artworksForSaleTitle: 'Œuvres à vendre',
    artworksForSaleSubtitle: 'Découvrez notre sélection exclusive d\'œuvres disponibles à l\'achat. Chaque pièce est accompagnée d\'un certificat d\'authenticité.',
    availableNow: 'Disponible maintenant',
    contactForPurchase: 'Contactez-nous pour l\'achat',
    
    // Expositions page
    expositionsTitle: 'Expositions',
    expositionsSubtitle: 'Explorez nos expositions temporaires mettant en valeur des œuvres exceptionnelles de notre collection permanente et des prêts prestigieux.',
    featuredArtwork: 'Œuvre vedette :',
    
    // Visit page
    prepareVisit: 'Préparez votre visite',
    openingHours: 'Horaires d\'ouverture',
    
    // About page
    aboutTitle: 'À propos du musée',
    ourHistory: 'Notre histoire',
    aboutText: 'Notre musée s\'inspire des plus grands établissements mondiaux. Architecture moderne, présentation interactive, et une collection en permanente évolution : tout est fait pour offrir une expérience inoubliable aux visiteurs, petit·e·s et grand·e·s.',
    historyText: 'Fondé en 1969 à Londres et basée aux États Unis, cette organisation a pour but la conservation et la mise en valeur des grandes collections d’objets d’art antiques et culturels à travers le monde entier.',
    
    // Contact page
    contactUs: 'Contactez-nous',
    yourName: 'Votre nom',
    yourEmail: 'Votre email',
    yourMessage: 'Votre message...',
    send: 'Envoyer',
    sending: 'Envoi en cours...',
    messageSent: 'Message envoyé !',
    messageError: 'L\'envoi a échoué. Réessayez plus tard.',
    connectionError: 'Problème de connexion. Réessayez.',
    thankYou: 'Merci pour votre message. Nous vous répondrons rapidement.',
    
    // Footer
    socialNetworks: 'Réseaux sociaux',
    navigation: 'Navigation',
    allRightsReserved: 'Tous droits réservés.',
    
    // Partners section
    partnersTitle: 'Nos Partenaires',
    partnersSubtitle: 'Ils nous accompagnent dans notre mission de démocratiser l\'art',
    
    // Services section
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Services artistiques professionnels pour collectionneurs, investisseurs et passionnés d\'art',
    advisory: 'Conseil',
    advisoryDesc: 'Expertise et guidance pour les investissements artistiques et stratégies de collection',
    purchase: 'Achat',
    purchaseDesc: 'Assistance dans l\'acquisition d\'œuvres d\'art exceptionnelles et de pièces rares',
    sale: 'Vente',
    saleDesc: 'Accompagnement professionnel pour la vente d\'œuvres d\'art à leur juste valeur',
    valorisation: 'Valorisation',
    valorisationDesc: 'Expertise et évaluation professionnelle de collections d\'art',
    conservation: 'Conservation',
    conservationDesc: 'Préservation experte et restauration d\'œuvres d\'art précieuses',
    monitoring: 'Surveillance',
    monitoringDesc: 'Surveillance continue et soin de vos investissements artistiques',
    placing: 'Placement',
    placingDesc: 'Placement stratégique d\'œuvres d\'art dans des expositions et collections'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
