import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Ralph Vaughan Williams",
  initials: "RVW",
  location: "Accra, Ghana",
  locationLink: "https://www.google.com/maps/place/Accra",
  about: "I love to build.",
  summary:
    "As a Backend Engineer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with TypeScript, Node.js, GraphQL, Go, Python and .NET Core.",
  avatarUrl:
    "https://res.cloudinary.com/dty1ahn1y/image/upload/v1703789752/pfp_ixp2as.jpg",
  personalWebsiteUrl: "https://ralphvwilliams.vercel.app",
  contact: {
    email: "ralphvwilliams@icloud.com",
    tel: "+233 505653926",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ralphvw",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ralphvwilliams/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ralphvwilIiams",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Enyata",
      link: "https://enyata.com",
      badges: ["On-Site"],
      title: "Senior Backend Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, mentored and tutored students in our company sponsored intitiative 'The Academy'. Technologies: TypeScript, GraphQL, Node.js, MongoDB, PostgresQL",
    },

    {
      company: "Hubtel",
      link: "https://hubtel.com",
      badges: ["On-Site"],
      title: "Backend Engineer",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description: "Technologies: C#, PostgresQL, Kafka, AKKA.NET",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Go",
    "Django",
    ".NET Core",
  ],
  projects: [
    {
      title: "Gov.MyAssembly Citizen App",
      techStack: ["C#", "Kafka", "AKKA.NET", "USSD"],
      description:
        "This project facilitated the Ghana government's collection of property rate tax through an application.",
      logo: ConsultlyLogo,
      link: {
        label: "gov.myassembly",
        href: "https://assembly-citizen.gov-gh.com/",
      },
    },
    {
      title: "All African Games",
      techStack: ["C#", "Kafka", "AKKA.NET", "USSD"],
      description:
        "This project provided ticketing services for the All African Games event",
      logo: ConsultlyLogo,
      link: {
        label: "All African Games",
        href: "https://accra2023ag.hpay.co/",
      },
    },
    {
      title: "Kredit Africa",
      techStack: ["TypeScript", "Next.js", "Node.js", "Python", "Django"],
      description: "Empowering inclusive financial futures using AI.",
      logo: ConsultlyLogo,
      link: {
        label: "kreditafrica.com",
        href: "https://kreditafrica.com/",
      },
    },
    {
      title: "HRMS by Enyata",
      techStack: ["TypeScript", "React", "GraphQL", "MongoDB", "Node.js"],
      description: "SaaS for Human Resource Management.",
      logo: MonitoLogo,
      link: {
        label: "hrms.enyata.com",
        href: "https://hrms.enyata.com/",
      },
    },
    {
      title: "Perry",
      techStack: ["Go"],
      description:
        "A command-line interface (CLI) tool that simplifies the process of initializing a new Go web server.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/ralphvw/perry",
      },
    },
    {
      title: "Validator",
      techStack: ["Side Project", "Go"],
      description: "Package to validate http request body in net/http",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/ralphvw/validator",
      },
    },
    {
      title: "Sprint Planner",
      techStack: ["Side Project", "Vue", "Go"],
      description:
        "Streamline sprint planning effortlessly with our intuitive web app for software teams.",
      logo: Minimal,
      link: {
        label: "thesprint.vercel.app",
        href: "https://thesprint.vercel.app",
      },
    },
    {
      title: "Caption Genius",
      techStack: [
        "Side Project",
        "Python",
        "Flask",
        "LangChain",
        "OpenAI",
        "HuggingFace",
      ],
      description: "Generates captions for images",
      logo: BarepapersLogo,
      link: {
        label: "https://caption-frontend-pied.vercel.app/",
        href: "https://caption-frontend-pied.vercel.app/",
      },
    },
    {
      title: "ReplyBot",
      techStack: ["Side Project", "Python", "Django", "OpenAI"],
      description:
        "Replies customer reviews sent via email. Generates appropriate responses based on the sentiment detected",
      logo: YearProgressLogo,
      link: {
        label: "github.com/ralphvw/replybot",
        href: "https://github.com/ralphvw/replybot",
      },
    },
    {
      title: "FluxTribe",
      techStack: ["Typescript", "Node.js", "React"],
      description: "Social app for collaborating on goals",
      logo: YearProgressLogo,
      link: {
        label: "merifot.enyata.com",
        href: "https://merifot.enyata.com",
      },
    },
  ],
} as const;
