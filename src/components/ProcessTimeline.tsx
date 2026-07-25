import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Proven Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 4-Step Path to Web Excellence
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A seamless, transparent process designed to get your web application built, tested, and launched efficiently without unexpected delays or scope creep.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="relative bg-white rounded-2xl p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Step Badge */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md shadow-blue-600/30">
                    {stepItem.step}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {stepItem.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {stepItem.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {stepItem.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
