import React from 'react';
import SkillCategory from '@/components/myskills/skill-category';
import { FaHtml5, FaCss3Alt, FaBolt, FaPalette, FaReact, FaFileCode, FaChevronRight, FaDatabase, FaPython, FaFlask, FaCloud, FaGithub, FaDocker } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiTailwindcss,SiTypescript, SiNumpy, SiTensorflow , SiFoodpanda, SiNotion,SiGoogle  } from "react-icons/si";
import { TbBrandNextjs,TbCircleLetterM,TbCircleLetterS   } from "react-icons/tb";
import { TbLetterP } from "react-icons/tb";
import { MdOutlineDraw } from "react-icons/md";

import { TbBrandOpenai } from "react-icons/tb";


export const frontend = [
  {
    name: 'HTML',
    icon: FaHtml5,
    description: 'Proficient in semantic HTML markup for building the structure of web pages.'
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    description: 'Skilled in styling web pages using CSS3 for design and layout.'
  },
  {
    name: 'HTMX',
    icon: FaBolt,
    description: 'Experienced in using HTMX for creating dynamic web applications with minimal JavaScript.'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    description: 'Proficient in using Tailwind CSS for rapidly building custom user interfaces.'
  },
  {
    name: 'React.js',
    icon: FaReact,
    description: 'Skilled in building interactive user interfaces with React.js, a popular JavaScript library.'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description: 'Experienced in using TypeScript for building scalable and maintainable web applications.'
  },
  {
    name: 'Next.js',
    icon: TbBrandNextjs ,
    description: 'Familiar with Next.js, a React framework for building server-side rendered and static web applications.'
  },
];

export const backend = [
  {
    name: 'Prisma',
    icon: FaDatabase,
    description: 'Experienced in using Prisma, an ORM (Object-Relational Mapping) tool for Node.js and TypeScript.'
  },
  {
    name: 'Django',
    icon: FaPython,
    description: 'Skilled in building web applications with Django, a high-level Python web framework.'
  },
  {
    name: 'Go',
    icon: FaGolang,
    description: 'Proficient in building scalable and efficient backend systems with the Go programming language.'
  },
  {
    name: 'Flask',
    icon: FaFlask,
    description: 'Experienced in developing web applications with Flask, a lightweight Python web framework.'
  },
  {
    name: 'Supabase',
    icon: FaCloud,
    description: 'Familiar with Supabase, an open-source alternative to Firebase for building scalable backend systems.'
  },
  {
    name: 'Drizzle ORM',
    icon: FaDatabase,
    description: 'Skilled in using Drizzle ORM, a lightweight and intuitive ORM for Node.js.'
  },
];

export const additionalSkills = [
  {
    name: 'GitHub',
    icon: FaGithub,
    description: 'Proficient in using GitHub for version control, collaboration, and project management.'
  },
  {
    name: 'Docker',
    icon: FaDocker,
    description: 'Experienced in containerizing applications with Docker for efficient deployment and scalability.'
  },
];

export const AISkills = [
    {
      name: 'TensorFlow',
      icon:  SiTensorflow, // Assuming you have icons for these libraries
      description: 'Proficient in using TensorFlow for building and training deep learning models.'
    },
    {
      name: 'NumPy',
      icon:  SiNumpy ,
      description: 'Skilled in using NumPy for numerical computing and handling large datasets efficiently.'
    },
    {
      name: 'Pandas',
      icon:  SiFoodpanda,
      description: 'Experienced in using Pandas for data manipulation, analysis, and visualization.'
    },
    {
      name: 'Matplotlib',
      icon: TbCircleLetterM ,
      description: 'Proficient in using Matplotlib for creating static, animated, and interactive visualizations.'
    },
    {
      name: 'scikit-learn',
      icon: TbCircleLetterS,
      description: 'Skilled in using scikit-learn for machine learning tasks such as classification, regression, and clustering.'
    },
  ];
  
  export const myTools = [
    {
      name: 'ChatGPT',
      icon: TbBrandOpenai, // Assuming you have icons for these tools
      description: 'Proficient in using ChatGPT for generating human-like text and assisting with various tasks.'
    },
    {
      name: 'Notion',
      icon:  SiNotion ,
      description: 'Skilled in using Notion for documentation, project management, and collaboration.'
    },
    {
      name: 'Gemini AI',
      icon: SiGoogle,
      description: 'Experienced in using Gemini AI for data analysis, insights generation, and decision-making support.'
    },
    {
      name: 'Perplexity AI',
      icon:  TbLetterP,
      description: 'Proficient in using Perplexity AI for natural language processing tasks such as text generation and sentiment analysis.'
    },

    {
      name: 'Excalidraw',
      icon:  MdOutlineDraw,
      description: "Proficient in using Excalidraw, a whiteboard tool for effortlessly sketching diagrams, wireframes, and flowcharts."
    }
  ];
  

const SkillCategoryList: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <SkillCategory category="Frontend Skills" skills={frontend} />
      <SkillCategory category="Backend Skills" skills={backend} />
      <SkillCategory category="AI Skills" skills={AISkills} />
      <SkillCategory category="Additional Skills" skills={additionalSkills} />
      <SkillCategory category="My Tools" skills={myTools} />
    </div>
  );
};

export default SkillCategoryList;
