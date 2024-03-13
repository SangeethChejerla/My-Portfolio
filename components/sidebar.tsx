'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from '@zolplay/react';
import { cn} from '@/lib/utils';
import ThemeToggle from '@/components/theme-toggle';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { GrProjects, GrFavorite  } from "react-icons/gr";
import { BsGithub, BsYoutube } from 'react-icons/bs';
import { IoPersonSharp,IoHomeOutline } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
  import {TbMail,
  TbMailbox,
} from 'react-icons/tb';
import { BsTwitterX } from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";
import React from 'react';
import Logo from "@/components/Logo"
import { Clock } from './clock';

const links = [
  { href: '/', label: 'Home', icon: IoHomeOutline },
  { href: '/about', label: 'About', icon: IoPersonSharp },
  { href: '/blog', label: 'Blog', icon: FaBlogger },
  { href: '/projects', label: 'Projects', icon: GrProjects },
  { href: '/rules', label: 'Rules', icon: FaScrewdriverWrench },
  { href: '/favorites', label: 'Favorites', icon: GrFavorite },
  {href: `/quotes`, label: `Quotes`, icon: RiDoubleQuotesL},
  { href: '/contact', label: 'Contact', icon: TbMailbox },
  
  // { href: '/gallery', label: 'Gallery', icon: TbPhoto },
]
const social = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/sangeeth_rch',
    icon: BsTwitterX,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sangeeth-Chejerla',
    icon: BsGithub,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCV-hbuPYvCLRKJGLKc5vt0A',
    icon: BsYoutube,
  },
  {
    name: 'Email',
    url: '/contact',
    icon: TbMail,
  },
]

export function Sidebar({ className }: { className?: string }) {


  return (
    <aside
      className={cn('md:mx-0 md:w-44 md:flex-shrink-0 md:px-0', className)}
    >
      <motion.div className="md:sticky md:top-12 md:pr-4" layout layoutRoot>
        <Link
          href="/"
          aria-label={('Title')}
          className="group relative mb-3 ml-3 inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-opacity-50 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-200 dark:focus-visible:ring-stone-700 dark:focus-visible:ring-offset-stone-800 md:mb-6"
        >
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <Logo />
          </motion.span>
        </Link>

        <NavMenu />

        <section className="flex w-full justify-center items-center lg:items-start lg:flex lg:w-full gap-3 py-2 pl-2">
          {social.map((item) => (
            <NextLink
              href={item.url}
              key={item.name}
              aria-label={item.name}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'text-stone-400 transition-colors hover:text-stone-800 dark:text-stone-500 dark:hover:text-stone-100',
                {
                  'hover:text-[#FF0000] dark:hover:text-[#FF0000]':
                    item.name === 'YouTube',
                }
              )}
            >
              <item.icon className="h-4 w-4" />
            </NextLink>
          ))}
        </section>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
        >
          <Separator />
        </motion.div>

        <motion.div
          className="relative z-50  h-12 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            delay: 0.1,
          }}
        >
          <div className='flex flex-col justify-between'>
          <ThemeToggle/>
          <Clock/>
          </div>
          
        
        </motion.div>
      </motion.div>
    </aside>
  )
}

function Separator() {
  return (
    <div className="pointer-events-none mx-2 my-2 hidden h-px bg-stone-200/70 dark:bg-stone-700/50 md:block" />
  )
}

function NavMenu() {
 

  return (
    <NavigationMenu.Root
      className="relative z-50 -ml-4 md:ml-0"
      orientation="vertical"
    >
      <NavigationMenu.List className="m-0 flex scroll-pr-6 list-none flex-wrap items-center overflow-scroll px-4 py-1.5 md:scroll-p-0 md:flex-col md:items-start md:overflow-visible md:px-0 md:py-0">
        {links.map(({ href, label, icon: Icon }) => (
          <MenuLink key={label} href={href} label={(label as any)}>
            <Icon className="h-5 w-5 stroke-current" />
            <span>{(label as any)}</span>
          </MenuLink>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

const MenuLink = React.forwardRef<
  HTMLAnchorElement,
  ComponentProps<{ href: string; label?: string }>
>(({ className, children, href, label }, forwardedRef) => {
  const pathname = usePathname()
  const isActive = href === pathname
  return (
    <li>
      <NavigationMenu.Link active={isActive} asChild>
        <Link
          href={href}
          onClick={() => {
            // @see https://github.com/framer/motion/issues/2006#issuecomment-1477824846
            window.scroll(0, 0)
          }}
          className={cn(
            'relative inline-flex select-none p-2 font-bold leading-none text-stone-400 no-underline outline-none transition-colors hover:text-stone-800 dark:text-stone-500 dark:hover:text-yellow-300',
            'rounded-lg focus-visible:outline-stone-300 dark:focus-visible:outline-stone-700',
            'data-[active]:text-stone-900 dark:data-[active]:text-stone-50',
            className
          )}
          aria-label={label}
          ref={forwardedRef}
        >
          {isActive && (
            <motion.span
              className="absolute inset-0 rounded-xl border border-stone-200 bg-gradient-to-r from-white to-stone-100 dark:border-stone-700 dark:from-stone-900 dark:to-stone-800 md:rounded-l-sm md:rounded-r-xl"
              layoutId="active-menu"
            />
          )}
          <span className="relative z-40 flex items-center space-x-1 text-sm tracking-tight md:pr-1">
            {children}
          </span>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
})
MenuLink.displayName = 'NavigationLinkMenuItem'
