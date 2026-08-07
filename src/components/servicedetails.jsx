import React from 'react';
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";
import { ServiceDetail } from "./Section/ServiceDetail";


export const ServiceDetailPage = () => {
  return (
    <>  
      <Nav/>
      <ServiceDetail />
      <Footer/>
    </>
  );
}

export default ServiceDetailPage;