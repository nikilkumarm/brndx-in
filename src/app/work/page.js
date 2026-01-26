'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
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
                                className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${item === 'Work' ? 'text-orange-600 glass-active' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}
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
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-xs mb-3 block">Selected Works</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Masterpieces</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Explore a collection of our most recent projects, showcasing our commitment to design excellence and technical innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Portfolio Item 1 */}
                        <div className="group rounded-3xl overflow-hidden bg-slate-100 relative cursor-pointer">
                            <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-2xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-700">
                                    Project Preview 1
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">Fintech</span>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Nova Finance App</h3>
                                <p className="text-slate-500">A revolutionary banking application designed for the modern user.</p>
                            </div>
                        </div>

                        {/* Portfolio Item 2 */}
                        <div className="group rounded-3xl overflow-hidden bg-slate-100 relative cursor-pointer">
                            <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-2xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-700">
                                    Project Preview 2
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">E-Commerce</span>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Luxe Fashion Store</h3>
                                <p className="text-slate-500">High-end fashion retailer website with immersive product experiences.</p>
                            </div>
                        </div>

                        {/* Portfolio Item 3 */}
                        <div className="group rounded-3xl overflow-hidden bg-slate-100 relative cursor-pointer">
                            <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-2xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-700">
                                    Project Preview 3
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">SaaS</span>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">TaskMaster Pro</h3>
                                <p className="text-slate-500">Productivity platform for remote teams to manage workflows.</p>
                            </div>
                        </div>

                        {/* Portfolio Item 4 */}
                        <div className="group rounded-3xl overflow-hidden bg-slate-100 relative cursor-pointer">
                            <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-2xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-700">
                                    Project Preview 4
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">Charity</span>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ocean Cleanup</h3>
                                <p className="text-slate-500">Non-profit website focused on raising awareness and donations.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
