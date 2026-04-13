import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'Services', href: '#services' },
    { label: 'Programs', href: '#programs' },
    { label: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[500] px-6 lg:px-12 h-[74px] flex items-center justify-between transition-all duration-300 ${
          scrolled || isOpen ? 'bg-[#04122a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-[#04122a]/70 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="flex items-center gap-3">
          <img 
            src="/assets/images/vei.jpeg" 
            alt="VEI Technologies logo" 
            className="w-[42px] h-[42px] object-contain bg-[#f5f0e8] p-1 rounded-xl"
          />
          <div className="font-bricolage font-bold text-[1.1rem] tracking-tight text-white">
            VEI <span className="text-[#5aaeff]">Technologies</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className="text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#5aaeff] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#team" 
              className="bg-transparent border border-white/20 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-white/10 transition-all no-underline"
            >
              Our Team
            </a>
            <a 
              href="#contact" 
              className="bg-[#1565f5] text-white px-6 py-2 rounded-full text-sm font-bold no-underline transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(21,101,245,0.4)]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-[74px] left-0 right-0 z-[490] bg-[#04122a]/95 backdrop-blur-2xl border-b border-white/5 lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-5 list-none">
                {navLinks.map((link) => (
                  <motion.li key={link.label} variants={itemVariants}>
                    <a 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-white/80 hover:text-[#5aaeff] text-lg font-semibold transition-colors flex items-center justify-between group"
                    >
                      {link.label}
                      <span className="w-2 h-2 rounded-full bg-[#5aaeff] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="h-[1px] bg-white/5 w-full my-2"></div>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="#team" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition-all"
                >
                  Our Team
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 bg-[#1565f5] rounded-2xl text-white font-bold shadow-lg shadow-[#1565f5]/20 hover:bg-[#1565f5]/90 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

