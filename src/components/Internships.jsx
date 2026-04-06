import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const Internships = () => {
  return (
    <section id="internships" className="py-24 bg-slate-900 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Training The Next Generation" 
          subtitle="Impactful Internships" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800/50 p-8 rounded-3xl hover:border-primary-DEFAULT transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-primary-DEFAULT/10 rounded-2xl flex items-center justify-center text-primary-DEFAULT group-hover:bg-primary-DEFAULT group-hover:text-slate-950 transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-unbounded">{item.title}</h3>
              <p className="text-primary-DEFAULT font-bold text-sm tracking-widest uppercase mb-4">{item.dept} Department</p>
              
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                <Briefcase className="w-4 h-4" />
                {item.institution}
              </div>

              <div className="flex items-center gap-2 text-primary-DEFAULT font-bold text-xs cursor-pointer group-hover:gap-4 transition-all">
                Project Details <ChevronRight className="w-4 h-4" />
              </div>

              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-DEFAULT/5 rounded-full blur-3xl group-hover:bg-primary-DEFAULT/20 transition-all"></div>
            </motion.div>
          ))}
        </div>

        {/* Global Impact Summary */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 p-8 bg-slate-950 border border-slate-800 rounded-3xl flex flex-wrap justify-around items-center gap-12 text-center"
        >
             <div>
                <span className="text-4xl font-extrabold font-unbounded text-white block mb-1">110+</span>
                <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Internships Conducted</span>
             </div>
             <div className="w-px h-12 bg-slate-800 hidden md:block"></div>
             <div>
                <span className="text-4xl font-extrabold font-unbounded text-white block mb-1">15k+</span>
                <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Students Trained</span>
             </div>
             <div className="w-px h-12 bg-slate-800 hidden md:block"></div>
             <div>
                <span className="text-4xl font-extrabold font-unbounded text-white block mb-1">50+</span>
                <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Partner Institutions</span>
             </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
