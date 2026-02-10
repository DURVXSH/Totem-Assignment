import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TimelineSection from '../components/home/TimelineSection';
import ImpactSection from '../components/home/ImpactSection';
import FounderSection from '../components/home/FounderSection';
import CrisesSection from '../components/home/CrisesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <TimelineSection />
      <ImpactSection />
      <FounderSection />
      <CrisesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;