'use client';

import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export default function AnimatedHeading({ 
  title, 
  subtitle, 
  className = '',
  align = 'center'
}: AnimatedHeadingProps) {
  const words = title.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className={`${className} text-${align}`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
      >
        <h1 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-6xl flex flex-wrap gap-x-4 justify-center">
          {words.map((word, idx) => (
            <motion.span
              variants={child}
              key={idx}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5,
            duration: 0.8,
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
          className="mt-6 text-lg leading-8 text-neutral-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
} 