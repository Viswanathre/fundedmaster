// TX Funded — extracted inline JavaScript from index.html

/* ===== Inline Script Block 1 ===== */
const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalTitle');

    const legalPages = {
      risk: {
        title: "Risk Disclosure",
        html: `
          <p>Trading leveraged products (FX/CFDs/crypto) involves significant risk and can result in losses exceeding deposits. This website template is for demonstration purposes only.</p>
          <h4>Key points</h4>
          <ul>
            <li>Past performance does not guarantee future results.</li>
            <li>Leverage magnifies both profits and losses.</li>
            <li>Market gaps, volatility, and slippage can occur.</li>
            <li>Only trade with risk capital you can afford to lose.</li>
          </ul>
          <p class="small">Replace this with your attorney-approved disclosure for your jurisdiction.</p>
        `
      },
      terms: {
        title: "Terms & Conditions",
        html: `
          <p>By purchasing and using TX Funded services, you agree to these Terms. This is placeholder content — replace with a legal final.</p>
          <h4>Program overview</h4>
          <ul>
            <li>Evaluation stage: attempt to meet targets while respecting drawdown limits.</li>
            <li>Funded stage: reward payouts based on split and payout cycle.</li>
            <li>Rule breaches may result in termination of the attempt.</li>
          </ul>
          <h4>Prohibited behavior</h4>
          <ul>
            <li>Account sharing or identity misrepresentation</li>
            <li>Platform manipulation / latency abuse</li>
            <li>Intentional hedging across accounts to bypass limits</li>
          </ul>
        `
      },
      privacy: {
        title: "Privacy Policy",
        html: `
          <p>We collect only what we need to operate: account data, contact details, and usage analytics. This is placeholder content.</p>
          <ul>
            <li>Data you provide: name, email, phone (optional)</li>
            <li>Operational data: device, browser, IP (for fraud prevention)</li>
            <li>Payment data: handled by payment processors (we do not store card details)</li>
          </ul>
          <p>You can request data access or deletion according to applicable law.</p>
        `
      },
      refund: {
        title: "Refund Policy",
        html: `
          <p>Refund policies vary by product type and jurisdiction. This is placeholder content.</p>
          <ul>
            <li>Refunds may be available before an account is activated.</li>
            <li>No refund after you begin trading, unless required by law.</li>
            <li>Chargebacks may result in account suspension.</li>
          </ul>
        `
      },
      kyc: {
        title: "KYC Policy",
        html: `
          <p>To prevent fraud and meet compliance obligations, we may verify identity before payouts.</p>
          <ul>
            <li>Government-issued ID</li>
            <li>Proof of address (where required)</li>
            <li>Payment method verification</li>
          </ul>
          <p class="small">Replace with your exact onboarding workflow.</p>
        `
      },
      cookies: {
        title: "Cookie Policy",
        html: `
          <p>We use cookies for authentication, security, and basic analytics.</p>
          <ul>
            <li>Essential cookies: login and session security</li>
            <li>Analytics cookies: understand site performance</li>
            <li>Preference cookies: remember UI settings</li>
          </ul>
          <p>You can manage cookies in your browser settings.</p>
        `
      }
    };

    function openModal(key){
      const page = legalPages[key];
      if(!page) return;
      modalTitle.textContent = page.title;
      modalBody.innerHTML = page.html;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
    function closeModal(){
      modal.style.display = "none";
      document.body.style.overflow = "";
    }

    document.getElementById('closeModal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });

    document.querySelectorAll('[data-legal]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        openModal(btn.getAttribute('data-legal'));
      });
    });

    // Simple signup / checkout demo
    function toast(msg){
      const t = document.createElement('div');
      t.textContent = msg;
      t.style.position='fixed';
      t.style.left='50%';
      t.style.bottom='20px';
      t.style.transform='translateX(-50%)';
      t.style.padding='12px 14px';
      t.style.borderRadius='14px';
      t.style.border='1px solid rgba(255,255,255,.12)';
      t.style.background='rgba(11,16,32,.85)';
      t.style.backdropFilter='blur(10px)';
      t.style.color='rgba(234,240,255,.92)';
      t.style.zIndex='9999';
      t.style.boxShadow='0 20px 60px rgba(0,0,0,.45)';
      document.body.appendChild(t);
      setTimeout(()=>t.remove(), 2400);
    }

    const openSignup = ()=>{
      openModal('terms');
      toast("Demo: connect this button to your signup page / CRM.");
    }
    document.getElementById('openSignup').addEventListener('click', openSignup);
    document.getElementById('openSignup2').addEventListener('click', openSignup);

    document.querySelectorAll('.buy').forEach(b=>{
      b.addEventListener('click', ()=>{
        const plan = b.getAttribute('data-plan');
        toast(`Demo checkout: ${plan.toUpperCase()} selected. Connect to Stripe/NowPayments here.`);
      });
    });

    // Keyboard close
    window.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') closeModal();
    });

/* ===== Inline Script Block 2 ===== */
// TradingView (TX Funded) — symbol & timeframe switches
    let TX_SYMBOL = "OANDA:XAUUSD";
    let TX_INTERVAL = "5";

    function renderTX(){
      const el = document.getElementById("tx-chart");
      if(!el || typeof TradingView === "undefined") return;
      el.innerHTML = "";
      new TradingView.widget({
        autosize: true,
        symbol: TX_SYMBOL,
        interval: TX_INTERVAL,
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        hide_top_toolbar: true,
        hide_legend: true,
        hide_side_toolbar: true,
        allow_symbol_change: false,
        container_id: "tx-chart",
        backgroundColor: "#0B0F1A"
      ,
        studies: [
          "EMA@tv-basicstudies",
          "EMA@tv-basicstudies"
        ]});
    }

    function setActive(groupSelector, btn){
      document.querySelectorAll(groupSelector + " .chip").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
    }

    document.getElementById("tx-symbols")?.addEventListener("click",(e)=>{
      const b = e.target.closest("[data-symbol]");
      if(!b) return;
      TX_SYMBOL = b.dataset.symbol;
      setActive("#tx-symbols", b);
      renderTX();
    });

    document.getElementById("tx-intervals")?.addEventListener("click",(e)=>{
      const b = e.target.closest("[data-interval]");
      if(!b) return;
      TX_INTERVAL = b.dataset.interval;
      setActive("#tx-intervals", b);
      renderTX();
    });

    window.addEventListener("load", renderTX);

