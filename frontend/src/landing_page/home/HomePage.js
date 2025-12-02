import React from 'react';
import HeroSection from './HeroSection';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
  return ( 
    <>
     <Navbar />
    <HeroSection  />
    <Awards />
    <Stats/>
    <Pricing />
    <Education />
    <OpenAccount />
    <Footer />
    
    </>
   );
}

export default HomePage;