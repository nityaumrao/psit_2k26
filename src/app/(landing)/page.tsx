import React from 'react'
import { WavyBackgroundDemo } from './_components/background';

import {Navbar} from './_components/Navbar';

const landing = () => {
  return (
    <>
      <WavyBackgroundDemo />
      {/* <HeroAnimation /> */}
      <Navbar />
    </>
  );
}

export default landing;