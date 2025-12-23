import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Note {
  date: string;
  title: string;
  content: string;
}

const notes: Note[] = [
  {
    date: 'December 2024',
    title: 'On Learning vs. Winning',
    content: 'Motorsport celebrates winners, but it\'s built by people who were willing to fail repeatedly. The engineers I admire most aren\'t the ones who always got it right—they\'re the ones who learned faster from being wrong.',
  },
  {
    date: 'November 2024',
    title: 'The Paddock Mindset',
    content: 'The paddock isn\'t a place for heroes. It\'s a place for clear thinking under pressure, for collaboration when it matters, for making the next decision slightly better than the last one. I\'m learning to think like that.',
  },
  {
    date: 'October 2024',
    title: 'Why Strategy Fascinates Me',
    content: 'Strategy is the art of incomplete information. You never have the full picture, but you still have to decide. That\'s where engineering meets intuition, where data meets judgment. That\'s the conversation I want to be part of.',
  },
  {
    date: 'September 2024',
    title: 'Becoming, Not Arriving',
    content: 'I used to think about "making it" in Formula 1 as a destination. Now I understand it as a process—becoming someone who thinks clearly, works well with others, and stays curious. The job will come when I\'m ready for it.',
  },
];

const Thinking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="thinking" ref={ref} className="min-h-screen px-6 py-24 bg-garage-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-garage-text mb-4">
            Notes from the Garage
          </h2>
          <p className="text-garage-text-secondary text-lg">
            Reflections on learning, motorsport, and becoming.
          </p>
        </motion.div>

        <div className="space-y-8">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative border-l-2 border-garage-border pl-8 pb-8 hover:border-garage-olive transition-colors"
            >
              <div className="absolute left-[-5px] top-0 w-2 h-2 bg-garage-olive rounded-full" />

              <time className="text-xs text-garage-text-secondary tracking-wide uppercase mb-2 block">
                {note.date}
              </time>

              <h3 className="text-xl font-medium text-garage-text mb-3">
                {note.title}
              </h3>

              <p className="text-garage-text-secondary leading-relaxed">
                {note.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thinking;
