import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden pt-[74px]">
      <div className="hero-bg-scene"></div>
      <div className="hero-sky"></div>
      <div className="solar-grid pointer-events-none"></div>
      <div className="glow-orb"></div>
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-[#04122a]/0 via-[#04122a]/10 to-[#04122a] 100% pointer-events-none"></div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-12 pt-[60px] text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 glass-pill border border-white/15 mb-7 text-[0.78rem] font-medium tracking-[0.08em] uppercase text-white/80"
        >
          <span className="w-1.5 h-1.5 bg-[#ffd600] rounded-full animate-pulse"></span>
          India's Premier IT Training & Consulting
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-bricolage text-[5rem] lg:text-[10.5rem] font-extrabold leading-[0.9] tracking-[-0.05em] text-white"
        >
          Digital<br/>
          <span className="title-outline">Futures</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[1.1rem] text-white/60 max-w-[480px] mt-6 leading-[1.7] font-light"
        >
          Empowering institutions and professionals with cutting-edge technology — IoT, AI, Full Stack to Robotics.
        </motion.p>
      </div>

      <motion.a 
        href="#services"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 mx-auto -mt-[28px] w-[112px] h-[112px] rounded-full bg-[#1565f5] flex flex-col items-center justify-center font-bold text-[0.72rem] tracking-[0.07em] uppercase text-white no-underline shadow-[0_0_0_14px_rgba(21,101,245,0.12),0_0_0_28px_rgba(21,101,245,0.06)] hover:scale-105 hover:shadow-[0_0_0_18px_rgba(21,101,245,0.18),0_0_0_36px_rgba(21,101,245,0.08)] transition-all"
      >
        <span className="text-2xl mb-0.5 animate-bounce">↓</span>
        <span>EXPLORE</span>
      </motion.a>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[270px_1fr_250px] gap-5 items-end px-12 pb-[52px] -mt-[16px]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-white/95 text-[#04122a] rounded-[20px] p-[24px_26px] shadow-xl"
        >
          <div className="font-bricolage text-[2.8rem] font-extrabold text-[#1565f5]">10K+</div>
          <p className="text-[0.8rem] text-[#334] mt-1 leading-[1.5]">Students & Faculty trained across India's top engineering institutions nationwide.</p>
          <div className="flex mt-3">
             {['A','B','C'].map((char, i) => (
                <div key={i} className={`w-[30px] h-[30px] rounded-full border-2 border-white flex items-center justify-center text-[0.65rem] font-bold text-white bg-gradient-to-br from-[#1565f5] to-[#5aaeff] ${i > 0 ? '-ml-2' : ''}`}>{char}</div>
             ))}
             <div className="w-[30px] h-[30px] rounded-full border-2 border-white flex items-center justify-center text-[0.65rem] font-bold text-white bg-[#04122a] -ml-2">+</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center items-end"
        >
          <div className="w-[250px] h-[270px] relative bg-gradient-to-br from-[#143080] to-[#0c1d60] rounded-[22px_22px_8px_8px] shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] flex items-center justify-center flex-col gap-2 overflow-hidden overflow-hidden">
            <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 bg-white text-[#04122a] text-[0.75rem] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md z-10 transition-all hover:scale-110">VEI Technologies</div>
            <img src="/assets/images/vei1.png" alt="VEI Team" className="w-full h-full object-cover opacity-70" />
            <div className="font-semibold text-white text-[0.88rem] absolute bottom-[38px] z-10 drop-shadow-lg">Training Excellence</div>
            <div className="absolute bottom-[14px] bg-white/10 border border-white/12 px-3 py-1 rounded-lg text-[0.68rem] text-white/65 z-10">✦ Since 2010</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-white/95 text-[#04122a] rounded-[20px] p-[20px_22px] shadow-xl"
        >
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#ffd600] to-[#ff9500] flex items-center justify-center text-[1.8rem] float-right ml-2 mb-2 shadow-inner">🌐</div>
          <div className="font-bricolage text-[1rem] font-bold mb-1">Pan-India Reach</div>
          <div className="text-[0.76rem] text-[#445] leading-[1.5]">100+ MOU Partnerships. 15+ States. 200+ Programs delivered annually.</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
