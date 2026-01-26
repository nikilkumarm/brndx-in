"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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

            {/* --- Navbar handled in Layout --- */}

            {/* --- Main Content --- */}
            <main className="relative pt-32 px-6 md:px-12 pb-20">

                {/* Decorative Backgrounds */}
                <div className="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden -z-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full"></div>
                </div>

                <div className="max-w-screen-xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-6">
                            Who We Are
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                            We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Digital</span> Experiences.
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            BRNDX partners with ambitious brands to deliver high-performance websites, strategic digital marketing, and multimedia solutions that create measurable impact.                        </p>
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

                            {/* Fade Edges (Masking handled by gradient mask or manual overlays if mask not supported well, sticking to overlays for compatibility) */}
                            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
