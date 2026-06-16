import React, { useState } from 'react';

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState('3-month');

  return (
    <div className="min-h-screen bg-[#fafbfa] flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-white border-b border-[#e5e5e5] py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <div className="text-[13px] text-[#59665a] hidden sm:block">Call us <span className="font-bold">+1 (949) 868 6870</span></div>
        <div className="font-serif text-[26px] font-bold tracking-tight text-[#3d4b3e] absolute left-1/2 transform -translate-x-1/2">fridays</div>
        <div className="flex border border-[#d3e0d3] rounded overflow-hidden ml-auto">
          <button className="bg-[#f4f7f4] px-3 py-1.5 text-[12px] font-bold text-[#3d4b3e]">EN</button>
          <button className="bg-white px-3 py-1.5 text-[12px] text-[#59665a] hover:bg-[#f4f7f4]">ES</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-[28px] font-bold text-[#4a554c] text-center mb-10">Select your Weight Loss Plan</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 max-w-3xl">
            <div className="flex justify-between items-center mb-4 px-1">
              <h2 className="text-[17px] font-bold text-[#1f2520]">GLP-1 Weight Loss</h2>
              <button className="text-[14px] text-[#59665a] hover:underline">Remove</button>
            </div>

            {/* Product Card */}
            <div className="bg-white border border-[#e5e5e5] rounded-xl p-5 flex justify-between items-center mb-8 shadow-sm">
              <div className="pr-4">
                <h3 className="font-bold text-[#1f2520] text-[15px] mb-1.5">Compounded Tirzepatide (GLP-1/GIP)</h3>
                <p className="text-[#798579] text-[13px] leading-relaxed">Meet with a provider to discuss your personalized care plan.</p>
              </div>
              <div className="w-[85px] h-[85px] bg-gradient-to-br from-[#2a452a] to-[#1c2e1c] rounded-xl flex-shrink-0 flex items-center justify-center relative overflow-hidden shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-black mix-blend-overlay"></div>
                 <div className="w-[32px] h-[48px] bg-[#3a8b40] rounded border-t-[3px] border-white opacity-95 shadow-md"></div>
              </div>
            </div>

            {/* Flexible Monthly Plan */}
            <div className="px-1 mb-3">
              <h3 className="text-[16px] font-bold text-[#1f2520] mb-1">Flexible monthly plan</h3>
              <p className="text-[13px] text-[#798579]">Automate your refills to save even more off retail. Pause or cancel anytime.</p>
            </div>

            <div 
              onClick={() => setSelectedPlan('monthly')}
              className={`border-[1.5px] rounded-xl p-5 mb-10 cursor-pointer transition-colors ${selectedPlan === 'monthly' ? 'border-[#a4cfa1] bg-[#f8fbf8]' : 'border-[#e5e5e5] bg-white hover:border-[#c1d1c1]'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 w-[22px] h-[22px] rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 ${selectedPlan === 'monthly' ? 'border-[#4a9f45]' : 'border-[#c1d1c1]'}`}>
                  {selectedPlan === 'monthly' && <div className="w-[12px] h-[12px] bg-[#4a9f45] rounded-full"></div>}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-[#1f2520] text-[15px]">Monthly Auto-Refill</span>
                    <div className="text-right leading-tight">
                      <div className="font-bold text-[#1f2520] text-[16px]">$359</div>
                      <div className="text-[#a1aca2] line-through text-[13px]">$389</div>
                    </div>
                  </div>
                  <div className="text-[#798579] text-[13px] mb-3">Flexible. Pay as you go</div>
                  
                  {/* Promo Badge */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
                    <span className="bg-[#eaf4ca] text-[#4a9f45] px-2.5 py-1 rounded">EXTRA $100 OFF</span>
                    <span className="text-[#798579] font-normal">with code</span>
                    <span className="bg-[#fff7d1] text-[#b38b15] px-2.5 py-1 rounded">NEWYOU1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Maximize Results & Savings */}
            <div className="px-1 mb-3">
              <h3 className="text-[16px] font-bold text-[#1f2520] mb-1">Maximize results & savings</h3>
              <p className="text-[13px] text-[#798579]">Visible results start around month 3. Lock in your supply.</p>
            </div>

            {/* 3 Month Plan */}
            <div 
              onClick={() => setSelectedPlan('3-month')}
              className={`relative border-[1.5px] rounded-xl p-5 mb-4 cursor-pointer transition-colors ${selectedPlan === '3-month' ? 'border-[#a4cfa1] bg-[#f4f9f4]' : 'border-[#e5e5e5] bg-white hover:border-[#c1d1c1]'}`}
            >
              <div className="absolute -top-[14px] right-4 bg-[#6aa868] text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm">
                Recommended
              </div>

              <div className="flex items-start gap-3">
                <div className={`mt-1 w-[22px] h-[22px] rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 ${selectedPlan === '3-month' ? 'border-[#4a9f45]' : 'border-[#c1d1c1]'}`}>
                  {selectedPlan === '3-month' && <div className="w-[12px] h-[12px] bg-[#4a9f45] rounded-full"></div>}
                </div>
                <div className="flex-1">
                  <div className="text-[#798579] text-[11px] font-bold tracking-widest mb-1.5 uppercase">Starter Bundle</div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-[#1f2520] text-[15px]">3 Month Supply</span>
                    <div className="text-right leading-tight">
                      <div className="font-bold text-[#1f2520] text-[16px]">$299 <span className="font-normal text-[#798579] text-[14px]">/mo</span></div>
                      <div className="text-[#a1aca2] line-through text-[13px]">$389</div>
                    </div>
                  </div>
                  
                  {/* Promo Badge */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold mb-3">
                    <span className="bg-[#eaf4ca] text-[#4a9f45] px-2.5 py-1 rounded">EXTRA $200 OFF</span>
                    <span className="text-[#798579] font-normal">with code</span>
                    <span className="bg-[#fff7d1] text-[#b38b15] px-2.5 py-1 rounded">NEWYOU3</span>
                  </div>

                  <div className="text-[#798579] text-[13px]">Billed quarterly ($896).</div>
                </div>
              </div>
            </div>

            {/* 6 Month Plan */}
            <div 
              onClick={() => setSelectedPlan('6-month')}
              className={`relative border-[1.5px] rounded-xl p-5 mb-4 cursor-pointer transition-colors ${selectedPlan === '6-month' ? 'border-[#a4cfa1] bg-[#f8fbf8]' : 'border-[#e5e5e5] bg-white hover:border-[#c1d1c1]'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 w-[22px] h-[22px] rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 ${selectedPlan === '6-month' ? 'border-[#4a9f45]' : 'border-[#c1d1c1]'}`}>
                  {selectedPlan === '6-month' && <div className="w-[12px] h-[12px] bg-[#4a9f45] rounded-full"></div>}
                </div>
                <div className="flex-1">
                  <div className="text-[#798579] text-[11px] font-bold tracking-widest mb-1.5 uppercase">Most Popular</div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-[#1f2520] text-[15px]">6 Month Supply</span>
                    <div className="text-right leading-tight">
                      <div className="font-bold text-[#1f2520] text-[16px]">$225 <span className="font-normal text-[#798579] text-[14px]">/mo</span></div>
                      <div className="text-[#a1aca2] line-through text-[13px]">$359</div>
                    </div>
                  </div>
                  
                  {/* Promo Badge */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold mb-3">
                    <span className="bg-[#eaf4ca] text-[#4a9f45] px-2.5 py-1 rounded">SAVE $804</span>
                    <span className="text-[#798579] font-normal">with code</span>
                    <span className="bg-[#fff7d1] text-[#b38b15] px-2.5 py-1 rounded flex items-center gap-1">
                      NEWYOU6
                      <svg className="w-3 h-3 text-[#b38b15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    </span>
                  </div>

                  <div className="text-[#798579] text-[13px]">Renewed every 06 months.</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky) */}
          <div className="w-full lg:w-[320px] flex-shrink-0">
            <div className="bg-[#f5f8f5] rounded-xl p-5 mb-4 sticky top-[100px]">
              <p className="text-[#4a554c] text-[13px] leading-relaxed">
                <span className="font-bold">Our guarantee:</span> If you pay for a treatment and your provider determines you're not eligible, we'll issue a full refund
              </p>
            </div>
            
            <p className="text-[#8a998b] text-[11px] italic leading-relaxed px-1">
              Fridays does not manufacture compounded medications. Actual product appearance and labeling of the medication you receive will differ from website images.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
