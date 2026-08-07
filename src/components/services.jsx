import React from 'react';
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";
import { AllServicesPage } from "./Section/AllServicesPage";


export const Services = () => {
  return (
    <>  
      <Nav/>
      <AllServicesPage />
      <Footer/>
    </>
  );
}

export default Services;