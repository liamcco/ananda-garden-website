import React from 'react';
import { Routes, Route } from "react-router-dom";

import { 
  Home, 
  Butik, 
  Klinik, 
  Vandrarhem, 
    Hanuman,
    Ganesha,
  About,
  Notfound
} 
from './pages';

import { Navbar, Footer } from './containers';

import './App.css';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="butik" element={<Butik/>} />

      <Route path="klinik" element={<Klinik />} />

      <Route path="vandrarhem">
        <Route index element={<Vandrarhem />} />
        <Route path="ganesha" element={<Ganesha />} />
        <Route path="hanuman" element={<Hanuman />} />
      </Route>

      <Route path="about" element={<About />} />

      <Route path="*" element={<Notfound />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
