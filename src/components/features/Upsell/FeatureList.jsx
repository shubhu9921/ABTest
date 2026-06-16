import React from 'react';
import { CheckIcon } from '../../ui/Icons';

export default function FeatureList({ features }) {
  return (
    <ul className="text-xs sm:text-sm text-[#333333] space-y-1.5">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <CheckIcon className="w-4 h-4 text-[#1f2520] flex-shrink-0 mt-0.5" /> 
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
