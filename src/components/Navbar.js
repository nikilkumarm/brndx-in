'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Standard text color logic
    const getTextColor = () => {
        return scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-600 hover:text-slate-900';
    };

    return (
        <nav
            className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] 
          ${scrolled
                    ? 'top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2.5 px-3 sm:px-6'
                    : 'top-0 left-0 right-0 w-full bg-transparent py-6 md:py-10 px-6 md:px-12'
                }`}
        >
            <div className="flex items-center justify-between w-full h-full">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group relative shrink-0">
                    <div className={`relative transition-all duration-300 ${scrolled ? 'w-24 h-8' : 'w-32 h-10'}`}>
                        <Image
                            src="/BRNDX Logo.png"
                            alt="BRNDX"
                            fill
                            className="object-contain drop-shadow-sm"
                        />
                    </div>
                </Link>

                {/* Desktop Nav - Floating Pill Style */}
                <div className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full glass-pill ml-auto mr-6 transition-all duration-500`}>
                    {['Services', 'Process', 'About'].map((item) => {
                        const isActive = pathname === `/${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 
                                    ${isActive
                                        ? 'text-orange-600 glass-active'
                                        : 'text-slate-600 hover:text-slate-900'
                                    }
                                    ${!isActive && scrolled ? 'hover:bg-white/50' : ''}
                                `}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 shrink-0">
                    <Link href="#" className="group relative px-8 py-3.5 bg-slate-900 text-white text-base font-semibold rounded-full overflow-hidden shadow-lg shadow-orange-500/10 hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5">
                        <span className="relative z-10 flex items-center gap-2">
                            Start Project
                            <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-[size:200%] opacity-0 group-hover:opacity-100 animate-gradient-fast transition-opacity duration-300"></div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
