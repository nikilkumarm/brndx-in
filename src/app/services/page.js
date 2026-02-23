"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: "Web Development",
            provider: "Vultrix",
            desc: "Custom-built, high-performance websites. We use clean code and modern frameworks like Next.js to deliver scalable digital foundations.",
            visual: (
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-full h-full text-orange-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <path d="M10 20 L90 20 L90 80 L10 80 Z" />
                        <path d="M10 30 L90 30" />
                        <circle cx="20" cy="25" r="2" fill="currentColor" />
                        <circle cx="30" cy="25" r="2" fill="currentColor" />
                        <path d="M40 50 L60 50" />
                        <path d="M50 40 L50 60" />
                    </svg>
                </div>
            ),
            accent: "from-orange-500/10 to-transparent"
        },
        {
            title: "Strategic UI/UX",
            provider: "Lev UI",
            desc: "User-centric interfaces designed for clarity and conversion. We blend aesthetics with psychology to guide users toward action.",
            visual: (
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-full h-full text-emerald-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <circle cx="50" cy="50" r="30" />
                        <circle cx="50" cy="50" r="15" />
                        <path d="M50 20 L50 10" />
                        <path d="M50 80 L50 90" />
                        <path d="M20 50 L10 50" />
                        <path d="M80 50 L90 50" />
                    </svg>
                </div>
            ),
            accent: "from-emerald-500/10 to-transparent"
        },
        {
            title: "Digital Marketing",
            provider: "Cineline Studios",
            desc: "Data-driven campaigns that amplify your reach. From SEO to targeted social ads, we put your brand in front of the right audience.",
            visual: (
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-full h-full text-blue-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <path d="M20 80 L40 50 L60 70 L80 30" />
                        <circle cx="80" cy="30" r="3" fill="currentColor" />
                        <path d="M10 90 L90 90" />
                        <path d="M10 10 L10 90" />
                    </svg>
                </div>
            ),
            accent: "from-blue-500/10 to-transparent"
        },
        {
            title: "Multimedia Production",
            provider: "Cineline Studios",
            desc: "Cinematic video production and motion graphics. High-end visual storytelling that captivates and builds brand authority.",
            visual: (
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-full h-full text-rose-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <path d="M30 30 L70 50 L30 70 Z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M20 20 L80 20 L80 80 L20 80 Z" />
                        <circle cx="30" cy="90" r="5" />
                        <circle cx="70" cy="90" r="5" />
                    </svg>
                </div>
            ),
            accent: "from-rose-500/10 to-transparent"
        },
        {
            title: "SEO Optimization",
            provider: "BRNDX",
            desc: "Technical excellence meets content strategy. We improve search rankings to drive organic growth and long-term brand visibility.",
            visual: (
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <circle cx="45" cy="45" r="20" />
                        <path d="M60 60 L85 85" strokeLinecap="round" />
                        <path d="M40 45 H50" />
                    </svg>
                </div>
            ),
            accent: "from-indigo-500/10 to-transparent"
        },
        {
            title: "E-Commerce Build",
            provider: "BRNDX",
            desc: "Secure, high-converting online stores. We handle everything from payment integration to inventory sync for smooth retail.",
            visual: (
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-full h-full text-amber-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <path d="M20 30 H80 L70 70 H30 Z" />
                        <circle cx="35" cy="85" r="5" fill="currentColor" />
                        <circle cx="65" cy="85" r="5" fill="currentColor" />
                        <path d="M15 20 H25 L30 30" />
                    </svg>
                </div>
            ),
            accent: "from-amber-500/10 to-transparent"
        },
        {
            title: "Influence Strategy",
            provider: "Just Clicks",
            desc: "Authentic creator partnerships. We execute influencer campaigns that build genuine trust and expand your range.",
            visual: (
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-full h-full text-teal-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <circle cx="50" cy="30" r="15" />
                        <path d="M20 80 C20 60 80 60 80 80" />
                        <path d="M40 80 V90" />
                        <path d="M60 80 V90" />
                    </svg>
                </div>
            ),
            accent: "from-teal-500/10 to-transparent"
        },
        {
            title: "Core Infrastructure",
            provider: "Vultrix",
            desc: "Scalable cloud solutions and secure DevOps. We ensure your digital assets are always available, consistent, and defended.",
            visual: (
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-full h-full text-purple-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <path d="M30 40 L50 20 L70 40 L50 60 Z" />
                        <path d="M30 60 L50 40 L70 60 L50 80 Z" />
                        <circle cx="50" cy="50" r="2" fill="currentColor" />
                    </svg>
                </div>
            ),
            accent: "from-purple-500/10 to-transparent"
        }
    ];

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500/10 overflow-x-hidden">
            {/* --- Global Premium Light Background --- */}
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

            <main className="relative pt-40 px-6 md:px-12 pb-40">
                <div className="max-w-screen-xl mx-auto">

                    {/* Highly Professional Header (Jobsian Light Aesthetic) */}
                    <div className="relative text-center mb-40 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8 md:mb-12 shadow-sm transition-all hover:border-orange-200 cursor-default">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">The Authority of Excellence</span>
                        </div>

                        <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-slate-900 mb-8 md:mb-12 leading-[1.1] md:leading-[1.0] max-w-7xl whitespace-normal md:whitespace-nowrap">
                            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-[length:200%_auto] animate-gradient-flow block md:inline">Services.</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium tracking-tight px-4 md:px-0">
                            We don't just build. We architect legacies. <br className="hidden md:block" />
                            <span className="text-slate-900/80">Every detail is calculated. Every outcome is inevitable.</span>
                        </p>
                    </div>

                    {/* God-Tier High-Density Grid (White Version) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl shadow-slate-200/50">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="group relative p-7 bg-white hover:bg-slate-50 transition-all duration-700 flex flex-col items-start justify-start min-h-[280px] overflow-hidden"
                            >
                                {/* Luxury Animated Accent (White Theme) */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

                                {service.visual}

                                <div className="relative z-10 w-full">
                                    <div className="flex flex-col gap-2 mb-8">
                                        <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent group-hover:h-12 transition-all duration-1000"></div>
                                        <span className="text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase group-hover:text-orange-500 transition-colors">
                                            {service.provider}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-700">
                                        {service.title}
                                    </h3>

                                    <p className="text-[13px] text-slate-400 leading-relaxed font-medium group-hover:text-slate-600 transition-colors duration-700">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>



                    {/* God-Tier Master CTA */}
                    <div className="mt-12 flex flex-col items-center">
                        <div className="relative group">
                            {/* Premium Ambient Glow */}
                            <div className="absolute -inset-8 bg-orange-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <Link href="/start-project" className="relative px-8 md:px-16 py-6 md:py-8 rounded-[3rem] md:rounded-[4rem] bg-[#0A0A0B] text-white font-bold text-lg md:text-2xl tracking-tight flex items-center justify-center gap-4 md:gap-6 shadow-2xl hover:shadow-[0_40px_120px_-20px_rgba(249,115,22,0.4)] transition-all duration-700 active:scale-95 group">
                                Start Your Project
                                <svg className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/work" className="text-[11px] font-black uppercase tracking-[1em] text-slate-300 hover:text-slate-900 transition-all duration-700 mb-6 block ml-[1em]">
                                The Portfolio Archive
                            </Link>
                            <div className="w-16 h-[1.5px] bg-slate-100 mx-auto"></div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
