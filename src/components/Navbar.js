'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when pathname changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navItems = ['Services', 'Work', 'Process', 'About'];

    return (
        <>
            <nav
                className={`fixed z-[60] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] 
              ${scrolled
                        ? 'top-5 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl rounded-full bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2 px-3 sm:px-6'
                        : 'top-0 left-0 right-0 w-full bg-transparent py-6 md:py-8 px-6 md:px-12 shadow-none'
                    }`}
            >
                <div className="flex items-center justify-between w-full h-full relative">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative shrink-0">
                        <div className={`relative transition-all duration-300 ${scrolled ? 'w-20 h-7 md:w-24 md:h-8' : 'w-28 h-9 md:w-32 md:h-10'}`}>
                            <Image
                                src="/BRNDX Logo.png"
                                alt="BRNDX"
                                fill
                                priority
                                className="object-contain drop-shadow-sm"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav - Floating Pill Style */}
                    <div className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full glass-pill ml-auto mr-6 transition-all duration-500`}>
                        {navItems.map((item) => {
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

                    {/* Actions & Mobile Toggle */}
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        <Link href="/start-project" className="hidden sm:inline-flex group relative px-6 md:px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full overflow-hidden shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5">
                            <div className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/20 transition-colors duration-300"></div>
                            <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                                Start Project
                                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                            </span>
                        </Link>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 
                                ${scrolled ? 'bg-slate-900 text-white' : 'bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200'}`}
                            aria-label="Toggle Menu"
                        >
                            <div className="w-5 h-5 relative flex flex-col justify-center gap-1.5">
                                <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                                <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 translate-y-[-6px]' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[55] lg:hidden transition-all duration-700 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Backdrop with Blur */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)}></div>

                {/* Menu Content */}
                <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full pt-32 px-10 pb-10">
                        <div className="space-y-6 flex-1">
                            {navItems.map((item, idx) => {
                                const isActive = pathname === `/${item.toLowerCase()}`;
                                return (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase()}`}
                                        className={`group flex items-center justify-between py-4 border-b border-slate-50 transition-all duration-500`}
                                        style={{ transitionDelay: `${idx * 50}ms`, transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(20px)', opacity: mobileMenuOpen ? 1 : 0 }}
                                    >
                                        <span className={`text-4xl font-bold tracking-tighter ${isActive ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'}`}>
                                            {item}
                                        </span>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-600'}`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="mt-auto space-y-6" style={{ transitionDelay: '300ms', transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: mobileMenuOpen ? 1 : 0 }}>
                            <Link
                                href="/start-project"
                                className="w-full py-6 rounded-3xl bg-slate-900 text-white flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-slate-900/20 active:scale-95 transition-all"
                            >
                                Start Your Project
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>

                            <div className="flex items-center justify-between text-slate-400 text-xs font-black uppercase tracking-widest px-2">
                                <span>© 2024 BRNDX</span>
                                <div className="flex gap-4">
                                    <span className="hover:text-orange-600 cursor-pointer">IG</span>
                                    <span className="hover:text-orange-600 cursor-pointer">TW</span>
                                    <span className="hover:text-orange-600 cursor-pointer">LI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
