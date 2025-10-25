import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FeatureCards from './components/FeatureCards';
import RecordsPanel from './components/RecordsPanel';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero3D />
      <FeatureCards />
      <RecordsPanel />
      <Footer />
    </div>
  );
};

export default App;
