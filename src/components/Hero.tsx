import React from 'react';
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Sparkles, TrendingUp, Code2 } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-white overflow-hidden">
      {/* Background Decorative Mesh Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, CTAs & Social Proof */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-blue-700 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
              <span className="flex h-2 w-2 rounded-full bg-blue-600 -ml-4"></span>
              <span>Top-Rated Web Agency 2026</span>
              <span className="text-slate-300">|</span>
              <span className="text-blue-800 font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9/5 Client Rating
              </span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Elevate Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Digital Presence
              </span>{' '}
              With High-Performance Web Apps
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              At <strong className="text-slate-900 font-semibold">Tri Web Solution</strong>, we engineer bespoke, sub-second web platforms, custom React/Next.js sites, and high-converting e-commerce experiences that transform visitors into loyal clients.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 pb-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Custom React & Next.js Codebase</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>100/100 Core Web Vitals Speed</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Conversion-Rate Optimized UI/UX</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>100% IP & Source Code Ownership</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-base font-semibold px-7 py-4 rounded-xl border border-slate-300 shadow-sm hover:border-slate-400 transition-all text-center"
              >
                <span>View Our Work</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">150+</div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">Websites Launched</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">&lt; 0.8s</div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">Avg. Load Speed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">3.2x</div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">Avg. Client ROI</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Graphic & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-xl"></div>

              {/* Main Showcase Image Frame */}
              <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/10 overflow-hidden group">
                {/* Browser Window Header */}
                <div className="bg-slate-800/90 px-4 py-2.5 rounded-t-xl flex items-center justify-between border-b border-slate-700/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="bg-slate-900/80 text-[11px] font-mono text-slate-300 px-3 py-0.5 rounded-md flex items-center gap-1.5 border border-slate-700/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    triwebsolution.com/preview
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Main Hero Image */}
                <img
                  src="/src/assets/images/hero_dashboard_mockup_1785016689343.jpg"
                  alt="Tri Web Solution App Mockup"
                  className="w-full h-auto rounded-b-lg object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Stat Card 1: Conversion Boost */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3.5 z-20 animate-bounce-slow">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Client Conversion</div>
                  <div className="text-lg font-black text-slate-900">+185% Avg Lift</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Speed Score */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-3.5 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">Google PageSpeed</div>
                  <div className="text-sm font-bold text-emerald-600 flex items-center gap-1">
                    <span>100/100 Score</span>
                    <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
