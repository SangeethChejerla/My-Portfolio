'use client'

import { motion } from 'framer-motion'
const variants = {
  hidden:{opacity:0},
  enter:{opacity:1},
};

export default function RootTemplate({ children }:{children: React.ReactNode}) {
  
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
    >
      {children}
    </motion.div>
    </>
  )
}