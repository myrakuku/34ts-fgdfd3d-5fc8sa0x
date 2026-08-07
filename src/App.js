import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from "./components/home";
import {ContactUS} from "./components/ContactUS";
import {Services} from "./components/services";
import {ServiceDetailPage} from "./components/servicedetails";


const  App = () => {
  return (
      <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/ContactUS" element={<ContactUS/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/servicedetails" element={<ServiceDetailPage/>} />
            </Routes>
        </Router>
  );
}

export default App;