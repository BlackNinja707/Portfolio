import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  Blockchain: 'blockchain',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Blockchain',
    value: PROJECT_CATEGORY.Blockchain,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://images2.imgbox.com/79/5f/S3hu6kJs_o.jpg',
    title: 'Flipkart Clone - E-Commerce Project',
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It is build with React Js, Node Js.',
    repoLink: 'https://github.com/altershadow/flipkart-clone',
    sourceLink: 'https://flipkart-web.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/portfolio.png',
    title: 'Developer Portfolio',
    description:
      'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: 'https://github.com/AlterShadow/DevPortfolio',
    sourceLink: 'https://thomasken-vercel.app',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/dd/a3/Fcx8cjEr_o.jpg',
    title: 'Kitchen Store - E-Commerce',
    description:
      'The e-commerce to buy kitchen related items. College final year project base on Servlets and JSP (Java)',
    repoLink: 'https://github.com/AlterShadow/E-commerce-Java',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: './assets/Image/adrestus-explorer.png',
    title: 'Adrestus Block Explorer',
    description:
      'Block and Transaction Explorer on Adrestus network using React, Tailwind CSS, Restful APIs, SpringBoot, WebSocket',
    repoLink: 'https://github.com/AlterShadow/Adrestus-Transaction-Explorer',
    sourceLink: 'https://adrestus-explorer.vercel.app/',
    category: [PROJECT_CATEGORY.Blockchain],
  },

  {
    imgSrc: './assets/Image/adrestus.png',
    title: 'Adrestus Website',
    description: 'Adrestus Website using Three.js, Canva, React.js, Tailwind CSS, Email.js, HCaptcha',
    repoLink: 'Private Repo',
    sourceLink: 'https://www.adrestus.net/',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: 'https://images2.imgbox.com/9d/d0/zdDVFtFN_o.png',
    title: 'Netflix Clone - TMDB API Project',
    description: 'Netflix clone using react Js. Proving movies details using TMDB API.',
    repoLink: 'https://github.com/AlterShadow/Adrestus-Transaction-Explorer',
    sourceLink: 'https://netflix-clone-by-dhaval.web.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: './assets/Image/ton-dex.png',
    title: 'Dex on TON network',
    description: 'Decentralized Exchange on TON network using React, Typescript, Tailwind CSS, FunC, Ston.fi SDK.',
    repoLink: 'Private Repo',
    sourceLink: 'https://forfriends.me',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/mc2fi.png',
    title: 'MC2Finance',
    description:
      'A Crosschain non-custodial DeFi Platform to simply follow the best token, traders & Institutions, to learn from their content and earn by following their strategies using Vue, Rust, PostgreSQL, WebSocket',
    sourceLink: 'https://app.mc2.fi',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/dodoex.png',
    title: 'DODO X',
    description: 'Dex and Launchpad, Crosschain Aggregator using Next.js, Solidity, Web3.js, Rainbow kit, Wagmi',
    sourceLink: 'https://dodoex.io/en',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/sidusheroes.jpg',
    title: 'SIDUS Heroes',
    description: '',
    sourceLink: 'https://sidusheroes.com/project/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
  {
    imgSrc: './assets/Image/starkmeta.png',
    title: 'Starkmeta AI Image Platform',
    description:
      'Starkmeta AI Image Generation Platform combined NFT marketplace using React, Typescript, Node.js, MongoDB, Azure, StableDiffusion API',
    sourceLink: 'https://starkmeta.ai',
    category: [PROJECT_CATEGORY.Blockchain, PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: './assets/Image/StarkMarketplace.png',
    title: 'StarkMeta NFT Marketplace',
    description: 'StarkMeta NFT marketplace using React, Typescript, Solidity, ERC721',
    repoLink: 'https://github.com/AlterShadow/NFTMarketplace-SC',
    sourceLink: 'https://stark-marketplace.vercel.app/',
    category: [PROJECT_CATEGORY.Blockchain],
  },
];
