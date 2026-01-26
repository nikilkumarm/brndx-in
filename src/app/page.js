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

// Static Code Display for Full Visibility
const CodeTyper = () => {
  return (
    <div className="font-mono text-sm leading-relaxed pt-4">
      <div className="text-slate-500 mb-4 font-medium italic font-mono text-xs tracking-wider opacity-60">// building_brands_beyond.tsx</div>

      <div className="flex flex-col gap-1.5 font-bold">
        {/* Line 1 */}
        <div>
          <span className="text-[#ccb8b8]">export default function </span>
          <span className="text-[#facc15] font-bold">Success</span>
          <span className="text-[#ebd4d4]">() {'{'}</span>
        </div>

        {/* Line 2 */}
        <div className="pl-6">
          <span className="text-[#c678dd]">const </span>
          <span className="text-[#61afef]">vision </span>
          <span className="text-[#56b6c2]">= </span>
          <span className="text-[#98c379]">'Limitless'</span>
          <span className="text-[#abb2bf]">;</span>
        </div>

        {/* Line 3 */}
        <div className="pl-6">
          <span className="text-[#c678dd]">return </span>
          <span className="text-[#e06c75]">&lt;DigitalExperience /&gt;</span>
          <span className="text-[#abb2bf]">;</span>
        </div>

        {/* Line 4 */}
        <div>
          <span className="text-[#ebd4d4]">{'}'}</span>
        </div>
      </div>
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

      {/* --- Navbar handled in Layout --- */}

      {/* --- Main "Split Screen" Hero --- */}
      <main className="relative min-h-screen flex flex-col lg:flex-row items-stretch pt-20 lg:pt-0 overflow-hidden">

        {/* Left Side: Content - Widened to fit text */}
        <div className="w-full lg:w-[55%] bg-white relative z-20 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 lg:py-0">
          <div className="max-w-2xl">
            <h1 className="font-bold tracking-tight text-slate-900 leading-[1] mb-6">
              {/* Force Single Line Flex Container */}
              <div className="flex flex-row items-baseline flex-nowrap whitespace-nowrap">
                <span className="text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem]">Crafting</span>
                <span className="font-[family-name:var(--font-pinyon)] font-normal text-slate-500 text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[7.5rem] relative top-3 ml-4">Digital</span>
              </div>
              <div className="text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem] text-orange-600 mt-2">Masterpieces</div>
            </h1>

            <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed border-l-4 border-orange-500 pl-6 max-w-lg">
              We build high-performance, aesthetic websites that drive results. Redefining your digital presence.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/work" className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg shadow-xl hover:bg-orange-600 transition-colors">
                View Work
              </Link>
              <Link href="#contact" className="px-8 py-3 border border-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Area - Narrowed slightly */}
        <div className="w-full lg:w-[45%] relative bg-white flex items-center justify-center lg:justify-end px-4 lg:px-8 py-12 lg:py-0 overflow-visible">

          {/* The Angled Divider (Background Shape) */}
          {/* <div className="absolute top-0 bottom-0 -left-20 w-40 bg-[#f8f9fa] transform -skew-x-[10deg] hidden lg:block z-10 origin-bottom"></div> */}

          {/* Background Pattern on Right Side */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-50 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-[80px]"></div>
          </div>

          {/* 3D Content Container */}
          <div className="relative z-20 w-full max-w-lg perspective-[2000px]">
            {/* Visual Card */}
            <div
              className="relative w-full bg-[#1e1e1e] rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] ring-1 ring-white/10 transition-transform duration-200 ease-out group"
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              ref={cardRef}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">system_design.tsx</div>
              </div>

              {/* Content */}
              <div className="p-8 min-h-[300px] relative">
                <CodeTyper />
                {/* Fake Cursor */}
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-orange-500/20 rounded-full blur-[50px] animate-pulse"></div>
              </div>
            </div>

            {/* Floating Element 1: Growth */}
            <div className="absolute -bottom-10 -left-6 lg:-left-20 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-float-delayed z-30">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Growth</div>
                <div className="text-3xl font-black text-slate-900">+128%</div>
              </div>
            </div>
          </div>
        </div>

      </main>
      {/* --- refined services section --- */}
      <section className="py-12 bg-black relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

          {/* Section Header - Fixed Width for Single Line Text */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-8">
            <div className="max-w-4xl relative z-10">
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white mb-2 leading-[1.1] tracking-tight">
                <span className="block whitespace-nowrap">We build digital experiences</span>
                <span className="block">
                  that <span className="font-[family-name:var(--font-geist-sans)] font-thin italic px-2 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 text-transparent bg-clip-text text-5xl md:text-6xl relative -top-1.5">people love.</span>
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mt-4">
                Our comprehensive suite of services ensures your brand stands out in the crowded digital landscape.
              </p>
            </div>

            <Link href="/services" className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all shadow-lg backdrop-blur-sm">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          {/* Bento Grid - High Contrast Dark Glass Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1: Web Development (Wide Split Card) */}
            <div className="lg:col-span-2 relative bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/20 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] rounded-[2.5rem] p-8 overflow-hidden group hover:bg-[#111]/80 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-50"></div>

              <div className="flex-1 space-y-4 relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-3xl bg-[#1a1a1a] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-center text-orange-500 border border-white/5">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">Web Development</h3>
                  <p className="text-slate-400 leading-relaxed text-sm font-medium">
                    Building lightning-fast, scalable websites using modern frameworks. We obsess over performance.
                  </p>
                </div>
                {/* Service Details - Compact */}
                <div className="w-full pt-3 mt-auto border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  <span>Provider: BRNDX</span>

                </div>
              </div>

              {/* Code Snippet - Deep Dark Bubble */}
              <div className="flex-1 w-full bg-[#050505] rounded-3xl p-6 font-mono text-[13px] text-slate-400 border border-white/5 shadow-inner relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex gap-2 mb-4 opacity-70">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="space-y-2 relative z-10 leading-6">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">Future</span> = () ={'>'} {'{'}</p>
                  <p className="pl-4"><span className="text-orange-400">return</span> <span className="text-emerald-400">"Limitless"</span>;</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>

            {/* Card 2: UI/UX Design */}
            <div className="relative bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/20 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] rounded-[2.5rem] p-8 hover:-translate-y-1 transition-all duration-500 group overflow-hidden flex flex-col min-h-[240px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-blue-600/20 transition-colors pointer-events-none"></div>

              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 rounded-3xl bg-[#1a1a1a] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 border border-white/5 text-blue-400">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">UI/UX Design</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-medium">
                  Crafting intuitive interfaces that delight users.
                </p>
              </div>
              {/* Service Details - Compact */}
              <div className="w-full pt-3 mt-auto border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest z-10">
                <span>BRNDX</span>

              </div>
            </div>

            {/* Card 3: Brand Strategy */}
            <div className="relative bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/20 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] rounded-[2.5rem] p-8 hover:bg-[#111]/80 transition-all duration-500 group min-h-[240px] flex flex-col">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-3xl bg-[#1a1a1a] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform border border-white/5">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Brand Strategy</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Defining your voice and visual identity.
                </p>
              </div>

              {/* Service Details - Compact */}
              <div className="w-full pt-3 mt-auto border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <span>BRNDX</span>

              </div>
            </div>

            {/* Card 4: Mobile Apps */}
            <div className="relative bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/20 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] rounded-[2.5rem] p-8 hover:bg-[#111]/80 transition-all duration-500 group min-h-[240px] flex flex-col">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-3xl bg-[#1a1a1a] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform border border-white/5">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mobile Apps</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Native apps for iOS & Android.
                </p>
              </div>

              {/* Service Details - Compact */}
              <div className="w-full pt-3 mt-auto border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <span>BRNDX</span>

              </div>
            </div>

            {/* Card 5: Digital Growth (Vibrant) */}
            <div className="relative bg-gradient-to-br from-orange-600 to-amber-700 backdrop-blur-3xl border border-white/20 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.35)] rounded-[2.5rem] p-8 text-white hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between min-h-[240px] overflow-hidden">

              {/* Shine Effect */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/20 rounded-full blur-[50px] pointer-events-none"></div>

              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 rounded-3xl bg-black/20 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.15)] flex items-center justify-center mb-6 backdrop-blur-sm border border-white/5">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Digital Growth</h3>
                <p className="text-orange-100 text-sm leading-relaxed opacity-90 font-medium">
                  Data-driven marketing to scale your business.
                </p>
              </div>

              {/* Service Details - Compact */}
              <div className="w-full pt-3 mt-auto border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-orange-200 uppercase tracking-widest opacity-80 z-10">
                <span>BRNDX</span>

              </div>
            </div>

          </div>

          {/* Mobile View All Link */}
          <div className="mt-12 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold transition-all hover:bg-slate-800">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
