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
import { MyProvider } from './components/Context';
import Reviews from './components/Reviews';

// function ScrollTop(url) {
//   url.preventDefault();
//   console.log(document.getElementById(url.target.value));
// }

function App() {

  const [context, setContext] = useState("About")
  useEffect(() => {
   if(context){
    console.log(document.getElementById(context).offsetTop);
    let top  = document.getElementById(context).offsetTop  
    // document.scrollTop = top
    window.screenTop = top
    console.log(window.scrollY, "y");
  }else{
    console.log(null);
   }
  }, [context])

  return (

    <MyProvider value={ [context, setContext] }>
      <div className="App">
        <Navbar />
        <Showcase />
        <Background />
        <About />
        <Benefits />
        <Step />
        <Cooperation/>
        <Reviews />
        <Message />
        <Footer />
      </div>
    </MyProvider>
  );
}




export default App;
