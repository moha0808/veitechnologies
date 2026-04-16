import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

// Import MOU Images
import mou11 from '../assets/images/MOU Images/11.jpeg';
import mou12 from '../assets/images/MOU Images/12.jpeg';
import mou13 from '../assets/images/MOU Images/13.jpeg';
import mou14 from '../assets/images/MOU Images/14.jpeg';
import mou15 from '../assets/images/MOU Images/15.jpeg';
import mou16 from '../assets/images/MOU Images/16.jpeg';
import mou17 from '../assets/images/MOU Images/17.jpeg';
import mou18 from '../assets/images/MOU Images/18.jpeg';
import mou19 from '../assets/images/MOU Images/19.jpeg';
import mou20 from '../assets/images/MOU Images/20.jpeg';
import mou21 from '../assets/images/MOU Images/21.jpeg';
import mou22 from '../assets/images/MOU Images/22.jpeg';
import mou23 from '../assets/images/MOU Images/23.jpeg';
import mou24 from '../assets/images/MOU Images/24.jpeg';
import mou25 from '../assets/images/MOU Images/25.jpeg';

const Gallery = () => {
  const images = [
    { src: mou11, label: "MOU Partnership Ceremony", sub: "Expanding academic collaborations across Tamil Nadu" },
    { src: mou12, label: "Institutional Collaboration", sub: "Bridging the gap between industry and academia" },
    { src: mou13, label: "Stakeholder Meeting", sub: "Strategic planning for student internships" },
    { src: mou14, label: "Ceremonial Handshake", sub: "Official partnership launch event" },
    { src: mou15, label: "Academic Exchange", sub: "Joint research and development initiatives" },
    { src: mou16, label: "Leadership Discussion", sub: "Defining roadmap for technical excellence" },
    { src: mou17, label: "Partnership Milestone", sub: "Celebrating 100+ partner institutions" },
    { src: mou18, label: "Innovation Summit", sub: "Showcasing student-led initiatives" },
    { src: mou19, label: "Faculty Interaction", sub: "Upskilling professionals for future tech" },
    { src: mou20, label: "Global Outreach", sub: "International standards in regional education" },
    { src: mou21, label: "Corporate Synergy", sub: "Industrial visits and live project exposure" },
    { src: mou22, label: "Recognition Award", sub: "Excellence in educational contributions" },
    { src: mou23, label: "Community Impact", sub: "Social transformation through technology" },
    { src: mou24, label: "Workshop Highlights", sub: "Hands-on training sessions with industry experts" },
    { src: mou25, label: "Future Roadmap", sub: "Empowering the next generation of engineers" }
  ];

  return (
    <section id="gallery" className="bg-[#071a3a] py-[80px] px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1565f5]/5 blur-[120px] rounded-full -mr-60 -mt-60 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5aaeff]/5 blur-[100px] rounded-full -ml-40 -mb-40 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <SectionHeader 
          eyebrow="Partnership Gallery"
          title="Our Strategic <em>Collaborations</em>"
          subtitle="A visual journey of our MOU signings and institutional partnerships across premier engineering colleges."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col bg-[#04122a]/50 border border-white/5 rounded-3xl overflow-hidden group hover:border-[#1565f5]/30 transition-all duration-500"
            >
              {/* Image Box - Container for full image */}
              <div className="relative bg-black/30 flex items-center justify-center p-5 overflow-hidden aspect-[4/3]">
                <img 
                  src={img.src} 
                  alt={img.label} 
                  loading="lazy"
                  className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04122a]/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Text Area */}
              <div className="p-6 md:p-7 flex-1 flex flex-col bg-gradient-to-b from-[#04122a]/40 to-[#04122a]/10">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1565f5]" />
                  <span className="text-[0.6rem] font-bold text-[#5aaeff] uppercase tracking-[0.15em]">Official Milestone</span>
                </div>
                <h4 className="text-white font-bold text-[0.95rem] md:text-[1.1rem] leading-tight mb-2 group-hover:text-[#5aaeff] transition-colors">
                  {img.label}
                </h4>
                <p className="text-white/40 text-[0.8rem] leading-relaxed line-clamp-2">
                  {img.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;




