import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const Partnerships = () => {
  // Split partners for two scrolling rows
  const half = Math.ceil(profile.mouPartners.length / 2);
  const row1 = profile.mouPartners.slice(0, half);
  const row2 = profile.mouPartners.slice(half);

  return (
    <section id="partnerships" className="bg-[#071a3a] py-[80px] px-0 overflow-hidden">
      <div className="max-w-[1300px] mx-auto text-center px-12 mb-[50px]">
        <SectionHeader 
          eyebrow="Strategic Partnerships"
          title="100+ MOU <em>Partner Institutions</em>"
          centered={true}
        />
      </div>

      <div className="relative overflow-hidden mb-[14px]">
        {/* Row 1 */}
        <div className="flex animate-marquee">
          {[...row1, ...row1].map((partner, i) => (
            <div 
              key={i}
              className="bg-[#0a1f47] border border-white/7 rounded-full py-2.5 px-5 mx-2 whitespace-nowrap text-[0.8rem] text-[#b8cce8] flex-shrink-0 transition-colors hover:border-[#5aaeff] hover:text-[#5aaeff] shadow-lg cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Row 2 - Scrolling Reverse */}
        <div className="flex animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
          {[...row2, ...row2].map((partner, i) => (
            <div 
              key={i}
              className="bg-[#0a1f47] border border-white/7 rounded-full py-2.5 px-5 mx-2 whitespace-nowrap text-[0.8rem] text-[#b8cce8] flex-shrink-0 transition-colors hover:border-[#5aaeff] hover:text-[#5aaeff] shadow-lg cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
