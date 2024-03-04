import Balancer from 'react-wrap-balancer'
import React from 'react';
import { IconType } from 'react-icons';
import { HoverEffect } from '../ui/card-hover-effect';
import HoverAnimation from '../ui/hover';
interface Skill {
  name: string;
  icon: IconType; // Change the type of 'icon' from string to React.ReactNode
  description: string;
}


interface SkillCategoryProps {
    category: string;
    skills: Skill[];
    children?: React.ReactNode; // Add the 'children' prop
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, children }) => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">{category}</h2>
        <div className="grid grid-cols-1 gap-4">
            {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        </div>
        
        {children} {/* Rendering children */}
    </div>
);
  
  interface SkillCardProps {
    skill: Skill;
  }
  
  const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
    <>
    <HoverAnimation animationClasses="group-hover:opacity-50">
    <div className="bg-gray-800 p-4 rounded-lg text-center">
      {React.createElement(skill.icon, { className: "text-3xl text-white mb-2 mx-auto" })} {/* Create a React element from the IconType */}
      <h3 className="text-lg font-semibold mb-2 text-white">{skill.name}</h3>
      <p className='text-sm'>
      <Balancer>
       {skill.description}
      </Balancer>
      </p>
    </div>
    </HoverAnimation>
    </>
  );


export default SkillCategory;
