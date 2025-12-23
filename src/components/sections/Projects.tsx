import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  question: string;
  learned: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'F1 Race Strategy Simulation - Monte Carlo',
    question: 'To identify the optimal two-stop race strategy under variable conditions and stochastic events.',
    learned: 'Through this simulation, I saw how even small factors can meaningfully influence strategic decisions. The model suggested that a Medium → Hard → Soft sequence produced the lowest average race time, with an improvement of approximately 6.2 seconds.',
    tags: ['Python', 'Matlab', 'Numpy', 'Pandas', 'FastF1'],
  },
  {
    title: 'F1 Tyre-Limited lap Time & Strategy Simulation',
    question: 'To address the challenge of predicting lap time evolution across stints by modelling tyre degradation, fuel burn, and driver input.',
    learned: 'Through this project, I explored how lap time can be predicted using driver telemetry and processed race data. The resulting model achieved an accuracy of approximately ±0.09 seconds per lap under the tested conditions.',
    tags: ['Python', 'Pandas', 'Numpy', 'Sckit-Learn', 'FastF1', 'Matlab'],
  },
  {
    title: 'lapInsight - AI-Driven Lap Analysis',
    question: 'The challenge of capturing missing performance features in qualifying lap analysis by integrating telemetry data with OpenAI',
    learned: 'Before this project, I assumed I was capturing most of the important details when analysing telemetry. While building the model, I realised how easily human judgement can miss small but consistent patterns, and how data-driven approaches can surface those patterns far more reliably.',
    tags: ['Machine Learning', 'Python', 'FastF1', 'OpenF1'],
  },
  {
    title: 'F1 Spanish Grand Prix Data Driven Review',
    question: 'This was my first telemetry-focused project, and I had many questions about interpreting telemetry plots and driving styles. Working through the project helped clarify those questions.',
    learned: 'This project helped me understand the fundamentals of telemetry plots and driving styles, while also sparking new ideas for what I want to explore next. It was my first step into working with telemetry and simulation.',
    tags: [ 'Python', 'FastF1', 'Matlab', 'Qmd'],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-garage-text mb-4">
            Projects
          </h2>
          <p className="text-garage-text-secondary text-lg">
            Questions explored. Lessons learned.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-garage-surface border border-garage-border p-8 hover:bg-garage-surface-hover transition-all duration-300 hover:border-garage-olive overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-garage-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: 'left' }}
                />

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-medium text-garage-text group-hover:text-garage-gold transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ArrowUpRight className="w-5 h-5 text-garage-text-secondary group-hover:text-garage-gold transition-colors" />
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-garage-olive font-medium mb-1">
                        Question Explored
                      </p>
                      <p className="text-garage-text-secondary text-sm leading-relaxed">
                        {project.question}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-garage-olive font-medium mb-1">
                        What I Learned
                      </p>
                      <p className="text-garage-text text-sm leading-relaxed">
                        {project.learned}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 border border-garage-border text-garage-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
