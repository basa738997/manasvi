import React from 'react';
import {Routes, Route } from 'react-router-dom';
import App from '../App';
import About from './About';
import Client from './Client';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Services from './Services';
import Hero from './Hero';


function Routes() {
  return (
    <div>
      < Routes>
        <Route path="/" element={<App />} />
        < Route path="/Hero" element={< Hero />} />
        <Route path="/about" element={< About />} />
        <Route path="/client" element={< Client />} />
        <Route path="/header" element={< Header />} />
        <Route path="/footer" element={< Footer />} />
        <Route path="/products" element={< Products />} />
        <Route path="/services" element={< Services />} />
        <Route path="/welcome" element={< Welcome />} />
      </Routes>
    </div>
  )
}

export default Routes;
