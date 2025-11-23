import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';
import { Icon } from './Icon';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Height of navbar + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Start', href: '#home' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Über Uns', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2"
        >
       <div className="h-12 w-auto overflow-hidden">
         <Logo className="h-full object-contain" alt="L.O.M.M Clean Logo" />
       </div>
          <span className={`text-xl font-bold text-primary hidden sm:block ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
            L.O.M.M Clean
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-slate-600 hover:text-primary font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-blue-200 cursor-pointer"
          >
            Angebot anfordern
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? 'Close' : 'Menu'} className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-slate-700 py-2 border-b border-slate-50 hover:text-primary font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-primary text-white text-center py-3 rounded-lg font-medium mt-2 cursor-pointer"
          >
            Angebot anfordern
          </a>
        </div>
      )}
    </nav>
  );
};