import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#071a3a] py-[100px] px-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
          <motion.div 
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionHeader 
              eyebrow="Get In Touch"
              title="Let's Build <em>Something</em> Great"
              subtitle="Looking for internship programs, FDP sessions, IT consulting or a partnership? We'd love to hear from you."
            />
            
            <div className="flex flex-col gap-3 mt-7">
              {[
                { icon: "👤", label: profile.name, sub: "Managing Director, VEI Technologies" },
                { icon: "📞", label: "Phone / WhatsApp", sub: profile.phone },
                { icon: "📍", label: "Location", sub: profile.location },
                { icon: "🎓", label: "Services", sub: "IT Consulting · Training · MOU Partnerships" }
              ].map((item, i) => (
                <div key={i} className="flex gap-3.5 items-center bg-white/4 border border-white/7 p-4 px-5 rounded-[14px] hover:border-[#1565f5]/35 transition-all transition-colors duration-200">
                  <div className="w-[42px] h-[42px] rounded-[11px] bg-[#1565f5]/15 flex items-center justify-center text-[1.1rem] flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-[0.85rem] font-bold text-white mb-0.5">{item.label}</h4>
                    <p className="text-[0.8rem] text-[#b8cce8]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-[#0a1f47] border border-white/8 rounded-[24px] p-9 shadow-2xl"
          >
            <h3 className="font-bricolage text-[1.4rem] font-bold text-white mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Full Name</label>
                <input type="text" placeholder="Your full name" className="w-full bg-white/4 border border-white/10 rounded-[10px] p-3 color-white outline-none focus:border-[#1565f5] transition-all text-[0.88rem]" />
              </div>
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Institution / Organization</label>
                <input type="text" placeholder="Institution name" className="w-full bg-white/4 border border-white/10 rounded-[10px] p-3 color-white outline-none focus:border-[#1565f5] transition-all text-[0.88rem]" />
              </div>
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full bg-white/4 border border-white/10 rounded-[10px] p-3 color-white outline-none focus:border-[#1565f5] transition-all text-[0.88rem]" />
              </div>
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Program of Interest</label>
                <select className="w-full bg-[#04122a] border border-white/10 rounded-[10px] p-3 color-white outline-none focus:border-[#1565f5] transition-all text-[0.88rem] appearance-none cursor-pointer">
                  <option value="">Select a program</option>
                  <option>Industry Internship Program</option>
                  <option>Faculty Development Program (FDP)</option>
                  <option>AICTE-ATAL Sponsored FDP</option>
                  <option>MOU Partnership</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Message</label>
                <textarea placeholder="Tell us about your requirements..." className="w-full h-24 bg-white/4 border border-white/10 rounded-[10px] p-3 color-white outline-none focus:border-[#1565f5] transition-all text-[0.88rem] resize-none" />
              </div>
              <button className="w-full bg-[#1565f5] text-white font-bold py-3.5 rounded-[12px] text-[0.95rem] font-bricolage transition-all hover:shadow-[0_10px_40px_rgba(21,101,245,0.6)] cursor-pointer hover:translate-y-[-2px] hover:translate-y-[-2px] active:scale-95">Send Message →</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
