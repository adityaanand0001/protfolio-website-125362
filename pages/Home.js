import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../lib/data';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Asymmetric */}
      <section className="grid grid-cols-[1.5fr_1fr] min-h-[70vh] items-center px-6 border-b border-slate-100">
        <div className="pr-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[1px] w-8 bg-indigo-600"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-600 uppercase italic">Available for freelance</span>
            </div>
            <h1 className="text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
              CRAFTING <br /> 
              <span className="text-slate-300">DIGITAL</span> <br /> 
              EXCELLENCE
            </h1>
            <p className="text-lg text-slate-500 max-w-md leading-relaxed mb-10">
              I help founders and engineering teams build interfaces that feel effortless and high-performance.
            </p>
            <div className="flex gap-4">
              <Link to="/work" className="bg-black text-white px-6 py-3 rounded-[6px] text-sm font-medium flex items-center gap-2 hover:bg-indigo-600 transition-colors">
                View Selected Work <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="h-full bg-slate-50 border-l border-slate-100 flex items-center justify-center p-12">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square w-full bg-white shadow-2xl rounded-[6px] overflow-hidden group"
           >
             <img 
               src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               alt="Tech Workspace"
             />
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-[4px] border border-slate-200">
                <p className="text-[10px] font-bold tracking-widest uppercase">Studio Environment 01</p>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Selected Work Grid - Dense/Compact */}
      <section className="py-24 px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">SELECTED WORK</h2>
          <Link to="/work" className="text-[11px] font-bold tracking-widest text-slate-400 hover:text-black transition-colors underline underline-offset-8">
            VIEW ALL PROJECTS
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white border border-slate-100 rounded-[6px] overflow-hidden"
            >
              <Link to={`/project/${project.id}`}>
                <div className="aspect-[16/10] overflow-hidden bg-slate-50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-bold tracking-tight">{project.title}</h3>
                    <p className="text-[11px] text-slate-400 mt-1 uppercase tracking-widest">{project.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-black group-hover:border-black transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-slate-900 text-white py-24 px-6">
         <div className="grid grid-cols-[1fr_2fr] gap-24">
            <div>
              <h2 className="text-[11px] font-bold tracking-[0.3em] text-indigo-400 uppercase mb-8">CAPABILITIES</h2>
              <div className="space-y-4">
                {['UI/UX Design', 'Full-stack Dev', 'Motion Graphics', 'Brand Strategy'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-2xl font-bold tracking-tight">
                    <Sparkles size={16} className="text-indigo-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-l border-white/10 pl-24 flex items-center">
              <p className="text-3xl font-medium tracking-tight leading-snug text-slate-300">
                I specialize in bridging the gap between <span className="text-white italic">aesthetic vision</span> and <span className="text-white italic">technical implementation</span>. Every line of code is written with design intent.
              </p>
            </div>
         </div>
      </section>
    </div>
  );
}