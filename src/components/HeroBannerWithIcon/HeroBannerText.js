import React from "react";

import { HeroBanner } from "../../context/hero-banner-context";
import JumbotronComp from "./HeroBannerFragment/JumboTron/JumbotronComp";
import AutoPlaySlider from '../../frontend-library/molecules/AutoPlaySlider';


import { useHeroBannerConf } from '../../hooks/useHeroBannerConf';

export const HeroBannerText = () => {
  const { HeroBannerState, settings, videoBanner } = useHeroBannerConf();
  return (
    <HeroBanner.Provider value={HeroBannerState}>
      {process.env.REACT_APP_THEMETYPE === 'classic' ?
        <AutoPlaySlider
          setting={settings}
          display={true}
          videoBanner={videoBanner}
        /> :
        <JumbotronComp />
      }
    </HeroBanner.Provider>
  );
};
