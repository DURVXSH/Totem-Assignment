import React from 'react';

const CrisesSection: React.FC = () => {
    return (
        <>
            <section className="py-16 md:py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-brand-dark leading-tight">
                        The World's Three <span className="text-brand-accent">Most Extreme</span><br />Environmental Crises
                    </h2>
                    <p className="font-display text-xl md:text-2xl text-brand-gray mt-6 max-w-3xl mx-auto">
                        All in India. All borderless. All requiring immediate global action.
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Left Side: Mission List with Lines */}
                        <div className="w-full md:w-1/3 pl-4 md:pl-0">
                            <div className="flex flex-col gap-0 border-l-[8px] md:border-l-[13px] border-brand-dark/10 md:border-none relative">
                                {/* Current Mission - Gray */}
                                <div className="relative py-6 md:py-8 pl-6 md:pl-0 md:text-right md:pr-12 group">
                                    <h3 className="font-display text-4xl md:text-5xl text-brand-gray/50 group-hover:text-brand-gray transition-colors">Current Mission</h3>
                                </div>

                                {/* Next Phase - Active */}
                                <div className="relative py-6 md:py-8 pl-6 md:pl-0 md:text-right md:pr-12">
                                    <div className="hidden md:block absolute right-[-6px] top-1/2 w-4 h-[80px] bg-brand-dark transform -translate-y-1/2"></div>
                                    <div className="md:hidden absolute left-[-8px] top-0 bottom-0 w-[8px] bg-brand-dark"></div>
                                    <h3 className="font-display font-medium text-4xl md:text-5xl text-brand-dark">Next Phase</h3>
                                </div>

                                {/* Future Mission - Gray */}
                                <div className="relative py-6 md:py-8 pl-6 md:pl-0 md:text-right md:pr-12 group">
                                    <h3 className="font-display text-4xl md:text-5xl text-brand-gray/50 group-hover:text-brand-gray transition-colors">Future Mission</h3>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Cards */}
                        <div className="w-full md:w-2/3 relative h-[450px] md:h-[600px] mt-8 md:mt-0">
                            {/* Background Card (Rotated/Offset) */}
                            <div className="absolute top-0 right-4 md:right-10 w-[90%] md:w-[80%] h-[400px] md:h-[500px] bg-brand-dark rounded-[20px] overflow-hidden opacity-40 transform rotate-[-3deg] translate-y-4"></div>

                            {/* Main Card */}
                            <div className="absolute top-4 right-0 md:right-auto md:left-4 w-full md:w-[90%] h-[400px] md:h-[545px] bg-brand-dark rounded-[24px] overflow-hidden shadow-2xl transition-transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1570183424145-29837a7b82f0?q=80&w=2070&auto=format&fit=crop"
                                    alt="Polluted City Fog"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="text-white font-display text-2xl md:text-3xl">Urban Smog & Air Quality</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yamuna Valley Project Parallax */}
            <section className="relative min-h-[600px] md:h-[800px] bg-fixed bg-center bg-cover flex items-center justify-center py-20" style={{ backgroundImage: "url('/Yamuna.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-brand-dark/90"></div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-10 md:pt-32">
                    <h4 className="text-white font-display font-medium text-xl md:text-2xl mb-4">A World-First Environmental Model</h4>
                    <h2 className="text-white font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-8">The Yamuna Valley Project</h2>
                    <p className="text-white font-display text-xl md:text-3xl max-w-3xl mx-auto shadow-black drop-shadow-lg leading-relaxed">
                        We are entering the final phase of the Yamuna mission—creating the world's first Herbal Valley.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-12 md:mt-20 justify-center">
                        <div className="bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-[20px] max-w-sm text-left border border-white/10 hover:bg-black/60 transition-colors mx-auto md:mx-0">
                            <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-2">The Vision</h3>
                            <p className="text-white/90 font-display text-base md:text-lg">To transform the banks of the Yamuna into a thriving ecosystem of medicinal plants—restoring nature while creating sustainable livelihoods.</p>
                        </div>
                        <div className="bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-[20px] max-w-sm text-left border border-white/10 hover:bg-black/60 transition-colors mx-auto md:mx-0">
                            <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-2">The Impact</h3>
                            <p className="text-white/90 font-display text-base md:text-lg">A living model that proves environmental restoration and economic development are not opposites—but partners.</p>
                        </div>
                    </div>

                    <button className="mt-12 md:mt-16 px-8 md:px-10 py-3 rounded-full border border-brand-cream text-brand-cream font-display text-xl md:text-2xl hover:bg-brand-cream hover:text-brand-dark transition-all">
                        Learn More <span className="ml-2">→</span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default CrisesSection;