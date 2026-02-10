import React, { useEffect, useState } from 'react';
import { AlertTriangle, Droplets, Wind, ShieldAlert, Skull, Activity, Zap, Globe, ArrowDown, Info, ChevronRight } from 'lucide-react';

const Problems: React.FC = () => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-brand-dark min-h-screen text-brand-cream selection:bg-brand-teal selection:text-white overflow-hidden">

            {/* Immersive Hero - Matches Home Page Vibe */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=2674&auto=format&fit=crop"
                        alt="Devastated Landscape"
                        className="w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.4] scale-[1.1]"
                        style={{ transform: `scale(${1.1 + scrolled * 0.0002})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-brand-dark/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-cream font-bold text-[10px] uppercase tracking-[0.3em] mb-12 animate-pulse backdrop-blur-md shadow-glow">
                        <AlertTriangle size={14} className="text-brand-accent" /> System Failure Detected
                    </div>

                    <h1 className="font-hero font-bold text-6xl md:text-8xl lg:text-[100px] leading-[1.1] text-brand-cream drop-shadow-lg mb-8 opacity-0 animate-fade-in-up">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream to-brand-accent">Collapse</span>
                    </h1>

                    <p className="font-display text-xl md:text-3xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up animation-delay-200">
                        We are strictly documenting the anatomical failure of our ecosystems. The silence of the earth is not peace—it is the sound of an exhausted world.
                    </p>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                        <ArrowDown size={32} className="text-brand-cream" />
                    </div>
                </div>
            </section>

            {/* Crisis 01: The Black Arteries (Yamuna) - Matches Home Card Style */}
            <section className="py-32 relative bg-brand-dark">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-brand-teal font-display font-bold tracking-[0.4em] uppercase text-xs">
                                <span className="w-12 h-px bg-brand-teal/50"></span> Crisis 01
                            </div>
                            <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-cream leading-tight">
                                Black <br />
                                <span className="text-brand-accent">Arteries.</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light max-w-lg">
                                The Yamuna is the heart of North India. Today, it is a <span className="text-brand-accent font-bold underline decoration-brand-accent/30 underline-offset-4">toxic conduit</span> for industrial sediment. Visible chemical foam acts as a shroud over a dying river.
                            </p>

                            {/* Consistent Card Style */}
                            <div className="group relative p-10 rounded-[32px] bg-brand-cream/5 border border-white/10 hover:border-brand-teal/30 transition-all duration-500">
                                <div className="absolute top-8 right-8 transition-transform duration-500 group-hover:scale-110">
                                    <Droplets size={64} className="text-brand-teal/20" />
                                </div>
                                <div className="space-y-2">
                                    <span className="font-display text-white/40 text-xs uppercase tracking-widest font-bold block">Dissolved Oxygen (DO)</span>
                                    <h4 className="font-hero text-brand-accent text-6xl leading-none">0.00 <span className="text-lg text-white/40">mg/L</span></h4>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mt-6 mb-4">
                                    <div className="h-full bg-brand-accent w-[2%]"></div>
                                </div>
                                <span className="text-brand-teal text-xs uppercase tracking-widest font-bold">Critical Level: Biological Death</span>
                            </div>
                        </div>

                        <div className="relative group rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl">
                            <div className="absolute inset-0 bg-brand-dark/20 transition-all duration-500 group-hover:bg-transparent"></div>
                            <img
                                src="https://images.unsplash.com/photo-1617122170321-c42a59a72172?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover grayscale contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                                alt="Yamuna Surface"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-dark to-transparent">
                                <div className="flex items-center gap-3 mb-2">
                                    <Globe size={20} className="text-brand-teal" />
                                    <span className="text-brand-cream font-display text-sm tracking-widest uppercase">Wazirabad, NCR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crisis 02: Atmosphere Asphyxiation (Airpocalypse) */}
            <section className="py-32 bg-white/[0.02] border-y border-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 space-y-6">
                        <Wind className="text-brand-teal mx-auto mb-6" size={64} />
                        <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-cream leading-tight">THE <span className="text-brand-accent italic">SMOG.</span></h2>
                        <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-snug">
                            Oxygen is no longer a human right. It has become a calculated risk.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: 'AQI Peak', val: '999', suffix: '+', icon: ShieldAlert, desc: 'Measurement systems effectively fail beyond this saturation point.' },
                            { label: 'Daily Toxicity', val: '22', suffix: 'Cigs', icon: Skull, desc: 'The equivalent respiratory damage sustained by passive exposure.' },
                            { label: 'Pediatric Risk', val: '140', suffix: '%', icon: Activity, desc: 'Jump in respiratory distress cases among urban infants.' }
                        ].map((stat, i) => (
                            <div key={i} className="group p-10 rounded-[32px] bg-brand-dark border border-white/10 hover:border-brand-accent/50 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <stat.icon size={100} className="text-brand-cream" />
                                </div>
                                <div className="relative z-10 h-full flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-teal mb-8 group-hover:scale-110 transition-transform">
                                        <stat.icon size={32} />
                                    </div>
                                    <h4 className="font-hero text-6xl text-brand-cream mb-4">
                                        {stat.val}<span className="text-2xl font-display text-brand-teal">{stat.suffix}</span>
                                    </h4>
                                    <span className="block text-brand-teal font-display text-xs tracking-[0.3em] uppercase font-bold mb-4">{stat.label}</span>
                                    <p className="text-white/40 text-sm font-light leading-relaxed">{stat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Crisis 03: Industrial Malignancy */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative group rounded-[32px] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1574347209590-b183617325b7?q=80&w=2670&auto=format&fit=crop"
                                className="w-full h-[500px] object-cover grayscale contrast-[1.2] group-hover:scale-105 transition-transform duration-700"
                                alt="Industrial Waste"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 flex gap-4">
                                <div className="px-4 py-2 bg-brand-dark/80 backdrop-blur-md rounded-full border border-white/10 text-brand-teal text-xs font-bold uppercase tracking-widest">
                                    Thermal Vision: High
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="flex items-center gap-4 text-brand-teal font-display font-bold tracking-[0.4em] uppercase text-xs">
                                <span className="w-12 h-px bg-brand-teal/50"></span> Crisis 03
                            </div>
                            <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-cream leading-tight">
                                Industrial <br />
                                <span className="text-brand-accent italic">Malignancy.</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                                70% of industrial waste is discharged without primary treatment. Profit margins are built on the liquidation of our shared future.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { chem: 'Hexavalent Chromium', level: '14,000x over limit' },
                                    { chem: 'Lead & Cadmium', level: 'Structural Toxicity' },
                                    { chem: 'Leachate Acids', level: 'Ph Baseline Failure' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 group cursor-default">
                                        <span className="text-white/80 font-display text-lg group-hover:text-brand-teal transition-colors">{item.chem}</span>
                                        <span className="text-brand-accent font-hero text-lg tracking-widest uppercase">{item.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing - The Mandate */}
            <section className="py-32 relative border-t border-white/5 bg-brand-dark">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <Zap className="text-brand-teal mx-auto opacity-50" size={64} />
                        <h2 className="font-hero text-6xl md:text-8xl text-brand-cream leading-none tracking-tight">
                            NO MORE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-cream italic">DEBATE.</span>
                        </h2>

                        <p className="font-display text-2xl md:text-3xl text-white/40 font-light italic leading-relaxed max-w-2xl mx-auto">
                            "The biosphere does not negotiate. It does not compromise. It collapses."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Problems;