import React from 'react';
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";
import { SectionContact } from "./Section/SectionContact";
import { GoogleMap } from "./Section/GoogleMap";
import { ServiceSelectSection } from "./Section/ServiceSelectSection";


export const ContactUS = () => {
  return (
    <>
    <Nav/>
    <SectionContact/>
    <GoogleMap/>
    <ServiceSelectSection />
    <Footer/>
    </>
  );
};

export default ContactUS;