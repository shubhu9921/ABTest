import React from 'react';
import { ShieldIcon, UndoIcon } from '../ui/Icons';

export default function VerifySection({ onReview }) {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#e3ebe2] flex items-center justify-center text-[#405041]">
          <ShieldIcon />
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2520] mb-4">Wait, let's verify that.</h2>
      <p className="text-[#59665a] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
        To ensure your absolute safety, our clinical review indicates that based on your previous answer, a GLP-1 medication is not a clinically appropriate match.
      </p>
      <button 
        onClick={onReview}
        className="bg-[#4a5c4b] hover:bg-[#3a483b] text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mx-auto"
      >
        <UndoIcon />
        Review Your Answer
      </button>
    </div>
  );
}
