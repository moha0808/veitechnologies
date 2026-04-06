import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const Conferences = () => {
  return (
    <section id="conferences" className="bg-[#04122a] py-[100px] px-12 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader 
          eyebrow="International Conferences"
          title="Global Knowledge <em>Exchange</em>"
          subtitle="15+ international conferences organized at premier engineering institutions since 2018."
        />

        <div className="grid grid-cols-1 gap-12">
          {profile.conferences.map((conf, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-0"
            >
              <div className="font-bricolage text-[1.2rem] font-extrabold text-[#5aaeff] text-right pr-8 pt-[16px] relative">
                {conf.year}
                <div className="absolute right-[-8px] top-[22px] w-4 h-4 rounded-full bg-[#1565f5] shadow-[0_0_0_4px_rgba(21,101,245,0.2)]"></div>
              </div>
              <div className="pl-8 pb-[36px] border-l-2 border-[#1565f5]/20">
                <div className="flex flex-wrap gap-2.5">
                  {conf.events.map((event, j) => (
                    <motion.div 
                      key={j}
                      whileHover={{ borderColor: 'rgba(21, 101, 245, 0.4)' }}
                      className="bg-[#0a1f47] border border-white/7 rounded-[12px] p-3.5 px-4 text-[0.82rem] leading-[1.5] transition-all cursor-default"
                    >
                      <strong className="block text-[#5aaeff] text-[0.7rem] font-bold mb-0.5 uppercase tracking-wider">{event.title}</strong>
                      <p className="text-white/80">{event.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Strip from real events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-[36px]">
          {[
            { src: "/assets/images/vei2.png", label: "Seminar Session", host: "Jai Shriram Engineering College" },
            { src: "/assets/images/vei1.png", label: "Collaborative Workshop", host: "Students working on live tech projects" },
            { src: "/assets/images/1.png", label: "MOU Signing Ceremony", host: "Mahabalipuram, Tamil Nadu – Mar 2024" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[16px] overflow-hidden relative aspect-[4/3] border border-white/8 group"
            >
              <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04122a]/90 via-transparent to-transparent flex flex-col justify-end p-[14px_14px_12px]">
                <div className="text-[0.75rem] font-bold text-white/90">{item.label}</div>
                <div className="text-[0.68rem] text-[#5aaeff] font-medium mt-0.5">{item.host}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
