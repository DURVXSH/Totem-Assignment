import React from 'react';
import { Sprout, Briefcase, IndianRupee, Twitter, Instagram, ArrowRight, UserPlus, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Act: React.FC = () => {
    return (
        <div className="bg-brand-dark min-h-screen text-brand-cream selection:bg-brand-teal selection:text-white">
            {/* Immersive Hero Section - Matches Home */}
            <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background with parallax-like effect */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Yamuna.png"
                        alt="Action background"
                        className="w-full h-full object-cover select-none object-center opacity-40 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/80"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-brand-teal font-display text-sm tracking-widest uppercase mb-8 animate-fade-in-up">
                        <Zap size={14} /> Join the Movement
                    </div>
                    <h1 className="font-hero font-bold text-6xl md:text-8xl lg:text-[100px] leading-[1.1] text-brand-cream drop-shadow-lg mb-8 opacity-0 animate-fade-in-up">
                        Be the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream to-brand-teal italic">Response</span>
                    </h1>
                    <p className="font-display text-xl md:text-3xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up animation-delay-200">
                        Donations build walls. Actions build worlds. <br className="hidden md:block" />
                        Project Aatmanirbhar gives you the platform to manifest change.
                    </p>

                    <div className="mt-12 opacity-0 animate-fade-in-up animation-delay-400">
                        <a href="#action-grid" className="inline-flex items-center gap-3 text-brand-cream/50 hover:text-brand-teal transition-colors group">
                            <span className="text-lg font-display tracking-widest uppercase">Explore Opportunities</span>
                            <div className="w-12 h-px bg-brand-cream/20 group-hover:w-20 group-hover:bg-brand-teal transition-all duration-500"></div>
                        </a>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-10 left-10 hidden lg:block opacity-20">
                    <Globe size={120} className="text-brand-cream animate-pulse" />
                </div>
            </section>

            {/* Action Grid Section - Matches Home Card Theme */}
            <section id="action-grid" className="py-32 relative bg-brand-dark">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-cream leading-tight">
                                Choose Your <br />
                                <span className="text-brand-teal">Modality.</span>
                            </h2>
                        </div>
                        <p className="text-white/40 font-display text-lg max-w-sm text-left md:text-right border-l md:border-l-0 md:border-r border-brand-teal/30 pl-6 md:pl-0 md:pr-6 py-2">
                            Whether on the ground or from your home, your contribution defines our collective future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Volunteer Card */}
                        <div className="group relative min-h-[550px] rounded-[32px] overflow-hidden bg-brand-cream/5 border border-white/5 hover:border-brand-teal/30 transition-all duration-700">
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                                <Sprout size={200} className="text-brand-cream" />
                            </div>

                            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-brand-cream/5 flex items-center justify-center text-brand-teal mb-10 group-hover:scale-110 transition-transform duration-500">
                                        <UserPlus size={32} />
                                    </div>
                                    <h3 className="font-display font-bold text-5xl text-brand-cream mb-6 leading-tight">Volunteer <br />Force</h3>
                                    <p className="text-white/50 text-xl font-light leading-relaxed mb-8">
                                        Join our weekend warriors. From clearing foam off the Yamuna to reforesting urban voids, your physical presence is our greatest asset.
                                    </p>
                                </div>
                                <button className="group/btn flex items-center gap-3 text-brand-cream font-bold text-xl hover:text-brand-teal transition-colors self-start">
                                    View Drives <ArrowRight size={24} className="text-brand-teal group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Leadership/Internship Card - Highlighted */}
                        <div className="group relative min-h-[600px] lg:-mt-12 rounded-[32px] overflow-hidden bg-brand-teal text-brand-dark shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                            <div className="absolute top-0 right-0 p-10 opacity-10">
                                <Briefcase size={200} className="text-brand-dark" />
                            </div>

                            <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-brand-dark/10 flex items-center justify-center text-brand-dark mb-10">
                                        <Briefcase size={32} />
                                    </div>
                                    <h3 className="font-display font-bold text-5xl mb-6 leading-tight tracking-tight">Leadership <br />Program</h3>
                                    <p className="text-brand-dark/70 text-xl font-medium leading-relaxed mb-8">
                                        A 3-month intensive leadership immersion. Master the intersection of Vedic science, biotechnology, and grassroots mobilization.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {['Ecological Tech', 'Rural Relations', 'Project Management'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 font-display font-bold text-brand-dark/60 uppercase text-xs tracking-widest">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-dark/80"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="w-full py-5 bg-brand-dark text-white rounded-full font-display font-bold text-xl hover:bg-black transition-all hover:shadow-xl group/apply inline-flex items-center justify-center gap-3">
                                    Apply Now <ArrowRight size={24} className="group-hover/apply:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Invest Card */}
                        <div className="group relative min-h-[550px] rounded-[32px] overflow-hidden bg-brand-cream/5 border border-white/5 hover:border-brand-teal/30 transition-all duration-700">
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                                <IndianRupee size={200} className="text-brand-cream" />
                            </div>

                            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-brand-cream/5 flex items-center justify-center text-brand-teal mb-10 group-hover:scale-110 transition-transform duration-500">
                                        <IndianRupee size={32} />
                                    </div>
                                    <h3 className="font-display font-bold text-5xl text-brand-cream mb-6 leading-tight">Catalyst <br />Investment</h3>
                                    <p className="text-white/50 text-xl font-light leading-relaxed mb-8">
                                        Fuel the bio-remediation tech and supply chains that empower rural women. Your capital creates a circular ecological economy.
                                    </p>
                                </div>
                                <button className="group/btn flex items-center gap-4 py-4 px-8 rounded-full border border-brand-cream/20 hover:border-brand-teal hover:bg-brand-teal/10 transition-all">
                                    <span className="text-brand-cream font-bold text-xl uppercase tracking-widest">Donate Capital</span>
                                    <ArrowRight size={24} className="text-brand-teal group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Amplification */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-12 md:p-24 text-center">
                        {/* Decorative glow */}
                        <div className="absolute -top-1/2 -left-1/4 w-[100%] h-[100%] bg-brand-teal/10 rounded-full blur-[120px]"></div>

                        <div className="relative z-10">
                            <h2 className="font-display font-bold text-4xl md:text-7xl text-brand-cream mb-8">Not on the ground? <br /><span className="text-brand-teal italic">Be in the air.</span></h2>
                            <p className="text-white/40 text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
                                Influence is the new energy. Amplify the voice of nature on your social grids and spark a global dialogue.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                <button className="group flex items-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 hover:border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/10 transition-all duration-500">
                                    <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2]">
                                        <Twitter size={20} />
                                    </div>
                                    <span className="text-brand-cream font-bold text-xl">Twitter Space</span>
                                </button>

                                <button className="group flex items-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 transition-all duration-500">
                                    <div className="w-10 h-10 rounded-full bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C]">
                                        <Instagram size={20} />
                                    </div>
                                    <span className="text-brand-cream font-bold text-xl">Instagram Feed</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-20 border-t border-white/5 bg-brand-dark/50">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-center md:text-left">
                        <h4 className="font-display font-bold text-3xl text-brand-cream mb-2">Ready to take the first step?</h4>
                        <p className="text-white/40 font-light">Join 50,000+ others in the ecological revolution.</p>
                    </div>
                    <Link to="/contact" className="px-12 py-5 bg-brand-cream text-brand-dark rounded-full font-display font-bold text-xl hover:scale-105 transition-all shadow-glow">
                        Contact our team
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Act;