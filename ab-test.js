(function() {
  'use strict';

  // 1. Config Object
  const CONFIG = {
    testId: 'EXP_PLAN_UPGRADE_001',
    // Generic selectors meant to be configured based on the live DOM
    selectors: {
      planContainer: 'main', // Container to observe and delegate from
      planTarget: '[data-plan="1-month"]', // Target for the 1-month plan trigger
      upgradedPlanTarget: '[data-plan="3-month"]', // Target to select on upgrade
      checkoutButton: '[data-action="checkout"]', // Button to proceed checkout
    },
    modalHtml: `
      <div id="cro-upgrade-modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 999999; display: none; justify-content: center; align-items: center; padding: 16px; opacity: 0; transition: opacity 0.3s ease; font-family: sans-serif;">
        <div id="cro-upgrade-modal" style="background: #fff; border-radius: 20px; width: 100%; max-width: 500px; max-height: 95vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); transform: translateY(20px); transition: transform 0.3s ease; position: relative; overflow: hidden;">
          
          <div style="background: #000; color: #fff; padding: 12px; text-align: center; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
            <span style="color: #4a9f45; margin-right: 8px;">✓</span> Recommended Plan Upgrade
          </div>

          <div style="padding: 32px 32px 24px 32px; display: flex; flex-direction: column; align-items: center;">
            <div style="background: #f5f5f5; color: #59665a; font-size: 12px; font-weight: bold; padding: 6px 12px; border-radius: 6px; margin-bottom: 20px;">
              🔥 Most Popular for New Patients
            </div>
            
            <h2 style="font-size: 32px; font-weight: bold; color: #1f2520; text-align: center; margin: 0 0 12px 0; line-height: 1.1;">
              Commit to Results &amp; <br>
              <span style="color: #2a7a30;">Save $130 Instantly</span>
            </h2>

            <p style="font-size: 14px; color: #59665a; text-align: center; margin: 0 0 24px 0; font-weight: bold;">
              92% of visible results happen by Day 90.
            </p>

            <div style="width: 100%; border: 1px solid #a4cfa1; border-radius: 12px; padding: 24px; position: relative; margin-bottom: 24px;">
              <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #eaf4ca; color: #3d4b3e; font-size: 11px; font-weight: bold; padding: 4px 14px; border-radius: 99px; border: 1px solid #dce9a8; white-space: nowrap;">
                ↻ Monthly Auto-Refill
              </div>

              <div style="display: flex; gap: 20px; align-items: center; margin-top: 12px;">
                <div style="width: 75px; height: 95px; background: #8cb26e; border-radius: 4px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-right: 4px solid #5a7643; border-bottom: 4px solid #5a7643; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-family: serif; font-size: 24px;">Rx</div>
                <div style="flex: 1;">
                  <h3 style="font-size: 18px; font-weight: bold; color: #1f2520; margin: 0 0 4px 0;">3-Month Supply</h3>
                  <p style="font-size: 13px; color: #59665a; margin: 0 0 12px 0;">Tirzepatide GLP-1/GIP</p>
                  <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; color: #4a554c;">
                    <li style="margin-bottom: 8px;"><span style="color: #4a9f45; margin-right: 6px;">✓</span> Lock in Member Pricing</li>
                    <li style="margin-bottom: 8px;"><span style="color: #4a9f45; margin-right: 6px;">✓</span> Guaranteed Support</li>
                    <li style="margin-bottom: 8px;"><span style="color: #4a9f45; margin-right: 6px;">✓</span> New Supply Every Month</li>
                  </ul>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                <div>
                  <div style="color: #a1aca2; font-size: 14px; text-decoration: line-through; margin-bottom: 4px;">$389</div>
                  <div style="color: #1f2520; font-size: 34px; font-weight: bold; line-height: 1; letter-spacing: -1px;">$259<span style="font-size: 15px; color: #798579; font-weight: normal; letter-spacing: 0;">/mo</span></div>
                </div>
                <div style="background: #cf7922; color: #fff; font-size: 12px; font-weight: bold; padding: 6px 16px; border-radius: 99px;">
                  SAVE $130
                </div>
              </div>
            </div>

            <button id="cro-upgrade-accept" style="width: 100%; background: #4a634a; color: white; font-weight: bold; font-size: 15px; padding: 16px; border: none; border-radius: 8px; cursor: pointer; margin-bottom: 12px; transition: background 0.2s;">
              UPGRADE MY PLAN
            </button>
            
            <p style="font-size: 12px; color: #798579; margin: 0 0 24px 0;">
              Billed every 28 days ($259). Cancel anytime.
            </p>

            <button id="cro-upgrade-decline" style="background: none; border: none; color: #798579; font-size: 14px; text-decoration: underline; cursor: pointer; transition: color 0.2s;">
              No thanks, I'll stick to the higher monthly rate.
            </button>

          </div>
        </div>
      </div>
    `
  };

  // State
  let observer = null;
  let originalEventTarget = null;

  // 2. Utility Methods
  const Utils = {
    log: (msg, data = '') => {
      console.log(`[CRO A/B Test ${CONFIG.testId}] ${msg}`, data);
    },
    injectStyles: () => {
      if (document.getElementById('cro-styles')) return;
      const style = document.createElement('style');
      style.id = 'cro-styles';
      style.innerHTML = `
        #cro-upgrade-accept:hover { background: #3d4b3e !important; }
        #cro-upgrade-decline:hover { color: #4a554c !important; }
      `;
      document.head.appendChild(style);
    }
  };

  // 3. Modal Renderer
  const Modal = {
    inject: () => {
      if (document.getElementById('cro-upgrade-modal-overlay')) return;
      document.body.insertAdjacentHTML('beforeend', CONFIG.modalHtml);
      Utils.injectStyles();
      Modal.bindEvents();
    },
    open: (e) => {
      if (e) {
        // Prevent default SPA navigation or form submission
        e.preventDefault();
        e.stopPropagation();
        originalEventTarget = e.currentTarget || e.target;
      }
      
      Modal.inject();
      const overlay = document.getElementById('cro-upgrade-modal-overlay');
      const modal = document.getElementById('cro-upgrade-modal');
      
      overlay.style.display = 'flex';
      // Trigger browser reflow for CSS animation
      // eslint-disable-next-line no-unused-expressions
      overlay.offsetWidth;
      overlay.style.opacity = '1';
      modal.style.transform = 'translateY(0)';
      
      Utils.log('modal open');
    },
    close: () => {
      const overlay = document.getElementById('cro-upgrade-modal-overlay');
      const modal = document.getElementById('cro-upgrade-modal');
      if (!overlay) return;
      
      overlay.style.opacity = '0';
      modal.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 300); 
    },
    bindEvents: () => {
      const overlay = document.getElementById('cro-upgrade-modal-overlay');
      const acceptBtn = document.getElementById('cro-upgrade-accept');
      const declineBtn = document.getElementById('cro-upgrade-decline');
      const modal = document.getElementById('cro-upgrade-modal');

      // Prevent clicks inside modal from closing it
      modal.addEventListener('click', (e) => e.stopPropagation());

      // Overlay click
      overlay.addEventListener('click', () => {
        Modal.close();
      });

      // ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
          Modal.close();
        }
      });

      // Accept CTA
      acceptBtn.addEventListener('click', () => {
        Utils.log('upgrade selected');
        Modal.close();
        Handlers.processSelection('upgrade');
      });

      // Decline CTA
      declineBtn.addEventListener('click', () => {
        Utils.log('decline selected');
        Modal.close();
        Handlers.processSelection('decline');
      });
    }
  };

  // 4. Plan Selection Handlers
  const Handlers = {
    onPlanClick: (e) => {
      const target = e.target.closest(CONFIG.selectors.planTarget);
      if (target) {
        Utils.log('plan click', target);
        
        // Critical: Stop the SPA from immediately processing the selection
        e.preventDefault();
        e.stopImmediatePropagation();
        
        Modal.open(e);
      }
    },
    processSelection: (action) => {
      if (action === 'upgrade') {
        const upgradePlan = document.querySelector(CONFIG.selectors.upgradedPlanTarget);
        if (upgradePlan) {
          // Temporarily unbind to avoid infinite trigger loop if selectors overlap
          document.removeEventListener('click', Handlers.onPlanClick, true);
          upgradePlan.click();
          document.addEventListener('click', Handlers.onPlanClick, true);
        }
      } else if (originalEventTarget) {
        // Decline: Click original element stored during event interception
        document.removeEventListener('click', Handlers.onPlanClick, true);
        originalEventTarget.click();
        document.addEventListener('click', Handlers.onPlanClick, true);
      }
      
      // Attempt to progress checkout flow after DOM update
      setTimeout(() => {
        const checkoutBtn = document.querySelector(CONFIG.selectors.checkoutButton);
        if (checkoutBtn) checkoutBtn.click();
      }, 150);
    }
  };

  // 5. SPA Observer
  const SPA = {
    lastUrl: location.href,
    initObserver: () => {
      if (observer) observer.disconnect();
      
      observer = new MutationObserver((mutations) => {
        if (location.href !== SPA.lastUrl) {
          Utils.log('route change detected', location.href);
          SPA.lastUrl = location.href;
          Init.run(); 
        }
      });
      
      observer.observe(document.body, { childList: true, subtree: true });
    }
  };

  // 6. Initialization Logic
  const Init = {
    bindDelegation: () => {
      // Remove first to prevent duplicate bindings on re-init
      document.removeEventListener('click', Handlers.onPlanClick, true);
      // Bind at document level with capture phase (true) to intercept synthetic events
      document.addEventListener('click', Handlers.onPlanClick, true);
    },
    run: () => {
      Utils.log('initialization');
      Init.bindDelegation();
      SPA.initObserver();
    }
  };

  // Kickoff
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', Init.run);
  } else {
    Init.run();
  }

})();
