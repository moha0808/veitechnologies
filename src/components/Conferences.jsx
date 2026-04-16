import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

// Import new conference images
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.jpeg';
import img8 from '../assets/images/8.jpeg';
import img9 from '../assets/images/9.jpeg';
import img10 from '../assets/images/10.jpeg';

const Conferences = () => {
  const eventPhotos = [
    { src: img1, label: "MoU Signing Ceremony", host: "International Academic Partnership" },
    { src: img2, label: "Technical Keynote", host: "Global Engineering Summit" },
    { src: img3, label: "Award Presentation", host: "Excellence in IT Education" },
    { src: img4, label: "Inaugural Session", host: "International Conference on AI" },
    { src: img5, label: "Panel Discussion", host: "Future of Smart Technologies" },
    { src: img6, label: "Certificate Distribution", host: "Advanced Skill Training" },
    { src: img7, label: "Collaborative Workshop", host: "Industry-Institute Interaction" },
    { src: img8, label: "Special Guest Address", host: "Distinguished Scholars Meet" },
    { src: img9, label: "Technical Exhibition", host: "Innovation Showcase" },
    { src: img10, label: "Group Assembly", host: "Global Research Exchange" }
  ];

  return (
    <section id="conferences" className="bg-[#04122a] py-[80px] md:py-[100px] px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader 
          eyebrow="International Conferences"
          title="Global Knowledge <em>Exchange</em>"
          subtitle="15+ international conferences organized at premier engineering institutions since 2018."
        />

        {/* Timeline Details */}
        <div className="space-y-8 md:space-y-12 mb-20">
          {profile.conferences.map((conf, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-4 md:gap-0"
            >
              <div className="md:w-[140px] flex md:block items-center gap-4 md:pr-8 relative">
                <div className="font-bricolage text-[1.4rem] md:text-[1.2rem] font-extrabold text-[#5aaeff] md:text-right leading-none">
                  {conf.year}
                </div>
                {/* Timeline Dot (desktop only) */}
                <div className="hidden md:block absolute right-[-9px] top-[10px] w-4 h-4 rounded-full bg-[#1565f5] ring-4 ring-[#1565f5]/20 z-10 transition-transform group-hover:scale-125"></div>
              </div>
              
              <div className="flex-1 md:pl-10 pb-6 md:pb-8 md:border-l-2 border-[#1565f5]/20 relative">
                {/* Mobile Timeline Link */}
                <div className="md:hidden absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1565f5] to-transparent"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {conf.events.map((event, j) => (
                    <motion.div 
                      key={j}
                      whileHover={{ y: -4, borderColor: 'rgba(90, 174, 255, 0.4)' }}
                      className="bg-[#0a1f47]/50 backdrop-blur-sm border border-white/5 rounded-xl p-5 transition-all"
                    >
                      <span className="inline-block px-2 py-1 bg-[#1565f5]/20 text-[#5aaeff] text-[0.65rem] font-bold rounded uppercase mb-3 tracking-wider">
                        Conference Event
                      </span>
                      <h4 className="text-white font-bold text-[0.95rem] mb-2 leading-tight">
                        {event.title}
                      </h4>
                      <p className="text-white/60 text-[0.85rem] leading-relaxed">
                        {event.details}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Gallery for Conference Photos */}
        <div className="mt-[60px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h3 className="text-white font-bricolage text-[1.8rem] md:text-[2.2rem] font-extrabold leading-tight">
                Event <span className="text-[#5aaeff]">Moments</span>
              </h3>
              <p className="text-white/50 text-[0.9rem] mt-2 max-w-[500px]">
                Captured snippets from our global engineering summits, workshops, and MoU ceremonies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventPhotos.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i % 4) * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col bg-[#0a1f47]/30 border border-white/5 rounded-2xl overflow-hidden group hover:border-[#1565f5]/30 transition-all duration-300"
              >
                {/* Image Container - Showing full image */}
                <div className="aspect-[4/3] bg-black/40 relative overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src={item.src} 
                    alt={item.label} 
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#04122a]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>

                {/* Details Section */}
                <div className="p-5 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a1f47]/50">
                  <div className="text-[0.8rem] font-bold text-white mb-1 group-hover:text-[#5aaeff] transition-colors line-clamp-1">
                    {item.label}
                  </div>
                  <div className="text-[0.7rem] text-white/50 font-medium leading-tight line-clamp-2">
                    {item.host}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conferences;


