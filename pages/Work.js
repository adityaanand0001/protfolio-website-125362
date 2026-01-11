import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../lib/data';
import { ArrowRight } from 'lucide-react';

export default function Work() {
  return (
    <div className="w-full px-6 py-24">
      <div className="flex flex-col gap-4 mb-24">
        <h1 className="text-8xl font-bold tracking-tighter">ARCHIVE.</h1>
        <p className="text-xl text-slate-400 font-medium">A collection of digital artifacts and commercial projects.</p>
      </div>

      <div className="flex flex-col gap-px bg-slate-100 border border-slate-100">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group bg-white hover:bg-slate-50 transition-colors"
          >
            <Link to={`/project/${project.id}`} className="grid grid-cols-[80px_1fr_2fr_1fr] items-center py-10 px-8">
              <span className="text-xs font-bold text-slate-300">0{idx + 1}</span>
              <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 border border-slate-200 rounded-full text-slate-400 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black text-white p-2 rounded-full">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}