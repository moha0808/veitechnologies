import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, subtitle, centered = false }) => {
  return (
    <div className={`mb-[44px] ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#5aaeff] mb-3"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="sec-h text-[clamp(2.2rem,3.5vw,3.2rem)] font-extrabold"
      >
        {typeof title === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: title }}></span>
        ) : title}
      </motion.h2>
      <div className={`divbar ${centered ? 'mx-auto mt-4 mb-0' : 'my-4'}`}></div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-[1rem] text-[#b8cce8] leading-[1.75] font-light max-w-[520px] ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
