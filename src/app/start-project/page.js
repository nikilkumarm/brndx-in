'use client';

import { useState } from 'react';

export default function StartProject() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
        services: []
    });

    const servicesList = [
        "Web Development", "UI/UX Design", "Digital Marketing",
        "Multimedia Production", "SEO Optimization", "E-Commerce", "Influencer Marketing"
    ];

    const toggleService = (service) => {
        setFormState(prev => {
            const services = prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service];
            return { ...prev, services };
        });
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formState);
        alert('Thanks for reaching out! We will get back to you soon.');
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-500/30 relative overflow-hidden">

            {/* --- Background Decorative Blobs --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-blue-200/20 rounded-full blur-[110px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]"></div>
            </div>

            <div className="max-w-screen-xl mx-auto px-6 py-32 md:py-48 relative z-10">

                {/* Header Section */}
                <div className="max-w-5xl mb-16 relative">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md border border-orange-200/50 text-orange-600 font-bold tracking-widest uppercase text-[11px] mb-8 shadow-sm ring-1 ring-orange-50">
                        Start a Project
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                        Let’s build something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 animate-gradient-x">extraordinary.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium">
                        Have an idea? We have the craftsmanship. Tell us about your vision, and let's craft a digital experience that matters.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Main Form Section */}
                    <div className="lg:col-span-7 bg-white/40 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/50 relative group">
                        {/* Subtle shine on card hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]"></div>

                        <form onSubmit={handleSubmit} className="space-y-10 relative z-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3 group/input">
                                    <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide opacity-80 group-focus-within/input:text-orange-600 transition-colors">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-5 rounded-2xl bg-white/70 border border-slate-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none transition-all placeholder:text-slate-300 font-semibold text-slate-800 shadow-sm"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-3 group/input">
                                    <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide opacity-80 group-focus-within/input:text-orange-600 transition-colors">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@company.com"
                                        className="w-full px-6 py-5 rounded-2xl bg-white/70 border border-slate-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none transition-all placeholder:text-slate-300 font-semibold text-slate-800 shadow-sm"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 group/input">
                                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide opacity-80 group-focus-within/input:text-orange-600 transition-colors">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Your Company Name (Optional)"
                                    className="w-full px-6 py-5 rounded-2xl bg-white/70 border border-slate-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none transition-all placeholder:text-slate-300 font-semibold text-slate-800 shadow-sm"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide opacity-80">What services do you need?</label>
                                <div className="flex flex-wrap gap-3">
                                    {servicesList.map((service) => (
                                        <button
                                            type="button"
                                            key={service}
                                            onClick={() => toggleService(service)}
                                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all border duration-300 flex items-center gap-2 ${formState.services.includes(service)
                                                ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 scale-[1.02]'
                                                : 'bg-white text-slate-500 border-slate-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700'
                                                }`}
                                        >
                                            {formState.services.includes(service) && (
                                                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            )}
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3 group/input">
                                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide opacity-80 group-focus-within/input:text-orange-600 transition-colors">Project Details</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about the project goals, timeline, and any specific requirements..."
                                    rows="5"
                                    className="w-full px-6 py-5 rounded-2xl bg-white/70 border border-slate-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none transition-all placeholder:text-slate-300 font-semibold text-slate-800 resize-none shadow-sm"
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-6 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-xl tracking-wide hover:shadow-2xl hover:shadow-orange-500/30 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                            >
                                Send Request
                                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>

                        </form>
                    </div>

                    {/* Sidebar Info Section */}
                    <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">

                        {/* Contact Card */}
                        <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl group-hover:bg-orange-50/50 transition-colors duration-500"></div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Direct Contact</h3>
                            <ul className="space-y-8 relative z-10">
                                <li className="flex items-start gap-5 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-orange-50 group-hover/item:text-orange-600 group-hover/item:border-orange-100 transition-all duration-300 shadow-sm">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email us</p>
                                        <a href="mailto:brndx.in@gmail.com" className="text-xl font-bold text-slate-900 hover:text-orange-600 transition-colors">brndx.in@gmail.com</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-orange-50 group-hover/item:text-orange-600 group-hover/item:border-orange-100 transition-all duration-300 shadow-sm">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call us</p>
                                        <a href="tel:+918124887577" className="text-xl font-bold text-slate-900 hover:text-orange-600 transition-colors">+91 8124887577</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-orange-50 group-hover/item:text-orange-600 group-hover/item:border-orange-100 transition-all duration-300 shadow-sm">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Visit us</p>
                                        <span className="text-lg font-bold text-slate-900 leading-snug block">Tamil Nadu, India</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Status Card */}
                        <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Current Capacity</h3>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-slate-900"></span>
                                    </div>
                                    <span className="text-green-400 font-bold text-sm tracking-widest uppercase">Available Q1 2026</span>
                                </div>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    Our schedule is filling up fast. Secure your spot now to ensure a timely launch for your next big project.
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-orange-500/30 blur-[60px] rounded-full animate-pulse"></div>
                            <div className="absolute bottom-[-50px] left-[-20px] w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full animate-pulse animation-delay-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-0"></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
