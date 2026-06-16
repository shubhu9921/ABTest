import React from 'react';
import { ShieldIcon, UndoArrowIcon } from '../../ui/Icons';
import ProductCard from './ProductCard';

export default function VerifyAnswer() {
  return (
    <div className="min-h-screen bg-[#f3f6f1] flex flex-col items-center px-4 py-8 text-center font-sans">
      
      {/* Header Logo Placeholder */}
      <div className="w-full flex justify-center pt-2 pb-12 sm:pb-16">
         <h1 className="text-3xl font-serif font-bold text-[#435342] tracking-tighter">fridays</h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-2xl mx-auto flex flex-col items-center w-full">
        
        {/* Shield Icon */}
        <div className="w-16 h-16 rounded-full bg-[#e3e8de] flex items-center justify-center mb-8">
          <ShieldIcon className="w-8 h-8 text-[#435342]" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-6 tracking-tight">
          Wait, let's verify that.
        </h2>

        {/* Paragraph */}
        <p className="text-[#59665a] text-lg sm:text-[19px] leading-relaxed mb-10 px-4 sm:px-0 font-medium max-w-[540px]">
          To ensure your absolute safety, our clinical review indicates that based on your previous answer, a GLP-1 medication is not a clinically appropriate match.
        </p>

        {/* Primary Action */}
        <button className="w-full sm:w-auto sm:min-w-[320px] flex items-center justify-center gap-2.5 bg-[#4a5c4b] text-white font-medium py-4 px-8 rounded-lg text-[17px] hover:bg-[#3d4b3e] transition-colors mb-10 shadow-sm">
          <UndoArrowIcon className="w-5 h-5" />
          Review Your Answer
        </button>

        {/* Divider */}
        <hr className="w-full max-w-[600px] border-t border-[#dce3da] mb-10" />

        {/* Upsell Alternative Section */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1f2520] leading-tight mb-2 sm:mb-3 px-4 text-center">
            Don't worry. <span className="block sm:inline">We can still help you with your weight loss.</span>
          </h2>
          
          <p className="text-[#59665a] text-sm sm:text-[15px] leading-relaxed mb-8 px-4 text-center max-w-xl">
            If you answered correctly, <span className="font-bold text-[#1f2520]">you still have options</span>. Based on the information you provided, we've identified clinician-approved treatments to help you
          </p>

          <ProductCard 
            title="Sermorelin"
            subtitle="Feel Better, Look Younger"
            description="Repairs your metabolism to naturally target stubborn fat."
            checks={[
              { title: "Repair Metabolism:", text: "Active biological restoration." },
              { title: "Melt Stubborn Fat:", text: "Preserve lean muscle." },
              { title: "Deep Sleep:", text: "Heal while you rest." }
            ]}
            expandedText="Sermorelin naturally triggers your body's youthful growth hormone production. It repairs a damaged metabolism from the inside out, shifting your body from cellular decline to active repair without the risks of synthetic hormones."
            price="179"
            originalPrice="359"
            buttonText="Add Sermorelin"
          />

          <ProductCard 
            title="B12-MIC"
            subtitle="Boost Your Mood & Energy"
            description="Ignites cellular energy to burn fuel instead of storing it."
            checks={[
              { title: "Kill Fatigue:", text: "Stop afternoon crashes." },
              { title: "Ignite Energy:", text: "Burn fuel efficiently." },
              { title: "Clean Stamina:", text: "Zero stimulant jitters." }
            ]}
            expandedText="Bypasses your GI tract to deliver a rapid, highly bioavailable surge of energy directly to your cells. It eradicates lethargy at the source, priming your body to actively burn fuel instead of storing it."
            price="179"
            originalPrice="359"
            buttonText="Add B12-MIC"
          />
        </div>

        {/* Secondary Action */}
        <button className="w-full sm:w-auto sm:min-w-[240px] px-8 py-3 rounded-lg border border-[#a4cfa1] text-[#4a5c4b] font-semibold text-[15px] hover:bg-[#eef3ee] transition-colors bg-transparent mb-16">
          Exit Assessment
        </button>

      </div>

    </div>
  );
}
