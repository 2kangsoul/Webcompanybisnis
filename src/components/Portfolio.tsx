import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioItem } from '../types';
import { ExternalLink, Layers, CheckCircle2, X, ArrowUpRight, TrendingUp } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'SaaS Platforms' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'corporate', label: 'Corporate & Fintech' },
    { id: 'web-apps', label: 'Web Applications' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Work Speaks For Itself
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore recent digital solutions engineered by Tri Web Solution that helped our clients boost conversions, accelerate user growth, and dominate search engine results.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                    {project.categoryLabel}
                  </div>

                  {/* Results Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl flex items-center justify-between text-xs border border-slate-700/60 shadow-lg">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      {project.results}
                    </span>
                    <span className="text-slate-300 font-medium flex items-center gap-1 group-hover:text-blue-400">
                      View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="text-xs font-bold text-blue-600 mb-1">
                    Client: {project.client}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer Tech Tags */}
              <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              {selectedProject.categoryLabel}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              {selectedProject.title}
            </h3>

            <div className="text-sm font-semibold text-slate-500 mb-6">
              Client: <strong className="text-slate-900">{selectedProject.client}</strong>
            </div>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden mb-6 border border-slate-200 shadow-sm">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Impact Metric Box */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-4 mb-6 flex items-center gap-3 text-emerald-800">
              <TrendingUp className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Project Impact & Metrics</div>
                <div className="text-base font-bold">{selectedProject.results}</div>
              </div>
            </div>

            <div className="space-y-4 mb-6 text-sm text-slate-700 leading-relaxed">
              <h4 className="font-bold text-slate-900 text-base">Project Overview</h4>
              <p>{selectedProject.description}</p>
              <p>
                Tri Web Solution engineered this platform from the ground up using a modular component design system, sub-second API caching, and automated SEO schema.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="font-bold text-slate-900 text-sm mb-2.5">Technologies Employed</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
