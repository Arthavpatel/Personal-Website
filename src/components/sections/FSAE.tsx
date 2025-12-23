import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Wrench, TrendingUp } from 'lucide-react';

const experiences = [
  {
    icon: Users,
    title: 'Learning Within a Team',
    description: 'Formula SAE taught me that engineering happens in conversation. The best solutions emerge when different perspectives meet—design, dynamics, and data working together.',
  },
  {
    icon: Wrench,
    title: 'Understanding Systems',
    description: 'Building a race car from scratch revealed how every component connects. Strategy doesn\'t exist in isolation—it lives within the constraints of the machine and the team.',
  },
  {
    icon: TrendingUp,
    title: 'Growing in Complexity',
    description: 'Each competition brought new problems. Each problem required clearer thinking. I learned to work under pressure, adapt quickly, and trust the process.',
  },
];

const FSAE = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="fsae" ref={ref} className="min-h-screen px-6 py-24 bg-garage-surface/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-light text-garage-text mb-6">
            Formula SAE - Team Phantom
          </h2>
          <p className="text-garage-text-secondary text-lg leading-relaxed mb-4">
            This was the first time motorsport stopped being an idea and started feeling real.
          </p>
          <p className="text-garage-text leading-relaxed">
          Formula SAE gave me a sense of what the paddock might actually feel like the pressure of deadlines, the complexity of systems, and the need for constant communication.
          It was messy, challenging, and honestly, exactly what I needed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-garage-surface border border-garage-border p-6 hover:border-garage-olive transition-colors group"
            >
              <exp.icon className="w-8 h-8 text-garage-olive mb-4 group-hover:text-garage-gold transition-colors" />

              <h3 className="text-lg font-medium text-garage-text mb-3">
                {exp.title}
              </h3>

              <p className="text-garage-text-secondary text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 border-l-2 border-garage-olive bg-garage-surface"
        >
          <p className="text-garage-text italic leading-relaxed">
            "Formula SAE didn't just teach me engineering, it taught me how to think like an engineer.
            How to work in teams, manage trade-offs, and stay focused when things don't go as planned.
            It was my first step into the world I want to work in."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FSAE;