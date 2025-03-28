// src/pages/WhoWeArePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import WhoWeAre from '../components/WhoWeAre';


const WhoWeArePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhoWeAre /> {/* Your existing component */}
    </div>
  );
};

export default WhoWeArePage;