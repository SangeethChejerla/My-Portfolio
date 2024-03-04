"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

const SECTION_DATA = [
  { label: 1, href: "/rules", isFirst: true, isLast: false },
  { label: 2, href: "/rules/page2", isFirst: false, isLast: false },
  { label: 3, href: "/rules/page3", isFirst: false, isLast: true },
];

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextPage, setNextPage] = useState<undefined | string>("/");
  const [previousPage, setPreviousPage] = useState<undefined | string>("/");
  const pathname = usePathname();
  const activeSection = SECTION_DATA.find(
    (section) => section.href === pathname
  );

  useEffect(() => {
    setCurrentIndex(activeSection ? activeSection.label : 0);

    const nextSection = SECTION_DATA[currentIndex];
    const previousSection = SECTION_DATA[currentIndex - 2];

    setNextPage(nextSection ? nextSection.href : "/about");
    setPreviousPage(previousSection ? previousSection.href : "/about");
  }, [pathname, activeSection, currentIndex]);

  return (
    <>
     <div>
      {children}
      </div>
      <div className="flex w-full items-center justify-between">
        <Link href={previousPage as string} passHref>
          <Button
            disabled={currentIndex === 1}
            className={`text-sm font-bold rounded-3xl bg-[#e0dede] text-black dark:bg-zinc-800 dark:text-zinc-400 px-7 py-2 opacity-50 hover:bg-[#d1d0d0] dark:hover:bg-zinc-900`}
          >
            <span className="">Back</span>
          </Button>
        </Link>
        <div className={`text-xs font-bold py-2  group-hover:bg-[#e1ffe1c5]`}>
          <p className="text-xs">
            <span className="inline-block dark:text-white">
              {activeSection ? activeSection.label : null}
            </span>
            <span className="inline-block px-3 opacity-50">/</span>
            <span className="inline-block dark:text-white opacity-50">
              {SECTION_DATA.length}
            </span>
          </p>
        </div>

        <Link href={nextPage as string} passHref>
          <Button
            disabled={currentIndex === SECTION_DATA.length}
            className={`text-sm font-bold rounded-3xl bg-zinc-900 text-white dark:bg-yellow-300 px-7 py-2 dark:text-black`}
          >
            <span className="">Next</span>
          </Button>
        </Link>
      </div>
    </>
  );
}
