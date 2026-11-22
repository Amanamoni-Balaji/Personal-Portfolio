import React from 'react';
import { motion } from 'framer-motion';

export default function BlurFade({
  children,
  className = '',
  delay = 0,
  duration = 0.45,
  yOffset = 14,
  blur = '6px'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(${blur})`, y: yOffset }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
