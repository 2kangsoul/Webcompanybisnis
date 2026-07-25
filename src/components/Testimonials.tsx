import React from 'react';
import { TESTIMONIALS_DATA } from '../data/agencyData';
import { Star, Quote, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Ambitious Founders & Marketing Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See what our clients say about partnering with Tri Web Solution to elevate their web applications and accelerate growth.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Metric Callout Badge */}
                <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-6">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.metric}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{item.name}</div>
                  <div className="text-xs font-medium text-slate-500">
                    {item.role}, <span className="text-blue-600 font-semibold">{item.company}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Client Logos Marquee / Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Engineered Web Applications For Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-extrabold tracking-tighter text-slate-700">VANGUARD</span>
            <span className="text-xl font-black tracking-widest text-slate-700">SaaSFLOW</span>
            <span className="text-xl font-bold tracking-tight text-slate-700">OMNIHEALTH</span>
            <span className="text-xl font-extrabold tracking-widest text-slate-700">APEX CAPITAL</span>
            <span className="text-xl font-black text-slate-700">LUXELIVING</span>
          </div>
        </div>

      </div>
    </section>
  );
};
