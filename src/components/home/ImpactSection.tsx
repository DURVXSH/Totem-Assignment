import React from 'react';
import { Users, Sprout, Home, HeartHandshake, Eye, Globe, Anchor } from 'lucide-react';

const ImpactSection: React.FC = () => {
    return (
        <>
            {/* Numbers Section */}
            {/* Numbers Section */}
            <section className="bg-brand-dark text-white py-16 md:py-20 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="font-display font-semibold text-3xl md:text-5xl text-center text-brand-cream mb-12 md:mb-16">Our Impact in Numbers</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                        <div className="flex flex-col items-center group">
                            <div className="bg-brand-cream/10 p-3 md:p-4 rounded-full mb-4 group-hover:bg-brand-cream/20 transition-colors">
                                <Sprout size={32} className="text-brand-cream md:w-12 md:h-12" />
                            </div>
                            <span className="font-display font-bold text-3xl md:text-5xl mb-2">13</span>
                            <span className="font-display font-semibold text-base md:text-xl text-brand-gray">Initiatives</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="bg-brand-cream/10 p-3 md:p-4 rounded-full mb-4 group-hover:bg-brand-cream/20 transition-colors">
                                <Users size={32} className="text-brand-cream md:w-12 md:h-12" />
                            </div>
                            <span className="font-display font-bold text-3xl md:text-5xl mb-2">1988</span>
                            <span className="font-display font-semibold text-base md:text-xl text-brand-gray">Volunteers</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="bg-brand-cream/10 p-3 md:p-4 rounded-full mb-4 group-hover:bg-brand-cream/20 transition-colors">
                                <Home size={32} className="text-brand-cream md:w-12 md:h-12" />
                            </div>
                            <span className="font-display font-bold text-3xl md:text-5xl mb-2">29</span>
                            <span className="font-display font-semibold text-base md:text-xl text-brand-gray">Villages Adopted</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="bg-brand-cream/10 p-3 md:p-4 rounded-full mb-4 group-hover:bg-brand-cream/20 transition-colors">
                                <HeartHandshake size={32} className="text-brand-cream md:w-12 md:h-12" />
                            </div>
                            <span className="font-display font-bold text-3xl md:text-5xl mb-2">967</span>
                            <span className="font-display font-semibold text-base md:text-xl text-brand-gray">Farmers Enrolled</span>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-24 text-center">
                        <h2 className="font-display font-semibold text-3xl md:text-5xl text-brand-cream mb-8 md:mb-12">Turning Action into Impact</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-brand-dark text-left">
                            {/* Large Card Left */}
                            <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] min-h-[300px] md:min-h-[400px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                                <h3 className="font-sans font-bold text-xl md:text-2xl">River<br />Rejuvenation</h3>
                                <p className="font-sans text-sm mt-4">Restoring river ecosystems through sustained on-ground action.</p>
                            </div>

                            {/* Right Column Grid */}
                            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Wide Top Card */}
                                <div className="col-span-1 md:col-span-2 bg-brand-cream p-6 md:p-8 rounded-[25px] min-h-[180px] md:min-h-[200px] flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300">
                                    <h3 className="font-sans font-bold text-xl md:text-2xl mb-2">Waste & Clean-Up Drives</h3>
                                    <p className="font-sans text-sm">Preventing waste from entering rivers and land through regular clean-up drives.</p>
                                </div>
                                {/* Bottom Left */}
                                <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] min-h-[200px] md:min-h-[250px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                                    <h3 className="font-sans font-bold text-xl md:text-2xl">Community &<br />Women Empowerment</h3>
                                    <p className="font-sans text-sm">Supporting rural communities through sustainable livelihoods.</p>
                                </div>
                                {/* Bottom Right */}
                                <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] min-h-[200px] md:min-h-[250px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                                    <h3 className="font-sans font-bold text-xl md:text-2xl">Air Pollution<br />Action</h3>
                                    <p className="font-sans text-sm">Reducing pollution through awareness and clean practices.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 inline-block">
                            <a href="#/problems" className="inline-flex items-center gap-2 border border-brand-cream text-brand-cream px-8 py-3 rounded-full text-xl md:text-2xl font-display hover:bg-brand-cream hover:text-brand-dark transition-all">
                                See Our Work <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="font-display font-semibold text-3xl md:text-5xl text-black mb-6">What guides this movement?</h2>
                    <p className="font-display font-semibold text-lg md:text-2xl text-black max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
                        Rooted in Vedic teachings, our work is guided by the principle of human–nature coexistence.
                        This is a spiritual, cultural, and action-driven movement—not a corporate NGO.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E8E1D0] rounded-[33px] flex items-center justify-center mb-6">
                                <Anchor size={48} className="text-[#8B7355] md:w-[60px] md:h-[60px]" />
                            </div>
                            <h3 className="font-display font-bold text-xl md:text-2xl mb-2">Action Over Advice</h3>
                            <p className="font-display text-gray-600">Change is created on the ground.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E8E1D0] rounded-[33px] flex items-center justify-center mb-6">
                                <Eye size={48} className="text-[#2B8098] md:w-[60px] md:h-[60px]" />
                            </div>
                            <h3 className="font-display font-bold text-xl md:text-2xl mb-2">Ancient Wisdom</h3>
                            <p className="font-display text-gray-600">Guiding modern environmental solutions.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E8E1D0] rounded-[33px] flex items-center justify-center mb-6">
                                <Globe size={48} className="text-[#623120] md:w-[60px] md:h-[60px]" />
                            </div>
                            <h3 className="font-display font-bold text-xl md:text-2xl mb-2">Global Responsibility</h3>
                            <p className="font-display text-gray-600">Calling those ready to act, not observe.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImpactSection;