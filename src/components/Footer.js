
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative bg-slate-50 pt-12 pb-8 overflow-hidden mt-0 border-t border-slate-200">
            {/* --- Vector Background Illustrations (Subtle & Branded) --- */}

            {/* 1. Large Abstract Leafy Shape (Right) - Neutral Grey */}
            <svg className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 h-[120%] w-auto z-0 opacity-100 text-gray-50" viewBox="0 0 400 600" fill="currentColor" aria-hidden="true">
                <path d="M200 600 C 150 550, 100 400, 150 300 C 200 200, 300 200, 350 100 C 400 0, 200 0, 200 0 L 400 0 V 600 H 200 Z" />
                <path d="M150 600 C 100 500, 50 450, 100 350 C 150 250, 100 150, 50 100 L 0 50 V 600 H 150 Z" className="text-gray-100" />
            </svg>

            {/* 2. City Silhouette (Bottom) - Grey */}
            <svg className="absolute bottom-0 left-0 w-full h-auto text-gray-300 z-0 pointer-events-none opacity-80" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
                <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
            </svg>

            {/* Grid Texture */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Top Section: Logo & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <Link href="/" className="relative w-64 md:w-72 h-16 md:h-20">
                        <Image
                            src="/BRNDX Logo.png"
                            alt="BRNDX"
                            fill
                            className="object-contain"
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        {[
                            { name: 'instagram', url: 'https://instagram.com/brndx.in', icon: <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1.25,1.25 0 0,1 19.25,6.25A1.25,1.25 0 0,1 18,7.5A1.25,1.25 0 0,1 16.75,6.25A1.25,1.25 0 0,1 18,5Z" /> },
                            { name: 'linkedin', url: 'https://linkedin.com/company/brndx', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
                            { name: 'github', url: 'https://github.com/brndx', icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> }
                        ].map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all shadow-sm">
                                <span className="sr-only">{social.name}</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle Section: Links & Newsletter */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12 md:mb-10 text-sm">

                    {/* Description */}
                    <div className="md:col-span-4 space-y-4 md:space-y-6 text-center md:text-left">
                        <p className="text-slate-600 leading-relaxed">
                            We build brands that stand out. Elevating digital experiences through innovation, strategy, and cutting-edge technology.
                        </p>
                        <p className="text-slate-500 text-xs">
                            Crafting clarity out of chaos since 2024.
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div className="md:col-span-4 flex justify-center gap-16 md:justify-around font-semibold text-slate-800 text-[15px] md:text-sm">
                        <div className="flex flex-col gap-5 md:gap-4 text-left">
                            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
                            <Link href="/services" className="hover:text-orange-600 transition-colors">Services</Link>
                            <Link href="/work" className="hover:text-orange-600 transition-colors">Work</Link>
                        </div>
                        <div className="flex flex-col gap-5 md:gap-4 text-left">
                            <Link href="/process" className="hover:text-orange-600 transition-colors">Process</Link>
                            <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
                            <Link href="/start-project" className="hover:text-orange-600 transition-colors">Start Project</Link>
                        </div>
                    </div>

                    {/* Subscribe Search */}
                    <div className="md:col-span-4 max-w-sm mx-auto md:max-w-none w-full">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-6 pr-28 sm:pr-32 py-4 md:py-4 bg-white border border-slate-200 rounded-full focus:outline-none focus:border-orange-500/50 shadow-sm text-slate-900 transition-all appearance-none placeholder-slate-400 text-sm"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-orange-600 text-white px-4 md:px-6 rounded-full font-bold text-xs hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Contact Bar (The "Pill") */}
                <div className="relative w-full max-w-4xl mx-auto mb-10">
                    <div className="absolute inset-0 bg-white/50 blur-xl rounded-3xl md:rounded-full -z-10"></div>
                    <div className="bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl md:rounded-full p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12">

                        <div className="md:pl-6 font-bold text-slate-900 shrink-0 text-center">
                            Need Help?
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center md:justify-end">
                            <a href="tel:+918124887577" className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full text-slate-700 font-bold text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors group w-full sm:w-auto justify-center border border-slate-100">
                                <svg className="w-4 h-4 text-slate-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                +91 8124887577
                            </a>

                            <a href="mailto:brndx.in@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full text-slate-700 font-bold text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors group w-full sm:w-auto justify-center border border-slate-100">
                                <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                brndx.in@gmail.com
                            </a>
                        </div>

                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500 pt-8 border-t border-slate-200 text-center md:text-left">
                    <p>© {new Date().getFullYear()} BRNDX. All rights reserved.</p>
                    <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-orange-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
