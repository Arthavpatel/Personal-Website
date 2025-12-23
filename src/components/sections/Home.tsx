import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-5xl md:text-7xl font-light text-garage-text mb-8 tracking-tight">
          Arthav Patel
        </h1>

        <div className="space-y-6 text-garage-text-secondary text-lg md:text-xl leading-relaxed">
          <p>
            I'm learning to become a motorsport engineer and strategist.
          </p>
          <p className="max-w-2xl mx-auto">
            Not because I want to win, but because I want to understand.
            Not because I love the spectacle, but because I'm curious about the decisions behind every lap.
          </p>
          <p className="text-garage-olive font-light">
            This is a quiet journey toward the paddock.
          </p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-garage-text-secondary hover:text-garage-text transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Home;
