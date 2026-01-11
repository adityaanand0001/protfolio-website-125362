import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Nav() {
  const location = useLocation();
  
  const links = [
    { name: 'INDEX', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'ABOUT', path: '/about' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FDFDFD]/80 backdrop-blur-md border-b border-slate-100">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-sm font-bold tracking-tighter">
          ECHO STUDIO™
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-[11px] font-medium tracking-widest transition-colors ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-400 hover:text-black'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a 
            href="mailto:hello@echo.studio" 
            className="flex items-center gap-1 bg-black text-white text-[10px] px-3 py-1.5 rounded-[6px] hover:bg-indigo-600 transition-all"
          >
            CONTACT <ArrowUpRight size={10} />
          </a>
        </div>
      </div>
    </nav>
  );
}