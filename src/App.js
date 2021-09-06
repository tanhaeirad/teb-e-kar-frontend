import React from 'react';

import Hero from './components/Hero';
import Navbar from './layouts/Navbar';

const App = () => (
  <div className="bg-white-pure font-vazir min-h-screen p-8">
    <Navbar />
    <Hero />
  </div>
);

export default App;
