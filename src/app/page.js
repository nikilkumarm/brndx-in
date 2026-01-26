'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Simple Count-up Component
const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      // Ease-out expo for a nice "landing" effect
      const percentage = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percentage, 4);

      setCount(Math.floor(ease * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

// Typing Code Component
const CodeTyper = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const text1 = "export default function Success() {";
    const text2 = "  const vision = 'Limitless';";
    const text3 = "  return <DigitalExperience />;";

    let currentLine = 1;
    let charIndex = 0;

    const type = () => {
      if (currentLine === 1) {
        if (charIndex < text1.length) {
          setLine1(text1.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(type, 30);
        } else {
          currentLine = 2;
          charIndex = 0;
          setTimeout(type, 300);
        }
      } else if (currentLine === 2) {
        if (charIndex < text2.length) {
          setLine2(text2.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(type, 30);
        } else {
          currentLine = 3;
          charIndex = 0;
          setTimeout(type, 300);
        }
      } else if (currentLine === 3) {
        if (charIndex < text3.length) {
          setLine3(text3.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(type, 30);
        } else {
          setCompleted(true);
        }
      }
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <div className="font-mono text-sm leading-relaxed min-h-[140px] pt-4">
      <div className="text-slate-400 mb-4 font-medium italic font-mono text-xs tracking-wider opacity-80">// building_brands_beyond.tsx</div>

      <div className="flex flex-wrap font-bold">
        <span className="text-violet-600">{line1}</span>
        {!line1.endsWith('{') && !line2 && <span className="w-1.5 h-4 bg-orange-500 animate-pulse ml-1 rounded-sm inline-block align-middle"></span>}
      </div>

      <div className="pl-6 flex h-7 items-center mt-1">
        {line2 && (
          <div className="flex items-center font-medium">
            <span className="text-violet-600">const</span>
            <span className="text-slate-800 ml-2">vision</span>
            <span className="text-fuchsia-500 ml-2">=</span>
            <span className="text-emerald-500 ml-2">'Limitless'</span>
            <span className="text-slate-400">;</span>
          </div>
        )}
        {line2 && !line3 && <span className="w-1.5 h-4 bg-orange-500 animate-pulse ml-1 rounded-sm inline-block align-middle"></span>}
      </div>

      <div className="pl-6 flex h-7 items-center mt-1">
        {line3 && (
          <span className="text-orange-500 font-bold tracking-tight">{'<DigitalExperience />'}</span>
        )}
        {line3 && !completed && <span className="w-1.5 h-4 bg-orange-500 animate-pulse ml-1 rounded-sm inline-block align-middle"></span>}
      </div>

      {completed && (
        <div className="flex h-7 items-center mt-1">
          <span className="text-violet-600 font-bold">{'}'}</span>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt State
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCardMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleCardLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-500/30">

      {/* --- Background & Spotlight --- */}
      <div className="fixed inset-0 pointer-events-none">
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
              <Link key={item} href={`/${item.toLowerCase()}`} className="relative px-6 py-2.5 text-sm font-semibold text-slate-600 rounded-full transition-all duration-300 hover:text-slate-900 hover:bg-white/50">
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

      {/* --- Main Content --- */}
      <main className="relative z-10 pt-24 px-6 md:px-12 pb-20">

        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

          {/* Left: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10 lg:translate-y-8">

            {/* Ambient Glow behind text */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl -z-10 animate-pulse delay-1000"></div>

            {/* Abstract Shapes */}
            <svg className="absolute top-10 -left-8 w-12 h-12 text-orange-200 opacity-60 animate-spin-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
            </svg>
            <svg className="absolute bottom-40 right-10 w-8 h-8 text-gray-200 animate-bounce" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Tag */}
            <div className="self-end lg:translate-x-160 lg:translate-y-5 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-100 bg-white/70 backdrop-blur-md shadow-lg shadow-orange-500/5 mb-8 hover:scale-105 transition-transform cursor-cell group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-orange-600 transition-colors">Premium Web Development</span>
            </div>

            {/* Headline with Outline Text Effect */}
            <h1 className="text-6xl md:text-7xl xl:text-[5.5rem] font-bold tracking-tight leading-[0.9] mb-8 text-slate-900">
              Crafting
              <span className="inline-block text-transparent [-webkit-text-stroke:2px_#334155] ml-2 sm:ml-4" aria-hidden="true">
                Digital
              </span>
              <br />
              <div className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-purple-600 bg-[size:200%] animate-gradient-fast relative z-10">
                  Masterpieces.
                </span>
                {/* Hand-drawn scribble underline */}
                <svg className="absolute -bottom-4 left-0 w-[120%] h-6 -z-10 text-orange-200" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M5 15 C 50 0, 150 20, 195 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
              </div>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed font-medium">
              We build <span className="text-slate-900 font-semibold decoration-orange-300/50 underline decoration-2 underline-offset-2">high-performance</span>, aesthetic websites that drive results.
              From custom development to branding, we elevate your digital presence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
              <button className="relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl text-sm font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Our Work
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
                {/* Button Shine */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
              </button>

              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-orange-600 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-md">
                Contact Us
              </button>
            </div>

            {/* Stats - Unified Glass Bar (HUD Style) */}
            <div className="w-full max-w-xl p-2 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/50 flex items-center justify-between divide-x divide-slate-200/50">

              <div className="flex-1 px-4 py-3 flex flex-col items-center group cursor-default">
                <div className="text-3xl font-black text-slate-900 mb-0.5 group-hover:text-orange-600 transition-colors">
                  <Counter end={50} suffix="+" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Projects</div>
              </div>

              <div className="flex-1 px-4 py-3 flex flex-col items-center group cursor-default">
                <div className="text-3xl font-black text-slate-900 mb-0.5 group-hover:text-orange-600 transition-colors">
                  <Counter end={100} suffix="%" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Satisfaction</div>
              </div>

              <div className="flex-1 px-4 py-3 flex flex-col items-center group cursor-default">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="text-3xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                    24/7
                  </div>
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Support</div>
              </div>

            </div>

          </div>

          {/* Right: Visual */}
          <div className="flex-1 relative w-full flex items-center justify-center perspective-[2000px]">
            {/* Subtle glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-500/5 blur-[80px] rounded-full"></div>

            <div
              className="relative w-full max-w-[600px] aspect-square flex items-center justify-center select-none"
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              ref={cardRef}
            >

              {/* Animated Background Rings */}
              <div className="absolute inset-0 border border-orange-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-[10%] border border-orange-500/5 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>

              {/* Main Glass Card (Code Editor Mockup) - 3D Tilted */}
              <div
                className="relative z-10 w-[320px] sm:w-[380px] bg-gradient-to-br from-white/90 via-white/60 to-white/30 backdrop-blur-2xl border border-white/80 ring-1 ring-white/50 shadow-2xl shadow-orange-500/15 rounded-3xl p-6 transition-transform duration-100 ease-out group"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >

                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6 opacity-100">
                  <div className="w-3 h-3 rounded-full bg-rose-400/80 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80 shadow-sm"></div>
                </div>

                {/* Typing Code Component */}
                <CodeTyper />

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Floating Element 1: Color Palette */}
              <div className="absolute top-1/4 right-0 sm:-right-4 bg-white p-3 rounded-2xl shadow-xl shadow-orange-500/10 border border-orange-50 animate-float-slow flex flex-col gap-2 transform rotate-12">
                <div className="w-8 h-8 rounded-full bg-orange-500 shadow-inner"></div>
                <div className="w-8 h-8 rounded-full bg-black shadow-inner"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 shadow-inner"></div>
              </div>

              {/* Floating Element 2: Stats */}
              <div className="absolute bottom-10 left-0 sm:-left-8 bg-white/90 backdrop-blur border border-orange-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float-delayed transform -rotate-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Growth</div>
                  <div className="text-lg font-bold text-gray-900">+128%</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* --- Services Section --- */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-slate-50/50 -z-10 skew-y-1 transform origin-top-left scale-110"></div>

          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <span className="text-orange-600 font-bold tracking-wider uppercase text-xs mb-3 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                  We build <span className="text-orange-500">digital experiences</span> that people love.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our comprehensive suite of services ensures your brand stands out in the crowded digital landscape.
                </p>
              </div>
              <Link href="/services" className="hidden md:flex group items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-slate-200 pb-1 hover:border-orange-500 transition-colors">
                View All Services
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>

            {/* Services Grid */}
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
                }
              ].map((service, i) => (
                <div key={i} className="group relative bg-white border border-slate-100 p-10 rounded-[2rem] hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href="#" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors">
                    Learn more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile View All Link */}
            <div className="mt-12 text-center md:hidden">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full text-sm font-bold transition-colors">
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}

