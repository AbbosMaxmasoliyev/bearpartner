import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Reveal, Tween, Controls, PlayState, SplitChars, Timeline, SplitWords } from 'react-gsap';
import { forwardRef, useState } from 'react';
import Showcase from './components/Showcase';
import About from './components/About';
import { useEffect } from 'react';
import Benefits from './components/Benefits';
import Step from './components/Step';
import Cooperation from './components/Cooperation';
import Footer from './components/Footer';
import Message from './components/Message';
import Background from './components/Background';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Background/>
      <About/>
      <Benefits />
      <Step/>
      <Cooperation/>
      <Message/>
      <Footer/>
    </div>
  );
}




export default App;
