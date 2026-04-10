import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Workshops from './components/Workshops';
import { Features, Testimonials, Team, Blog } from './components/Sections';
import { Contact, Footer } from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Portfolio />
      <Workshops />
      <Features />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
