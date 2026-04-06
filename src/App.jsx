import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Programs from './components/Training';
import Conferences from './components/Conferences';
import Partnerships from './components/Partnerships';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [outlineCoords, setOutlineCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;
    const animateScroll = () => {
      setOutlineCoords(prev => ({
        x: prev.x + (coords.x - prev.x) * 0.12,
        y: prev.y + (coords.y - prev.y) * 0.12
      }));
      animationFrame = requestAnimationFrame(animateScroll);
    };
    animateScroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [coords]);

  return (
    <div className="bg-[#04122a] text-white selection:bg-[#ffd600] selection:text-[#04122a] cursor-none overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor" 
        style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
      ></div>
      <div 
        className="custom-cursor-outline" 
        style={{ left: `${outlineCoords.x}px`, top: `${outlineCoords.y}px` }}
      ></div>

      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Services />
      <TechStack />
      <Programs />
      <Conferences />
      <Partnerships />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
