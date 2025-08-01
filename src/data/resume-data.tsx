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
  "Backend engineer who has taken products from idea to launch",
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
        url: "https://x.com/rlphvwilliams",
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
      company: "Hubtel",
      link: "https://hubtel.com",
      badges: ["On-Site"],
      title: "Lead Software Engineer",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Built highly scalable applications. Contributed to the growth and success of Hubtel, recently recognized as the 30th fastest-growing company in Africa. Technologies: C#, PostgresQL, Kafka, AKKA.NET",
    },
    {
      company: "Enyata",
      link: "https://enyata.com",
      badges: ["On-Site"],
      title: "Backend Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, mentored and tutored students in our company sponsored intitiative 'The Academy'. Technologies: TypeScript, GraphQL, Node.js, MongoDB, PostgresQL",
    },
  ],
  skills: [
    "C",
    "Zig",
    "JavaScript",
    "Go",
    "Python",
    "C#",
    "Rust",
  ],
  projects: [
    {
      title: "Rediz",
      techStack: ["Zig"],
      description: "A redis client for zig",
      logo: ConsultlyLogo,
      link: {
        label: "rediz",
        href: "https://github.com/ralphvw/rediz",
      },
    },
    {
      title: "Hubtel App",
      techStack: ["C#", ".NET", "Kafka", "AKKA.NET", "USSD"],
      description:
        "an app that connects users to top vendors for everyday essentials and allows users to send money, offering the best deals with ultra-fast delivery.",
      logo: ConsultlyLogo,
      link: {
        label: "hubtel App",
        href: "https://hubtel.com/get-the-app",
      },
    },
    {
      title: "Kredit Africa",
      techStack: ["TypeScript", "Node.js", "Python", "AI"],
      description: "Empowering inclusive financial futures using AI.",
      logo: ConsultlyLogo,
      link: {
        label: "kreditafrica.com",
        href: "https://kreditafrica.com/",
      },
    },
    {
      title: "EtherAudit",
      techStack: ["Python", "AI"],
      description:
        "Paste any Solidity smart contract. Instantly get security insights, gas optimizations, and key function analysis powered by GPT-4o.",
      logo: ConsultlyLogo,
      link: {
        label: "EtherAudit",
        href: "https://etheraudit.vercel.app/",
      },
    },
    {
      title: "Companion",
      techStack: ["Python", "AI"],
      description:
        "Companion is a command-line tool that answers natural language questions about unfamiliar repositories. It combines static code analysis, vector search, and AI to help you understand any codebase faster",
      logo: ConsultlyLogo,
      link: {
        label: "Companion",
        href: "https://github.com/ralphvw/companion",
      },
    },
    {
      title: "BardNet",
      techStack: ["Python", "AI"],
      description:
        "A minimal PyTorch implementation of a GPT-style transformer model that learns from Shakespeare’s works to generate text in his style.",
      logo: ConsultlyLogo,
      link: {
        label: "Companion",
        href: "https://github.com/ralphvw/bardNet",
      },
    },
    {
      title: "Ghana Stadium",
      techStack: ["C#", ".NET", "Kafka", "AKKA.NET", "USSD"],
      description:
        "A web application for the National Sports Authority of Ghana, enabling fans to purchase tickets for Black Stars games with seamless seat assignments and real-time availability.",
      logo: ConsultlyLogo,
      link: {
        label: "ghanastadium",
        href: "https://ghanastadium.com",
      },
    },
    {
      title: "EchoLive",
      techStack: ["C#", ".NET", "Kafka", "AKKA.NET", "USSD"],
      description:
        "A event hosting and ticketing platform that has hosted events such as Tidal Rave, Zaama Disco and Around The World",
      logo: ConsultlyLogo,
      link: {
        label: "echolive",
        href: "https://echolive.live",
      },
    },
    {
      title: "Payroll",
      techStack: ["C#", ".NET", "Kafka", "AKKA.NET"],
      description:
        "An efficient app designed to streamline payroll processing for small to medium-sized businesses",
      logo: ConsultlyLogo,
      link: {
        label: "Payroll",
        href: "https://staff-payroll.hubtel.com",
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
      title: "Cloth",
      techStack: ["Rust"],
      description:
        "Cloth physics simulator",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/ralphvw/cloth",
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
      title: "ReplyBot",
      techStack: ["Side Project", "Python", "Django", "OpenAI"],
      description:
        "Replies customer reviews sent via email. Generates appropriate responses based on the sentiment detected",
      logo: YearProgressLogo,
      link: {
        label: "github.com/ralphvw/replybot",
        href: "https://github.com/ralphvw/replybot",
      },
    }
  ],
} as const;
