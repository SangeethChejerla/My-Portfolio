import React from 'react';
import {cn} from "@/lib/utils"

interface HoverAnimationProps {
  children: React.ReactNode;
  animationClasses: string;
}

const HoverAnimation: React.FC<HoverAnimationProps> = ({ children, animationClasses }) => {
  return (
    <div className="relative group">
      <div className={cn("absolute -inset-0 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-lg blur opacity-25 transition duration-1000", animationClasses)}></div>
      {children}
    </div>
  );
};

export default HoverAnimation;
