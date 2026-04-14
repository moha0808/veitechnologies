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
                { icon: "👤", label: "Managing Director", sub: profile.name },
                { icon: "✉️", label: "Email Address", sub: profile.email, href: `mailto:${profile.email}` },
                { icon: "📞", label: "Phone / WhatsApp", sub: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
                { icon: "📍", label: "Location", sub: profile.location },
              ].map((item, i) => (
                <div key={i} className="group transition-all duration-300">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex gap-3.5 items-center bg-white/4 border border-white/7 p-4 px-5 rounded-[14px] hover:border-[#1565f5]/35 hover:bg-white/7 transition-all flex-shrink-0"
                    >
                      <div className="w-[42px] h-[42px] rounded-[11px] bg-[#1565f5]/15 flex items-center justify-center text-[1.1rem] flex-shrink-0 group-hover:bg-[#1565f5]/25 transition-colors">{item.icon}</div>
                      <div>
                        <h4 className="text-[0.85rem] font-bold text-white mb-0.5">{item.label}</h4>
                        <p className="text-[0.8rem] text-[#b8cce8] group-hover:text-white transition-colors">{item.sub}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex gap-3.5 items-center bg-white/4 border border-white/7 p-4 px-5 rounded-[14px] hover:border-[#1565f5]/35 transition-all">
                      <div className="w-[42px] h-[42px] rounded-[11px] bg-[#1565f5]/15 flex items-center justify-center text-[1.1rem] flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="text-[0.85rem] font-bold text-white mb-0.5">{item.label}</h4>
                        <p className="text-[0.8rem] text-[#b8cce8]">{item.sub}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-9 pt-8 border-t border-white/10">
              <h4 className="text-[0.72rem] font-bold tracking-[1.5px] uppercase text-[#5aaeff] mb-5 px-1">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[48px] h-[48px] rounded-[14px] bg-white/4 border border-white/8 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[48px] h-[48px] rounded-[14px] bg-white/4 border border-white/8 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all duration-300 group hover:shadow-[0_0_20px_rgba(238,42,123,0.3)]"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
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
            <form
              action="https://formsubmit.co/veitechinfo2024@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - VEI Technologies" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="w-full bg-[#04122a] border border-white/10 rounded-[12px] p-4 text-white placeholder:text-white/30 outline-none focus:border-[#1565f5] focus:ring-1 focus:ring-[#1565f5] transition-all text-[0.9rem] shadow-inner"
                />
              </div>
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Institution / Organization</label>
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution name"
                  required
                  className="w-full bg-[#04122a] border border-white/10 rounded-[12px] p-4 text-white placeholder:text-white/30 outline-none focus:border-[#1565f5] focus:ring-1 focus:ring-[#1565f5] transition-all text-[0.9rem] shadow-inner"
                />
              </div>
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-[#04122a] border border-white/10 rounded-[12px] p-4 text-white placeholder:text-white/30 outline-none focus:border-[#1565f5] focus:ring-1 focus:ring-[#1565f5] transition-all text-[0.9rem] shadow-inner"
                />
              </div>
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Program of Interest</label>
                <select
                  name="program"
                  className="w-full bg-[#04122a] border border-white/10 rounded-[12px] p-4 text-white outline-none focus:border-[#1565f5] focus:ring-1 focus:ring-[#1565f5] transition-all text-[0.9rem] appearance-none cursor-pointer"
                >
                  <option value="">Select a program</option>
                  <option>Industry Internship Program</option>
                  <option>Faculty Development Program (FDP)</option>
                  <option>AICTE-ATAL Sponsored FDP</option>
                  <option>MOU Partnership</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5aaeff] mb-1.5 px-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  required
                  className="w-full h-32 bg-[#04122a] border border-white/10 rounded-[12px] p-4 text-white placeholder:text-white/30 outline-none focus:border-[#1565f5] focus:ring-1 focus:ring-[#1565f5] transition-all text-[0.9rem] resize-none shadow-inner"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1565f5] text-white font-bold py-3.5 rounded-[12px] text-[0.95rem] font-bricolage transition-all hover:shadow-[0_10px_40px_rgba(21,101,245,0.6)] cursor-pointer hover:translate-y-[-2px] active:scale-95"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
