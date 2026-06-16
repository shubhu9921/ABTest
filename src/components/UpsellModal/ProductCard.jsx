import React from 'react';
import { CheckIcon } from '../ui/Icons';

export default function ProductCard({ 
  product, 
  isExpanded, 
  onToggleExpand, 
  onAdd 
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#e8efe8] p-6 relative flex flex-col h-full">
      <div className="absolute top-4 right-4 bg-[#e6f4ea] text-[#2e6b3c] text-xs font-bold px-2 py-1 rounded-full">
        Save $XXX
      </div>
      
      <div className="flex gap-4 mb-4">
        <div className="w-20 h-24 bg-gray-800 rounded flex-shrink-0"></div> {/* Placeholder for bottle img */}
        <div>
          <h4 className="text-xl font-bold text-[#1f2520]">{product.title}</h4>
          <p className="text-sm text-[#59665a] mb-2">{product.subtitle}</p>
          <p className="text-sm text-[#59665a] leading-tight">{product.description}</p>
        </div>
      </div>

      <ul className="text-sm text-[#59665a] space-y-2 mb-4">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex gap-2 items-start">
            <CheckIcon /> 
            <span><strong>{feature.bold}:</strong> {feature.text}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={onToggleExpand} 
        className="text-sm text-[#59665a] mb-4 hover:text-[#4a5c4b] text-left"
      >
        {isExpanded ? '- Hide Details' : '+ Learn More ›'}
      </button>
      
      {isExpanded && (
        <div className="mb-4 p-4 border border-[#dce6dc] rounded-lg bg-white">
          <h5 className="text-xs font-bold text-[#8a998b] tracking-wider mb-2 uppercase">The Clinical Science</h5>
          <p className="text-sm text-[#59665a]">{product.science}</p>
        </div>
      )}
      
      <div className="border-t border-[#dce6dc] pt-4 mt-auto">
        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-[#1f2520]">${product.price}</span>
          <span className="text-[#59665a] text-sm"> /mo </span>
          <span className="text-[#8a998b] text-sm line-through">${product.originalPrice}</span>
        </div>
        <button 
          onClick={onAdd}
          className="w-full bg-[#5c685c] hover:bg-[#4a554a] text-white font-medium py-3 rounded-lg transition-colors"
        >
          Add {product.title}
        </button>
      </div>
    </div>
  );
}
