import React from "react";
import "./App.css";
import HeroSection from "./components/sections/HeroSection";
import Header from "./components/Header";
import PhilosophySection from "./components/sections/PhilosophySection";
import ServicesSection from "./components/sections/ServicesSection";
// import { Counter } from './features/counter/Counter';

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      {/* <Counter></Counter> */}
    </div>
  );
}
