import { Icons } from "@/components/icons";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import {
  EyeIcon, HomeIcon, ListChecks, RefreshCcw, SquareArrowOutUpRight, SquareDashedMousePointer,
  RulerIcon,
  HammerIcon,
  PaintbrushIcon,
  LightbulbIcon,
  DoorOpenIcon,
  TreesIcon,
  WrenchIcon,
  BedIcon,
  LayersIcon,
  SunIcon,
  ShieldIcon,
  GlassWater,
  CheckIcon,
  ThumbsUpIcon,
  FileWarning,
  ClockIcon,
  BrickWallIcon,
  BuildingIcon,
  FactoryIcon,
  FileTextIcon,
  ShieldCheckIcon,
  BatteryIcon,
  ClipboardListIcon,
  WindIcon,
  RecycleIcon,
  AppWindowIcon,
  LeafIcon,
  CloudRainIcon,
  DollarSignIcon,
  AlertTriangleIcon,
  LandmarkIcon,
  GridIcon,
  MountainIcon,
  BookOpenIcon,
  HeartIcon,
  ShoppingCartIcon,
  BadgeSwissFranc,
} from "lucide-react";


export const MATERIALS = {
  exterior: [
    {
      key: "facade",
      name: "Facade Cladding",
      description: "rhombus profile, teak, horizontal",
      items: [
        {
          name: "Composite",
          items: [
            { src: "/composite-selector-1.svg", objectSrc: "/facade-composite-1.png", price: "400", fullName: "Brown Composite vertical line" },
            { src: "/composite-selector-2.svg", objectSrc: "/facade-composite-2.png", price: "450", fullName: "Brown Composite Horizontal line" }
          ]
        },
        {
          name: "Bricks",
          items: [
            { src: "/brick-selector-1.svg", objectSrc: "/brick-1.png", price: "400", fullName: "Brown classic brick" },
            { src: "/brick-selector-2.svg", objectSrc: "/brick-2.png", price: "450", fullName: "Light classic brick" }
          ]
        }
      ]
    },
    {
      key: "frames",
      name: "Frames",
      description: "4-part sliding door, wood, anthracite, ventilation grille",
      items: [
        {
          name: "Layout",
          items: [
            { src: "/layout-selector-1.svg", objectSrc: "/layout-1.png", price: "400", fullName: "classic layout" },
            { src: "/layout-selector-2.svg", objectSrc: "/layout-2.png", price: "850", fullName: "linear layout" },
            { src: "/layout-selector-3.svg", objectSrc: "/layout-3.png", price: "650", fullName: "Railed Multi layout" }

          ]
        }
      ]
    },
    {
      key: "dactrim",
      name: "Dactrim",
      description: "Customizable Dactrim",
      items: [
        {
          name: "Color",
          items: [
            { src: "/dactrim-selector-1.svg", objectSrc: "/dactrim-1.png", price: "400", fullName: "Aluminum" },
            { src: "/dactrim-selector-2.svg", objectSrc: "/dactrim-2.png", price: "850", fullName: "anthracite" },
          ]
        }
      ]
    },
    {
      key: "daklicht",
      name: "Daklicht",
      description: "Customizable Daklicht",
      items: [
        {
          name: "Color",
          items: [
            { src: "/daklicht-selector-1.svg", objectSrc: "/daklicht-1.png", price: "400", fullName: "white daklicht" },
            { src: "/daklicht-selector-2.svg", objectSrc: "/daklicht-2.png", price: "850", fullName: "dark daklicht" },
          ]
        }
      ]
    },
    {
      key: "outdoor-light",
      name: "Out Door Lightning",
      description: "Out Door Lightning links ",
      items: [
        {
          name: "Align",
          items: [
            { src: "/outdoor-light-selector-1.svg", objectSrc: "/outdoor-light-1.png", price: "400", fullName: "left outdoor light" },
            { src: "/outdoor-light-selector-2.svg", objectSrc: "/outdoor-light-2.png", price: "550", fullName: "right outdoor light" },
            { src: "/outdoor-light-selector-3.svg", objectSrc: "/outdoor-light-3.png", price: "850", fullName: "left & right outdoor light" },

          ]
        }
      ]
    }
  ],
  inside: [
    {
      key: "heating",
      name: "Heating",
      description: "Links & double heating",
      items: [
        {
          name: "Align",
          items: [
            { src: "/heating-inside-selector-1.svg", objectSrc: "/heating-inside-1.png", price: "400", fullName: "Right side heating" },
            { src: "/heating-inside-selector-2.svg", objectSrc: "/heating-inside-2.png", price: "560", fullName: "Left Side Heating" },
            { src: "/heating-inside-selector-3.svg", objectSrc: "/heating-inside-3.png", price: "770", fullName: "Left & right Side Heating" },

          ]
        }
      ]
    },
    {
      key: "light-point",
      name: "Light point",
      description: "Wall lamps",
      items: [
        {
          name: "Align",
          items: [
            { src: "/wall-lamp-selector-1.svg", objectSrc: "/wall-lamp-1.png", price: "400", fullName: "Right side wall lamp" },
            { src: "/wall-lamp-selector-2.svg", objectSrc: "/wall-lamp-2.png", price: "560", fullName: "Left Side wall lamp" },
            { src: "/wall-lamp-selector-3.svg", objectSrc: "/wall-lamp-3.png", price: "770", fullName: "Left & right wall lamp" },
          ]
        }
      ]
    },
  ],
  floor:[
    {
      key: "spc-collection",
      name: "SPC collection",
      description: "Choose from spc collections",
      items: [
        {
          name: "Colorize Your SPC",
          items: [
            { src: "/spc-selector-1.png", objectSrc: "/spc-1.png", price: "480", fullName: "Varma Spc floor" },
            { src: "/spc-selector-2.png", objectSrc: "/spc-2.png", price: "480", fullName: "Casisto Spc floor" },
            { src: "/spc-selector-3.png", objectSrc: "/spc-3.png", price: "480", fullName: "Nubo Spc floor" },
            { src: "/spc-selector-4.jpg", objectSrc: "/spc-4.png", price: "480", fullName: "Rapida Spc floor" },
            { src: "/spc-selector-5.jpg", objectSrc: "/spc-5.png", price: "480", fullName: "Argo Spc floor" },
            { src: "/spc-selector-6.jpg", objectSrc: "/spc-6.png", price: "480", fullName: "Mallumo Spc floor" },
          ]
        }
      ]
    },
    {
      key: "lvt-collection",
      name: "LVT collection",
      description: "Choose from lvt collections",
      items: [
        {
          name: "Colorize Your LVT",
          items: [
            { src: "/spc-selector-1.png", objectSrc: "/spc-1.png", price: "480", fullName: "Varma lvt floor" },
            { src: "/spc-selector-2.png", objectSrc: "/spc-2.png", price: "480", fullName: "Casisto lvt floor" },
            { src: "/spc-selector-3.png", objectSrc: "/spc-3.png", price: "480", fullName: "Nubo lvt floor" },
            { src: "/spc-selector-4.jpg", objectSrc: "/spc-4.png", price: "480", fullName: "Rapida lvt floor" },
            { src: "/spc-selector-5.jpg", objectSrc: "/spc-5.png", price: "480", fullName: "Argo lvt floor" },
            { src: "/spc-selector-6.jpg", objectSrc: "/spc-6.png", price: "480", fullName: "Mallumo lvt floor" },
          ]
        }
      ]
    },
  ]
}

