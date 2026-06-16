import React from 'react';
import { UserHeartIcon } from '../../ui/Icons';

export default function AlternativeFit({ onExplore }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faf8] via-white to-[#e6f0e6] flex flex-col items-center px-4 py-8 text-center font-sans">
      
      {/* Header Logo Placeholder */}
      <div className="w-full flex justify-center pt-2 pb-16 sm:pb-24">
         <h1 className="text-3xl font-serif font-bold text-[#435342] tracking-tighter">fridays</h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Circular Icon Wrapper */}
        <div className="w-16 h-16 rounded-full bg-[#f1f5f1] flex items-center justify-center mb-6">
          <UserHeartIcon className="w-8 h-8 text-[#526651]" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f2520] mb-6 tracking-tight">
          You may still be a great fit
        </h2>

        {/* Paragraphs */}
        <p className="text-[#4a554c] text-base sm:text-lg leading-relaxed mb-4 px-2">
          While this treatment may not be right for you right now, we have other powerful options to support your health goals.
        </p>

        <p className="text-[#4a554c] text-base sm:text-lg leading-relaxed mb-10 px-2">
          If you're looking to boost your energy, sharpen your mind, and feel your best, check out our Longevity program - it might be exactly what you need next.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4 sm:px-0">
          <button className="px-6 py-3.5 rounded-lg border border-[#c1d1c1] bg-transparent text-[#4a554c] font-semibold text-sm hover:bg-[#eef3ee] transition-colors w-full sm:w-auto min-w-[180px]">
            Back to Fridays
          </button>
          <button 
            onClick={onExplore}
            className="px-6 py-3.5 rounded-lg bg-[#435342] text-white font-semibold text-sm hover:bg-[#344333] transition-colors w-full sm:w-auto min-w-[180px] shadow-sm"
          >
            Explore Longevity
          </button>
        </div>

      </div>

    </div>
  );
}
