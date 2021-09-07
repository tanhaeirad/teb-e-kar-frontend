import React from 'react';

import Hero from './components/Hero';
import OurTeam from './components/OurTeam';
import ServiceList from './components/ServiceList';
import Navbar from './layouts/Navbar';

const App = () => (
  <div className="bg-white-pure font-vazir min-h-screen p-8">
    <Navbar />
    <Hero />
    <ServiceList />
    <OurTeam />
  </div>
);

export default App;
