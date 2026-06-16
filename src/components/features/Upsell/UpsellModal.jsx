import React, { useEffect } from 'react';
import { CheckCircleSolidIcon, StarIcon, FlameIcon, RefreshIcon } from '../../ui/Icons';
import BottleGraphic from './BottleGraphic';
import FeatureList from './FeatureList';
import PriceBlock from './PriceBlock';

export default function UpsellModal({ isOpen, onClose, onContinue, planType = '3-month' }) {
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

  const config = planType === '3-month' 
    ? {
        savings: 471,
        title: "3-Month Supply",
        price: 232,
        originalPrice: 389,
        bottleCount: 3,
        showStarBadge: true,
        subtext: "Avoid treatment gaps. Upgrade to Auto-Refill to guarantee your supply and lock in Member Pricing.",
        features: ["Lock in Member Pricing", "Guaranteed Support", "New Supply Every Month"]
      }
    : {
        savings: 130,
        title: "1-Month Supply",
        price: 259,
        originalPrice: 389,
        bottleCount: 1,
        showStarBadge: true,
        subtext: "Avoid treatment gaps. Upgrade to Auto-Refill to guarantee your supply and lock in Member Pricing.",
        features: ["Lock in Member Pricing", "Guaranteed Support", "New Supply Every Month"]
      };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-[500px] mx-auto relative max-h-[95vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <div className="bg-black text-white py-3.5 px-6 flex items-center justify-center gap-2 rounded-t-xl flex-shrink-0">
          <CheckCircleSolidIcon className="w-5 h-5 text-[#a4cfa1]" />
          <span className="font-semibold tracking-wide text-sm">RECOMMENDED PLAN UPGRADE</span>
        </div>

        <div className="p-6 sm:p-8 flex-1 overflow-y-auto bg-white rounded-b-xl">
          
          <div className="mb-4">
            <div className="bg-[#f2f2f2] text-[#595959] text-xs font-semibold px-2.5 py-1.5 rounded w-fit flex items-center gap-1.5">
              {config.showStarBadge ? (
                <><StarIcon /> 83% of patients choose this option</>
              ) : (
                <><FlameIcon /> Most Popular for New Patients</>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2520] mb-2 leading-tight">
              Commit to Results & <br className="hidden sm:block" />
              <span className="text-[#2e6b3c]">Save ${config.savings} Instantly</span>
            </h2>
            <p className="text-[#59665a] text-sm sm:text-base leading-relaxed">
              {config.subtext.split('Auto-Refill').map((part, i, arr) => 
                i < arr.length - 1 ? <span key={i}>{part}<span className="font-bold text-[#1f2520]">Auto-Refill</span></span> : part
              )}
            </p>
          </div>

          <div className="relative border border-[#a4cfa1] rounded-xl p-5 mb-6 mt-8">
            <div className="absolute -top-3.5 left-1/2 sm:left-[140px] -translate-x-1/2 sm:translate-x-0 bg-[#e8f6a3] text-[#2e4023] text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap border border-white flex items-center gap-1 shadow-sm">
              <RefreshIcon className="w-3.5 h-3.5" />
              Monthly Auto-Refill
            </div>

            <div className="flex flex-row gap-4 sm:gap-5 mb-5 mt-2">
              <div className="flex justify-start items-start w-24 sm:w-28 flex-shrink-0 pt-2">
                <BottleGraphic bottleCount={config.bottleCount} />
              </div>

              <div className="flex flex-col justify-center">
                <h4 className="text-lg sm:text-xl font-bold text-[#1f2520] mb-0.5">{config.title}</h4>
                <p className="text-xs text-[#59665a] mb-2 sm:mb-3">Tirzepatide GLP-1/GIP</p>
                <FeatureList features={config.features} />
              </div>
            </div>

            <div className="w-full h-px bg-[#e5e5e5] mb-5"></div>

            <PriceBlock 
              savings={config.savings} 
              originalPrice={config.originalPrice} 
              price={config.price} 
            />
          </div>

          <button 
            onClick={() => { onClose(); onContinue('upgrade_auto_refill'); }}
            className="w-full bg-[#526651] hover:bg-[#435342] text-white font-bold py-4 px-4 rounded-lg transition-colors flex items-center justify-center shadow-sm text-sm sm:text-base mb-3"
          >
            UPGRADE MY PLAN
          </button>
          
          <p className="text-center text-xs text-[#8a998b] mb-6">
            Billed every 28 days (${config.price}). Cancel anytime.
          </p>

          <div className="text-center">
            <button 
              onClick={() => { onClose(); onContinue('decline'); }}
              className="text-[#59665a] hover:text-[#1f2520] text-sm underline decoration-1 underline-offset-4 transition-colors"
            >
              No thanks, I'll stick to the higher monthly rate.
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
