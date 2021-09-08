import React from 'react';

import Hero from './components/Hero';
import OurTeam from './components/OurTeam';
import ServiceList from './components/ServiceList';
import Navbar from './layouts/Navbar';
import BlogList from './components/BlogList';
import Footer from './layouts/Footer';

const App = () => (
  <div className="font-vazir">
    <div className="bg-white-pure p-8">
      <Navbar />
      <Hero />
      <ServiceList />
      <OurTeam />
      <BlogList />
    </div>
    <Footer />
  </div>
);

export default App;
