import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  cllnotification,
  roadmap2,
  searchMd,
  sliders04,
  trophy,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Beneficios",
    url: "#features",
  },
  {
    id: "2",
    title: "Redes Sociais",
    url: "#sociais",
  },
  {
    id: "2",
    title: "Premiações",
    url: "#winners",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const m7Services = [
  "Seguro",
  "Staff 100% ativa",
  "Confiável",
];

export const m7ServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Whatsapp",
    text: "Estamos desenvolvendo uma melhor maneira de comunicação.",
    date: "Julho 2024",
    status: "done",
    imageUrl: cllnotification,
    colorful: true,
  },
  {
    id: "1",
    title: "Discord",
    text: "Estamos desenvolvendo uma melhor maneira de comunicação.",
    date: "Maio 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
];

export const collabText =
  "Nós da M7 amamos ver suas ideias e opiniões lança um vídeo e nos marca aê!";

export const collabContent = [
  {
    id: "0",
    title: "Redes sociais",
    text: collabText,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "1",
    title: "Instagram",
    icon: instagram,
    width: 36,
    height: 28,
  },
  {
    id: "2",
    title: "Whatsapp",
    icon: discord,
    width: 36,
    height: 28,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Comunicacão",
    text: "A comunicação eficaz é essencial para uma plataforma de montagem de times e apostas, trazendo benefícios significativos",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: trophy,
  },
  {
    id: "1",
    title: "Criatividade",
    text: "A plataforma incentiva a criatividade ao permitir que os usuários formem equipes personalizadas e criem estratégias únicas para suas apostas. Com uma interface intuitiva e ferramentas flexíveis.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: trophy,
    light: true,
  },
  {
    id: "2",
    title: "Conexão",
    text: "Na nossa plataforma, se um usuário perder a conexão durante uma partida, a sessão será pausada automaticamente. Isso garante que a partida continue de forma justa e que todos tenha chance.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: trophy,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/m7_academy_/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
