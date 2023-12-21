import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import config from '../config/index.json';




const App = () => {

  
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pr-4 pl-4 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-100% lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />  
            <Carousel items={config.carousel} />
          
          
          </div>

          <MainHero />
        </div>
        <MainHeroImage />
      </div>
      {/* <Canvas /> */}
      {/* <Carousel/> */}
      <LazyShow>
        <>
          <Product />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
