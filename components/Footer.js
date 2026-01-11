import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-12 border-t border-slate-100 bg-white">
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-12">
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-slate-400 mb-4">ECHO STUDIO</h4>
          <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
            Independent Design & Development Practice. Focused on building digital products with extreme precision.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-slate-400 mb-4">CONNECT</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <a href="#" className="hover:text-indigo-600">Twitter</a>
            <a href="#" className="hover:text-indigo-600">LinkedIn</a>
            <a href="#" className="hover:text-indigo-600">GitHub</a>
          </div>
        </div>
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-slate-400 mb-4">LEGAL</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <p>© 2024 Echo Studio</p>
            <p>Built with React & Framer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}