import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';

const Footer = () => {
  return (
    <footer className="bg-[#020c1e] border-t border-white/6 py-[60px] px-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] mb-[48px]">
          <div>
            <div className="flex items-center gap-2.5 mb-4 group cursor-pointer">
              <img 
                src="/assets/images/vei.jpeg" 
                alt="VEI Technologies logo" 
                className="w-10 h-10 rounded-lg group-hover:rotate-12 transition-transform" 
              />
              <div className="font-bricolage text-[1.15rem] font-bold text-white tracking-tight">
                VEI <span className="text-[#5aaeff]">Technologies</span>
              </div>
            </div>
            <p className="text-[0.82rem] text-[#b8cce8] leading-[1.7] mb-3.5">IT Consulting, Training Programs, Internships & International Conferences. Empowering institutions across India since 2010.</p>
            <p className="text-[#5aaeff] text-[0.88rem] font-semibold tracking-wide mb-4">📞 {profile.phone}</p>
            
            <div className="flex gap-4">
              <a 
                href={profile.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-white/70 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a 
                href={profile.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-white/70 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[0.82rem] font-bold tracking-[0.08em] uppercase text-white/50 mb-1">Services</h5>
            {['IT Consulting', 'Web Development', 'Internship Programs', 'Faculty Development', 'Workshops'].map((link) => (
              <a key={link} href="#services" className="text-[0.82rem] text-[#b8cce8] no-underline transition hover:text-[#5aaeff]">{link}</a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[0.82rem] font-bold tracking-[0.08em] uppercase text-white/50 mb-1">Programs</h5>
            {['AICTE-ATAL FDP', 'One Credit Courses', 'Value Added Courses', 'Webinars', 'Conferences'].map((link) => (
              <a key={link} href="#programs" className="text-[0.82rem] text-[#b8cce8] no-underline transition hover:text-[#5aaeff]">{link}</a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[0.82rem] font-bold tracking-[0.08em] uppercase text-white/50 mb-1">Company</h5>
            {['About VEI', 'Leadership', 'MOU Partners', 'Contact Us'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().split(' ')[0]}`} className="text-[0.82rem] text-[#b8cce8] no-underline transition hover:text-[#5aaeff]">{link}</a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[0.75rem] text-[#2d4060]">© 2026 VEI Technologies Pvt. Ltd · Chennai, India · All rights reserved.</p>
          <p className="text-[0.75rem] text-[#2d4060] font-medium">{profile.name} · Managing Director</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