export const GALLERY_DATA = [
  { src: '/gallery/item-1.avif' },
  { src: '/gallery/item-2.avif' },
  { src: '/gallery/item-3.avif' },
  { src: '/gallery/item-4.avif' },
  { src: '/gallery/item-5.avif' },
  { src: '/gallery/item-6.avif' },
  { src: '/gallery/item-7.avif' },
  { src: '/gallery/item-8.avif' },
  { src: '/gallery/item-9.avif' },
  { src: '/gallery/item-10.avif' },
]

export const PROJECTS_GALLERY_DATA = [
  { src: '/projects/project-1.avif' },
  { src: '/projects/project-2.avif' },
  { src: '/projects/project-3.avif' },
  { src: '/projects/project-4.avif' },
  { src: '/projects/project-5.avif' },
  { src: '/projects/project-6.avif' },
  { src: '/projects/project-7.avif' },
  { src: '/projects/project-8.avif' },
  { src: '/projects/project-9.avif' },
  { src: '/projects/project-11.avif' },
  { src: '/projects/project-12.avif' },
  { src: '/projects/project-13.avif' },
  { src: '/projects/project-14.avif' },
  { src: '/projects/project-15.avif' },
]


export const STEPS = [
  {
    question: "Which part of your building?",
    items: [
      { name: "Foundation & Groundwork", icon: RulerIcon },
      { name: "Flooring and Internal Design", icon: HammerIcon },
      { name: "Roofing & Insulation", icon: HomeIcon },
      { name: "Exterior Walls & Cladding", icon: PaintbrushIcon },
      { name: "Windows & Doors", icon: DoorOpenIcon },
      { name: "Electrical & Lighting", icon: LightbulbIcon },
      { name: "Plumbing & Drainage", icon: GlassWater },
      { name: "Landscaping & Outdoor", icon: TreesIcon },
    ],
  },
  {
    question: "What kind of Green flooring you want?",
    items: [
      { name: "Rice Straw Wood", icon: PaintbrushIcon },
      { name: "Recycled Plastic PVC", icon: PaintbrushIcon },
      { name: "Hemp Parquet Wood ", icon: PaintbrushIcon },
      { name: "Old Wood", icon: PaintbrushIcon },
      { name: "Matte Floor", icon: PaintbrushIcon },
      { name: "Glossy Floor", icon: PaintbrushIcon },
      { name: "Weatherproof Floor", icon: PaintbrushIcon },
      { name: "Eco-Friendly Paint", icon: PaintbrushIcon },
    ],
  },
  {
    question: "What type of building is it?",
    items: [
      { name: "Residential", icon: HomeIcon },
      { name: "Commercial", icon: BuildingIcon },
      { name: "Industrial", icon: FactoryIcon },
      { name: "Hotel", icon: LayersIcon },
      { name: "Retail", icon: ShoppingCartIcon },
      { name: "Hospitality", icon: BedIcon },
      { name: "Healthcare", icon: HeartIcon },
      { name: "Educational", icon: BookOpenIcon },
    ],
  },
  {
    question: "How large is the surface area?",
    items: [
      { name: "1000m² or less", icon: RulerIcon },
      { name: "1000-6000m²", icon: RulerIcon },
      { name: "6000-12000m²", icon: RulerIcon },
      { name: "12000-25000m²", icon: RulerIcon },
      { name: "25000-200,000m²", icon: RulerIcon },
      { name: "250,000-500,000m²", icon: RulerIcon },
      { name: "More than 500,000m²", icon: RulerIcon },
      { name: "Custom Size", icon: RulerIcon },
    ],
  },
  {
    question: "When is the planned realization?",
    items: [
      { name: "Less than 1 month", icon: LayersIcon },
      { name: "1 till 2 years", icon: LayersIcon },
      { name: "2 till 3 months", icon: LayersIcon },
      { name: "3 till 4 years", icon: LayersIcon },
      { name: "4-5 years", icon: LayersIcon },
      { name: "x", icon: LayersIcon },
      { name: "More than 20 Floors", icon: LayersIcon },
      { name: "Skyscraper", icon: LayersIcon },
    ],
  },
  {
    question: "What is current floor made of?",
    items: [
      { name: "New Project", icon: BrickWallIcon },
      { name: "Concrete", icon: BuildingIcon },
      { name: "Laminate", icon: GlassWater },
      { name: "Metal", icon: ShieldIcon },
      { name: "Hard Wood", icon: TreesIcon },
      { name: "Composite Panels", icon: GridIcon },
      { name: "Stone", icon: MountainIcon },
      { name: "Ceramic Tiles", icon: LayersIcon },
    ],
  },
  {
    question: "What is the condition of the Floor?",
    items: [
      { name: "New", icon: CheckIcon },
      { name: "Good", icon: ThumbsUpIcon },
      { name: "Minor Repairs Needed", icon: WrenchIcon },
      { name: "Major Repairs Needed", icon: FileWarning },
      { name: "Aging but Usable", icon: ClockIcon },
      { name: "Severely Damaged", icon: AlertTriangleIcon },
      { name: "Historic Preservation", icon: LandmarkIcon },
      { name: "Under Construction", icon: HammerIcon },
    ],
  },
  {
    question: "When is your customer expecting your quote?",
    items: [
      { name: "Less than 1 month", icon: ClockIcon },
      { name: "1-3 months", icon: ClockIcon },
      { name: "3-6 months", icon: ClockIcon },
      { name: "6-12 months", icon: ClockIcon },
      { name: "1-2 years", icon: ClockIcon },
      { name: "More than 2 years", icon: ClockIcon },
      { name: "Ongoing Construction", icon: WrenchIcon },
      { name: "No Specific Timeline", icon: QuestionMarkIcon },
    ],
  },
  {
    question: "What is your estimated budget for the project?",
    items: [
      { name: "Less than CHF500,000,", icon: BadgeSwissFranc },
      { name: "CHF500,000 - CHF1M", icon: BadgeSwissFranc },
      { name: "CHF1M - CHF4M", icon: BadgeSwissFranc },
      { name: "CHF4M - CHF12M", icon: BadgeSwissFranc },
      { name: "CHF12M - CHF14M", icon: BadgeSwissFranc },
      { name: "CHF14M - CHF25M", icon: BadgeSwissFranc },
      { name: "CHF25M - CHF50M", icon: BadgeSwissFranc },
      { name: "More than CHF50M", icon: BadgeSwissFranc },
    ],
  },
  {
    question: "What other sustainability features needed?",
    items: [
      { name: "Solar Panels", icon: SunIcon },
      { name: "Rainwater Harvesting", icon: CloudRainIcon },
      { name: "Green Roof", icon: LeafIcon },
      { name: "Energy-Efficient Windows", icon: AppWindowIcon },
      { name: "Smart Lighting", icon: LightbulbIcon },
      { name: "Passive Cooling", icon: WindIcon },
      { name: "Low-Carbon Materials", icon: RecycleIcon },
      { name: "Water-Efficient Plumbing", icon: GlassWater },
    ],
  },
  {
    question: "Which additional services do you need?",
    items: [
      { name: "Architectural Design", icon: BuildingIcon },
      { name: "Engineering Consultation", icon: WrenchIcon },
      { name: "Interior Design", icon: HomeIcon },
      { name: "None", icon: ClipboardListIcon },
      { name: "Structural Assessment", icon: ShieldIcon },
      { name: "Energy Audit", icon: BatteryIcon },
      { name: "Safety Inspection", icon: ShieldCheckIcon },
      { name: "Legal Permits & Compliance", icon: FileTextIcon },
    ],
  },
];

export const DATA = {
  name: "Configurator",
  initials: "DV",
  url: "https://configurator.bouwrevive.nl/",
  location: "Netherlands",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Home design tool",
  logo: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  navbar: [
    { href: "/", label: "Home" },
    { href: "/configurator", label: "Configurator" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  contact: {
    email: "email@example.com",
    tel: "+123456789",
    social: {
      Preview: {
        name: "Preview",
        url: "",
        icon: EyeIcon,
        navbar: true,
      },
      Reset: {
        name: "Reset",
        url: "",
        icon: RefreshCcw,
        navbar: true,
      },
      Exterior: {
        name: "Exterior",
        url: "",
        icon: SquareArrowOutUpRight,

        navbar: true,
      },
      Inside: {
        name: "Inside",
        url: "",
        icon: SquareDashedMousePointer,
        navbar: true,
      },
      Submit: {
        name: "Submit",
        url: "#",
        icon: ListChecks,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
