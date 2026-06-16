import React, { useEffect } from 'react';
import { AlertOutlineIcon, CheckIcon } from '../../ui/Icons';

export default function GoalModal({ isOpen, onClose }) {
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

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[20px] shadow-2xl w-full max-w-[540px] mx-auto relative max-h-[95vh] overflow-y-auto flex flex-col p-8 sm:p-12"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <div className="flex flex-col items-center text-center">
          
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-[#eaf0ea] flex items-center justify-center mb-6 border border-[#d3e0d3]">
            <AlertOutlineIcon className="w-6 h-6 text-[#4a5c4b]" />
          </div>

          <h2 className="text-3xl sm:text-[32px] font-bold text-[#1f2520] mb-4 tracking-tight">Confirm Your Goal</h2>
          
          <p className="text-[15px] sm:text-base text-[#59665a] leading-relaxed mb-6 px-2">
            <span className="font-bold text-[#1f2520]">You selected GLP-1 Microdosing.</span><br />
            This is a subtherapeutic dose designed to reduce cellular inflammation, defend your metabolic baseline, and boost energy.
          </p>

          <div className="bg-[#f5f8f5] border border-[#c1d1c1] rounded-md p-4 mb-8 w-full">
            <p className="text-[13px] sm:text-[14px] font-bold text-[#1f2520] leading-snug">
              Important: Because this is a low-dose protocol, it will not suppress appetite or cause weight loss.
            </p>
          </div>

          <h3 className="text-[17px] sm:text-lg font-bold text-[#1f2520] mb-5">
            Looking to achieve transformative weight loss?
          </h3>

          <ul className="space-y-2.5 mb-8 w-full text-left sm:w-fit sm:mx-auto">
            <li className="flex items-start gap-2.5 text-[14px] text-[#4a554c] font-bold">
              <CheckIcon className="w-4 h-4 text-[#4a9f45] flex-shrink-0 mt-0.5" />
              Hit the mute button on "Food Noise"
            </li>
            <li className="flex items-start gap-2.5 text-[14px] text-[#4a554c] font-bold">
              <CheckIcon className="w-4 h-4 text-[#4a9f45] flex-shrink-0 mt-0.5" />
              Average 15% weight reduction
            </li>
            <li className="flex items-start gap-2.5 text-[14px] text-[#4a554c] font-bold">
              <CheckIcon className="w-4 h-4 text-[#4a9f45] flex-shrink-0 mt-0.5" />
              Includes 1-on-1 Dietitian & Journey Support
            </li>
          </ul>

          <button className="w-full bg-[#5a7059] hover:bg-[#435342] text-white font-bold py-4 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm text-[15px] mb-4">
            SELECT GLP-1 WEIGHT LOSS 
            <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
          
          <p className="text-center text-[12px] text-[#8a998b] mb-8">
            Therapeutic doses engineered for transformative results.
          </p>

          <hr className="w-full border-t border-[#e5e5e5] mb-8" />

          <button 
            onClick={onClose}
            className="w-full sm:w-[70%] py-3.5 rounded-lg border border-[#c1d1c1] text-[#4a5c4b] font-semibold text-[15px] hover:bg-[#eef3ee] transition-colors bg-transparent mx-auto block"
          >
            Continue to GLP-1 Microdosing
          </button>

        </div>
      </div>
    </div>
  );
}
