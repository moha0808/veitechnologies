import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const Services = () => {
  return (
    <section id="services" className="bg-[#071a3a] py-[100px] px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-[50px] gap-5">
           <SectionHeader 
             eyebrow="What We Offer"
             title="Our <em>Core Services</em>"
             subtitle="Expert IT consulting and industry-aligned training programs for academia."
           />
           <a href="#contact" className="bg-transparent border-1.5 border-white/20 text-white px-[22px] py-2 rounded-full text-[0.85rem] font-medium hover:bg-white/10 transition-all no-underline mb-[44px]">View All →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group hover-lift bg-[#0a1f47] border border-white/6 rounded-[20px] p-8 relative overflow-hidden transition-all duration-350 hover:border-[#1565f5]/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] ${svc.featured ? 'bg-[#1565f5] border-transparent' : ''}`}
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1565f5]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350"></div>
              
              <div className="relative z-10">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-white/10 flex items-center justify-center text-[1.4rem] mb-5">{svc.icon}</div>
                <h3 className="font-bricolage text-[1.15rem] font-bold mb-2.5 text-white">{svc.title}</h3>
                <p className={`text-[0.84rem] ${svc.featured ? 'text-white/75' : 'text-[#b8cce8]'} leading-[1.7]`}>{svc.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {svc.tags.map((tag, j) => (
                    <span key={j} className={`px-3 py-1 rounded-full text-[0.7rem] font-semibold ${svc.featured ? 'bg-white/20 text-white' : 'bg-[#5aaeff]/12 text-[#5aaeff]'}`}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="absolute top-6 right-6 font-bricolage text-[2.5rem] font-extrabold text-white/4 pointer-events-none">{svc.num}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
