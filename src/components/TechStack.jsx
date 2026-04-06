import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const TechStack = () => {
  return (
    <section id="tech" className="py-[100px] px-12">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader 
          eyebrow="Technologies"
          title="We Teach & Build With"
          centered={true}
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {profile.techStack.map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, backgroundColor: 'rgba(21, 101, 245, 0.12)', borderColor: 'rgba(90, 174, 255, 0.4)' }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-[#0a1f47] border border-white/6 rounded-[16px] px-[22px] py-10 text-center flex flex-col items-center justify-center transition-all duration-250 cursor-pointer shadow-lg"
            >
              <div className="text-[1.9rem] mb-2">{tech.icon}</div>
              <div className="text-[0.72rem] font-semibold text-[#b8cce8] transition-colors">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
