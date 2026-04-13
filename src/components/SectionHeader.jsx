import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, subtitle, centered = false }) => {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#5aaeff] mb-3"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="font-bricolage text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-[1.1] text-white"
      >
        {typeof title === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: title }}></span>
        ) : title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`mt-5 text-[0.9rem] sm:text-[1rem] text-[#b8cce8] leading-[1.7] font-normal max-w-[550px] ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: centered ? 80 : 60 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-1 bg-[#1565f5] rounded-full mt-6 ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionHeader;

