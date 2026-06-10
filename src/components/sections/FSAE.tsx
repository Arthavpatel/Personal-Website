import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Activity, GitBranch } from 'lucide-react';

const experiences = [
  {
    icon: Cpu,
    title: 'Grounded Low Voltage',
    description:
      'I work on the systems that keep the car safe and talking to itself: VCU integration, CAN bus communication, and fault testing. Safety-critical work where every failure mode has to be found before the driver does.',
  },
  {
    icon: Activity,
    title: 'Vehicle Dynamics',
    description:
      'On the dynamics side, I work on suspension simulation — modelling how the car behaves before a single part is machined. It is where my data science coursework meets actual vehicle physics.',
  },
  {
    icon: GitBranch,
    title: 'Data & Telemetry',
    description:
      'I am building telemetry tooling for the team, turning raw CAN data into live insight the team can act on. The same questions an F1 pit wall asks, scaled to a student garage.',
  },
];

/**
 * Photo gallery for the FSAE section.
 * Drop photos into public/images/fsae/ and add entries like:
 *   { src: '/images/fsae/vcu-bench-test.jpg', caption: 'VCU bench testing, fall 2025' }
 * The gallery renders only when this array has entries.
 */
const galleryImages: { src: string; caption: string }[] = [
  // TODO(Arthav): add photos here once uploaded to public/images/fsae/
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
            Formula SAE — Team Phantom
          </h2>
          <p className="text-garage-text-secondary text-lg leading-relaxed mb-4">
            This is where motorsport stopped being an idea and started being a car.
          </p>
          <p className="text-garage-text leading-relaxed">
            I joined Team Phantom with no defined data science role — there wasn't one. So I built it,
            teaching myself the hardware and physics as I went. Today I work across two sides of the car:
            the safety-critical low-voltage systems that keep it alive, and the simulation work that
            predicts how it will behave. The pressure of deadlines, the complexity of interconnected
            systems, the constant communication — it is the closest thing to the paddock I have found,
            and exactly what I needed.
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

              <p className="text-sm text-garage-text-secondary leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {galleryImages.map((img, index) => (
              <figure key={index} className="group">
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover border border-garage-border group-hover:border-garage-olive transition-colors"
                />
                <figcaption className="text-xs text-garage-text-secondary mt-2">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        )}

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
