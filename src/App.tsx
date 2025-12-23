import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import OpeningReveal from './components/OpeningReveal';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Thinking from './components/sections/Thinking';
import LinkedInJourney from './components/sections/LinkedInJourney';
import FSAE from './components/sections/FSAE';
import Contact from './components/sections/Contact';

function App() {
  const [showReveal, setShowReveal] = useState(false);
  const [revealComplete, setRevealComplete] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowReveal(true);
    } else {
      setRevealComplete(true);
    }
  }, []);

  const handleRevealComplete = () => {
    setRevealComplete(true);
  };

  return (
    <div className="bg-garage-bg text-garage-text">
      {showReveal && !revealComplete && (
        <OpeningReveal onComplete={handleRevealComplete} />
      )}

      {revealComplete && (
        <>
          <Navigation />
          <main>
            <Home />
            <About />
            <Projects />
            <Thinking />
            <LinkedInJourney />
            <FSAE />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
