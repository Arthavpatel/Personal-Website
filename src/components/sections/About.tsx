import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-0 top-0 bottom-0 w-px bg-garage-olive origin-top"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pl-12 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-light text-garage-text mb-12">
            Where It Started
          </h2>

          <div className="space-y-6 text-garage-text-secondary text-lg leading-relaxed">
          <p>
          I remember watching the 2023 Spanish Grand Prix and realising I wasn’t watching it for fun anymore, but to understand it.
          What struck me wasn’t just the racing, but how a car that light could carry so much speed through corners,
          lap after lap, without falling apart.
          That curiosity is what pushed me to start thinking seriously about working in a Formula 1 team one day.
          </p>

          <p>
            Engineering and telemetry became the language I needed to explore those questions.
            Not to build the fastest car, but to understand the conversation between the driver,
            the machine, and the track.
            To see how strategy unfolds lap by lap, how uncertainty is managed,
            and how teams make decisions under pressure.
          </p>

          <p>
            I don’t see Formula 1 as a distant dream.
            I see it as a workplace I’m preparing to enter,
            a place where curiosity meets precision,
            where learning never stops,
            and where being wrong is simply part of understanding.
          </p>

            <p className="text-garage-text pt-4">
              This journey isn't about arriving. It's about becoming someone who belongs in Formula 1,
              not because I want recognition, but because I learned to think clearly, work deeply, and ask better questions.
            </p>

            <p className="text-garage-gold italic">
              I'm not there yet. But I'm learning my way there.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
