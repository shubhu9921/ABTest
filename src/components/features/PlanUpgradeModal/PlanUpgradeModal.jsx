import React, { useEffect } from 'react';
import { CheckCircleSolidIcon, RefreshIcon, CheckIcon } from '../../ui/Icons';

const RxBoxSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Right Shadow/Side */}
    <path d="M75 15 L95 5 L95 105 L75 115 Z" fill="#5a7643" />
    {/* Top Side */}
    <path d="M5 25 L25 15 L95 5 L75 15 Z" fill="#b4d496" />
    {/* Front Face */}
    <path d="M5 25 L75 15 L75 115 L5 120 Z" fill="#8cb26e" />
    {/* Text */}
    <text x="15" y="55" fill="white" fontFamily="serif" fontSize="32" fontWeight="bold" transform="rotate(-7 15 55)">Rx</text>
    <text x="16" y="75" fill="white" fontFamily="sans-serif" fontSize="9" transform="rotate(-7 16 75)">Tirzepatide</text>
    <text x="16" y="87" fill="white" fontFamily="sans-serif" fontSize="9" transform="rotate(-7 16 87)">GLP-1/GIP</text>
  </svg>
);

export default function PlanUpgradeModal({ isOpen, onClose, planType = '1-month' }) {
  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ modal: true }, '');
      const handlePopState = () => onClose();
      window.addEventListener('popstate', handlePopState);
      return () => {
        window.removeEventListener('popstate', handlePopState);
        if (window.history.state && window.history.state.modal) {
          window.history.back();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const is3Month = planType === '3-month';
  const savings = is3Month ? '$471' : '$130';
  const price = is3Month ? '$232' : '$259';
  const titleText = is3Month ? '3-Month Supply' : '1-Month Supply';

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-[70] flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[20px] shadow-2xl w-full max-w-[540px] mx-auto relative max-h-[95vh] overflow-y-auto flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        {/* Top Header */}
        <div className="bg-black text-white py-3 px-4 flex items-center justify-center gap-2">
          <CheckCircleSolidIcon className="w-5 h-5 text-[#4a9f45]" />
          <span className="font-bold text-[12px] sm:text-[13px] tracking-widest uppercase">Recommended Plan Upgrade</span>
        </div>

        <div className="p-5 sm:p-10 flex flex-col items-center">
          
          {/* Top Tag */}
          <div className="bg-[#f5f5f5] text-[#59665a] text-[11px] sm:text-[12px] font-bold py-1.5 px-3.5 rounded-md mb-5 hidden sm:block">
            🔥 Most Popular for New Patients
          </div>
          <div className="bg-[#f5f5f5] text-[#59665a] text-[11px] sm:text-[12px] font-bold py-1.5 px-3.5 rounded-md mb-4 block sm:hidden">
            ⭐ 83% of patients choose this option
          </div>

          {/* Headline */}
          <h2 className="text-[26px] sm:text-[34px] font-bold text-[#1f2520] leading-[1.1] text-center mb-3">
            Commit to Results &amp; <br className="block sm:hidden" />
            <span className="text-[#2a7a30]">Save {savings} Instantly</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[13px] sm:text-[15px] text-[#59665a] text-center leading-relaxed mb-8 px-2 hidden sm:block">
            <span className="font-bold text-[#1f2520]">92% of visible results happen by Day 90.</span>
          </p>
          <p className="text-[13px] sm:text-[14px] text-[#59665a] text-center leading-relaxed mb-6 px-1 block sm:hidden">
            <span className="font-bold text-[#1f2520]">Avoid treatment gaps.</span> Upgrade to <span className="font-bold text-[#1f2520]">Auto-Refill</span> to guarantee your supply and lock in Member Pricing.
          </p>

          {/* ----------------- DESKTOP CARD LAYOUT (hidden on mobile) ----------------- */}
          <div className="hidden sm:flex flex-col w-full">
            <div className="bg-[#fafbfa] rounded-xl p-6 mb-6 flex items-center justify-between w-full">
              
              <div className="flex items-center gap-6">
                {/* Product Image */}
                <div className="w-[110px] h-[110px] flex items-center justify-center relative flex-shrink-0">
                  {is3Month ? (
                    <>
                      <RxBoxSVG className="w-[60px] absolute top-0 left-0 drop-shadow-md z-10" />
                      <RxBoxSVG className="w-[60px] absolute top-4 left-6 drop-shadow-md z-20" />
                      <RxBoxSVG className="w-[60px] absolute top-8 left-12 drop-shadow-md z-30" />
                    </>
                  ) : (
                    <RxBoxSVG className="w-[85px] drop-shadow-lg" />
                  )}
                </div>

                {/* Product Info */}
                <div>
                  <div className="bg-[#eaf4ca] text-[#3d4b3e] text-[11px] font-bold py-1 px-3 rounded-md inline-flex items-center gap-1.5 mb-3 shadow-sm">
                    <RefreshIcon className="w-3.5 h-3.5 text-[#4a9f45]" />
                    Monthly Auto-Refill
                  </div>
                  <h3 className="font-bold text-[19px] text-[#1f2520] mb-0.5">{titleText}</h3>
                  <p className="text-[13px] text-[#798579] mb-3">Tirzepatide GLP-1/GIP</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-[13px] text-[#4a554c] font-medium">
                      <CheckIcon className="w-4 h-4 text-[#4a9f45] mt-0.5 flex-shrink-0" />
                      Unlimited Provider Visits
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-[#4a554c] font-medium">
                      <CheckIcon className="w-4 h-4 text-[#4a9f45] mt-0.5 flex-shrink-0" />
                      Guaranteed Support
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-[#4a554c] font-medium">
                      <CheckIcon className="w-4 h-4 text-[#4a9f45] mt-0.5 flex-shrink-0" />
                      New Supply Every Month
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex flex-col items-end justify-center pr-2">
                <div className="flex items-baseline gap-1 mb-0.5">
                  <span className="text-[34px] font-bold text-[#1f2520] tracking-tight leading-none">{price}</span>
                  <span className="text-[15px] text-[#798579]">/mo</span>
                </div>
                <div className="text-[#a1aca2] text-[15px] relative mb-4 font-medium">
                  $389
                  <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-red-400 transform -translate-y-1/2 -rotate-12"></span>
                </div>
                <div className="bg-[#cf7922] text-white text-[12px] font-bold py-1.5 px-4 rounded-full shadow-sm uppercase tracking-wide">
                  SAVE {savings}
                </div>
              </div>
            </div>

            {/* Desktop Button & Subtext */}
            <button className="w-full bg-[#4a634a] hover:bg-[#3d4b3e] text-white font-bold py-4 rounded-lg transition-colors shadow-sm text-[16px] mb-3">
              UPGRADE MY PLAN
            </button>
            <p className="text-[13px] text-[#798579] text-center mb-6">
              Billed every 28 days ({price}). Cancel anytime.
            </p>
          </div>

          {/* ----------------- MOBILE CARD LAYOUT (hidden on desktop) ----------------- */}
          <div className="block sm:hidden w-full relative border border-[#a4cfa1] rounded-xl p-5 mb-6 mt-3 shadow-sm bg-white">
            
            {/* Top overlapping badge */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#eaf4ca] text-[#3d4b3e] text-[11px] font-bold py-1 px-3.5 rounded-full border border-[#dce9a8] flex items-center gap-1.5 whitespace-nowrap shadow-sm">
              <RefreshIcon className="w-3.5 h-3.5 text-[#4a9f45]" />
              Monthly Auto-Refill
            </div>

            <div className="flex items-center gap-4 mt-3">
              {/* Product Image */}
              <div className="w-[100px] h-[90px] flex items-center justify-center relative flex-shrink-0">
                {is3Month ? (
                  <>
                    <RxBoxSVG className="w-[50px] absolute top-1 left-0 drop-shadow-md z-10" />
                    <RxBoxSVG className="w-[50px] absolute top-5 left-5 drop-shadow-md z-20" />
                    <RxBoxSVG className="w-[50px] absolute top-9 left-10 drop-shadow-md z-30" />
                  </>
                ) : (
                  <RxBoxSVG className="w-[75px] drop-shadow-lg" />
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 w-full">
                <h3 className="font-bold text-[18px] text-[#1f2520] mb-0.5">{titleText}</h3>
                <p className="text-[12px] text-[#798579] mb-3">Tirzepatide GLP-1/GIP</p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-1.5 text-[11px] text-[#4a554c] font-medium">
                    <CheckIcon className="w-3.5 h-3.5 text-[#4a9f45] mt-0.5 flex-shrink-0" />
                    Lock in Member Pricing
                  </li>
                  <li className="flex items-start gap-1.5 text-[11px] text-[#4a554c] font-medium">
                    <CheckIcon className="w-3.5 h-3.5 text-[#4a9f45] mt-0.5 flex-shrink-0" />
                    Guaranteed Support
                  </li>
                  <li className="flex items-start gap-1.5 text-[11px] text-[#4a554c] font-medium">
                    <CheckIcon className="w-3.5 h-3.5 text-[#4a9f45] mt-0.5 flex-shrink-0" />
                    New Supply Every Month
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Pricing Row */}
            <div className="flex flex-row justify-between items-center mt-6 pt-5 border-t border-[#e5e5e5] w-full mb-6">
              <div className="bg-[#cf7922] text-white text-[12px] font-bold py-1.5 px-3 rounded-full shadow-sm uppercase tracking-wide">
                SAVE {savings}
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-[#a1aca2] text-[13px] relative">
                  $389
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-red-400 transform -translate-y-1/2 -rotate-12"></span>
                </span>
                <span className="text-[28px] font-bold text-[#1f2520] tracking-tight leading-none">{price}</span>
                <span className="text-[13px] text-[#798579]">/mo</span>
              </div>
            </div>

            {/* Mobile Button & Subtext (Inside the card) */}
            <button className="w-full bg-[#4a634a] hover:bg-[#3d4b3e] text-white font-bold py-3.5 rounded-lg transition-colors shadow-sm text-[15px] mb-3">
              UPGRADE MY PLAN
            </button>
            <p className="text-[11px] text-[#798579] text-center">
              Billed every 28 days ({price}). Cancel anytime.
            </p>
          </div>

          <button 
            onClick={onClose}
            className="text-[13px] sm:text-[14px] text-[#798579] underline hover:text-[#4a554c] transition-colors pb-2"
          >
            I'll Stick To The Higher Monthly Rate
          </button>

        </div>
      </div>
    </div>
  );
}
