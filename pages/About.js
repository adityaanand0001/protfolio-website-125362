import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const skillData = [
  { subject: 'Frontend', A: 120, fullMark: 150 },
  { subject: 'Backend', A: 98, fullMark: 150 },
  { subject: 'UX Design', A: 110, fullMark: 150 },
  { subject: 'Motion', A: 85, fullMark: 150 },
  { subject: 'Ops/CI', A: 65, fullMark: 150 },
  { subject: 'AI Tools', A: 130, fullMark: 150 },
];

export default function About() {
  return (
    <div className="w-full">
      <section className="grid grid-cols-[1fr_2fr] gap-12 p-6 py-24">
        <div className="sticky top-24 h-fit">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[4/5] bg-slate-100 rounded-[6px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
              className="w-full h-full object-cover grayscale"
              alt="Founder"
            />
          </motion.div>
          <div className="mt-8">
            <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2 italic">Current Location</p>
            <p className="text-sm font-medium">Berlin, Germany (Remote)</p>
          </div>
        </div>

        <div className="pl-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold tracking-tighter leading-tight mb-12"
          >
            PIONEERING <br /> MODERN <span className="text-indigo-600 italic">INTERFACES</span>
          </motion.h1>
          
          <div className="grid grid-cols-[2fr_1fr] gap-12">
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                My journey started at the intersection of fine art and computer science. I've spent the last 8 years building tools that help people create, communicate, and scale.
              </p>
              <p>
                I believe that software should be invisible. It should feel like an extension of the user's intent, not a hurdle. This philosophy drives every project at Echo Studio.
              </p>
              
              <div className="pt-12">
                <h3 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-8">EXPERIENCE</h3>
                <div className="space-y-12 border-l border-slate-100 pl-8">
                  {[ 
                    { role: 'Senior Product Engineer', co: 'Stripe', years: '2021 — Present' },
                    { role: 'Founding Designer', co: 'Linear', years: '2019 — 2021' },
                    { role: 'Fullstack Dev', co: 'Freelance', years: '2016 — 2019' }
                  ].map((job, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-white border border-slate-200" />
                      <p className="text-sm text-indigo-600 font-bold tracking-tight mb-1">{job.years}</p>
                      <h4 className="text-xl font-bold tracking-tight">{job.role}</h4>
                      <p className="text-slate-400">{job.co}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-[6px] border border-slate-100">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-6">TECH STACK</h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: '#94a3b8' }} />
                    <Radar
                      name="Echo"
                      dataKey="A"
                      stroke="#4f46e5"
                      fill="#4f46e5"
                      fillOpacity={0.2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 space-y-2">
                 {['React / Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Framer'].map(t => (
                   <div key={t} className="text-[11px] font-medium py-1 border-b border-slate-200 text-slate-600">{t}</div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}