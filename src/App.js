import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from "./components/home";
import {ContactUS} from "./components/ContactUS";


const  App = () => {
  return (
      <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/ContactUS" element={<ContactUS/>} />
            </Routes>
        </Router>
  );
}

export default App;