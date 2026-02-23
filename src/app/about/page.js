"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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

            {/* --- Navbar handled in Layout --- */}

            {/* --- Main Content --- */}
            <main className="relative pt-32 px-6 md:px-12 pb-20">

                {/* Decorative Backgrounds */}
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

                <div className="max-w-screen-xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-24 max-w-6xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-6">
                            Who We Are
                        </div>
                        <h1 className="text-[2.5rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 whitespace-normal md:whitespace-nowrap leading-[1.1] md:leading-tight">
                            We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Digital</span> Experiences.
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-2 md:px-0">
                            BRNDX partners with ambitious brands to deliver high-performance websites, strategic digital marketing, and multimedia solutions that create measurable impact.
                        </p>
                    </div>

                    {/* Partners Section - clean light carousel, centered */}
                    <div className="w-full py-16 mb-20 relative overflow-hidden">

                        <div className="text-center mb-12 relative z-10">
                            <h2 className="text-4xl md:text-5xl text-slate-900 font-['Playfair_Display'] italic">Our Trusted Partners</h2>
                        </div>

                        {/* Carousel Wrapper - Centered */}
                        <div className="max-w-4xl mx-auto relative w-full overflow-hidden pause-on-hover mask-gradient-sides">
                            <div className="flex w-max items-center gap-10 md:gap-16 animate-scroll">
                                {/* Repeat the logos enough times to fill and loop smoothly */}
                                {
                                    [
                                        { src: '/cs logo w t.png', link: 'https://www.cinelinestudios.in/' },
                                        { src: '/lev ui logo.png', link: '#' },
                                        { src: '/vultrix logo.png', link: 'https://www.vultrx.in/' },
                                        { src: '/just-clicks.png', link: '#' },
                                        { src: '/cs logo w t.png', link: 'https://www.cinelinestudios.in/' },
                                        { src: '/lev ui logo.png', link: '#' },
                                        { src: '/vultrix logo.png', link: 'https://www.vultrx.in/' },
                                        { src: '/just-clicks.png', link: '#' }
                                    ].map((partner, i) => (
                                        <Link
                                            key={i}
                                            href={partner.link}
                                            target={partner.link.startsWith('http') ? "_blank" : "_self"}
                                            className="relative w-40 h-16 invert opacity-60 hover:opacity-100 transition-all duration-300 block"
                                        >
                                            <Image
                                                src={partner.src}
                                                alt="Trusted Partner"
                                                fill
                                                className="object-contain"
                                            />
                                        </Link>
                                    ))
                                }
                            </div>

                            {/* Fade Edges */}
                            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Why Us Section - Premium Bento Layout */}
                    <section className="mt-32 mb-20 relative">
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-300/30 text-orange-600 font-bold tracking-wider uppercase text-[11px] mb-6 backdrop-blur-sm">
                                Why Choose BRNDX
                            </span>
                            <h2 className="text-[2.5rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] md:leading-tight">
                                Built Different. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 whitespace-normal sm:whitespace-nowrap">Built Better.</span>
                            </h2>
                        </div>

                        {/* Asymmetric Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">

                            {/* Large Feature Card 1 - Centered */}
                            <div className="md:col-span-2 lg:col-span-3 lg:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 flex flex-col justify-center items-center text-center min-h-[400px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>

                                <div className="relative z-10 max-w-lg">
                                    <div className="text-8xl font-bold text-white/5 mb-4">01</div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-none">Industry Expertise</h3>
                                    <p className="text-slate-400 leading-relaxed text-lg max-w-md mx-auto">
                                        Years of mastery across web development, digital marketing, and multimedia production.
                                    </p>
                                </div>

                                <div className="relative z-10 mt-8 flex items-center gap-3 text-orange-400 font-bold group-hover:scale-105 transition-transform">
                                    <span>Proven Track Record</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>

                            {/* Stats Card - Centered */}
                            <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-amber-500 p-8 flex flex-col justify-center items-center text-center h-[200px]">
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="text-7xl font-black text-white mb-2 tabular-nums">95%</div>
                                    <p className="text-white/90 font-bold text-sm uppercase tracking-widest">Client Satisfaction</p>
                                </div>
                            </div>

                            {/* Icon Feature - Lightning Fast */}
                            <div className="md:col-span-2 lg:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-6 flex flex-col justify-center items-center text-center hover:border-blue-400/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 h-[200px]">
                                {/* Animated Background Glow */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"></div>

                                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg shadow-blue-500/20">
                                    {/* Bolt Icon with "energy" vibration */}
                                    <svg className="w-7 h-7 text-white group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="relative z-10 font-bold text-slate-900 text-sm tracking-tight uppercase">Speed Driven</h4>
                            </div>

                            {/* Quote Card */}
                            <div className="md:col-span-4 lg:col-span-3 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 p-10 flex items-center justify-center text-center h-[200px]">
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        We don't just deliver projects. <br /> We deliver <span className="italic underline decoration-white/30">partnerships.</span>
                                    </p>
                                </div>
                            </div>

                            {/* --- Balanced Bottom Row (Row 3) --- */}

                            {/* Modern Stack - Centered */}
                            <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 p-8 hover:border-green-300 transition-all duration-500 h-[280px] flex flex-col items-center justify-center text-center">
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-xl mb-4 tracking-tight">Modern Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Tailwind', 'AWS', 'Firebase'].map((tech, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-xl bg-white border border-green-200 text-green-700 text-[10px] font-bold shadow-sm transition-transform hover:scale-105">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Support Card (1 col) */}
                            <div className="md:col-span-2 lg:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-500 h-[280px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center mb-6 shadow-2xl shadow-teal-500/50 animate-pulse mx-auto">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div className="text-4xl font-black text-white mb-2 tracking-tight">24/7</div>
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Support</p>
                                </div>
                            </div>

                            {/* Transparency Card (1 col) */}
                            <div className="md:col-span-2 lg:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 p-8 flex flex-col justify-center items-center text-center hover:border-slate-400 transition-all duration-500 h-[280px]">
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-slate-900/20 px-3">
                                        <div className="absolute inset-0 rounded-xl bg-slate-900 animate-ping opacity-0 group-hover:opacity-20"></div>
                                        <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wide">Transparency</h4>
                                    <p className="text-slate-500 text-[10px] font-medium leading-tight text-center max-w-[140px] mx-auto">Complete visibility into<br />every phase of your project.</p>
                                </div>
                            </div>

                            {/* Results Card - Centered */}
                            <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-8 flex flex-col justify-center items-center text-center hover:border-orange-200 transition-all duration-500 shadow-xl hover:shadow-2xl h-[280px]">
                                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                                <div className="relative z-10">
                                    <div className="text-6xl font-black text-slate-900/5 mb-2">02</div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-2 leading-tight tracking-tight">Results & Growth</h4>
                                    <p className="text-slate-500 text-xs mb-6 font-medium max-w-[180px] mx-auto">Driving measurable impact and conversions.</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 rounded-2xl bg-orange-50/50 border border-orange-100 flex flex-col justify-center items-center group-hover:bg-white transition-colors">
                                            <div className="text-2xl font-black text-orange-600">50+</div>
                                            <p className="text-slate-400 text-[8px] font-bold uppercase tracking-widest">Projects</p>
                                        </div>
                                        <div className="p-3 rounded-2xl bg-orange-50/50 border border-orange-100 flex flex-col justify-center items-center group-hover:bg-white transition-colors">
                                            <div className="text-2xl font-black text-orange-600">4.4</div>
                                            <p className="text-slate-400 text-[8px] font-bold uppercase tracking-widest">Rating</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 text-center">
                            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                                <Link href="/start-project" className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/40 active:scale-[0.98] transition-all duration-300 flex items-center gap-3">
                                    Start Your Project
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </Link>
                                <Link href="/services" className="px-10 py-5 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 font-bold text-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300">
                                    View Our Services
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
