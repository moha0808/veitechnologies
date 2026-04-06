import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';

const Stats = () => {
  const statsList = [
    { label: 'Years of Excellence', value: profile.stats.experience },
    { label: 'Workshops & Webinars', value: profile.stats.workshops },
    { label: 'MOU Institutions', value: profile.stats.partnerships },
    { label: 'Int\'l Conferences', value: profile.stats.conferences }
  ];

  return (
    <div className="bg-[#1565f5] py-[52px] px-12">
      <div className="max-w-[1300px] mx-auto grid grid-cols-2 lg:grid-cols-4">
        {statsList.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`text-center py-4 px-2.5 ${index < statsList.length - 1 ? 'lg:border-r border-white/20' : ''}`}
          >
            <div className="font-bricolage text-3xl lg:text-5xl font-extrabold text-white">{item.value}</div>
            <div className="text-[0.8rem] text-white/70 mt-1 uppercase tracking-wider">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
