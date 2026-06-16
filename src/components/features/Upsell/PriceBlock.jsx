import React from 'react';

export default function PriceBlock({ savings, originalPrice, price }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="bg-[#cc8539] text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-sm">
        SAVE ${savings}
      </div>
      <div className="text-right flex items-baseline">
        <span className="text-[#a1aca2] line-through text-sm mr-2">${originalPrice}</span>
        <span className="text-3xl sm:text-4xl font-bold text-[#1f2520]">${price}</span>
        <span className="text-[#59665a] text-sm sm:text-base ml-1">/mo</span>
      </div>
    </div>
  );
}
