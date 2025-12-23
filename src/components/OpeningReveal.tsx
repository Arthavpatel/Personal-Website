import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OpeningReveal = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleSkip = () => {
    setIsVisible(false);
    localStorage.setItem('hasVisited', 'true');
    onComplete();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('hasVisited', 'true');
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-garage-bg flex items-center justify-center"
        >
          <button
            onClick={handleSkip}
            className="absolute top-8 right-8 text-garage-text-secondary hover:text-garage-text transition-colors text-sm tracking-wide"
          >
            Skip
          </button>

          <div className="relative w-full max-w-4xl h-96 overflow-hidden">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full"
              style={{ filter: 'blur(0.5px)' }}
            >
              <motion.line
                x1="100"
                y1="350"
                x2="100"
                y2="50"
                stroke="#7E8A63"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
              <motion.line
                x1="250"
                y1="350"
                x2="250"
                y2="100"
                stroke="#C9B48A"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
              />
              <motion.line
                x1="400"
                y1="350"
                x2="400"
                y2="80"
                stroke="#7E8A63"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
              />
              <motion.line
                x1="550"
                y1="350"
                x2="550"
                y2="120"
                stroke="#C9B48A"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, ease: 'easeInOut', delay: 0.6 }}
              />
              <motion.line
                x1="700"
                y1="350"
                x2="700"
                y2="70"
                stroke="#7E8A63"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.8 }}
              />
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p className="text-garage-text-secondary text-sm tracking-widest">
                THE JOURNEY BEGINS
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningReveal;
