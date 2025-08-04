import React from 'react';
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";
import { SectionOne } from "./Section/SectionOne";
import { SectionTwo } from "./Section/SectionTwo";
import { SectionThree } from "./Section/SectionThree";
import { SectionFour } from "./Section/SectionFour";
import { SectionFive } from "./Section/SectionFive";

export const Home = () => {
  return (
    <>
      <Nav/>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer/>
    </>
  );
}

export default Home;