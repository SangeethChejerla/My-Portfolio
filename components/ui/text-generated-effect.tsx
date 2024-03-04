"use client";
import { useEffect,useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export const TextGenerateEffect = ({
    words,
    className,
  }: {
    words: string;
    className?: string;
  }) => {
    const [scope, animate] = useAnimate();
    const [ref, inView] = useInView();
    const [animateOnce, setAnimateOnce] = useState(false);
  
    let wordsArray = words.split(" ");
    
    useEffect(() => {
      if (inView && !animateOnce) {
        animate(
          "span",
          {
            opacity: 1,
          },
          {
            duration: 2,
            delay: stagger(0.2),
          }
        );
        setAnimateOnce(true);
      }
    }, [inView, animateOnce, scope.current]);
  
    const renderWords = () => {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black opacity-0"
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    };
  
    return (
      <div ref={ref} className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className="dark:text-white text-black text-2xl leading-snug tracking-wide text-center">
            {renderWords()}
          </div>
        </div>
      </div>
    );
  };