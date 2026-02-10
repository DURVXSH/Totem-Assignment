import React from 'react';
import { Link } from 'react-router-dom';

const FounderSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-brand-dark rounded-[30px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 md:gap-12 items-center shadow-2xl relative overflow-hidden">

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-brand-cream z-10">
            <h2 className="font-display font-medium text-3xl md:text-5xl mb-6 md:mb-8">Our Founder</h2>
            <div className="space-y-4 md:space-y-6 font-display text-lg md:text-xl font-light leading-relaxed opacity-90">
              <p>
                <strong className="font-semibold text-white">Shree Ranjeet Chaturvedi (Pathak)</strong>, affectionately known as <span className="text-white italic">Yamuna Putra</span>, is the visionary leader driving Aatma Nirbhar Society towards its noble goals. Hailing from the sacred land of BrajBhoomi, Vrindavan, his journey embodies resilience, innovation, and unwavering commitment to social change.
              </p>
              <p>
                However, it was during the challenging times of the Covid-19 pandemic that his inner calling for social service and environmental stewardship truly emerged. Witnessing the plight of millions, he was deeply moved by the selfless acts of individuals...
              </p>
            </div>
            <div className="mt-8 md:mt-10">
              <Link to="/about" className="inline-flex items-center border border-brand-cream rounded-full px-6 py-2 md:px-8 text-xl md:text-2xl hover:bg-brand-cream hover:text-brand-dark transition-all">
                Read more <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            {/* Simulate the collage effect from Figma */}
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop"
              alt="Founder Speaking"
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded text-white text-sm">
              Ranjeet Chaturvedi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;