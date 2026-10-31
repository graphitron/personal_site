// All site content lives here — edit this file to update the portfolio.

export const PROFILE = {
  name: 'Jagadeeswaran A R',
  shortName: 'Jagadeeswaran',
  role: 'Product Designer',
  email: 'jagadeesh.connects@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jagadeeswaran-a-r-91b9b326b/',
  resume: '/Jagadeeswaran-Resume.pdf',
  careerStart: new Date(2023, 5, 1), // June 2023 — drives the "years of experience" figure
  openToWork: true,
};

export function yearsOfExperience(now = new Date()): number {
  const months =
    (now.getFullYear() - PROFILE.careerStart.getFullYear()) * 12 +
    (now.getMonth() - PROFILE.careerStart.getMonth());
  return Math.floor(months / 12);
}

// Phrases the hero "prompt box" cycles through.
export const PROMPTS = [
  'Make AI translation feel effortless',
  'Turn reading into a conversation',
  'Design 10+ AI tools as one product',
  'Ship a product from zero to launch',
];

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  roles: string[];
  metrics: Metric[];
  gallery: { src: string; alt: string }[];
  url: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ailaysa',
    title: 'Ailaysa',
    tagline: 'Multilingual AI content platform',
    summary:
      'One workspace for AI writing, translation, voice and visuals, used by individuals and enterprises. I designed the end-to-end workflows that tie 10+ AI modules into a single, predictable product.',
    tags: ['AI', 'SaaS', 'B2B', 'Enterprise UX'],
    roles: ['Product design', 'Workflow design', 'Interaction design', 'Design system'],
    metrics: [
      { value: '4×', label: 'growth in daily active users' },
      { value: '10+', label: 'AI modules designed' },
      { value: '9k+', label: 'users on the platform' },
    ],
    gallery: [
      { src: '/img/work/ailaysa-1.jpg', alt: 'Ailaysa home page listing AI writing, translation and voice tools' },
      { src: '/img/work/ailaysa-3.jpg', alt: 'Ailaysa project dashboard with multilingual translation jobs' },
      { src: '/img/work/ailaysa-2.jpg', alt: 'Ailaysa product interface detail' },
    ],
    url: 'https://ailaysa.com',
  },
  {
    id: 'chaireader',
    title: 'Chaireader',
    tagline: 'AI-interactive reading platform',
    summary:
      'Chaireader turns reading into a conversation — readers discover and explore books through AI dialogue. I took it from a blank canvas to launch, then adapted it for white-label enterprise clients.',
    tags: ['AI', 'B2C', 'Conversational UX'],
    roles: ['0→1 product design', 'Conversational flows', 'Prototyping', 'Visual system'],
    metrics: [
      { value: '0 → 1', label: 'end-to-end creation & launch' },
      { value: '5+', label: 'white-label enterprise clients' },
    ],
    gallery: [
      { src: '/img/work/chaireader-1.jpg', alt: 'Chaireader AI book discovery search with suggested prompts' },
      { src: '/img/work/chaireader-2.jpg', alt: 'Chaireader reading and conversation screen' },
      { src: '/img/work/chaireader-3.jpg', alt: 'Chaireader catalogue screen' },
    ],
    url: 'https://chaireader.com',
  },
];

export const CAPABILITIES = [
  'AI-powered product design',
  'UX/UI for B2B & B2C',
  'Design systems',
  'Prototyping',
  'Conversational interaction',
  'Multilingual workflows',
  'Enterprise design',
];

export const TOOLS = [
  { name: 'Figma', icon: '/img/tools/figma.png' },
  { name: 'Framer', icon: '/img/tools/framer.jpg' },
  { name: 'Photoshop', icon: '/img/tools/photoshop.png' },
  { name: 'Illustrator', icon: '/img/tools/illustrator.png' },
  { name: 'InDesign', icon: '/img/tools/indesign.png' },
  { name: 'Canva', icon: '/img/tools/canva.jpg' },
];

export const EXPERIENCE = [
  {
    role: 'Product Designer (UX/UI)',
    company: 'Ailaysa',
    logo: '/img/ailaysa-logo.png',
    period: 'Jun 2023 — Present',
    meta: 'Full-time · On-site',
    description:
      'Leading design for enterprise-grade AI tools across writing, translation, voice and imagery. Redesigned core workflows that lifted user adoption by 40%, and led Chaireader from zero to launch.',
  },
];

export interface VisualProject {
  id: string;
  title: string;
  kind: string;
  tools: string[];
  ratio: 'landscape' | 'wide';
  images: string[];
}

export const VISUALS: VisualProject[] = [
  {
    id: 'brochure',
    title: 'Ailaysa EU brochure',
    kind: 'Print · Brand',
    tools: ['Illustrator', 'InDesign'],
    ratio: 'landscape',
    images: ['/img/visuals/brochure-1.jpg', '/img/visuals/brochure-2.jpg', '/img/visuals/brochure-3.jpg'],
  },
  {
    id: 'poster',
    title: 'Chat with Books poster',
    kind: 'Print · Campaign',
    tools: ['Figma', 'Photoshop'],
    ratio: 'landscape',
    images: ['/img/visuals/poster-1.jpg', '/img/visuals/poster-2.jpg', '/img/visuals/poster-3.jpg'],
  },
  {
    id: 'deck',
    title: 'Multilingual LLM pitch deck',
    kind: 'Presentation · Storytelling',
    tools: ['Figma'],
    ratio: 'wide',
    images: ['/img/visuals/deck-1.jpg', '/img/visuals/deck-2.jpg', '/img/visuals/deck-3.jpg', '/img/visuals/deck-4.jpg'],
  },
];

// LinkedIn carousels. Add a `url` to any post to link straight to it.
export const POSTS: { image: string; title: string; url?: string }[] = [
  { image: '/img/posts/post-01.jpg', title: 'AI & human love' },
  { image: '/img/posts/post-02.jpg', title: '6 things that confuse users more than you think' },
  { image: '/img/posts/post-03.jpg', title: "20 habits that show you're levelling up as a designer" },
  { image: '/img/posts/post-04.jpg', title: "Design principles that don't always work" },
  { image: '/img/posts/post-05.jpg', title: 'Escape hatches' },
  { image: '/img/posts/post-06.jpg', title: 'Experience universe' },
  { image: '/img/posts/post-07.jpg', title: 'How to design a life that feels like yours' },
  { image: '/img/posts/post-08.jpg', title: "OpenAI's first rebrand" },
  { image: '/img/posts/post-09.jpg', title: 'Shapes speak — are you listening?' },
  { image: '/img/posts/post-10.jpg', title: "There's no final version in UX" },
  { image: '/img/posts/post-11.jpg', title: 'Time is part of UX' },
  { image: '/img/posts/post-12.jpg', title: 'What if all AI tools vanished tomorrow?' },
  { image: '/img/posts/post-13.jpg', title: 'When UX breaks before AI starts' },
  { image: '/img/posts/post-14.jpg', title: "What's wrong with “Submit”?" },
  { image: '/img/posts/post-15.jpg', title: 'Anatomy of typography' },
];
