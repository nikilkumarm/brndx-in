'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
    const [scrolled, setScrolled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-500/30">

            {/* --- Background & Spotlight --- */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                {/* Base Faint Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

                {/* Dynamic Spotlight Grid - Reveals grid around cursor */}
                <div
                    className="absolute inset-0 bg-grid-pattern opacity-[0.08]"
                    style={{
                        maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                        WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
                    }}
                ></div>

                {/* Floating Orbs */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full animate-float-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full animate-float-delayed"></div>
            </div>

            {/* --- Navbar handled in Layout --- */}

            <main className="relative pt-32 px-6 md:px-12 pb-20">
                <div className="max-w-screen-xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-xs mb-3 block">Selected Works</span>
                        <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] md:leading-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Masterpieces</span>
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Cineline Studios</h3>
                                <p className="text-slate-500">Media production company</p>
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
