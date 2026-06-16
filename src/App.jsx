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
