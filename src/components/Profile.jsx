import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const Profile = () => {
  return (
    <section id="leader" className="py-[100px] px-12">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader 
          eyebrow="Leadership"
          title="The <em>Visionary</em> Behind VEI"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[60px] items-center">
          <motion.div 
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0a1f47] border border-white/8 rounded-[28px] p-10 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1565f5] via-[#5aaeff] to-[#ffd600]"></div>
            <div className="w-[120px] h-[120px] rounded-full mx-auto mb-5 bg-gradient-to-br from-[#1565f5] to-[#5aaeff] flex items-center justify-center font-bricolage text-[2.6rem] font-extrabold text-white relative shadow-inner">
               BE
               <div className="absolute inset-[-4px] rounded-full border-2 border-[#5aaeff]/30"></div>
            </div>
            <div className="font-bricolage text-[1.5rem] font-extrabold text-white">{profile.name}</div>
            <div className="text-[#5aaeff] text-[0.8rem] tracking-[0.05em] my-[4px_18px] uppercase font-bold">{profile.role} · {profile.company}</div>
            <p className="text-[0.82rem] text-[#b8cce8] leading-[1.7] mb-[18px] font-light">{profile.summary}</p>
            <a href={`tel:${profile.phone.replace(' ', '')}`} className="inline-flex items-center gap-2 bg-[#1565f5]/10 border border-[#1565f5]/25 text-[#5aaeff] px-[18px] py-2 rounded-full text-[0.8rem] font-semibold no-underline transition-all hover:bg-[#1565f5] hover:text-white">📞 {profile.phone}</a>

            <div className="flex flex-col gap-2.5 mt-5 text-left">
              {profile.education.map((edu, i) => (
                <div key={i} className="bg-[#1565f5]/7 border-l-3 border-[#1565f5] p-[10px_14px] rounded-[0_10px_10px_0] text-[0.8rem] leading-[1.5]">
                   <strong className="block text-white font-bold">{edu.title} – {edu.institution} ({edu.year})</strong>
                   <span className="text-white/60">{edu.details}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bricolage text-[1.3rem] font-bold text-white mb-[22px]">Achievements & Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.achievements.map((ach, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ borderColor: 'rgba(21, 101, 245, 0.35)', y: -4 }}
                  className="bg-[#0a1f47] border border-white/7 rounded-[18px] p-6 transition-all duration-250 cursor-default shadow-lg"
                >
                   <div className="text-[1.8rem] mb-3">{ach.icon}</div>
                   <h4 className="font-bricolage text-[1rem] font-bold text-white mb-1.5">{ach.title}</h4>
                   <p className="text-[0.8rem] text-[#b8cce8] leading-[1.6]">{ach.details}</p>
                </motion.div>
              ))}
              {/* Additional Impact Stats for filling grid */}
              <div className="bg-[#0a1f47] border border-white/7 rounded-[18px] p-6 shadow-lg">
                 <div className="text-[1.8rem] mb-3">📡</div>
                 <h4 className="font-bricolage text-[1rem] font-bold text-white mb-1.5">300+ Webinars</h4>
                 <p className="text-[0.8rem] text-[#b8cce8] leading-[1.6]">Webinars on MATLAB, IoT, AI, ML & Embedded Systems since 2020.</p>
              </div>
              <div className="bg-[#0a1f47] border border-white/7 rounded-[18px] p-6 shadow-lg">
                 <div className="text-[1.8rem] mb-3">🤝</div>
                 <h4 className="font-bricolage text-[1rem] font-bold text-white mb-1.5">Strategic MOUs</h4>
                 <p className="text-[0.8rem] text-[#b8cce8] leading-[1.6]">100+ Partnerships across Tamil Nadu, Andhra Pradesh & Kerala.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
