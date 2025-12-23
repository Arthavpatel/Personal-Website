import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Post {
  date: string;
  title: string;
  excerpt: string;
  insight: string;
  category: string;
}

const posts: Post[] = [
  {
    date: 'June 2023',
    title: 'When Watching Turned Into Understanding',
    excerpt: 'The 2023 Spanish Grand Prix marked the first time I stopped watching Formula 1 for entertainment and started trying to understand what was happening underneath...',
    insight: 'That race shifted how I saw Formula 1. I became more interested in strategy, car behaviour, and how teams manage performance across an entire race. It was the moment curiosity began to replace passive viewing.',
    category: 'Journey',
  },
  {
    date: 'March 2024',
    title: 'Turning Curiosity into Analysis',
    excerpt: 'Inspired by professional race engineering work, I began my first deep telemetry analysis using Spanish Grand Prix 2024 data...',
    insight: 'Working on telemetry over several months taught me how much complexity lives behind every lap. It was overwhelming at times, but it showed me how structured analysis turns curiosity into understanding.',
    category: 'Engineering',
  },
  {
    date: 'June 2024',
    title: 'Preparing for the Paddock',
    excerpt: 'As I continued building projects, I started looking for ways to connect my learning to real Formula 1 environments...',
    insight: 'Discovering industrial placements made Formula 1 feel more tangible. Conversations with engineers and placement students helped me understand the level required, and reinforced the importance of doing work I genuinely care about.',
    category: 'Growth',
  },
  {
    date: 'September 2024',
    title: 'Learning Through the Process',
    excerpt: 'Progressing to a second interview with Visa Cash App Racing Bulls gave me a clearer picture of how competitive Formula 1 opportunities really are...',
    insight: 'Reaching the second interview was validating, but not securing the role was just as important. It showed me where I still need to grow, what Formula 1 expects, and why continuing to build and learn matters more than any single outcome.',
    category: 'Reflection',
  },
];

const LinkedInJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="journey" ref={ref} className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-garage-text mb-4">
            The Journey
          </h2>
          <p className="text-garage-text-secondary text-lg">
            Moments of growth, documented along the way.
          </p>
        </motion.div>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-garage-border bg-garage-surface hover:border-garage-olive transition-colors"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <time className="text-xs text-garage-text-secondary tracking-wide uppercase">
                      {post.date}
                    </time>
                    <span className="text-xs px-2 py-1 border border-garage-border text-garage-text-secondary">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-garage-text mb-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-garage-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-garage-text-secondary flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-garage-border pt-4">
                      <p className="text-sm font-medium text-garage-olive mb-2">
                        What I Learned
                      </p>
                      <p className="text-garage-text leading-relaxed">
                        {post.insight}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInJourney;
