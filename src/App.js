import React from "react";
import "./App.css";
import HeroSection from "./components/sections/HeroSection";
import Header from "./components/Header";
import PhilosophySection from "./components/sections/PhilosophySection";
import ServicesSection from "./components/sections/ServicesSection";
import MembersSection from "./components/sections/MembersSection";
import FieldSection from "./components/sections/FieldSection";
import ChooseUsSection from "./components/sections/ChooseUsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <MembersSection />
      <FieldSection/>
      <ChooseUsSection/>
      <Footer/>
    </div>
  );
}
