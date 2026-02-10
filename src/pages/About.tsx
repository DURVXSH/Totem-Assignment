import React from 'react';
import { Leaf, Eye, Users, Droplets, ShieldCheck, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="bg-brand-dark min-h-screen text-brand-cream selection:bg-brand-teal selection:text-white">
            {/* Cinematic Hero Section - Matches Home */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
                        alt="Lush forest"
                        className="w-full h-full object-cover scale-110 opacity-40 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-brand-teal font-display text-sm tracking-widest uppercase mb-8 animate-fade-in-up">
                        <Target size={14} /> Establishment of Conscience
                    </div>
                    <h1 className="font-hero font-bold text-6xl md:text-8xl lg:text-[100px] leading-[1.1] text-brand-cream drop-shadow-lg mb-8 opacity-0 animate-fade-in-up">
                        The Movement <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-cream italic">Higher Than Purpose</span>
                    </h1>
                    <p className="font-display text-xl md:text-3xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
                        Project Aatmanirbhar is not an organization. It is a collective pulse restoring the umbilical bond between humanity and the living world.
                    </p>

                    <div className="mt-12 opacity-0 animate-fade-in-up animation-delay-400">
                        <div className="w-px h-24 bg-gradient-to-b from-brand-teal to-transparent mx-auto"></div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section - Interactive & High Contrast */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative group rounded-[32px] overflow-hidden shadow-2xl border border-white/5">
                            <div className="absolute -inset-4 bg-brand-teal/10 rounded-[64px] blur-3xl group-hover:bg-brand-teal/20 transition-all duration-700"></div>
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                alt="Philosophy of Nature"
                            />
                            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-brand-teal"></div>
                                <span className="text-brand-teal font-display font-bold uppercase tracking-[0.2em]">Our Core</span>
                            </div>
                            <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-cream leading-tight">
                                A Crisis of <br />
                                <span className="italic font-light text-white/40">Disconnection.</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                                We believe that environmental degradation is not just a scientific problem, but a spiritual and cultural crisis.
                                The disconnection between humanity and nature is the root cause.
                            </p>
                            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                                We look to ancient Indian wisdom—where rivers are mothers, trees are sacred, and the earth is a goddess—to find modern solutions for a living future.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] transition-all">
                                    <Leaf className="text-brand-teal mb-4" size={32} />
                                    <h4 className="text-white font-bold text-2xl mb-2 font-display">Prakriti</h4>
                                    <p className="text-white/40 text-sm font-light">Honoring the divine architecture of the natural world.</p>
                                </div>
                                <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] transition-all">
                                    <Eye className="text-brand-teal mb-4" size={32} />
                                    <h4 className="text-white font-bold text-2xl mb-2 font-display">Drishti</h4>
                                    <p className="text-white/40 text-sm font-light">Seeing the sacred in every particle of life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section - Matches Home Card Theme */}
            <section className="py-32 bg-white/[0.02] border-y border-white/5 relative">
                <div className="container mx-auto px-6 mb-24">
                    <div className="max-w-3xl">
                        <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-cream mb-6 leading-none">
                            The Anatomy of <span className="text-brand-teal">Restoration.</span>
                        </h2>
                        <p className="text-white/40 text-xl font-light">How we bridge the gap between ancient wisdom and future tech.</p>
                    </div>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Jan Bhagidari */}
                    <div className="group relative p-10 rounded-[32px] bg-brand-dark border border-white/5 hover:border-brand-teal/30 transition-all duration-700">
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                            <Users size={120} />
                        </div>
                        <span className="block text-brand-teal/50 font-display font-bold text-sm tracking-widest uppercase mb-8">Process 01</span>
                        <h3 className="text-brand-cream text-4xl font-bold font-display mb-4">Jan <br />Bhagidari</h3>
                        <p className="text-white/50 text-lg font-light leading-relaxed mb-4">
                            Public Participation is our cornerstone. No governemnt can clean a river alone—it requires the collective will and hands of the people.
                        </p>
                    </div>

                    {/* Spirit & Science */}
                    <div className="group relative p-10 rounded-[32px] bg-brand-dark border border-white/5 hover:border-brand-teal/30 transition-all duration-700 md:mt-12">
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                            <Droplets size={120} />
                        </div>
                        <span className="block text-brand-teal/50 font-display font-bold text-sm tracking-widest uppercase mb-8">Process 02</span>
                        <h3 className="text-brand-cream text-4xl font-bold font-display mb-4">Spirit & <br />Science</h3>
                        <p className="text-white/50 text-lg font-light leading-relaxed mb-4">
                            We deploy advanced biotechnology for cleaning water while maintaining deep respect for the cultural sanctity of every drop.
                        </p>
                    </div>

                    {/* Green Economy */}
                    <div className="group relative p-10 rounded-[32px] bg-brand-dark border border-white/5 hover:border-brand-teal/30 transition-all duration-700 md:mt-24">
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                            <ShieldCheck size={120} />
                        </div>
                        <span className="block text-brand-teal/50 font-display font-bold text-sm tracking-widest uppercase mb-8">Process 03</span>
                        <h3 className="text-brand-cream text-4xl font-bold font-display mb-4">Green <br />Economy</h3>
                        <p className="text-white/50 text-lg font-light leading-relaxed mb-4">
                            Closing the loop by creating value from waste. Transforming temple flowers into incense to make conservation economically viable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Manifesto Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,128,152,0.15)_0,transparent_70%)]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <Heart className="text-brand-teal mx-auto mb-12 animate-pulse" size={64} />
                    <h2 className="font-hero text-6xl md:text-[100px] leading-[0.9] text-brand-cream mb-12 max-w-5xl mx-auto">
                        A conscience in <span className="italic text-brand-teal">action</span> is the only truth.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link to="/contact" className="px-12 py-5 bg-brand-teal text-brand-dark font-display font-bold text-xl rounded-full hover:scale-105 transition-all shadow-glow">
                            Start Your Journey
                        </Link>
                        <Link to="/act" className="px-12 py-5 border border-white/20 text-white font-display font-bold text-xl rounded-full hover:bg-white/5 transition-all">
                            View All Drives
                        </Link>
                    </div>
                </div>
            </section>

            {/* Global Reach Bar - Matches Home Footer */}
            <div className="py-12 border-t border-white/5 bg-brand-dark">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between items-center gap-8 opacity-40">
                        {['50,000+ VOLUNTEERS', '12 RIVERS SAVED', '120 CIT-HACK PROJECTS', '24 STATE PARTNERS'].map((stat, i) => (
                            <span key={i} className="font-display font-bold text-sm tracking-[0.3em]">{stat}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;