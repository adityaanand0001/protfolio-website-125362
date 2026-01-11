import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../lib/data';
import { ArrowLeft, Globe, Github } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <div className="w-full">
      <div className="p-6 py-8 border-b border-slate-100">
        <Link to="/work" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 hover:text-black transition-colors uppercase">
          <ArrowLeft size={12} /> Back to index
        </Link>
      </div>

      <section className="grid grid-cols-[2fr_1fr] min-h-screen">
        <div className="border-r border-slate-100">
          <div className="p-12 space-y-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-9xl font-bold tracking-tighter leading-[0.8]"
            >
              {project.title.toUpperCase()}
            </motion.h1>
            
            <div className="aspect-video bg-slate-100 rounded-[6px] overflow-hidden">
               <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
            </div>

            <div className="max-w-2xl space-y-8">
               <p className="text-3xl font-medium tracking-tight text-slate-800">
                 {project.description}
               </p>
               <div className="space-y-4 text-lg text-slate-500 leading-relaxed">
                 <p>Working closely with the client, we identified core bottlenecks in their current flow and redesigned the experience from the ground up using a system-first approach.</p>
                 <p>The result was a 40% increase in conversion and a design language that set them apart in a crowded market.</p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square bg-slate-100 rounded-[6px]"></div>
               <div className="aspect-[4/3] bg-slate-100 rounded-[6px]"></div>
            </div>
          </div>
        </div>

        <div className="p-12 sticky top-16 h-fit space-y-12">
          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-4 italic">THE CHALLENGE</h4>
            <p className="text-sm text-slate-600 leading-relaxed">How to communicate complex blockchain data to non-technical users without sacrificing precision or performance.</p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-4 italic">SERVICES</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="text-[10px] px-3 py-1 bg-slate-50 border border-slate-100 rounded-[4px] font-medium uppercase">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-4 italic">LINKS</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-sm font-bold hover:text-indigo-600 transition-colors">
                <Globe size={16} /> LIVE PREVIEW
              </a>
              <a href="#" className="flex items-center gap-3 text-sm font-bold hover:text-indigo-600 transition-colors">
                <Github size={16} /> SOURCE CODE
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100">
             <p className="text-[10px] font-bold text-slate-300 italic">PROJECT DATE — {project.year}</p>
          </div>
        </div>
      </section>
    </div>
  );
}