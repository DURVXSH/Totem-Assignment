import React from 'react';
import { Link } from 'react-router-dom';

const TimelineSection: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Quote Pill */}
                <div className="w-full max-w-5xl mx-auto h-auto py-12 md:py-0 md:h-[185px] rounded-[30px] md:rounded-[90px] relative overflow-hidden flex items-center justify-center mb-16 md:mb-24 shadow-soft">
                    <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1611024847487-a26bd7fde748?q=80&w=1974&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Trash" />
                    <div className="relative z-20 text-center px-6">
                        <h3 className="font-display text-2xl md:text-[40px] text-brand-cream leading-tight">
                            India Cannot Be <span className="font-bold text-white">Vishwaguru</span>
                        </h3>
                        <h3 className="font-display text-2xl md:text-[40px] text-brand-cream leading-tight mt-2">
                            If It Is the Planet's <span className="text-blue-200">Dumping Ground</span>
                        </h3>
                    </div>
                </div>

                {/* Action Header */}
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-4 md:mb-6">
                        This Is Not Theory.<br />This Is Action.
                    </h2>
                    <p className="font-display font-medium text-lg md:text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed px-2">
                        Active since 2020, Project Aatmanirbhar has worked on the ground through the most challenging conditions—turning the Yamuna into a national environmental, cultural, and political movement.
                    </p>
                </div>

                {/* Timeline Visualization */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

                    {/* Left Side: Timeline Markers */}
                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-end md:pr-8 relative md:border-r-2 md:border-brand-accent/30 py-4 md:py-12 space-y-12 md:space-y-24">

                        {/* 2018 */}
                        <div className="relative group w-full text-center md:text-right">
                            <div className="hidden md:block absolute -right-[41px] top-2 w-4 h-4 rounded-full bg-brand-accent/50 border-2 border-white shadow-sm"></div>
                            <span className="font-sans font-bold text-brand-accent/50 text-lg">2018</span>
                            <p className="font-display text-gray-500 text-base md:text-sm mt-1">Founded with a mission<br />to empower rural communities</p>
                        </div>

                        {/* 2019 - Highlighted */}
                        <div className="relative group w-full text-center md:text-right">
                            <div className="hidden md:block absolute -right-[43px] top-2 w-5 h-5 rounded-full bg-brand-accent border-2 border-white shadow-md scale-125"></div>
                            <span className="font-sans font-bold text-brand-accent text-3xl md:text-4xl block mb-1">2019</span>
                            <p className="font-display text-brand-dark font-semibold text-xl md:text-2xl">Reached 25 villages<br />across 3 states</p>
                        </div>

                        {/* 2020 */}
                        <div className="relative group w-full text-center md:text-right">
                            <div className="hidden md:block absolute -right-[41px] top-2 w-4 h-4 rounded-full bg-brand-accent/50 border-2 border-white shadow-sm"></div>
                            <span className="font-sans font-bold text-brand-accent/50 text-lg">2020</span>
                            <p className="font-display text-gray-500 text-base md:text-sm mt-1">Launched women<br />empowerment initiative</p>
                        </div>
                    </div>

                    {/* Right Side: Images Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2000&auto=format&fit=crop" className="col-span-1 row-span-2 rounded-lg shadow-md h-full object-cover" alt="Cleanup drive" />
                        <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2000&auto=format&fit=crop" className="col-span-1 rounded-lg shadow-md h-32 md:h-48 w-full object-cover" alt="Volunteers" />
                        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" className="col-span-1 rounded-lg shadow-md h-32 md:h-48 w-full object-cover" alt="Community" />
                    </div>

                    <div className="md:absolute -bottom-10 right-10 mt-8 md:mt-0">
                        <Link to="/act" className="bg-brand-dark text-white font-display px-8 py-3 rounded-full flex items-center hover:bg-black transition-colors">
                            Get Involved <span className="ml-2 text-xl">›</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;