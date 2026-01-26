'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Process() {
    const [scrolled, setScrolled] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Intersection Observer for Process Steps
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px', // Activate only when element is in the absolute center
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const stepIndex = parseInt(entry.target.getAttribute('data-step'));
                    setActiveStep(stepIndex);
                }
            });
        }, observerOptions);

        const steps = document.querySelectorAll('.process-step');
        steps.forEach((step) => observer.observe(step));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            steps.forEach((step) => observer.unobserve(step));
        };
    }, []);

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-500/30">

            {/* --- Navbar handled in Layout --- */}

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
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block">
                            {/* Animated Line Fill */}
                            <div
                                className="absolute top-0 left-0 w-full bg-orange-500 transition-all duration-1000 ease-out"
                                style={{ height: `${(activeStep / 4) * 100}%` }}
                            ></div>
                        </div>

                        <div className="space-y-32">
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
                                },
                                {
                                    step: "05",
                                    title: "Evolve & Scale",
                                    desc: "Digital products are living ecosystems. We continuously iterate based on real-world data, ensuring your platform adapts and scales with your success."
                                }
                            ].map((item, index) => {
                                const isActive = activeStep === index;
                                return (
                                    <div
                                        key={index}
                                        className={`process-step flex flex-col md:flex-row items-center gap-12 transition-all duration-700 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95 blur-[1px]'}`}
                                        data-step={index}
                                    >
                                        {/* Content */}
                                        <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>{item.title}</h3>
                                            <p className={`text-lg leading-relaxed transition-colors duration-500 ${isActive ? 'text-slate-600' : 'text-slate-300'}`}>{item.desc}</p>
                                        </div>

                                        {/* Center Point */}
                                        <div className="relative z-10 flex cursor-default">
                                            <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center text-2xl font-black transition-all duration-500 ${isActive ? 'bg-orange-500 border-orange-200 text-white shadow-2xl shadow-orange-500/40 scale-110' : 'bg-white border-slate-200 text-slate-300'}`}>
                                                {item.step}
                                            </div>
                                            {/* Pulse Ring for Active */}
                                            {isActive && <div className="absolute inset-0 rounded-full border-2 border-orange-500 animate-ping"></div>}
                                        </div>

                                        {/* Empty Space for alignment */}
                                        <div className="flex-1 hidden md:block"></div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                    {/* Collaborative Journey Map Section */}
                    <div className="mt-32 mb-20 relative overflow-hidden px-4 md:px-0">

                        <div className="flex flex-col items-center justify-center text-center mb-24 relative z-10 max-w-4xl mx-auto">
                            <span className="text-orange-600 font-bold tracking-wider uppercase text-xs mb-3 block text-center">Collaboration Journey</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">Your Roadmap with Us</h2>
                            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-center">A clear path of collaboration. We drive the car, but you navigate the destination.</p>
                        </div>

                        {/* Desktop Winding Road (Vertical) */}
                        <div className="relative max-w-5xl mx-auto h-[1500px] hidden lg:block translate-x-20">

                            {/* The Road SVG */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 1500" fill="none" preserveAspectRatio="xMidYMin meet">
                                <defs>
                                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#f8fafc" stopOpacity="0" />
                                        <stop offset="10%" stopColor="#000000" stopOpacity="0.8" />
                                        <stop offset="90%" stopColor="#000000ff" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Road Base */}
                                <path
                                    d="M450 0 C 450 100, 300 100, 300 200 C 300 350, 600 400, 600 550 C 600 700, 300 750, 300 900 C 300 1050, 600 1050, 600 1200 L 600 1350"
                                    stroke="url(#roadGradient)"
                                    strokeWidth="60"
                                    strokeLinecap="round"
                                    fill="none"
                                />

                                {/* Road Dashed Line */}
                                <path
                                    id="windingPath"
                                    d="M450 0 C 450 100, 300 100, 300 200 C 300 350, 600 400, 600 550 C 600 700, 300 750, 300 900 C 300 1050, 600 1050, 600 1200 L 600 1350"
                                    stroke="#f97316"
                                    strokeWidth="3"
                                    strokeDasharray="12 12"
                                    strokeLinecap="round"
                                    fill="none"
                                    className="opacity-40"
                                />

                                {/* Animated Traveler on Path */}
                                <circle r="6" fill="#f97316" className="drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
                                    <animateMotion
                                        dur="10s"
                                        repeatCount="indefinite"
                                        path="M450 0 C 450 100, 300 100, 300 200 C 300 350, 600 400, 600 550 C 600 700, 300 750, 300 900 C 300 1050, 600 1050, 600 1200 L 600 1350"
                                        rotate="auto"
                                    />
                                </circle>
                            </svg>

                            {/* Node 1: Top Left (Workshops) */}
                            <div className="absolute top-[200px] left-[300px] w-80 transform -translate-x-full pr-12 z-10">
                                <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                                    <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white shadow-lg mb-2"></div>
                                    <div className="px-3 py-1 rounded-full bg-slate-900 text-white font-bold text-[10px] uppercase tracking-wider shadow-md">Step 01</div>
                                </div>

                                <div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                    {/* Decorative Bg */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-[100px] -z-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Pointer */}
                                    <div className="absolute top-6 right-[-8px] w-4 h-4 bg-white transform rotate-45 border-t border-r border-slate-100 z-10"></div>

                                    <div className="relative z-10 text-right">
                                        <div className="flex justify-end mb-4">
                                            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                            </div>
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Workshops</h4>
                                        <p className="text-sm text-slate-500 leading-6 font-medium text-justify">We dive deep into your brand's core values to define a crystal-clear vision.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Node 2: Middle Right (Approvals) */}
                            <div className="absolute top-[550px] left-[600px] w-80 pl-12 z-10">
                                <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                                    <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white shadow-lg mb-2"></div>
                                    <div className="px-3 py-1 rounded-full bg-slate-900 text-white font-bold text-[10px] uppercase tracking-wider shadow-md">Step 02</div>
                                </div>

                                <div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                    {/* Decorative Bg */}
                                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-br-[100px] -z-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Pointer */}
                                    <div className="absolute top-6 left-[-8px] w-4 h-4 bg-white transform rotate-45 border-b border-l border-slate-100 z-10"></div>

                                    <div className="relative z-10">
                                        <div className="flex justify-start mb-4">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Approvals</h4>
                                        <p className="text-sm text-slate-500 leading-6 font-medium text-justify">You hold the keys. We only proceed to the next phase after your green light.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Node 3: Bottom Left (Feedback) */}
                            <div className="absolute top-[900px] left-[300px] w-80 transform -translate-x-full pr-12 z-10">
                                <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                                    <div className="w-4 h-4 rounded-full bg-green-500 ring-4 ring-white shadow-lg mb-2"></div>
                                    <div className="px-3 py-1 rounded-full bg-slate-900 text-white font-bold text-[10px] uppercase tracking-wider shadow-md">Step 03</div>
                                </div>

                                <div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                    {/* Decorative Bg */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-transparent rounded-bl-[100px] -z-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Pointer */}
                                    <div className="absolute top-6 right-[-8px] w-4 h-4 bg-white transform rotate-45 border-t border-r border-slate-100 z-10"></div>

                                    <div className="relative z-10 text-right">
                                        <div className="flex justify-end mb-4">
                                            <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                                            </div>
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Feedback</h4>
                                        <p className="text-sm text-slate-500 leading-6 font-medium text-justify">Continuous loops of feedback to refine pixels until they are perfect.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Node 4: Bottom Right (Launch) */}
                            <div className="absolute top-[1200px] left-[600px] w-80 pl-12 -translate-y-[20px] z-10">
                                <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                                    <div className="w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white shadow-lg mb-2"></div>
                                    <div className="px-3 py-1 rounded-full bg-purple-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-md">Step 04</div>
                                </div>

                                <div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                    {/* Decorative Bg */}
                                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-transparent rounded-br-[100px] -z-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Pointer */}
                                    <div className="absolute top-6 left-[-8px] w-4 h-4 bg-white transform rotate-45 border-b border-l border-slate-100 z-10"></div>

                                    <div className="relative z-10">
                                        <div className="flex justify-start mb-4">
                                            <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                            </div>
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-2">User Testing</h4>
                                        <p className="text-sm text-slate-500 leading-6 font-medium text-justify">Real-world stress testing before we pop the champagne for launch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Grid Fallback (Timeline Style for smaller screens) */}
                        <div className="flex flex-col gap-8 lg:hidden max-w-md mx-auto relative pl-8 border-l-2 border-slate-200 ml-6">
                            {[
                                { title: "Workshops", color: "bg-orange-600", text: "text-orange-600" },
                                { title: "Approvals", color: "bg-blue-600", text: "text-blue-600" },
                                { title: "Feedback", color: "bg-green-600", text: "text-green-600" },
                                { title: "Testing", color: "bg-purple-600", text: "text-purple-600" }
                            ].map((step, i) => (
                                <div key={i} className="relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <div className={`absolute -left-[41px] top-6 w-5 h-5 rounded-full border-4 border-white ${step.color} shadow-sm`}></div>
                                    <h4 className={`font-bold text-xl ${step.text} mb-2`}>{step.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">Collaborative milestone to ensure project success.</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
