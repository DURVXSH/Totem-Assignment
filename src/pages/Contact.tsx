import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, Clock, ArrowUpRight, ChevronRight, Zap } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="bg-brand-dark min-h-screen relative overflow-hidden selection:bg-brand-teal selection:text-white">
            {/* Cinematic Parallax Background - Matches Home */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2670&auto=format&fit=crop"
                    alt="Abstract Nature"
                    className="w-full h-full object-cover opacity-10 scale-110 blur-[80px]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-teal/5"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 pt-32 pb-32">
                {/* Immersive Header */}
                <div className="max-w-5xl mb-32 opacity-0 animate-fade-in-up text-center md:text-left">
                    <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-brand-teal/20 border border-brand-teal/30 backdrop-blur-xl">
                        <Zap size={14} className="text-brand-teal animate-pulse" />
                        <span className="text-brand-teal text-[11px] font-bold uppercase tracking-[0.4em]">Direct Response Line</span>
                    </div>
                    <h1 className="font-hero font-bold text-6xl md:text-8xl lg:text-[100px] leading-[1.1] text-brand-cream mb-10">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-cream to-brand-teal bg-[length:200%_auto] animate-gradient-flow italic">Dialogue.</span>
                    </h1>
                    <p className="font-display text-xl md:text-3xl text-white/40 leading-tight font-light max-w-3xl">
                        A movement is defined by its ability to listen. Every message is a seed for potential restoration.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
                    {/* Information Nexus (Column 1-5) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    icon: Mail,
                                    label: 'Electronic Mail',
                                    val: 'dispatch@voiceofnature.org',
                                    desc: 'For formal proposals and documentation.'
                                },
                                {
                                    icon: MessageSquare,
                                    label: 'Direct Channel',
                                    val: '+91 (011) 420-CONSCIENCE',
                                    desc: 'Operational hours: Sunrise to Sunset.'
                                },
                                {
                                    icon: MapPin,
                                    label: 'Physical Nexus',
                                    val: 'The Living Lab, Sector 18, NCR',
                                    desc: 'Where biotechnology meets Vedic wisdom.'
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-brand-teal/30 transition-all duration-700 cursor-pointer overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                                        <item.icon size={100} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-teal group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                                <item.icon size={20} />
                                            </div>
                                            <ArrowUpRight className="text-white/10 group-hover:text-brand-teal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={24} />
                                        </div>
                                        <span className="block text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-2">{item.label}</span>
                                        <h4 className="text-brand-cream font-display text-2xl mb-2 tracking-tight">{item.val}</h4>
                                        <p className="text-white/20 text-sm font-light">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Global Node Visualization */}
                        <div className="p-8 rounded-[32px] bg-brand-dark/50 border border-white/5 relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="text-brand-teal animate-spin-slow" size={20} />
                                <h5 className="text-white/80 font-bold uppercase tracking-[0.3em] text-[10px]">Global Restoration Nodes</h5>
                            </div>
                            <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs mb-6">
                                Operating through decentralized conscience nodes across the Indian peninsula.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-brand-teal text-[10px] font-bold uppercase tracking-[0.4em]">
                                    <Clock size={14} />
                                    Living Sync: Active
                                </div>
                                <div className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] text-white/30 uppercase tracking-widest">
                                    G20 Compliant
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Protocol Interface (Column 6-12) */}
                    <div className="lg:col-span-7">
                        <div className="relative group p-1 rounded-[32px] bg-gradient-to-br from-brand-teal/20 via-transparent to-white/5 transition-all duration-1000">
                            {/* Inner Container */}
                            <div className="relative p-10 md:p-16 bg-brand-dark/95 backdrop-blur-3xl rounded-[31px] border border-white/10 shadow-3xl">
                                <div className="mb-12">
                                    <h3 className="text-brand-cream font-display text-4xl mb-4">Initiate Protocol</h3>
                                    <div className="w-16 h-1 bg-brand-teal mb-4"></div>
                                    <p className="text-white/30 text-lg font-light">Precision communication for planetary scaling.</p>
                                </div>

                                <form className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="relative group/input">
                                            <input type="text" required className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:border-brand-teal outline-none transition-all peer placeholder:text-transparent" placeholder="Identity" />
                                            <label className="absolute left-0 top-4 text-white/30 text-xs uppercase tracking-[0.3em] transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-brand-teal peer-focus:text-[10px] peer-valid:-top-6 peer-valid:text-[10px]">Your Name</label>
                                            <div className="absolute bottom-0 left-0 h-0.5 bg-brand-teal w-0 group-hover/input:w-full transition-all duration-700"></div>
                                        </div>

                                        <div className="relative group/input">
                                            <input type="email" required className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:border-brand-teal outline-none transition-all peer placeholder:text-transparent" placeholder="Email" />
                                            <label className="absolute left-0 top-4 text-white/30 text-xs uppercase tracking-[0.3em] transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-brand-teal peer-focus:text-[10px] peer-valid:-top-6 peer-valid:text-[10px]">Email Address</label>
                                            <div className="absolute bottom-0 left-0 h-0.5 bg-brand-teal w-0 group-hover/input:w-full transition-all duration-700"></div>
                                        </div>
                                    </div>

                                    <div className="relative group/input">
                                        <div className="absolute right-0 top-4 pointer-events-none text-white/20">
                                            <ChevronRight size={20} className="rotate-90" />
                                        </div>
                                        <select className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white/60 focus:border-brand-teal outline-none transition-all cursor-pointer appearance-none">
                                            <option className="bg-brand-dark text-white">Scale Collaboration</option>
                                            <option className="bg-brand-dark text-white">Biotech Inquiry</option>
                                            <option className="bg-brand-dark text-white">Press & Documentation</option>
                                            <option className="bg-brand-dark text-white">Conscious Voluntary Action</option>
                                        </select>
                                        <label className="absolute left-0 -top-6 text-brand-teal text-[10px] font-bold uppercase tracking-[0.3em]">Inquiry Typer</label>
                                    </div>

                                    <div className="relative group/input">
                                        <textarea required rows={4} className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:border-brand-teal outline-none transition-all peer placeholder:text-transparent resize-none" placeholder="Message"></textarea>
                                        <label className="absolute left-0 top-4 text-white/30 text-xs uppercase tracking-[0.3em] transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-brand-teal peer-focus:text-[10px] peer-valid:-top-6 peer-valid:text-[10px]">The Message</label>
                                        <div className="absolute bottom-0 left-0 h-0.5 bg-brand-teal w-0 group-hover/input:w-full transition-all duration-700"></div>
                                    </div>

                                    <div className="pt-8">
                                        <button className="group relative w-full h-20 overflow-hidden rounded-full bg-brand-teal text-brand-dark font-display font-bold text-xl hover:scale-[1.01] transition-all duration-500 shadow-glow">
                                            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-brand-cream transition-transform duration-700"></div>
                                            <span className="relative flex items-center justify-center gap-4 z-10 transition-colors group-hover:text-brand-dark">
                                                Dispatch To Nature <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                                            </span>
                                        </button>
                                        <div className="mt-8 flex items-center justify-center gap-6 opacity-20">
                                            <div className="h-px w-12 bg-white"></div>
                                            <span className="text-[9px] uppercase tracking-[0.6em] whitespace-nowrap">End-To-End Encrypted Channel</span>
                                            <div className="h-px w-12 bg-white"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinematic Decorative Footer Accent */}
            <div className="absolute bottom-0 left-0 w-full py-12 pointer-events-none overflow-hidden opacity-30">
                <div className="container mx-auto px-6">
                    <div className="font-hero text-[10vw] leading-none text-white/[0.05] whitespace-nowrap animate-[marquee_60s_linear_infinite] select-none">
                        PROJECT AATMANIRBHAR • VOICE OF NATURE • ESTABLISHMENT OF CONSCIENCE • PROJECT AATMANIRBHAR •
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;