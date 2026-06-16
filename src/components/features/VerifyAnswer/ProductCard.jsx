import React, { useState } from 'react';
import { CheckIcon } from '../../ui/Icons';

export default function ProductCard({ 
  title, 
  subtitle, 
  description, 
  checks, 
  expandedText, 
  price, 
  originalPrice, 
  buttonText 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] p-5 w-full text-left relative mb-4">
      {/* Save Badge */}
      <div className="absolute top-4 right-4 bg-[#e6f4ea] text-[#1f7a3d] text-xs font-semibold px-2 py-1 rounded">
        Save $XXX
      </div>

      <div className="flex gap-4 mb-4">
        {/* Blue Bottle Graphic Placeholder */}
        <div className="w-[72px] h-24 bg-gradient-to-br from-[#1b3d58] to-[#0f2436] rounded-md shadow-md flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-x-2 top-6 bottom-2 bg-[#2a5a80] opacity-50 rounded-sm"></div>
        </div>

        {/* Header Info */}
        <div className="flex-1 pt-1 pr-16">
          <h3 className="text-xl font-bold text-[#1f2520] leading-tight">{title}</h3>
          <p className="text-sm text-[#59665a] mb-2">{subtitle}</p>
          <hr className="border-[#e5e5e5] mb-2" />
          <p className="text-sm text-[#4a554c] leading-snug">{description}</p>
        </div>
      </div>

      {/* Checkmarks */}
      <ul className="space-y-1.5 mb-4">
        {checks.map((check, idx) => (
          <li key={idx} className="flex items-start gap-1.5 text-[13px] text-[#4a554c]">
            <CheckIcon className="w-4 h-4 text-[#4a9f45] flex-shrink-0 mt-0.5" />
            <span>
              <span className="font-bold text-[#1f2520]">{check.title} </span>
              {check.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mb-4">
          <div className="border border-[#c1d1c1] p-4 rounded-sm bg-white mb-3">
            <h4 className="text-[11px] font-bold text-[#8a998b] tracking-wider mb-2">THE CLINICAL SCIENCE</h4>
            <p className="text-[13px] text-[#59665a] leading-relaxed">
              {expandedText}
            </p>
          </div>
        </div>
      )}

      {/* Toggle */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[13px] text-[#59665a] font-medium hover:text-[#1f2520] transition-colors flex items-center gap-1 mb-4"
      >
        {isExpanded ? '- Hide Details' : '+ Learn More >'}
      </button>

      <hr className="border-[#e5e5e5] mb-4" />

      {/* Pricing & Button */}
      <div className="text-center pt-2 pb-2">
        <div className="mb-4">
          <span className="text-xl sm:text-[22px] font-bold text-[#1f2520] mr-1">${price}</span>
          <span className="text-xs sm:text-[13px] text-[#59665a]">/mo</span>
          <span className="text-[#a1aca2] line-through text-xs sm:text-[13px] ml-2">${originalPrice}</span>
        </div>
        
        <button className="bg-[#4a5c4b] hover:bg-[#3d4b3e] text-white font-medium py-3 px-8 rounded-lg w-full sm:w-auto min-w-[240px] transition-colors shadow-sm text-[15px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
