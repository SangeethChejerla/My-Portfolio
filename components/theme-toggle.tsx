"use client";

import React from "react";
import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center shado bg-[#111] border-zinc-800  rounded-full">
      <button
        className={`mr-2 p-1 dark:text-zinc-500 text-zinc-700 ${
          theme === "dark"
            ? "bg-[#333] text-zinc-50 rounded-full shadow-xl"
            : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <div className="hover:text-yellow-300">
        <Icons.moon />
        </div>
      </button>
      <h1 className="text-stone-500 transition-colors  dark:text-stone-500 hover:text-yellow-300">only dark</h1>
      </div>
  );
}
