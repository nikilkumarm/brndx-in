'use client';

export default function Services() {
    const services = [
        {
            title: "Web Development",
            provider: "BRNDX",
            desc: "We build blazing-fast, scalable websites using modern technologies like React and Next.js. No bloated templates—just clean, custom code tailored to your needs.",
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
            title: "Digital Marketing",
            provider: "Cineline Studios",
            desc: "Data-driven strategies that convert. From social media management to targeted ad campaigns, we help you reach the right audience at the right time.",
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
            title: "UI/UX Design",
            provider: "Vultrix",
            desc: "Design that works. We craft intuitive user interfaces and seamless experiences that keep visitors engaged and guide them effortlessly toward conversion.",
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
            title: "Brand Identity",
            provider: "BRNDX",
            desc: "Stand out from the noise. We create memorable logos, color systems, and visual guidelines that define your brand’s unique personality.",
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
            title: "SEO Optimization",
            provider: "Cineline Studios",
            desc: "Get found online. We implement advanced technical and on-page SEO strategies to improve your search rankings and drive organic traffic.",
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
            title: "E-Commerce Solutions",
            provider: "BRNDX",
            desc: "Sell more, easier. We build secure, high-converting online stores with smooth payment integrations and effortless inventory management.",
            theme: "bg-[#FFF7ED]", // Yellow-ish
            labelColor: "text-amber-600 bg-white",
            shape: (
                <div className="absolute bottom-0 right-0 w-48 h-48 opacity-40 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-300 rounded-tl-full blur-xl"></div>
                </div>
            )
        }
    ];

    const features = [
        {
            title: "Forward-Thinking Innovation",
            desc: "We leverage emerging technologies to build future-proof solutions. Every project is powered by scalable frameworks and robust architecture, ensuring your digital presence remains competitive in an evolving landscape.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        },
        {
            title: "Performance Optimization",
            desc: "Speed is critical to user retention. We implement lightweight code and advanced optimization strategies to ensure rapid load times, superior user experience, and enhanced search engine visibility.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        },
        {
            title: "Enterprise-Grade Security",
            desc: "Data integrity is paramount. We deploy industry-standard encryption, secure authentication, and rigorous compliance protocols to safeguard your business assets and customer information.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        },
        {
            title: "End-to-End Delivery",
            desc: "A seamless partnership from concept to launch. We manage the entire project lifecycle—including strategy, design, development, and marketing—ensuring cohesive execution at every stage.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        },
        {
            title: "Strategic UI/UX",
            desc: "Design that drives action. We create sophisticated, user-centric interfaces focused on clarity, accessibility, and intuitive navigation that guides users effectively toward conversion.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
        },
        {
            title: "Process Transparency",
            desc: "We prioritize honest collaboration. Expect clear milestones, detailed progress reporting, and open communication channels, ensuring you have full visibility into the project trajectory.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
        },
        {
            title: "Tailored Solutions",
            desc: "Your business requires distinct strategies. We deliver custom-built applications and bespoke marketing plans, moving beyond generic templates to address your specific operational goals.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
        },
        {
            title: "Data-Driven Results",
            desc: "Growth is our metric. Through technical SEO, targeted campaigns, and conversion optimization, we focus on delivering tangible metrics and a measurable return on investment.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-500/30">

            <main className="relative pt-32 px-6 md:px-12 pb-20 overflow-hidden min-h-screen">

                <div className="max-w-screen-xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold tracking-wider uppercase text-[10px] mb-4 shadow-sm">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                            We build <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">digital experiences</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-100/50 -z-0 -rotate-1 rounded-full"></span>
                            </span> that people love.
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                            Premium digital solutions. We blend aesthetics with functionality.
                        </p>
                    </div>

                    {/* Background Blobs for Glass Effect */}
                    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-200/40 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-200/40 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-200/30 rounded-full blur-[110px] animate-pulse delay-700"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {services.map((service, i) => (
                            <div key={i} className={`group relative p-10 h-80 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 border border-white/40 shadow-xl backdrop-blur-xl`}>

                                {/* Base Liquid Color Layer */}
                                <div className={`absolute inset-0 ${service.theme} opacity-40 group-hover:opacity-60 transition-opacity duration-700`}></div>

                                {/* Animated Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full rotate-45 pointer-events-none blur-xl"></div>

                                {/* Geometric Background Shapes */}
                                {service.shape}

                                {/* Content Container */}
                                <div className="relative z-20 flex flex-col h-full items-start justify-between">
                                    {/* Top Label */}
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase mb-6 ${service.labelColor} shadow-sm border border-black/5`}>
                                            {service.provider}
                                        </span>
                                        <h3 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-orange-600 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-700 text-sm font-medium leading-relaxed max-w-sm group-hover:text-slate-900 transition-colors duration-300">
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

                    {/* --- Why Choose Us Section --- */}
                    <section className="mt-32 mb-20 relative z-10">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-transparent border border-orange-600 text-orange-600 font-bold tracking-wider uppercase text-[11px] mb-6">
                                Why Choose Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                                We align technical precision with <span className="text-orange-600">strategic marketing.</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                We don't just build websites; we engineer digital ecosystems designed to elevate brand authority, engage audiences, and generate sustainable revenue.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] transition-all duration-500 hover:-translate-y-1 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-600">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* --- Tech Stack Section --- */}
                    <section className="mt-32 mb-20 relative z-10">
                        <div className="text-center mb-16">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-900 text-white font-bold tracking-wider uppercase text-[11px] mb-6 shadow-xl shadow-slate-900/10">
                                The Engine
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">TechStack</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
                                We rely on the most reliable, scalable, and modern technologies to build robust digital ecosystems.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    category: "Frontend",
                                    stack: "React.js, Next.js, TypeScript, Tailwind CSS, Vue.js",
                                    accent: "from-blue-400 to-cyan-300",
                                    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                },
                                {
                                    category: "Backend",
                                    stack: "Node.js, Python, Django, Go, Express.js",
                                    accent: "from-green-400 to-emerald-300",
                                    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                                },
                                {
                                    category: "UI/UX Design",
                                    stack: "Figma, Adobe XD, Sketch, Photoshop, Illustrator",
                                    accent: "from-pink-400 to-rose-300",
                                    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                                },
                                {
                                    category: "Cloud & DevOps",
                                    stack: "AWS, Google Cloud, Docker, Kubernetes, Vercel, Jenkins",
                                    accent: "from-orange-400 to-amber-300",
                                    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                                },
                                {
                                    category: "Database",
                                    stack: "PostgreSQL, MongoDB, Firebase, Supabase, Redis",
                                    accent: "from-yellow-400 to-lime-300",
                                    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                },
                                {
                                    category: "Marketing & Analytics",
                                    stack: "Google Analytics, Google Ads, Meta Ads, SEMrush, HubSpot",
                                    accent: "from-teal-400 to-cyan-300",
                                    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative p-8 rounded-[2rem] bg-slate-900 overflow-hidden hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-slate-900/5">

                                    {/* Animated Gradient Glow on Hover */}
                                    <div className={`absolute -inset-[100px] bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500 pointer-events-none`}></div>

                                    {/* Subtle Top Shine */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className={`text-lg font-bold text-white tracking-wide`}>
                                                {item.category}
                                            </h3>
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/5 shadow-inner shadow-white/5">
                                                {item.icon}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2.5">
                                            {item.stack.split(', ').map((tech, tIdx) => (
                                                <span key={tIdx} className="inline-block px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white text-[13px] font-medium transition-colors duration-300 cursor-default select-none">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
