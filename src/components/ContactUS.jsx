import React from 'react';
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";
import { SectionContact } from "./Section/SectionContact";
import { GoogleMap } from "./Section/GoogleMap";


export const ContactUS = () => {
  return (
    <>
    <Nav/>
    <SectionContact/>
    <GoogleMap/>
    <Footer/>
    </>
  );
};

export default ContactUS;