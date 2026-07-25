import React, { useState } from 'react';
import { CALCULATOR_TYPES, CALCULATOR_ADDONS } from '../data/agencyData';
import { Calculator, Check, ArrowRight, DollarSign, Clock, Sparkles } from 'lucide-react';

interface CostCalculatorProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [selectedType, setSelectedType] = useState<string>('business');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['uiux', 'seo']);

  const baseOption = CALCULATOR_TYPES.find((t) => t.id === selectedType) || CALCULATOR_TYPES[1];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const found = CALCULATOR_ADDONS.find((a) => a.id === addonId);
    return sum + (found ? found.price : 0);
  }, 0);

  const totalPrice = baseOption.price + addonsTotal;

  // Estimated timeline logic
  const getEstimatedTimeline = () => {
    let weeks = 2;
    if (selectedType === 'business') weeks = 3;
    if (selectedType === 'ecommerce') weeks = 4;
    if (selectedType === 'saas') weeks = 6;
    if (selectedAddons.length > 3) weeks += 1;
    return `${weeks}-${weeks + 1} Weeks`;
  };

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleProceedToQuote = () => {
    const addonNames = selectedAddons
      .map((id) => CALCULATOR_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const summaryText = `Custom Estimator: ${baseOption.name} ($${totalPrice.toLocaleString()}) with [${addonNames}]`;
    onOpenQuoteModal(summaryText);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Interactive Project Cost Estimator
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Configure your desired project scope and features to get an instant, transparent price estimate. No surprise costs or hidden fees.
          </p>
        </div>

        {/* Main Calculator Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Options Selection (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Base Project Type */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <span>Select Project Architecture</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">Choose the core scope of your web development project.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {CALCULATOR_TYPES.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedType === type.id
                        ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-600/30'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-900 text-base">{type.name}</span>
                        <span className="text-sm font-extrabold text-blue-600">${type.price.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{type.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold">
                      <span className={selectedType === type.id ? 'text-blue-700' : 'text-slate-400'}>
                        {selectedType === type.id ? 'Selected Option' : 'Select'}
                      </span>
                      {selectedType === type.id && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                <span>Choose Add-on Features & Integrations</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">Customize your project with dedicated speed, SEO, design, and auth modules.</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {CALCULATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/40 ring-1 ring-blue-500/30'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors ${
                        isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-0.5">
                          <span>{addon.name}</span>
                          <span className="text-blue-600">+${addon.price}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">{addon.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary Sticky Card (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-sm text-slate-200">Estimated Summary</span>
                </div>
                <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-400/20">
                  Fixed Price
                </span>
              </div>

              {/* Total Price Display */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Estimated Total Investment
                </div>
                <div className="text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                  <span>${totalPrice.toLocaleString()}</span>
                  <span className="text-xs font-normal text-slate-400">USD</span>
                </div>
              </div>

              {/* Estimated Timeline */}
              <div className="flex items-center gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Estimated Delivery</div>
                  <div className="text-sm font-bold text-slate-100">{getEstimatedTimeline()}</div>
                </div>
              </div>

              {/* Selected Items List */}
              <div className="space-y-2 border-t border-slate-800 pt-4 text-xs">
                <div className="text-slate-400 font-semibold mb-1">Selected Components:</div>
                <div className="flex justify-between text-slate-200 font-medium">
                  <span>{baseOption.name}</span>
                  <span>${baseOption.price.toLocaleString()}</span>
                </div>
                {selectedAddons.map((id) => {
                  const item = CALCULATOR_ADDONS.find((a) => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between text-slate-400">
                      <span>+ {item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleProceedToQuote}
                className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Lock In This Estimate & Submit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center leading-normal">
                🔒 Free 30-min consultation included. No commitment required.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
