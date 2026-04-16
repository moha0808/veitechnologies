import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

// Import the leader's photo (using 3.jpeg as the professional photo)
import leaderImg from '../assets/images/MOU Images/12.jpeg';

const Profile = () => {
  return (
    <section id="leader" className="py-[100px] px-12 bg-[#04122a]">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader 
          eyebrow="Leadership"
          title="The <em>Visionary</em> Behind VEI"
        />
 
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[60px] items-start">
          <motion.div 
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0a1f47] border border-white/8 rounded-[28px] p-10 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1565f5] via-[#5aaeff] to-[#ffd600]"></div>
            
            {/* Profile Image Replacing 'BE' */}
            <div className="w-[140px] h-[140px] rounded-full mx-auto mb-6 relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1565f5] to-[#5aaeff] animate-pulse opacity-20"></div>
              <div className="absolute inset-[-4px] rounded-full border-2 border-[#5aaeff]/30"></div>
              <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#0a1f47] shadow-xl">
                <img 
                  src={leaderImg} 
                  alt={profile.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            </div>

            <div className="font-bricolage text-[1.6rem] font-extrabold text-white mb-1">{profile.name}</div>
            <div className="text-[#5aaeff] text-[0.8rem] tracking-[0.05em] mb-5 uppercase font-bold leading-tight">
              {profile.role} · <span className="text-white/70">{profile.company}</span>
            </div>
            <p className="text-[0.85rem] text-[#b8cce8] leading-[1.7] mb-6 font-light">{profile.summary}</p>
            
            <a 
              href={`tel:${profile.phone.replace(' ', '')}`} 
              className="inline-flex items-center gap-2 bg-[#1565f5]/10 border border-[#1565f5]/25 text-[#5aaeff] px-6 py-2.5 rounded-full text-[0.85rem] font-semibold no-underline transition-all hover:bg-[#1565f5] hover:text-white"
            >
              <span className="text-[1rem]">📞</span> {profile.phone}
            </a>

            <div className="flex flex-col gap-3 mt-8 text-left">
              {profile.education.map((edu, i) => (
                <div key={i} className="bg-[#1565f5]/5 border-l-4 border-[#1565f5] p-3 pl-4 rounded-r-xl transition-colors hover:bg-[#1565f5]/10">
                   <div className="text-white text-[0.85rem] font-bold mb-0.5">{edu.title} – {edu.institution} ({edu.year})</div>
                   <div className="text-white/50 text-[0.75rem]">{edu.details}</div>
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
            <h3 className="font-bricolage text-[1.5rem] font-bold text-white mb-8">Achievements & Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {profile.achievements.map((ach, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ borderColor: 'rgba(21, 101, 245, 0.4)', y: -5, backgroundColor: 'rgba(10, 31, 71, 0.8)' }}
                  className="bg-[#0a1f47] border border-white/5 rounded-2xl p-7 transition-all duration-300 cursor-default shadow-xl"
                >
                   <div className="text-[2.2rem] mb-4">{ach.icon}</div>
                   <h4 className="font-bricolage text-[1.1rem] font-bold text-white mb-2">{ach.title}</h4>
                   <p className="text-[0.85rem] text-[#b8cce8] leading-[1.6] font-light">{ach.details}</p>
                </motion.div>
              ))}
              
              {/* Additional Highlights */}
              <motion.div 
                whileHover={{ borderColor: 'rgba(21, 101, 245, 0.4)', y: -5, backgroundColor: 'rgba(10, 31, 71, 0.8)' }}
                className="bg-[#0a1f47] border border-white/5 rounded-2xl p-7 transition-all duration-300 cursor-default shadow-xl"
              >
                 <div className="text-[2.2rem] mb-4">📡</div>
                 <h4 className="font-bricolage text-[1.1rem] font-bold text-white mb-2">300+ Webinars</h4>
                 <p className="text-[0.85rem] text-[#b8cce8] leading-[1.6] font-light">Technical sessions on MATLAB, IoT, AI, ML & Embedded Systems since 2020.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ borderColor: 'rgba(21, 101, 245, 0.4)', y: -5, backgroundColor: 'rgba(10, 31, 71, 0.8)' }}
                className="bg-[#0a1f47] border border-white/5 rounded-2xl p-7 transition-all duration-300 cursor-default shadow-xl"
              >
                 <div className="text-[2.2rem] mb-4">🤝</div>
                 <h4 className="font-bricolage text-[1.1rem] font-bold text-white mb-2">Strategic MOUs</h4>
                 <p className="text-[0.85rem] text-[#b8cce8] leading-[1.6] font-light">100+ Institutional partnerships established for academic excellence.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
 
export default Profile;

