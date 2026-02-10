import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wind,
  Droplets,
  Mountain,
  Users,
  Sprout,
  Home as HomeIcon,
  HeartHandshake,
  Eye,
  Globe,
  Anchor,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Home: React.FC = () => {
  const [activeMission, setActiveMission] = React.useState(1); // Default to Next Phase

  const missions = [
    {
      title: "Current Mission",
      label: "Environmental Restoration",
      image: "/Crisis-1.png",
      alt: "River Pollution"
    },
    {
      title: "Next Phase",
      label: "Urban Smog & Air Quality",
      image: "/Crisis-1.png",
      alt: "Polluted City Fog"
    },
    {
      title: "Future Mission",
      label: "Herbal Valley & Bio-Economy",
      image: "/Crisis-2.png",
      alt: "Lush Green Valley"
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full flex flex-col">
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/Kid.png"
              alt="Child in nature"
              className="w-full h-full object-cover select-none object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark/90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-brand-dark/20 to-transparent"></div>
          </div>

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

      {/* Timeline Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
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

          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-4 md:mb-6">
              This Is Not Theory.<br />This Is Action.
            </h2>
            <p className="font-display font-medium text-lg md:text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed px-2">
              Active since 2020, Project Aatmanirbhar has worked on the ground through the most challenging conditions—turning the Yamuna into a national environmental, cultural, and political movement.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-end md:pr-8 relative md:border-r-2 md:border-brand-accent/30 py-4 md:py-12 space-y-12 md:space-y-24">
              <div className="relative group w-full text-center md:text-right">
                <div className="hidden md:block absolute -right-[41px] top-2 w-4 h-4 rounded-full bg-brand-accent/50 border-2 border-white shadow-sm"></div>
                <span className="font-sans font-bold text-brand-accent/50 text-lg">2018</span>
                <p className="font-display text-gray-500 text-base md:text-sm mt-1">Founded with a mission<br />to empower rural communities</p>
              </div>
              <div className="relative group w-full text-center md:text-right">
                <div className="hidden md:block absolute -right-[43px] top-2 w-5 h-5 rounded-full bg-brand-accent border-2 border-white shadow-md scale-125"></div>
                <span className="font-sans font-bold text-brand-accent text-3xl md:text-4xl block mb-1">2019</span>
                <p className="font-display text-brand-dark font-semibold text-xl md:text-2xl">Reached 25 villages<br />across 3 states</p>
              </div>
              <div className="relative group w-full text-center md:text-right">
                <div className="hidden md:block absolute -right-[41px] top-2 w-4 h-4 rounded-full bg-brand-accent/50 border-2 border-white shadow-sm"></div>
                <span className="font-sans font-bold text-brand-accent/50 text-lg">2020</span>
                <p className="font-display text-gray-500 text-base md:text-sm mt-1">Launched women<br />empowerment initiative</p>
              </div>
            </div>

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

      {/* Impact Section */}
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
                <HomeIcon size={32} className="text-brand-cream md:w-12 md:h-12" />
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
              <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] min-h-[300px] md:min-h-[400px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <h3 className="font-sans font-bold text-xl md:text-2xl">River<br />Rejuvenation</h3>
                <p className="font-sans text-sm mt-4">Restoring river ecosystems through sustained on-ground action.</p>
              </div>
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2 bg-brand-cream p-6 md:p-8 rounded-[25px] min-h-[180px] md:min-h-[200px] flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="font-sans font-bold text-xl md:text-2xl mb-2">Waste & Clean-Up Drives</h3>
                  <p className="font-sans text-sm">Preventing waste from entering rivers and land through regular clean-up drives.</p>
                </div>
                <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] min-h-[200px] md:min-h-[250px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="font-sans font-bold text-xl md:text-2xl">Community &<br />Women Empowerment</h3>
                  <p className="font-sans text-sm">Supporting rural communities through sustainable livelihoods.</p>
                </div>
                <div className="bg-brand-cream p-6 md:p-8 rounded-[25px] min-h-[200px] md:min-h-[250px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="font-sans font-bold text-xl md:text-2xl">Air Pollution<br />Action</h3>
                  <p className="font-sans text-sm">Reducing pollution through awareness and clean practices.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 inline-block">
              <Link to="/problems" className="inline-flex items-center gap-2 border border-brand-cream text-brand-cream px-8 py-3 rounded-full text-xl md:text-2xl font-display hover:bg-brand-cream hover:text-brand-dark transition-all">
                See Our Work <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-brand-dark rounded-[30px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 md:gap-12 items-center shadow-2xl relative overflow-hidden">
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
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
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

      {/* Crises Section */}
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
            <div className="w-full md:w-1/3 pl-4 md:pl-0">
              <div className="flex flex-col gap-0 border-l-[8px] md:border-l-[13px] border-brand-dark/10 md:border-none relative">
                {missions.map((mission, index) => (
                  <div
                    key={index}
                    className={`relative py-6 md:py-8 pl-6 md:pl-0 md:text-right md:pr-12 cursor-pointer group transition-all duration-500`}
                    onClick={() => setActiveMission(index)}
                  >
                    {activeMission === index && (
                      <>
                        <div className="hidden md:block absolute right-[-6px] top-1/2 w-4 h-[80px] bg-brand-dark transform -translate-y-1/2"></div>
                        <div className="md:hidden absolute left-[-8px] top-0 bottom-0 w-[8px] bg-brand-dark"></div>
                      </>
                    )}
                    <h3 className={`font-display text-4xl md:text-5xl transition-all duration-500 ${activeMission === index ? 'text-brand-dark font-medium' : 'text-brand-gray/50 group-hover:text-brand-gray'}`}>
                      {mission.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3 relative h-[450px] md:h-[600px] mt-8 md:mt-0">
              <div className="absolute top-0 right-4 md:right-10 w-[90%] md:w-[80%] h-[400px] md:h-[500px] bg-brand-dark rounded-[20px] overflow-hidden opacity-40 transform rotate-[-3deg] translate-y-4"></div>
              <div className="absolute top-4 right-0 md:right-auto md:left-4 w-full md:w-[90%] h-[400px] md:h-[545px] bg-brand-dark rounded-[24px] overflow-hidden shadow-2xl transition-all duration-700">
                <img
                  src={missions[activeMission].image}
                  alt={missions[activeMission].alt}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-display text-2xl md:text-3xl">
                    {missions[activeMission].label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="font-display font-semibold text-4xl md:text-6xl text-brand-dark mb-4">Our Testimonials</h2>
            <p className="font-display font-semibold text-base md:text-lg text-brand-dark max-w-xl">
              Learn from the experiences of those who have joined hands with us to create a better future.
            </p>
            {/* <div className="flex gap-4 mt-8">
              <button className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-black transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-brand-dark text-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors">
                <ChevronRight size={20} />
              </button>
            </div> */}
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center relative">
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
            <Link to="/act" className="bg-brand-cream px-8 py-4 md:px-12 rounded-full font-display text-xl md:text-2xl flex items-center hover:bg-white hover:scale-105 transition-all w-full md:w-auto justify-center">
              Take Action Now <span className="ml-2 font-bold">→</span>
            </Link>
            <Link to="/about" className="border border-brand-cream text-brand-cream px-8 py-4 md:px-10 rounded-full font-display text-xl md:text-2xl flex items-center hover:bg-brand-cream hover:text-brand-dark transition-all w-full md:w-auto justify-center">
              Learn Our Story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;