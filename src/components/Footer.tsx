import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-12 border-t border-white/5 relative z-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.03)_0,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">

          {/* Logo Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-6 mb-10 group">
              <img src="/logo.svg" alt="Project Aatmanirbhar Logo" className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div>
                <h3 className="font-hero font-bold text-4xl leading-none text-white tracking-tight">Project Aatmanirbhar</h3>
                <p className="text-brand-teal font-display text-sm tracking-[0.3em] uppercase mt-2">Establishment of Conscience</p>
              </div>
            </Link>
            <p className="text-white/40 font-display text-xl leading-relaxed max-w-lg mb-12">
              A global movement rooted in the anatomical restoration of our ecosystems. We don't advocate for nature; we are nature defending itself.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-brand-teal hover:border-brand-teal transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-brand-teal hover:border-brand-teal transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-brand-teal hover:border-brand-teal transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-display font-bold text-xs uppercase tracking-[0.4em] mb-10 opacity-30">Navigation</h4>
              <ul className="space-y-6">
                {['Philosophy', 'Crisis', 'Dialogue', 'Act'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item === 'Philosophy' ? 'about' : item === 'Crisis' ? 'problems' : item === 'Dialogue' ? 'contact' : 'act'}`}
                      className="text-white/60 font-display text-lg hover:text-brand-teal flex items-center gap-2 group transition-all"
                    >
                      {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Focus */}
            <div className="md:col-span-2">
              <h4 className="text-white font-display font-bold text-xs uppercase tracking-[0.4em] mb-10 opacity-30">Strategic Nodes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: 'Yamuna River', desc: 'Biological Restoration' },
                  { name: 'Mumbai Coast', desc: 'Oceanic Defense' },
                  { name: 'Western Ghats', desc: 'Biodiversity Shield' },
                  { name: 'Delhi NCR', desc: 'Atmospheric Protocol' },
                ].map((node) => (
                  <div key={node.name} className="group">
                    <span className="block text-brand-cream/80 font-display font-bold text-lg group-hover:text-brand-teal transition-colors">{node.name}</span>
                    <span className="block text-white/20 text-sm italic uppercase tracking-widest mt-1">{node.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 font-display text-sm tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Voice of Nature. All rights reserved.
          </div>
          <div className="flex items-center gap-10 text-white/20 font-display text-xs uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Legal Framework</a>
            <a href="#" className="hover:text-white transition-colors">Intelligence</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;