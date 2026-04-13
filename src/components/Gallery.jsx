import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Gallery = () => {
  const images = [
    { 
      src: "/assets/images/vei4.jpeg", 
      alt: "VEI Team Award Ceremony – Siddharth Institute of Engineering, AP", 
      label: "Award Ceremony – Siddharth Institute of Engineering", 
      sub: "Andhra Pradesh · Internship Completion & Recognition", 
      wide: true 
    },
    { 
      src: "/assets/images/vei1.png", 
      alt: "Collaborative hands-on session with students", 
      label: "Hands-On Workshop Session", 
      sub: "Students collaborating on live project work" 
    },
    { 
      src: "/assets/images/2.png", 
      alt: "Seminar at Jai Shriram Engineering College", 
      label: "Faculty Development Program", 
      sub: "Jai Shriram Engineering College" 
    },
    { 
      src: "/assets/images/1.png", 
      alt: "MOU signing at Mahabalipuram, Tamil Nadu", 
      label: "MOU Partnership Ceremony – Mahabalipuram", 
      sub: "Tamil Nadu · Expanding institutional collaborations", 
      wide: true 
    },
    { 
      src: "/assets/images/2.png", 
      alt: "VEI Leadership Campus Visit", 
      label: "Institutional Campus Visit", 
      sub: "Collaborating with college leadership across Tamil Nadu",
      wide: true
    }
  ];

  return (
    <section id="gallery" className="bg-[#071a3a] py-[80px] px-12">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader 
          eyebrow="In Action"
          title="From Our <em>Events & Programs</em>"
          subtitle="Real moments from our internships, faculty programs, and workshops across India."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[20px] overflow-hidden border border-white/7 aspect-[16/10] cursor-pointer group ${img.wide ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04122a]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <div className="text-[0.85rem] font-bold text-white leading-[1.4]">{img.label}</div>
                  <div className="text-[0.72rem] text-[#5aaeff] mt-0.5">{img.sub}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
