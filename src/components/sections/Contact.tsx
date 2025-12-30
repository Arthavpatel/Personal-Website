import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Twitter } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arthavpatel5433gmail.com',
      href: 'mailto:arthavpatel5433gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/arthavpatel',
      href: 'https://www.linkedin.com/in/arthav-patel/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Arthavpatel',
      href: 'https://github.com/Arthavpatel',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: 'x.com/P_arthav',
      href: 'https://x.com/P_arthav',
    },
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-garage-text mb-6">
            Let's Connect
          </h2>
          <p className="text-garage-text-secondary text-lg leading-relaxed max-w-2xl">
            I’m always open to thoughtful conversations about motorsport, engineering, strategy, or the journey of becoming.
            If you’d like to connect, feel free to reach out.
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 border border-garage-border bg-garage-surface hover:border-garage-olive hover:bg-garage-surface-hover transition-all group"
            >
              <link.icon className="w-5 h-5 text-garage-text-secondary group-hover:text-garage-olive transition-colors" />
              <div className="flex-1">
                <p className="text-sm text-garage-text-secondary mb-1">{link.label}</p>
                <p className="text-garage-text group-hover:text-garage-gold transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-garage-border"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-garage-text-secondary hover:text-garage-text transition-colors group"
          >
            <FileText className="w-4 h-4 group-hover:text-garage-gold transition-colors" />
            <span className="text-sm">Download Resume</span>
          </a>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-garage-border text-center"
        >
          <p className="text-garage-text-secondary text-sm">
            Built with curiosity and care by Arthav Patel
          </p>
          <p className="text-garage-text-secondary text-xs mt-2">
            © 2026 — A journey in progress
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
