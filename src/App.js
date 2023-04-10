import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header'
import { Counter } from './features/counter/Counter';

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <Counter></Counter>
    </div>
  );
}
