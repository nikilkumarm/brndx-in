'use client';

import React from 'react';
import Navbar from '../../components/Navbar';

export default function Services() {
    const services = [
        {
            title: "Web Development",
            desc: "Robust, scalable, and high-performance websites built with cutting-edge technologies.",
            theme: "bg-[#FDF2E3]", // Peach
            labelColor: "text-orange-600 bg-white",
            shape: (
                <div className="absolute bottom-0 right-0 w-64 h-64 opacity-50 pointer-events-none">
                    <div className="absolute bottom-0 right-10 w-40 h-40 rounded-full bg-gradient-to-t from-orange-300 to-orange-100 blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-48 bg-gradient-to-t from-orange-400 to-orange-200 rounded-t-full opacity-80 mix-blend-multiply"></div>
                </div>
            )
        },
        {
            title: "UI/UX Design",
            desc: "User-centric design that balances aesthetics with functionality for intuitive journeys.",
            theme: "bg-[#EBE9F3]", // Lavender
            labelColor: "text-purple-600 bg-white",
            shape: (
                <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 opacity-60 pointer-events-none">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300 to-white blur-2xl"></div>
                    <div className="absolute top-0 right-0 w-24 h-48 bg-purple-400 rounded-r-full mix-blend-multiply opacity-50"></div>
                </div>
            )
        },
        {
            title: "Brand Strategy",
            desc: "Defining your unique voice and visual identity to stand out in a crowded marketplace.",
            theme: "bg-[#E4F4E5]", // Mint
            labelColor: "text-green-600 bg-white",
            shape: (
                <div className="absolute bottom-0 right-0 w-64 h-64 opacity-50 pointer-events-none overflow-hidden rounded-br-3xl">
                    <div className="absolute bottom-[-20px] right-[-20px] w-56 h-56 bg-gradient-to-br from-green-300 to-emerald-100 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 right-10 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[120px] border-b-green-400/40 transform -rotate-12"></div>
                </div>
            )
        },
        {
            title: "Mobile Solutions",
            desc: "Native and cross-platform mobile applications that provide seamless experiences via native solutions.",
            theme: "bg-[#FCEAF6]", // Pink
            labelColor: "text-pink-600 bg-white",
            shape: (
                <div className="absolute bottom-10 right-10 w-40 h-40 opacity-50 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-100 blur-2xl rounded-full"></div>
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-pink-400/40"></div>
                </div>
            )
        },
        {
            title: "Digital Growth",
            desc: "Data-driven marketing strategies designed to increase reach and conversion.",
            theme: "bg-[#E0F2FE]", // Sky
            labelColor: "text-sky-600 bg-white",
            shape: (
                <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-sky-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-sky-400 rounded-full mix-blend-multiply opacity-50"></div>
                </div>
            )
        },
        {
            title: "Content & Media",
            desc: "Compelling storytelling through high-quality visuals, copy, and motion graphics.",
            theme: "bg-[#FFF7ED]", // Yellow-ish
            labelColor: "text-amber-600 bg-white",
            shape: (
                <div className="absolute bottom-0 right-0 w-48 h-48 opacity-40 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-300 rounded-tl-full blur-xl"></div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-500/30">

            <Navbar />

            <main className="relative pt-32 px-6 md:px-12 pb-20 overflow-hidden min-h-screen">

                <div className="max-w-screen-xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold tracking-wider uppercase text-[10px] mb-4 shadow-sm">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                            World-Class <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Services</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-100/50 -z-0 -rotate-1 rounded-full"></span>
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                            Premium digital solutions. We blend aesthetics with functionality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className={`group relative ${service.theme} p-10 h-80 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2`}>

                                {/* Geometric Background Shapes */}
                                {service.shape}

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col h-full items-start justify-between">

                                    {/* Top Label */}
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase mb-6 ${service.labelColor} shadow-sm`}>
                                            SERVICE
                                        </span>
                                        <h3 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-sm">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Button */}
                                    <button className="flex items-center gap-2 group/btn text-slate-900 border-b border-slate-900/20 pb-0.5 hover:border-slate-900 transition-all text-sm font-bold mt-auto">
                                        Learn more
                                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
