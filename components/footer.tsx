'use client'

import { cn } from '@/lib/utils'


export function Footer() {


  return (
    <footer
      className={cn(
        'absolute inset-x-0 bottom-10 flex h-20 flex-col items-center justify-center'
      )}
    >
      <div className="h-px w-1/2 rounded-xl bg-gradient-to-r from-stone-50 to-stone-200 dark:from-stone-900 dark:to-stone-700" />

      <p className="mb-1 mt-4 text-sm dark:text-stone-400">
  {'© ' + new Date().getFullYear() + ' - Sangeeth Reddy'}
</p>
    </footer>
  )
}