//  icons
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg3 from "./assets/img/skills/php.png";
import SkillImg4 from "./assets/img/skills/laravel.png";
import SkillImg5 from "./assets/img/skills/sql.png";
import SkillImg6 from "./assets/img/skills/react.png";

// project images 
import ProjImg1 from "./assets/img/screens/WorkerCPF.png"


// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    href: "resume",
    name: "resume",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: "mailto:brunofulia@gmail.com",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/Br1Ful14",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/bruno-fulia-0b863924b/",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
];

export const sections = [
  {
    title: "Développeur Web",
    content:
      "J'ai de l'expérience dans le développement de backends utilisant des frameworks PHP comme Laravel ou Symfony, et des bases de données SQL comme MySQL et MariaDB. Je suis compétent en HTML, CSS, Tailwind, Bootstrap, et JavaScript, et j'ai de l'expérience dans le développement d'applications ERP.",
  },
  {
    title: "Chef de Partie",
    content:
      "Chef de Partie dans divers hôtels et restaurants: Hotel Les Glycines - Les Eyzies, Dordogne, France. Royal Hotel San Remo - San Remo, Ligurie, Italie. Martin Berasategui: eMeBe Garrote - San Sebastian, Guipuzcoa, Espagne. Scalo Vanchiglia - Torino, Piemonte, Italie.",
  },
  {
    title: "Avocat",
    content:
      "Avocat et consultant pour diverses entreprises et organisations: Gérant Associé, FULIA FULIA Y ASOCS S.R.L. - La Plata, Argentine. Chef de Service Juridique branche argentine de TELESUR - Bs As Argentine. Coordonnateur de l'Unité des Affaires Environnementales Internationales du Secrétariat National de l'Environnement et du Développement Durable - Bs As, Argentine. Professeur du sujet 'Droit international I' de la Spécialisation en droit de l'environnement, Faculté des Sciences Juridiques et Sociales - UNLP, Argentine.",
  },
];

export const projectsData = [
  {
    title: "test1",
    link: "link1",
    imgUrl: ProjImg1,
  },
  {
    title: "test2",
    link: "link2",
    imgUrl: "./src/assets/img/screens/Cave.jpg",
  },
  {
    title: "test3",
    link: "link3",
    imgUrl: "./src/assets/img/screens/Blog_Cafe.png",
  },
  {
    title: "test4",
    link: "link4",
    imgUrl: "./src/assets/img/screens/FE_Store.png",
  },
  {
    title: "test5",
    link: "link5",
    imgUrl: "./src/assets/img/screens/Template_BF1.png",
  },
  {
    title: "test6",
    link: "link6",
    imgUrl: "./src/assets/img/screens/Template_BF2.png",
  },
];
