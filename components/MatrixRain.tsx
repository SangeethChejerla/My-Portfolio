"use client";
import React, { useEffect, useRef } from "react";

const MatrixRain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
    const container = containerRef.current;

    if (!container) return;

    const createRain = () => {
      const element = document.createElement("span");
      element.className = "matrix-character";
      element.style.left = `${Math.random() * 100}%`;
      element.style.animationDuration = `${Math.random() * 3 + 2}s`;
      element.style.opacity = Math.random().toFixed(2);
      element.innerText =
        characters[Math.floor(Math.random() * characters.length)];
      container.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 10000);
    };

    const interval = setInterval(createRain, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
};

export default MatrixRain;
