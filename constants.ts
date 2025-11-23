import { ServiceItem, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'maintenance',
    title: 'Unterhaltsreinigung',
    description: 'Regelmäßige Reinigung für Büros, Praxen und Kanzleien. Wir sorgen für dauerhafte Sauberkeit in Ihren Räumlichkeiten.',
    iconName: 'Calendar'
  },
  {
    id: 'deep',
    title: 'Grundreinigung',
    description: 'Intensive Reinigung von Böden und Oberflächen. Entfernung von hartnäckigem Schmutz und alten Pflegefilmen.',
    iconName: 'Sparkles'
  },
  {
    id: 'glass',
    title: 'Glas- & Fensterreinigung',
    description: 'Streifenfreie Sicht für Fenster, Glasfassaden und Schaufenster inklusive Rahmenreinigung.',
    iconName: 'Droplets'
  },
  {
    id: 'construction',
    title: 'Baureinigung',
    description: 'Bauzwischen- und Bauendreinigung. Wir machen Ihre Immobilie bezugsfertig nach Neubau oder Sanierung.',
    iconName: 'HardHat'
  },
  {
    id: 'home',
    title: 'Privathaushalte',
    description: 'Professionelle Unterstützung für Ihr Zuhause. Diskret, zuverlässig und gründlich.',
    iconName: 'Home'
  },
  {
    id: 'special',
    title: 'Sonderreinigung',
    description: 'Teppichreinigung, Polsterreinigung und individuelle Lösungen für spezielle Anforderungen.',
    iconName: 'Building'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Thomas Müller",
    role: "Geschäftsführer, TM Logistik",
    text: "Seit L.O.M.M Clean unsere Büros reinigt, ist das Arbeitsklima spürbar besser. Sehr zuverlässiges Team!"
  },
  {
    id: 2,
    name: "Sabine Weber",
    role: "Hausverwaltung Nürnberg Nord",
    text: "Die Grundreinigung unseres Treppenhauses war hervorragend. Pünktlich, sauber und fair im Preis."
  },
  {
    id: 3,
    name: "Dr. Klaus Richter",
    role: "Zahnarztpraxis Richter",
    text: "Hygiene ist in meiner Praxis oberstes Gebot. L.O.M.M Clean erfüllt unsere hohen Standards perfekt."
  }
];

// Use the local logo placed in `public/images/logo.png`.
// Vite serves files from `public` at the server root, so the path is `/images/logo.png`.
export const LOGO_URL = '/images/logo.png';