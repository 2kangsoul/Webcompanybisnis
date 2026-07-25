import React from 'react';
import { WHY_CHOOSE_US_POINTS, COMPARISON_DATA } from '../data/agencyData';
import { Zap, Code2, MessageSquare, TrendingUp, Check, X, Shield, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-blue-600" />;
      default:
        return <Zap className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Why Tri Web Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for Quality, Speed, & High ROI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We eliminate the frustration of slow, buggy, template-heavy websites by engineering modern, bespoke web applications that perform flawlessly.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(getIcon(point.icon), {
                  className: 'w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300'
                })}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {point.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest block mb-2">
              The Agency Difference
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              How Tri Web Solution Outperforms Traditional Builders
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="py-4 px-4 font-semibold">Evaluation Factor</th>
                  <th className="py-4 px-4 font-bold text-blue-400 text-sm">
                    Tri Web Solution 🚀
                  </th>
                  <th className="py-4 px-4 font-semibold text-slate-400">
                    Traditional / Template Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 font-bold text-emerald-400 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{row.triWeb}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{row.others}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
