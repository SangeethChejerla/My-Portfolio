"use client"
import React, { useEffect, useState } from 'react';
import { IoMdAirplane } from "react-icons/io";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <div className={`${visible ? 'block' : 'hidden'} fixed bottom-5 right-5 z-10`}>
            <button
                onClick={scrollToTop}
                aria-label='Back to top'
                className="relative inline-flex overflow-hidden rounded-xl p-px"
            >
                 <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-neutral-950 px-4 py-2 text-sm font-medium text-gray-50 backdrop-blur-3xl">

                <IoMdAirplane className="text-4xl" />
                </span>
                
            </button>
        </div>
    );
}

export default BackToTop;
