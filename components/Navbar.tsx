
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-1' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="cursor-pointer transform hover:scale-105 transition-transform" 
          onClick={() => onPageChange(Page.Home)}
        >
          <Logo className={isScrolled ? "h-16" : "h-20"} light={!isScrolled} />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {[Page.Home, Page.Services, Page.Contact].map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`capitalize font-bold text-sm tracking-widest transition-all relative group ${
                currentPage === page 
                  ? 'text-orange-500' 
                  : isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {page}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full ${currentPage === page ? 'w-full' : ''}`} />
            </button>
          ))}
          <button 
            onClick={() => onPageChange(Page.Contact)}
            className="bg-[#f58220] hover:bg-[#e67610] text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-1 active:scale-95"
          >
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
