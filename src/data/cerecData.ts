import heroBuildingsImg from '../assets/images/universite_africaine_realiste_1794520973401.jpg';

export type TrackCategory = 'all' | 'iscom' | 'cerec';

export interface Filiere {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imagePosition: 'object-center' | 'object-top';
  gradient: string;
  category: 'iscom' | 'cerec' | 'both';
  tracks: string[];
  competences: string[];
  debouches: string[];
}

export interface CampusAtout {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  iconName: 'cap' | 'diploma' | 'book' | 'globe' | 'campus' | 'check';
}

export interface CampusLocation {
  id: 'pointe-noire' | 'brazzaville';
  city: string;
  title: string;
  address: string;
  phones: { label: string; href: string }[];
  hours: string;
  highlight: string;
}

export interface CampusPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  orientation: 'landscape' | 'portrait';
}

export const HERO_IMAGE = heroBuildingsImg;
export const ABOUT_IMAGE = '/assets/aistudio/images__1__a6b682ed.jfif';

export const LOGO_SVG_PATH = '/assets/aistudio/logo_cf8535e3.svg';
export const LOGO_JPG_PATH = '/assets/aistudio/logo_6b6d442b.jpg';

export const WHATSAPP_BASE = 'https://wa.me/242053571515';

export const CAMPUS_GALLERY: CampusPhoto[] = [
  {
    id: 'campus-pointe-noire',
    src: '/assets/aistudio/images__1__a6b682ed.jfif',
    alt: 'Étudiants et encadrement devant le campus Groupe CEREC-ISCOM à Pointe-Noire',
    caption: 'Étudiants et équipe pédagogique devant le campus de Pointe-Noire',
    category: 'Vie étudiante',
    orientation: 'landscape',
  },
  {
    id: 'salle-cours',
    src: '/assets/aistudio/images__5__92a959f0.jfif',
    alt: 'Salle de cours et intervention académique à CEREC-ISCOM',
    caption: 'Espaces d’enseignement et conférences académiques',
    category: 'Pédagogie',
    orientation: 'portrait',
  },
  {
    id: 'remise-prix-1',
    src: '/assets/aistudio/images__4__17e03364.jfif',
    alt: 'Remise de prix d’excellence à une étudiante de CEREC-ISCOM',
    caption: 'Cérémonie de distinction et remise de prix aux lauréats',
    category: 'Excellence',
    orientation: 'portrait',
  },
  {
    id: 'remise-prix-2',
    src: '/assets/aistudio/images_97197e65.jfif',
    alt: 'Encouragement au mérite académique à CEREC-ISCOM',
    caption: 'Valorisation du mérite et réussite étudiante',
    category: 'Excellence',
    orientation: 'portrait',
  },
];

export const KEY_METRICS = [
  {
    value: 'Depuis 1990',
    label: 'Au service de la formation au Congo',
  },
  {
    value: '2 grands sites',
    label: 'Brazzaville et Pointe-Noire',
  },
  {
    value: 'Licences & Masters',
    label: 'Enseignement supérieur et professionnel',
  },
];

export const ENTITIES = [
  {
    number: '01',
    name: 'ISCOM',
    fullName: 'Institut Supérieur de Commerce et de Management',
    description:
      "L'établissement d'enseignement supérieur du groupe, dédié aux parcours académiques de Licence et Master en gestion, commerce, finance et logistique.",
    focus: 'Licences & Masters · Enseignement supérieur',
  },
  {
    number: '02',
    name: 'CEREC',
    fullName: 'Institut de Formation Qualifiante',
    description:
      "Le pôle de formation qualifiante et professionnelle du groupe, conçu pour acquérir rapidement des compétences opérationnelles directement valorisables en entreprise.",
    focus: 'Certificats professionnels · Insertion rapide',
  },
];

