'use client'

import { useFormatter } from 'next-intl';
import React from 'react'

export function Clock() {
  const [time, setTime] = React.useState(new Date())
  const [mounted, setMounted] = React.useState(false)
  const { dateTime: formatDateTime } = useFormatter()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex h-8 items-center px-2 py-1">
      <span className="select-none text-xs text-stone-400 dark:text-stone-600  dark:hover:text-yellow-300">
        {formatDateTime(time, {
          timeZone: 'Asia/Kolkata', // Setting time zone to India (Asia/Kolkata)
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          weekday: 'short',
          day: 'numeric', // Adding day
          month: 'long', // Adding month
          year: 'numeric', // Adding year
        })}
      </span>
    </div>
  )
}