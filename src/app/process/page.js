'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Process() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-500/30">

            {/* --- Dynamic Creative Navbar --- */}
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
                    <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full glass-pill ml-auto mr-6 transition-all duration-500">
                        {['Services', 'Work', 'Process', 'About'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${item === 'Process' ? 'text-orange-600 glass-active' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}
                            >
                                {item}
                            </Link>
                        ))}
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

            <main className="relative pt-32 px-6 md:px-12 pb-20">
                <div className="max-w-screen-xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-xs mb-3 block">How We Work</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Process</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We follow a proven methodology to ensure every project is delivered on time, within budget, and to the highest standard.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

                        <div className="space-y-24">
                            {[
                                {
                                    step: "01",
                                    title: "Discover & Strategy",
                                    desc: "We start by understanding your business, your goals, and your audience. We research your competitors and define a strategy that sets you apart."
                                },
                                {
                                    step: "02",
                                    title: "Design & Prototype",
                                    desc: "Our designers create visual concepts and interactive prototypes. We focus on user experience (UX) and user interface (UI) to create a seamless journey."
                                },
                                {
                                    step: "03",
                                    title: "Develop & Build",
                                    desc: "Our developers bring the designs to life using modern technologies. We ensure the code is clean, performant, and scalable."
                                },
                                {
                                    step: "04",
                                    title: "Launch & Grow",
                                    desc: "We test everything rigourously before launch. Once live, we help you grow with data-driven marketing and ongoing support."
                                }
                            ].map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                    {/* Content */}
                                    <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>

                                    {/* Center Point */}
                                    <div className="relative z-10 flex cursor-default">
                                        <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center text-xl font-bold text-slate-900 shadow-xl shadow-orange-500/20 hover:scale-110 transition-transform">
                                            {item.step}
                                        </div>
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}
