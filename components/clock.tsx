'use client'

import { useFormatter } from 'next-intl';
import React, { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0); // Default value until client-side renders
  const { dateTime: formatDateTime } = useFormatter();

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center">
      <span className="select-none text-xs text-stone-400 dark:text-stone-600  dark:hover:text-yellow-300 ">
        {formatDateTime(time, {
          timeZone: 'Asia/Kolkata', // Setting time zone to India (Asia/Kolkata)
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          weekday: screenWidth > 480 ? 'short' : undefined,
          day: screenWidth > 480 ? 'numeric' : undefined,
          month: screenWidth > 480 ? 'long' : undefined,
          year: screenWidth > 480 ? 'numeric' : undefined,
        })}
      </span>
    </div>
  );
}
