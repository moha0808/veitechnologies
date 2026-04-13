import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-[100px] px-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          <motion.div 
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#0a1f47] rounded-[24px] overflow-hidden border border-white/7 aspect-video sm:h-[420px] sm:aspect-auto flex items-center justify-center relative shadow-2xl">
              <img 
                src="/assets/images/vei4.jpeg" 
                alt="VEI Technologies Team – Award Ceremony at Siddharth Institute of Engineering" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-[-20px] right-[-20px] bg-white rounded-[16px] px-[22px] py-[18px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] min-w-[175px]"
            >
              <div className="font-bricolage text-[2rem] font-extrabold text-[#1565f5]">50+</div>
              <div className="text-[0.76rem] text-[#445] mt-0.5 leading-[1.4]">FDP Programs<br/>Delivered</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionHeader 
              eyebrow="Who We Are"
              title="Optimized IT & <em>Training Excellence</em>"
              subtitle="VEI Technologies provides IT consulting, web applications and outsourcing services. We deliver business solutions by modernizing critical applications and empowering the next generation of engineers across India."
            />
            
            <div className="flex flex-col gap-5 my-10">
              {[
                { icon: "🏛️", title: "Board of Study Member", text: "Affiliated with top autonomous engineering colleges" },
                { icon: "🏭", title: "Industry Supported Labs", text: "Labs established at CMS, Adhiparasakthi, Muthayammal & EPMCE" },
                { icon: "🌍", title: "International Recognition", text: "Doctorate by Global Peace University, GAF USA – 2018" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-[16px] bg-[#1565f5]/10 border border-[#1565f5]/15 hover:bg-[#1565f5]/15 transition-all">
                  <div className="w-[36px] h-[36px] rounded-[10px] bg-[#1565f5] flex items-center justify-center text-[1rem] flex-shrink-0">{item.icon}</div>
                  <div className="text-[0.9rem] text-[#b8cce8] leading-[1.6]">
                    <strong className="block text-white font-bold mb-0.5">{item.title}</strong>{item.text}
                  </div>
                </div>
              ))}
            </div>

            <div id="team" className="bg-white/8 border border-white/12 rounded-[28px] p-8 mb-10 shadow-inner">
              <div className="flex items-center gap-5 mb-6">
                <img src="/assets/images/vei.jpeg" alt="VEI logo" className="w-[64px] h-[64px] rounded-[18px] object-contain bg-white p-2" />
                <div>
                  <div className="font-bricolage text-[1.25rem] font-extrabold text-white">VEI Technologies Team</div>
                  <div className="text-[0.88rem] text-white/70 mt-1 max-w-[420px] leading-[1.6]">Our trainers and mentors drive real-world learning at institutions across India.</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { initials: 'BE', name: 'Dr. B. Ezhilavan', role: 'Managing Director' },
                  { initials: 'IT', name: 'Faculty Leads', role: 'AI, IoT, EV, CyberSec' },
                  { initials: 'ST', name: 'Student Mentors', role: 'Hands-on projects' }
                ].map((member, i) => (
                  <div key={i} className="flex gap-4 items-center bg-white/5 border border-white/8 rounded-[18px] p-4 hover:bg-white/8 transition-all hover:-translate-y-1">
                    <div className="w-[48px] h-[48px] rounded-[14px] bg-gradient-to-br from-[#1565f5] to-[#5aaeff] flex items-center justify-center font-bold text-[1rem] text-white flex-shrink-0 shadow-lg">{member.initials}</div>
                    <div>
                      <strong className="block text-[0.92rem] text-white font-bold">{member.name}</strong>
                      <span className="block text-[0.8rem] text-[#b8cce8] leading-[1.4]">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="inline-block bg-[#1565f5] text-white p-[12px_32px] text-[0.92rem] rounded-[12px] no-underline font-bold transition-all hover:scale-105 shadow-[0_4px_20px_rgba(21,101,245,0.4)]">Partner With Us →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
