type Label =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Flow"
  | "Testing library"
  | "Cypress"
  | "Bootstrap"
  | "React"
  | "React Native"
  | "CSS-in-JS"
  | "SCSS"
  | "Tailwind CSS"
  | "Prismic.io"
  | "Node.js"
  | "jQuery"
  | "Pug"
  | "Rails"
  | "Gatsby.js"
  | "Next.js";

export type Project = {
  title: string;
  year: string;
  nbOfClients: number;
  isStartup: boolean;
  description?: string;
  labels?: Array<Label>;
  done?: Array<string>;
};

const sitesVitrine = [
  "Mark Decker",
  "Dimis",
  "Marquand",
  "Optimum",
  "Samuel Deschamps",
  "MF07",
  "Atelier d'Arte",
  "Benedicto",
  "Creatys Flor",
  "JCGros",
  "Darcel",
  "Morgane Pochet",
  "Antenne Hertech",
  "Sofia Valves",
  "Bjornsson",
  "Nicolas Tonnard",
  "Gauthier Jansen",
  "Dopsia",
  "Site perso",
  "Amplitude Isolation",
];

const pixelPerfect = ["Compellia", "Logista France", "Moffi", "Agricool"];

const projects: Array<Project> = [
  {
    title: "EDF Store & Forecast",
    year: "2020-2021",
    labels: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Testing library",
      "Cypress",
    ],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Lead front",
      "Création interface client + back-office",
      "Création de formulaires générés à partir de JSON",
      "Participation à la conception sur la partie UX",
    ],
  },
  {
    title: "ENEA Consulting",
    year: "2021",
    labels: ["Gatsby.js", "Tailwind CSS", "TypeScript"],
    nbOfClients: 1,
    isStartup: false,
    done: [
      "Intégration des vues pixel perfect",
      "Netlify CMS",
      "Lighthouse 100%",
      "Multilingue",
    ],
  },
  {
    title: "Agricool",
    year: "2020",
    labels: ["TypeScript", "Next.js", "CSS", "Prismic.io"],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Intégration des vues",
      "Branchement CMS Prismic",
      "Éco-conception",
      "Intégration email pour Mailchimp",
    ],
  },
  {
    title: "SuperReco",
    year: "2019-2020",
    labels: ["Rails", "HTML", "Tailwind CSS", "JavaScript", "Bootstrap"],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Création de toutes les vues du projet",
      "Conseils sur l'UX et création de wireframes",
      "Montée en compétences sur Ruby on Rails pour accompagner le back-end",
    ],
  },
  {
    title: "Sport Managing",
    year: "2019",
    labels: ["React Native", "CSS", "TypeScript", "Node.js"],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Renfort sur le projet en React Native",
      "Création d'une fonctionnalité serveur en Node.js",
    ],
  },
  {
    title: "The Geek Family",
    year: "2019",
    labels: ["React Native", "CSS", "JavaScript"],
    nbOfClients: 2,
    isStartup: true,
    done: [
      "Renfort sur plusieurs projets en React Native",
      "Intégration de nombreuses vues dans un délai très court",
      "Aide sur le front et l'architecture",
      "Rapport d'estimation de projets en React Native",
    ],
  },
  {
    title: "Talium",
    year: "2018",
    labels: ["React", "Flow", "CSS-in-JS", "JavaScript"],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Architecture et stratégie de tests d'une plateforme dans la crypto-monnaie",
      "Binôme avec un autre développeur confirmé en React",
      "Collaboration avec l'équipe interne back-end",
    ],
  },
  {
    title: "Poi Pay",
    year: "2018",
    labels: ["React Native", "CSS-in-JS", "JavaScript"],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Lead dev front sur React Native",
      "Mentoring d'un développeur junior en React Native",
      "Intégration des vues mobile au pixel perfect",
    ],
  },
  {
    title: "Stryng Messaging",
    year: "2017-2018",
    labels: [
      "React",
      "React Native",
      "CSS-in-JS",
      "JavaScript",
      "Testing library",
    ],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Intégration des vues en React.js",
      "POC d'application en React Native",
      "Collaboration à l'équipe front-end",
      "Architecture et stratégie de tests",
      "1 an de collaboration à temps plein",
    ],
  },
  {
    title: "Startup on Rails",
    year: "2017",
    labels: ["React", "React Native", "CSS", "JavaScript", "Bootstrap"],
    nbOfClients: 2,
    isStartup: true,
    done: [
      "Développement front-end et intégration sur un projet React.js",
      "Intégration des vues sur application mobile en React native",
    ],
  },
  {
    title: "Intégration Web",
    year: "2017-2020",
    labels: ["HTML", "CSS", "JavaScript", "jQuery", "SCSS", "Bootstrap"],
    nbOfClients: pixelPerfect.length,
    isStartup: true,
    done: [
      `Collaboration sur ${pixelPerfect.length} projets startups`,
      "Intégration des maquettes fournies au pixel perfect",
      "Adaptation aux technologies choisies par l'équipe interne",
    ],
  },
  {
    title: "Sites vitrine",
    year: "2015-2017",
    labels: ["HTML", "CSS", "JavaScript", "jQuery", "SCSS", "Pug", "Bootstrap"],
    nbOfClients: sitesVitrine.length,
    isStartup: false,
    done: [
      `Création de plus ${sitesVitrine.length} sites vitrines pour des clients dans toute la France`,
      "Collaboration avec de nombreuses agences",
    ],
  },
];

export default projects;
