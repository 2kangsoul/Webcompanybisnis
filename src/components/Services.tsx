import React from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { Code, Layout, ShoppingBag, Cpu, Zap, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      default:
        return <Code className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            High-Impact Web Engineering & Design Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From single-page promotional sites to complex full-stack web platforms, we deliver clean code, intuitive UI/UX, and fast load speeds that drive real business growth.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                service.popular
                  ? 'border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30'
                  : 'border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                {/* Header: Icon & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-13 h-13 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {React.cloneElement(getServiceIcon(service.iconName), {
                      className: 'w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300'
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500">
                      Starting from <span className="text-blue-600 font-bold">{service.startingPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-blue-600 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>Select & Get Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-2xl p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Need a custom web solution or tailored enterprise scope?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base max-w-xl">
              We specialize in custom web architectures, headless migrations, and dedicated engineering sprints tailored to your exact roadmap.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Custom Scope')}
            className="flex-shrink-0 bg-white hover:bg-blue-50 text-blue-900 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Request Custom Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
