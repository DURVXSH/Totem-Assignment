import React from 'react';
import { Wind, Droplets, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <div className="w-full flex flex-col">
            {/* Hero Banner - Strictly Full Screen */}
            <section className="relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Kid.png"
                        alt="Child in nature"
                        className="w-full h-full object-cover select-none object-center"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-brand-dark/20 to-transparent"></div>
                </div>

                {/* Main Hero Content */}
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
                    <div className="max-w-4xl">
                        <h1 className="font-hero font-bold text-6xl md:text-8xl lg:text-[100px] leading-[1.1] text-brand-cream drop-shadow-lg mb-8 opacity-0 animate-fade-in-up">
                            The Voice <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream to-brand-teal">of Nature</span>
                        </h1>
                        <p className="font-display text-xl md:text-3xl text-white/90 max-w-2xl mb-12 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up animation-delay-200">
                            A global environmental movement restoring the delicate balance between humanity and the living world.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in-up animation-delay-400">
                            <Link to="/about" className="group relative px-8 py-4 bg-brand-cream text-brand-dark font-display font-bold text-xl rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(251,249,236,0.3)]">
                                <span className="relative z-10 flex items-center">Our Mission <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span></span>
                            </Link>
                            <Link to="/act" className="group relative px-8 py-4 backdrop-blur-md bg-white/10 border border-white/30 text-white font-display font-bold text-xl rounded-full overflow-hidden transition-all hover:bg-white/20 hover:scale-105">
                                <span className="relative z-10 flex items-center">Join the Movement <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span></span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Partner Logos Strip - Absolute at bottom of hero */}
                <div className="absolute bottom-0 left-0 w-full z-20 border-t border-white/10 bg-brand-dark/30 backdrop-blur-md">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex justify-between items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="font-bold text-white/80 text-lg tracking-widest">GOV OF INDIA</span>
                            <span className="font-bold text-white/80 text-lg tracking-widest">CAMLIN</span>
                            <span className="font-bold text-white/80 text-lg tracking-widest hidden md:block">UNITED NATIONS</span>
                            <span className="font-bold text-white/80 text-lg tracking-widest hidden md:block">AMBHOS</span>
                            <span className="font-bold text-white/80 text-lg tracking-widest">G20</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Pillars Section - Ends the H-Screen, starts new flow */}
            <div className="relative w-full bg-brand-dark py-20 z-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-cream leading-tight">
                                Three Pillars.<br />
                                <span className="text-white/30">One Living Planet.</span>
                            </h2>
                        </div>
                        <div className="h-px bg-white/20 flex-grow mb-8 hidden md:block ml-12"></div>
                        <p className="text-white/60 font-display text-lg max-w-md text-right">
                            Our approach is holistic, addressing the fundamental elements of life to create sustainable change.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Vayu Card */}
                        <div className="group relative min-h-[400px] rounded-[32px] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-brand-cream transition-all duration-500 group-hover:bg-brand-teal"></div>
                            <div className="absolute top-8 right-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                <Wind size={140} className="text-brand-dark/10 group-hover:text-white/20" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <span className="block text-brand-dark/50 group-hover:text-white/60 font-sans text-xl mb-2 transition-colors">Element 01</span>
                                <h3 className="font-display font-bold text-6xl text-brand-dark group-hover:text-white transition-colors">Vayu</h3>
                                <p className="mt-4 text-brand-dark/70 group-hover:text-white/80 font-display text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    Restoring the breath of life through air quality initiatives.
                                </p>
                            </div>
                        </div>

                        {/* Jal Card */}
                        <div className="group relative min-h-[400px] rounded-[32px] overflow-hidden cursor-pointer mt-0 md:mt-12">
                            <div className="absolute inset-0 bg-[#D4E4E8] transition-all duration-500 group-hover:bg-brand-teal"></div>
                            <div className="absolute top-8 right-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                <Droplets size={140} className="text-brand-dark/10 group-hover:text-white/20" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <span className="block text-brand-dark/50 group-hover:text-white/60 font-sans text-xl mb-2 transition-colors">Element 02</span>
                                <h3 className="font-display font-bold text-6xl text-brand-dark group-hover:text-white transition-colors">Jal</h3>
                                <p className="mt-4 text-brand-dark/70 group-hover:text-white/80 font-display text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    Reviving our rivers and water bodies for a sustainable future.
                                </p>
                            </div>
                        </div>

                        {/* Bhumi Card */}
                        <div className="group relative min-h-[400px] rounded-[32px] overflow-hidden cursor-pointer mt-0 md:mt-24">
                            <div className="absolute inset-0 bg-[#E8E1D0] transition-all duration-500 group-hover:bg-brand-teal"></div>
                            <div className="absolute top-8 right-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                <Mountain size={140} className="text-brand-dark/10 group-hover:text-white/20" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <span className="block text-brand-dark/50 group-hover:text-white/60 font-sans text-xl mb-2 transition-colors">Element 03</span>
                                <h3 className="font-display font-bold text-6xl text-brand-dark group-hover:text-white transition-colors">Bhumi</h3>
                                <p className="mt-4 text-brand-dark/70 group-hover:text-white/80 font-display text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    Nurturing the land that feeds and sustains us all.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;