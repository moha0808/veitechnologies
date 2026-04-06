import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Users, Globe, ExternalLink, Calendar } from 'lucide-react';
import { profile } from '../data/constants';
import SectionHeader from './SectionHeader';

const Webinars = () => {
    return (
        <section id="webinars" className="py-24 bg-slate-900 px-4 sm:px-6 lg:px-8 border-y border-slate-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader title="Global Digital Outreach" subtitle="Webinars & Online Knowledge Sharing" />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Computer Vision & AI Applications', date: 'July 2020', institutional: 'Rathinam Technical Campus' },
                        { title: 'Network Simulation Using NS2', date: 'July 2020', institutional: 'Velammal Institute of Tech' },
                        { title: 'IOT for Renewable Energy Systems', date: 'Aug 2020', institutional: 'Crescent Institute of Sci & Tech' },
                        { title: 'Android Tech in Healthcare', date: 'Oct 2020', institutional: 'Paavai Engineering College' },
                        { title: 'MATLAB for Electrical Engineers', date: 'Dec 2020', institutional: 'SRM Easwari Engineering' },
                        { title: 'Scope & Feature in Java Programming', date: 'Mar 2021', institutional: 'Francis Xavier Engineering' },
                        { title: 'Mobile Game Development', date: 'June 2021', institutional: 'Saveetha Engineering College' },
                        { title: 'Cyber Threats & Advanced Security', date: 'Aug 2021', institutional: 'SRM Valliammai Engineering' },
                    ].map((web, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, x: 2 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-primary-DEFAULT group transition-all cursor-pointer relative overflow-hidden shadow-lg shadow-black/20"
                        >
                            <div>
                                <div className="flex items-center gap-2 text-primary-DEFAULT text-[10px] font-bold uppercase tracking-widest mb-3">
                                    <Calendar className="w-3 h-3" />
                                    {web.date}
                                </div>
                                <h4 className="text-sm font-bold text-white mb-3 font-inter group-hover:text-primary-DEFAULT transition-colors leading-tight">
                                    {web.title}
                                </h4>
                                <p className="text-slate-500 text-[11px] flex items-start gap-2 italic">
                                    <Globe className="w-3 h-3 translate-y-[2px]" />
                                    {web.institutional}
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800 group-hover:border-primary-DEFAULT/20 transition-all">
                                <span className="text-slate-600 text-[10px] uppercase font-bold tracking-widest group-hover:text-slate-400 transition-colors">Shared Expertly</span>
                                <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-primary-DEFAULT transition-all" />
                            </div>
                            {/* Accent Glow */}
                            <div className="absolute top-0 right-0 w-12 h-12 bg-primary-DEFAULT/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                    
                    {/* View All Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-slate-950 border-2 border-dashed border-slate-800 p-8 rounded-3xl flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary-DEFAULT/50 transition-all"
                    >
                         <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-500 group-hover:bg-primary-DEFAULT group-hover:text-slate-950 transition-all mb-4">
                              <MonitorPlay className="w-6 h-6" />
                         </div>
                         <h4 className="text-lg font-bold text-slate-400 group-hover:text-white transition-colors">{profile.webinarsCount}+ Global Webinars</h4>
                         <p className="text-xs text-slate-600 mt-2 font-inter tracking-wide px-4">Conducted across hundreds of leading Engineering institutions worldwide.</p>
                         <button className="mt-8 text-primary-DEFAULT text-xs font-bold uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">View Archive →</button>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-DEFAULT blur-[150px] opacity-10 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-DEFAULT blur-[150px] opacity-5 rounded-full"></div>
        </section>
    );
};

export default Webinars;
