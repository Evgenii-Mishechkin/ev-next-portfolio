/* Experience */
export interface IWorkData {
  company: string;
  role: string;
  period:string;
  stack:string[];
  links?:IWorklink[];
}

export interface IWorklink {
  label:string;
  href:string;
}

export const work:IWorkData[] = [
  {
    company: 'LLC "Glavny Sovetnik"',
    role: "Frontend Developer / Web Developer",
    period: "2024 – Present",
    stack: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS", "WordPress", "Tilda", "GitLab"],
    links: [
      { label: "glavsovetnik.ru", href: "https://glavsovetnik.ru" },
      { label: "globalbridge.capital", href: "https://globalbridge.capital" },
    ],
  },
  {
    company: 'LLC "FederalPress"',
    role: "Frontend Developer",
    period: "2024 – Present",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitLab"],
    links: [{ label: "fedpress.ru", href: "https://fedpress.ru" }],
  },
  {
    company: 'LLC "Veter"',
    role: "Frontend Developer",
    period: "2023 – 2024 (Project-based)",
    stack: ["JavaScript", "HTML", "CSS", "Vue.js", "GitLab"],
    links: [
      { label: "Trampoline Park NEBO", href: "https://nebojump.ru/" },
      { label: "Sanatorium Polist", href: "https://sanatory-polist.ru/" },
      { label: "School of Heroes", href: "https://geroy.org/" },
      { label: "SPA Hotel Volkov", href: "https://hotel-volkhov.ru/" },
      { label: "Sports School NEBO Sport", href: "https://nebo-sport.ru/" },

    ],
  },
  {
    company: "Global Technology Solutions DOO",
    role: "Web Developer",
    period: "2022 – Present",
    stack: [
      "Vue.js",
      "SvelteKit",
      "TypeScript",
      "TailwindCSS",
      "UIKit",
      "Vite",
      "Git",
      "GitLab"
    ],
  },
];

/* Contacts */

export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
  subtle?: boolean;   
}

export interface ContactsData {
  location: string;
  links: ContactLink[];
}

export const contactsData: ContactsData = {
  location: 'Bar, Montenegro',
  links: [
    {
      label: 'emishechkin@gmail.com',
      href: 'mailto:emishechkin@gmail.com'
    },
    {
      label: 'Telegram',
      href: 'https://t.me/EMishech',
      external: true
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Evgenii-Mishechkin',
      external: true
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/evgenii-mishechkin',
      external: true
    },
    {
      label: 'Resume PDF',
      href: 'files/resume.pdf',
      external: true
    },
    
  ]
};

/* Skills */

export interface ISkillData {
  advanced:string[];
  intermediate:string[];
  backend:string[];
}

export const skills: ISkillData = {
  advanced: [
    "HTML5",
    "CSS3",
    "JavaScript / ES6",
    "Tailwind CSS",
    "Sass",
    "UnoCSS",
    "UIKit",
    "Vite",
    "Figma",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
  ],
  intermediate: [
    "TypeScript",
    "SvelteKit",
    "Next.js",
    "Vue.js",
    "React",
    "Bootstrap",
    "Webpack",
    "Git / GitLab",
    "SEO",
  ],
  backend: [
    "NodeJS",
    "Express.js (REST API, API integrations)",
    "PHP",
    "Laravel",
    "Yii2",
    "MySQL / MariaDB"
  ]
};

/* Pet Projects */

export interface IPetProject {
  title: string;
  note: string;
  href: string;
}

export const petProjects: IPetProject[] = [
  {
    title: 'Art Gallery "Blanchard" — landing',
    note: "Semantic layout, responsive grid/flex, animations.",
    href: "https://evgenii-mishechkin.github.io/blanchard"
  },
  {
    title: 'Chess Club "Club of Four Horses" — landing',
    note: "Layout, typography, micro-interactions.",
    href: "https://evgenii-mishechkin.github.io/four-horse-club/"
  },
  {
    title: 'Client Contact Management System "skb."',
    note: "JS, async/await, REST API, state management.",
    href: "https://github.com/Evgenii-Mishechkin/Client-Contact-Manager"
  },
  {
    title: "Payment component",
    note: "Reusable UI component with validation and UX details.",
    href: "https://payment-component-demo-em.vercel.app/"
  },
  {
    title: "ev-next-portfolio",
    note: "Strict, minimalistic portfolio built with Next.js",
    href: "https://github.com/Evgenii-Mishechkin/ev-next-portfolio.git"
  },
];


