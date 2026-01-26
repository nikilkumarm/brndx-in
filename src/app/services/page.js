'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
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
                                className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${item === 'Services' ? 'text-orange-600 glass-active' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}
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
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-xs mb-3 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Services</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We provide a complete ecosystem of digital services to help your brand thrive in the modern age.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Web Development",
                                desc: "Blazing fast, SEO-optimized websites built with Next.js and React. We focus on performance and scalability.",
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                )
                            },
                            {
                                title: "UI/UX Design",
                                desc: "Beautiful, intuitive interfaces designed to maximize user engagement and provide seamless experiences.",
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                )
                            },
                            {
                                title: "Brand Strategy",
                                desc: "Comprehensive branding kits that tell your story and define your identity in a way that resonates with your audience.",
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                )
                            },
                            {
                                title: "Mobile Apps",
                                desc: "Native and cross-platform mobile applications that put your brand in your customers' pockets.",
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                )
                            },
                            {
                                title: "Digital Marketing",
                                desc: "Data-driven marketing campaigns that drive traffic, convert leads, and grow your revenue.",
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                                )
                            },
                            {
                                title: "Content Creation",
                                desc: "Engaging content that speaks to your audience and builds lasting relationships with your customers.",
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                )
                            }
                        ].map((service, i) => (
                            <div key={i} className="group relative bg-white border border-slate-100 p-10 rounded-[2rem] hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2 cursor-default">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