export const CAMPUS_ATOUTS: CampusAtout[] = [
  {
    id: 'licences-masters',
    number: '01',
    title: 'Licences & Masters',
    subtitle: 'Enseignement supérieur',
    iconName: 'cap',
  },
  {
    id: 'formation-qualifiante',
    number: '02',
    title: 'Formation qualifiante',
    subtitle: 'Compétences professionnelles',
    iconName: 'diploma',
  },
  {
    id: 'bibliotheque',
    number: '03',
    title: 'Bibliothèque',
    subtitle: 'Ressources pour étudier',
    iconName: 'book',
  },
  {
    id: 'ouverture-internationale',
    number: '04',
    title: 'Ouverture internationale',
    subtitle: 'Partenariat ESTAM Bénin',
    iconName: 'globe',
  },
  {
    id: 'deux-campus',
    number: '05',
    title: 'Deux campus',
    subtitle: 'Brazzaville & Pointe-Noire',
    iconName: 'campus',
  },
  {
    id: 'inscriptions-ouvertes',
    number: '06',
    title: 'Inscriptions ouvertes',
    subtitle: 'Contactez-nous dès 07h30',
    iconName: 'check',
  },
];

export const FILIERES: Filiere[] = [
  {
    id: 'gestion',
    number: '01',
    title: 'Gestion',
    shortDescription:
      "Pilotage d'organisations, management et administration d'entreprise.",
    fullDescription:
      "Formez-vous aux fondamentaux du management stratégique, à l'organisation des équipes et à l'administration des entreprises publiques et privées au Congo et en Afrique centrale.",
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=70',
    imagePosition: 'object-center',
    gradient: 'linear-gradient(135deg,#16346a,#3b6fd1)',
    category: 'both',
    tracks: ['Licence professionnelle', 'Master (ESTAM Bénin)', 'Formation qualifiante'],
    competences: [
      "Management opérationnel et conduite d'équipes",
      'Administration générale et droit des affaires',
      'Gestion de projet et planification stratégique',
    ],
    debouches: [
      "Assistant de direction et chef d'unité",
      'Responsable administratif et organisationnel',
      'Chargé de gestion PME/PMI',
    ],
  },
  {
    id: 'gestion-comptable-financiere',
    number: '02',
    title: 'Gestion comptable et financière',
    shortDescription:
      'Comptabilité, analyse financière, gestion budgétaire et suivi.',
    fullDescription:
      'Maîtrisez les normes comptables OHADA, le contrôle de gestion, la fiscalité des entreprises et l’élaboration des états financiers indispensables aux directions administratives et financières.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=70',
    imagePosition: 'object-center',
    gradient: 'linear-gradient(135deg,#0e2447,#2a8f7a)',
    category: 'both',
    tracks: ['Licence professionnelle', 'Master (ESTAM Bénin)', 'Formation qualifiante'],
    competences: [
      'Comptabilité générale et analytique (SYSCOHADA)',
      'Gestion budgétaire et tableaux de bord',
      'Fiscalité et audit interne des comptes',
    ],
    debouches: [
      'Comptable et collaborateur en cabinet d’audit',
      'Contrôleur de gestion junior',
      'Responsable suivi administratif et financier',
    ],
  },
  {
    id: 'logistique',
    number: '03',
    title: 'Logistique',
    shortDescription:
      "Organisation des flux, transport et chaîne d'approvisionnement.",
    fullDescription:
      'Au cœur du pôle économique portuaire de Pointe-Noire, acquérez une expertise concrète dans la gestion des flux maritimes, terrestres, le transit douanier et l’approvisionnement.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70',
    imagePosition: 'object-center',
    gradient: 'linear-gradient(135deg,#6b4e07,#e0a526)',
    category: 'both',
    tracks: ['Licence professionnelle', 'Master (ESTAM Bénin)', 'Formation qualifiante'],
    competences: [
      'Gestion de la chaîne d’approvisionnement (Supply Chain)',
      'Transport maritime, portuaire et transit douanier',
      'Gestion des stocks, entreposage et distribution',
    ],
    debouches: [
      'Coordinateur logistique et exploitation portuaire',
      'Déclarant en douane et agent de transit',
      'Responsable approvisionnement et stocks',
    ],
  },
  {
    id: 'commerce-international',
    number: '04',
    title: 'Commerce international',
    shortDescription:
      'Échanges internationaux, négociation et développement commercial.',
    fullDescription:
      'Développez la maîtrise des opérations d’import-export, des Incoterms, du marketing international et de la négociation commerciale dans un contexte économique ouvert.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=70',
    imagePosition: 'object-center',
    gradient: 'linear-gradient(135deg,#16346a,#1fa0c4)',
    category: 'iscom',
    tracks: ['Licence professionnelle', 'Master (ESTAM Bénin)'],
    competences: [
      'Procédures import-export et réglementation douanière',
      'Négociation commerciale et prospection à l’international',
      'Financement des opérations internationales',
    ],
    debouches: [
      'Chargé d’affaires import-export',
      'Responsable développement commercial',
      'Cadre en négoce et distribution internationale',
    ],
  },
  {
    id: 'finance',
    number: '05',
    title: 'Finance',
    shortDescription:
      "Techniques financières et outils d'aide à la décision.",
    fullDescription:
      'Approfondissez l’ingénierie financière, la gestion de trésorerie, l’analyse des investissements et les techniques bancaires pour accompagner la croissance des organisations.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=70',
    imagePosition: 'object-center',
    gradient: 'linear-gradient(135deg,#0e2447,#7a3bd1)',
    category: 'iscom',
    tracks: ['Licence professionnelle', 'Master (ESTAM Bénin)'],
    competences: [
      'Analyse financière et évaluation des risques',
      'Gestion de trésorerie et financement de projets',
      'Techniques bancaires et marchés financiers',
    ],
    debouches: [
      'Analyste financier ou chargé de clientèle banque',
      'Trésorier d’entreprise',
      'Conseiller en gestion financière',
    ],
  },
  {
    id: 'informatique',
    number: '06',
    title: 'Informatique',
    shortDescription:
      "Compétences numériques et technologies de l'information.",
    fullDescription:
      'Acquérez les savoir-faire techniques essentiels en bureautique avancée, systèmes d’information, maintenance, réseaux et outils numériques appliqués à la gestion moderne.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70',
    imagePosition: 'object-center',
    gradient: 'linear-gradient(135deg,#0e2447,#16346a)',
    category: 'both',
    tracks: ['Licence professionnelle', 'Formation qualifiante CEREC'],
    competences: [
      'Administration systèmes, réseaux et maintenance',
      'Développement d’applications et bases de données',
      'Bureautique professionnelle et outils collaboratifs',
    ],
    debouches: [
      'Technicien systèmes et réseaux',
      'Assistant informatique de gestion',
      'Développeur et support numérique en entreprise',
    ],
  },
];

export const CAMPUSES: CampusLocation[] = [
  {
    id: 'pointe-noire',
    city: 'Pointe-Noire',
    title: 'Campus de Pointe-Noire',
    address: "100 m face à l'aérogare, route de la base",
    phones: [
      { label: '06 879 07 07', href: 'tel:+242068790707' },
      { label: '05 357 15 15', href: 'tel:+242053571515' },
    ],
    hours: 'Ouverture à partir de 07h30 (jours ouvrables)',
    highlight: 'Siège littoral · Pôle portuaire & logistique',
  },
  {
    id: 'brazzaville',
    city: 'Brazzaville',
    title: 'Campus de Brazzaville',
    address:
      '201 rue Mouukoulou, Plateau des 15 ans, entre la boulangerie et le commissariat',
    phones: [{ label: '06 879 26 26', href: 'tel:+242068792626' }],
    hours: 'Accueil administratif aux heures ouvrables',
    highlight: 'Campus de la capitale · Plateau des 15 ans',
  },
];
