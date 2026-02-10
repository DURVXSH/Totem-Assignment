import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsSection: React.FC = () => {
    return (
        <>
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 md:mb-16">
                        <h2 className="font-display font-semibold text-4xl md:text-6xl text-brand-dark mb-4">Our Testimonials</h2>
                        <p className="font-display font-semibold text-base md:text-lg text-brand-dark max-w-xl">
                            Learn from the experiences of those who have joined hands with us to create a better future.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <button className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-black transition-colors">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="w-10 h-10 rounded-full border-2 border-brand-dark text-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Cards Scroll Area */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center relative">

                        {/* Card 1 - Rotated Left */}
                        <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] shadow-soft max-w-md w-full md:w-auto transform md:-rotate-6 md:translate-y-8 z-10 hover:z-20 hover:rotate-0 transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-dark border-2 border-black"></div>
                                <div className="flex text-brand-dark">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className="font-display text-brand-dark text-base md:text-lg mb-6">
                                "The Aatmanirbhar project gave our village a new lease on life. The water restoration techniques were simple yet revolutionary."
                            </p>
                            <p className="font-display font-semibold text-right text-brand-dark">
                                Radhakrishna Sharma<br /><span className="text-sm font-normal">Village - Kotiyal</span>
                            </p>
                        </div>

                        {/* Card 2 - Center */}
                        <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] shadow-soft max-w-md w-full md:w-auto z-20 md:scale-105">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-dark border-2 border-black"></div>
                                <div className="flex text-brand-dark">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className="font-display text-brand-dark text-base md:text-lg mb-6">
                                "I never thought I would see the river clean in my lifetime. This movement is not just about nature, it is about our soul."
                            </p>
                            <p className="font-display font-semibold text-right text-brand-dark">
                                Priya Singh<br /><span className="text-sm font-normal">Volunteer - Delhi</span>
                            </p>
                        </div>

                        {/* Card 3 - Rotated Right */}
                        <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] shadow-soft max-w-md w-full md:w-auto transform md:rotate-6 md:translate-y-8 z-10 hover:z-20 hover:rotate-0 transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-dark border-2 border-black"></div>
                                <div className="flex text-brand-dark">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className="font-display text-brand-dark text-base md:text-lg mb-6">
                                "Empowering women while healing the earth. A true dual-engine of progress. Proud to be part of this family."
                            </p>
                            <p className="font-display font-semibold text-right text-brand-dark">
                                Anjali Gupta<br /><span className="text-sm font-normal">Farmer - Haryana</span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-brand-dark text-brand-cream py-16 md:py-24 rounded-t-[50px] md:rounded-t-[150px] relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="font-display font-semibold text-3xl md:text-7xl mb-6">
                        We've Done Our Bit.<br />Now It's <span className="text-[#FFD700]">Your Turn.</span>
                    </h2>
                    <p className="font-display text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
                        This is not about reels. Not about messages.
                    </p>
                    <p className="font-display text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 md:mb-16">
                        This is about real participation and action. If you believe in the cause, if you're ready to act—join us.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center text-brand-dark">
                        <div className="w-full md:w-auto">
                            <h3 className="text-brand-cream font-display text-2xl mb-4 md:hidden">Intern With Us</h3>
                        </div>

                        <Link to="/act" className="bg-brand-cream px-8 py-4 md:px-12 rounded-full font-display text-xl md:text-2xl flex items-center hover:bg-white hover:scale-105 transition-all w-full md:w-auto justify-center">
                            Take Action Now <span className="ml-2 font-bold">→</span>
                        </Link>

                        <div className="hidden md:flex justify-between w-full max-w-3xl absolute bottom-12 px-12 text-black font-display font-semibold text-2xl">
                            {/* Simulating the bottom text links from design within the dark section? 
                         Actually design places them differently. Let's stick to the button being main focus.
                      */}
                        </div>

                        <Link to="/about" className="border border-brand-cream text-brand-cream px-8 py-4 md:px-10 rounded-full font-display text-xl md:text-2xl flex items-center hover:bg-brand-cream hover:text-brand-dark transition-all w-full md:w-auto justify-center">
                            Learn Our Story <span className="ml-2">→</span>
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-16 mt-12 md:mt-20 opacity-50 text-sm md:text-base">
                        <span className="text-brand-dark bg-brand-cream/10 px-4 py-2 rounded">Intern With Us</span>
                        <span className="text-brand-dark bg-brand-cream/10 px-4 py-2 rounded">Volunteer Your Time</span>
                        <span className="text-brand-dark bg-brand-cream/10 px-4 py-2 rounded">Partner With Us</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialsSection;