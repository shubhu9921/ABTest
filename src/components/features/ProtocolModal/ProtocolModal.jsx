import React, { useEffect } from 'react';
import { AlertTriangleIcon, CheckIcon, ArrowRightIcon } from '../../ui/Icons';

export default function ProtocolModal({ isOpen, onClose }) {
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
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[20px] shadow-2xl w-full max-w-[480px] mx-auto relative max-h-[95vh] overflow-y-auto flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        {/* Top Bar */}
        <div className="bg-black text-white py-3 px-4 flex items-center justify-center gap-2">
          <AlertTriangleIcon className="w-4 h-4 text-yellow-400" />
          <span className="font-bold text-[12px] tracking-widest uppercase">Confirm Your Protocol</span>
        </div>

        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
          <h2 className="text-[17px] sm:text-[19px] font-bold text-[#1f2520] mb-3">You selected Semaglutide.</h2>
          
          <p className="text-[13px] sm:text-[14px] text-[#59665a] leading-relaxed mb-6 px-2">
            <span className="font-bold text-[#798579]">Important:</span> Because Semaglutide only utilizes a single biological pathway, weight reduction is steady but gradual, and initial nausea is common.
          </p>

          <hr className="w-full border-t border-[#e5e5e5] mb-6" />

          <h3 className="text-[19px] sm:text-[22px] font-bold text-[#1f2520] mb-8 leading-tight px-4">
            Looking for the fastest possible transformation?
          </h3>

          {/* Upgrade Card */}
          <div className="relative border-[1.5px] border-[#a4cfa1] rounded-xl p-5 sm:p-6 w-full text-left mb-6">
            
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#eaf4ca] text-[#3d4b3e] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-full border border-[#dce9a8] whitespace-nowrap shadow-sm">
              #1 Rated For Results
            </div>

            {/* Product Header */}
            <div className="flex items-center gap-4 mb-5 pt-2">
              <div className="w-[70px] h-[70px] sm:w-[75px] sm:h-[75px] bg-gradient-to-br from-[#1a2f1c] to-[#2c4c30] rounded-xl flex items-center justify-center shadow-inner flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-black"></div>
                <div className="w-[30px] h-[40px] bg-[#2a7a30] rounded border-t-[3px] border-white opacity-95 shadow-md transform rotate-6"></div>
              </div>
              <div>
                <h4 className="text-[20px] sm:text-[22px] font-bold text-[#1f2520] leading-none mb-1.5">Tirzepatide</h4>
                <p className="text-[12px] sm:text-[13px] text-[#59665a] mb-2.5">Compounded GLP-1/GIP</p>
                <div className="w-full h-px bg-[#e5e5e5] mb-2.5"></div>
                <p className="text-[13px] sm:text-[14px] text-[#1f2520] leading-snug">
                  <span className="font-bold">Dual-action:</span> Our most powerful formula.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#4a554c] font-bold">
                <CheckIcon className="w-4 h-4 text-[#4a9f45] flex-shrink-0 mt-0.5" />
                Everything in Semaglutide, plus:
              </li>
              <li className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#798579]">
                <CheckIcon className="w-4 h-4 text-[#4a9f45] flex-shrink-0 mt-0.5" />
                Targets 2 hunger pathways (GIP + GLP-1)
              </li>
              <li className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#798579]">
                <CheckIcon className="w-4 h-4 text-[#4a9f45] flex-shrink-0 mt-0.5" />
                Highest rated clinical weight loss
              </li>
              <li className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#798579]">
                <CheckIcon className="w-4 h-4 text-[#4a9f45] flex-shrink-0 mt-0.5" />
                Reduced side-effect profile
              </li>
            </ul>

            {/* Lightning Banner */}
            <div className="bg-[#eaf4ca] rounded-lg py-2 px-3 mb-5 flex items-center justify-center gap-1.5">
              <span className="text-yellow-600 text-[13px]">⚡</span>
              <span className="text-[13px] font-bold text-[#3d4b3e]">Only $90/mo more than Semaglutide</span>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-[#a1aca2] text-[14px] sm:text-[15px] relative font-medium">
                  $389
                  <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-red-400 transform -translate-y-1/2 -rotate-12"></span>
                </span>
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-[34px] font-bold text-[#1f2520] tracking-tight mr-1">$259</span>
                  <span className="text-[13px] sm:text-[14px] text-[#798579]">/mo</span>
                </div>
              </div>
              <p className="text-[12px] sm:text-[13px] text-[#798579]">
                That's just <span className="font-bold text-[#59665a]">$3/day</span> to upgrade to Dual-Action.
              </p>
            </div>

            {/* Upgrade Button */}
            <button className="w-full bg-[#5a7059] hover:bg-[#435342] text-white font-bold py-3.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm text-[14px] sm:text-[15px]">
              UPGRADE TO TIRZEPATIDE
              <ArrowRightIcon className="w-4 h-4 stroke-current stroke-[2.5]" />
            </button>
          </div>

          <button 
            onClick={onClose}
            className="text-[12px] sm:text-[13px] text-[#798579] underline hover:text-[#4a554c] transition-colors"
          >
            No Thanks, Im not looking for faster results.
          </button>

        </div>
      </div>
    </div>
  );
}
