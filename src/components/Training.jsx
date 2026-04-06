import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const Programs = () => {
  return (
    <section id="programs" className="bg-[#071a3a] py-[100px] px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader 
          eyebrow="Training Programs"
          title="Comprehensive <em>Learning Initiatives</em>"
          subtitle="From short workshops to month-long internships — bridging academia and industry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            {profile.programs.map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ borderStyle: 'solid', borderColor: 'rgba(21, 101, 245, 0.35)', x: 4 }}
                viewport={{ once: true }}
                className={`bg-[#0a1f47] border border-white/6 rounded-[18px] p-[24px_26px] flex gap-[18px] items-start transition-all duration-250 cursor-pointer ${prog.featured ? 'bg-[#1565f5] border-transparent' : ''}`}
              >
                <div className={`w-[44px] h-[44px] rounded-[12px] flex-shrink-0 bg-white/12 flex items-center justify-center font-bricolage font-extrabold text-[1rem] ${prog.featured ? 'bg-white/25' : ''}`}>
                  {prog.nb}
                </div>
                <div>
                  <h4 className="text-[0.95rem] font-bold mb-1.5 text-white">{prog.title}</h4>
                  <p className={`text-[0.8rem] ${prog.featured ? 'text-white/80' : 'text-[#b8cce8]'} leading-[1.6]`}>{prog.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0a1f47] border border-white/6 rounded-[18px] p-[30px] flex flex-col shadow-2xl relative"
          >
            <div className="font-bricolage text-[1.6rem] font-extrabold text-white mb-2">Why Choose VEI?</div>
            <div className="text-[0.85rem] text-[#b8cce8] leading-[1.7] mb-[22px]">Industry expert-designed programs delivered at your campus. AICTE recognized, hands-on, and outcome-focused for real career impact.</div>
            
            <div className="flex flex-wrap gap-2 mb-[22px]">
              {profile.techStack.slice(0, 12).map((item, i) => (
                <span key={i} className="px-[14px] py-[6px] rounded-full text-[0.75rem] font-bold border border-[#5aaeff]/25 text-[#5aaeff] bg-[#5aaeff]/6 uppercase tracking-wider">{item.name}</span>
              ))}
            </div>

            <div className="bg-[#1565f5]/8 border border-[#1565f5]/20 rounded-[14px] p-[18px] mb-[20px]">
              <div className="text-[0.72rem] text-[#5aaeff] font-bold tracking-[0.06em] uppercase mb-1.5">📌 AICTE ATAL Sponsored</div>
              <div className="text-[0.84rem] text-[#b8cce8] leading-[1.6]">Multiple ATAL FDP programs — Smart Cities, Embedded Systems, Quantum Computing, IoT, EV & more.</div>
            </div>

            <a href="#contact" className="mt-auto bg-[#1565f5] text-white p-[13px_24px] rounded-[12px] text-center font-bold text-[0.9rem] no-underline transition-all hover:translate-y-[-2px] shadow-[0_8px_30px_rgba(21,101,245,0.5)]">Request a Program →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
