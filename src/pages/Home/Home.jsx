
import React from 'react';
import Hero from '../../components/Home/Hero';
import LatestTuitions from '../../components/Home/LatestTuitions';
import LatestTutors from '../../components/Home/LatestTutors';
import HowItWorks from '../../components/Home/HowItWorks';
import WhyChooseUs from '../../components/Home/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestTuitions></LatestTuitions>
      <LatestTutors></LatestTutors>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;