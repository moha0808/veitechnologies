import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'Services', href: '#services' },
    { label: 'Programs', href: '#programs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[500] px-6 lg:px-12 h-[74px] flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#04122a]/95 backdrop-filter:blur(20px) border-b border-white/5 shadow-2xl' : 'bg-[#04122a]/70 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="flex items-center gap-3">
        <img 
          src="/assets/images/vei.jpeg" 
          alt="VEI Technologies logo" 
          className="w-[46px] h-[46px] border-radius-[10px] object-fit-contain bg-[#f5f0e8] p-1 rounded-xl"
        />
        <div className="font-bricolage font-bold text-[1.1rem] tracking-tight">
          VEI <span className="text-[#5aaeff]">Technologies</span>
        </div>
      </div>

      <ul className="hidden lg:flex gap-9 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a 
              href={link.href} 
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <a 
          href="#team" 
          className="hidden md:block bg-transparent border-1.5 border-white/20 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-white/10 transition-all no-underline"
        >
          Our Team
        </a>
        <a 
          href="#contact" 
          className="bg-[#1565f5] text-white px-6 py-2 rounded-full text-sm font-bold no-underline transition-all hover:translate-y-[-2px] shadow-[0_4px_20px_rgba(21,101,245,0.5)] hover:shadow-[0_8px_30px_rgba(21,101,245,0.7)]"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
