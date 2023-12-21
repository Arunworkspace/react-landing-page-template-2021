import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        // className="h-26 w-full object-cover sm:h-12 md:h-16 lg:w-full lg:h-480"
        style={{height: "480px",width:"550px",marginTop:"700px" ,borderRadius:"10px"}}
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
