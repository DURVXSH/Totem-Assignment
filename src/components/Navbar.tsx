import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = isHome
    ? (isScrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent')
    : 'bg-brand-dark/90 backdrop-blur-xl border-b border-white/5 shadow-2xl';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${bgClass} h-24 md:h-28 flex items-center`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute -inset-2 bg-brand-teal/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src="/logo.svg" alt="Project Aatmanirbhar Logo" className="w-14 h-14 md:w-16 md:h-16 object-contain relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-hero font-bold leading-none text-xl md:text-2xl tracking-tight">Project</span>
            <span className="text-brand-cream font-display text-[10px] md:text-xs tracking-[0.3em] leading-none opacity-60">AATMANIRBHAR</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-16">
          {[
            { name: 'Crisis', path: '/problems' },
            { name: 'Act', path: '/act' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-display font-medium text-lg tracking-widest uppercase transition-all relative group ${location.pathname === link.path ? 'text-brand-teal' : 'text-white/60 hover:text-white'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-px bg-brand-teal transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/act" className="px-8 py-3 bg-brand-cream/5 border border-white/10 text-brand-cream font-display font-bold text-sm tracking-widest uppercase rounded-full hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all">
            Join Movement
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full h-screen bg-brand-dark/95 backdrop-blur-2xl p-10 flex flex-col gap-8 md:hidden border-t border-white/5 animate-fade-in-up">
          {[
            { name: 'Crisis', path: '/problems' },
            { name: 'Act', path: '/act' },
            { name: 'Philosophy', path: '/about' },
            { name: 'Dialogue', path: '/contact' },
          ].map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white font-hero text-5xl hover:text-brand-teal transition-colors py-4 border-b border-white/5"
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/act" className="mt-8 py-5 bg-brand-teal text-brand-dark font-display font-bold text-2xl text-center rounded-3xl" onClick={() => setIsMenuOpen(false)}>
            Start Acting
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;