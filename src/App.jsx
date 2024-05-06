import React from "react";
import Navbar from "./Componets/Navbar";
import HeroSection from "./Componets/HeroSection";
import FeatureSection from "./Componets/FeatureSection";
import Workflow from "./Componets/Workflow";
import Pricing from "./Componets/Pricing";
import Testimonials from "./Componets/Testimonials";
import Footer from "./Componets/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
