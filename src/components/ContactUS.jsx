import React from 'react';
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";
import { SectionContact } from "./Section/SectionContact";
import { GoogleMap } from "./Section/GoogleMap";


export const ContactUS = () => { // 指定 Home 組件的類型
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