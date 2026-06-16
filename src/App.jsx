import React, { useState } from 'react';
import UpsellModal from './components/features/Upsell/UpsellModal';
import AlternativeFit from './components/features/AlternativeFit/AlternativeFit';
import VerifyAnswer from './components/features/VerifyAnswer/VerifyAnswer';
import GoalModal from './components/features/GoalModal/GoalModal';
import ProtocolModal from './components/features/ProtocolModal/ProtocolModal';
import PlanSelection from './components/features/PlanSelection/PlanSelection';
import PlanUpgradeModal from './components/features/PlanUpgradeModal/PlanUpgradeModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [isProtocolModalOpen, setIsProtocolModalOpen] = useState(false);
  const [isPlanUpgradeModalOpen, setIsPlanUpgradeModalOpen] = useState(false);
  const [upgradePlanType, setUpgradePlanType] = useState('1-month');
  const [currentView, setCurrentView] = useState('alternative'); // Default landing page

  const handleContinue = (action) => {
    console.log('User action:', action);
    if (action === 'decline') {
      // Simulate navigating to the alternative fit page on decline
      setCurrentView('alternative');
    }
  };

  if (currentView === 'alternative') {
    return (
      <div className="relative">
        <AlternativeFit onExplore={() => setCurrentView('verify')} />
      </div>
    );
  }

  if (currentView === 'verify') {
    return (
      <div className="relative">
        <VerifyAnswer />
      </div>
    );
  }

  if (currentView === 'checkout') {
    return (
      <div className="relative">
        <PlanSelection />
        
        {/* Floating Testing Menu */}
        <div className="fixed bottom-4 left-4 bg-white p-4 rounded-xl shadow-2xl border border-gray-200 z-[60] w-[260px] max-h-[80vh] overflow-y-auto">
          <h3 className="font-bold text-sm mb-3 text-[#1f2520]">Testing Actions</h3>
          <div className="space-y-2 flex flex-col">
            <button onClick={() => setIsModalOpen(true)} className="text-[11px] bg-gray-100 p-2 rounded hover:bg-gray-200 text-left font-semibold text-gray-700">Open Upsell Modal</button>
            <button onClick={() => setIsProtocolModalOpen(true)} className="text-[11px] bg-gray-100 p-2 rounded hover:bg-gray-200 text-left font-semibold text-gray-700">Open Protocol Upgrade Modal</button>
            <button onClick={() => setIsGoalModalOpen(true)} className="text-[11px] bg-gray-100 p-2 rounded hover:bg-gray-200 text-left font-semibold text-gray-700">Open Goal Confirmation Modal</button>
            <div className="h-px w-full bg-gray-200 my-1"></div>
            <button onClick={() => { setUpgradePlanType('1-month'); setIsPlanUpgradeModalOpen(true); }} className="text-[11px] bg-indigo-50 text-indigo-700 p-2 rounded hover:bg-indigo-100 text-left font-bold">1-Month Upgrade Modal</button>
            <button onClick={() => { setUpgradePlanType('3-month'); setIsPlanUpgradeModalOpen(true); }} className="text-[11px] bg-indigo-50 text-indigo-700 p-2 rounded hover:bg-indigo-100 text-left font-bold">3-Month Upgrade Modal</button>
            <div className="h-px w-full bg-gray-200 my-1"></div>
            <button onClick={() => setCurrentView('alternative')} className="text-[11px] bg-[#eaf4ca] text-[#4a9f45] p-2 rounded hover:bg-[#dce9a8] text-left font-bold">Go to Alternative Flow</button>
            <button onClick={() => setCurrentView('verify')} className="text-[11px] bg-[#f4f7f4] text-[#4a5c4b] p-2 rounded hover:bg-[#eef3ee] text-left font-bold">Go to Safety Verify</button>
          </div>
        </div>

        <UpsellModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onContinue={handleContinue}
          planType="3-month"
        />

        <GoalModal 
          isOpen={isGoalModalOpen}
          onClose={() => setIsGoalModalOpen(false)}
        />

        <ProtocolModal 
          isOpen={isProtocolModalOpen}
          onClose={() => setIsProtocolModalOpen(false)}
        />

        <PlanUpgradeModal 
          isOpen={isPlanUpgradeModalOpen}
          onClose={() => setIsPlanUpgradeModalOpen(false)}
          planType={upgradePlanType}
        />
      </div>
    );
  }

  return null;
}

export default App;
