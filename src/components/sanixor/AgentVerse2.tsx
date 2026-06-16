export function AgentVerse2() {
  return (
    <>
      <style>{`
        .av2-card {
          position: relative;
          width: 100%;
          max-width: 960px;
          background: linear-gradient(172deg, rgba(19, 16, 42, 0.0) 0%, rgba(12, 10, 26, 0.0) 100%);
          border: none;
          border-radius: clamp(16px, 3vw, 28px);
          padding: clamp(24px, 4vw, 44px) clamp(24px, 4vw, 44px) clamp(16px, 2.5vw, 28px);
          overflow: hidden;
          opacity: 0;
          animation: av2-cardIn 0.7s 0.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes av2-cardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .av2-card::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: clamp(100px, 25vw, 200px);
          height: clamp(100px, 25vw, 200px);
          background: conic-gradient(from 215deg at 100% 0%, #7c3aed, transparent 30%);
          opacity: 0.06;
          pointer-events: none;
        }
        .av2-watermark {
          position: absolute;
          top: clamp(8px, 2vw, 24px);
          right: clamp(12px, 3vw, 36px);
          font-family: 'Syne', sans-serif;
          font-size: clamp(60px, 16vw, 120px);
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(180deg, rgba(124, 58, 237, 0.45) 0%, rgba(124, 58, 237, 0.15) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          pointer-events: none;
          user-select: none;
        }
        .av2-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: clamp(6px, 1vw, 10px);
          margin-bottom: clamp(16px, 2.5vw, 28px);
          opacity: 0;
          animation: av2-fadeUp 0.5s 0.25s ease forwards;
        }
        .av2-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px clamp(10px, 2vw, 16px);
          border-radius: 100px;
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.4vw, 12px);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .av2-badge--gold {
          background: rgba(245, 197, 66, 0.1);
          color: #f5c542;
          border: 1px solid rgba(245, 197, 66, 0.18);
        }
        .av2-badge--gold::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #f5c542;
          animation: av2-blink 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes av2-blink {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(245,197,66,0.4); }
          50%      { opacity: 0.5; box-shadow: 0 0 0 5px rgba(245,197,66,0); }
        }
        .av2-badge--purple {
          background: rgba(124, 58, 237, 0.1);
          color: #a78bfa;
          border: 1px solid rgba(124, 58, 237, 0.15);
        }
        .av2-subtitle {
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.3vw, 12px);
          font-weight: 500;
          color: #c084fc;
          letter-spacing: clamp(0.08em, 0.2vw, 0.16em);
          text-transform: uppercase;
          margin-bottom: clamp(6px, 1vw, 10px);
          opacity: 0;
          animation: av2-fadeUp 0.5s 0.3s ease forwards;
        }
        .av2-title {
          margin-bottom: clamp(10px, 1.5vw, 16px);
          opacity: 0;
          animation: av2-fadeUp 0.5s 0.35s ease forwards;
        }
        .av2-title h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 6vw, 48px);
          font-weight: 800;
          line-height: 1.05;
          color: #f2f0f8;
          letter-spacing: -0.02em;
        }
        .av2-title h1 em {
          font-style: normal;
          background: linear-gradient(135deg, #f5c542 0%, #fde68a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .av2-desc {
          font-family: 'DM Mono', monospace;
          font-size: clamp(12px, 1.8vw, 15px);
          line-height: 1.7;
          color: #c8c2de;
          max-width: 480px;
          margin-bottom: clamp(24px, 4vw, 44px);
          opacity: 0;
          animation: av2-fadeUp 0.5s 0.4s ease forwards;
        }
        .av2-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(6px, 1vw, 10px);
          margin-bottom: clamp(24px, 4vw, 44px);
          opacity: 0;
          animation: av2-fadeUp 0.5s 0.48s ease forwards;
        }
        .av2-feature {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1vw, 10px);
          padding: clamp(8px, 1.5vw, 12px) clamp(10px, 2vw, 16px);
          border-radius: clamp(8px, 1.5vw, 12px);
          background: rgba(124, 58, 237, 0.06);
          border: 1px solid rgba(124, 58, 237, 0.1);
          font-family: 'DM Mono', monospace;
          font-size: clamp(10px, 1.5vw, 13px);
          color: #d4cef0;
          transition: all 0.25s ease;
          cursor: default;
        }
        .av2-feature:hover {
          background: rgba(124, 58, 237, 0.12);
          border-color: rgba(124, 58, 237, 0.22);
          transform: translateY(-1px);
        }
        .av2-feature .ico {
          width: clamp(16px, 2.5vw, 22px);
          height: clamp(16px, 2.5vw, 22px);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: rgba(124, 58, 237, 0.15);
        }
        .av2-feature .ico svg {
          width: clamp(10px, 1.6vw, 14px);
          height: clamp(10px, 1.6vw, 14px);
          color: #a78bfa;
        }
        .av2-callout {
          display: flex;
          align-items: center;
          gap: clamp(10px, 2vw, 16px);
          padding: clamp(12px, 2vw, 18px) clamp(14px, 2.5vw, 22px);
          border-radius: clamp(10px, 2vw, 14px);
          background: linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(245,197,66,0.04) 100%);
          border: 1px solid rgba(124, 58, 237, 0.1);
          margin-bottom: clamp(24px, 4vw, 44px);
          opacity: 0;
          animation: av2-fadeUp 0.5s 0.52s ease forwards;
        }
        .av2-callout-icon {
          width: clamp(32px, 5vw, 44px);
          height: clamp(32px, 5vw, 44px);
          border-radius: clamp(8px, 1.2vw, 12px);
          background: linear-gradient(135deg, #7c3aed, #3b1d7e);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .av2-callout-icon svg {
          width: clamp(16px, 2.5vw, 22px);
          height: clamp(16px, 2.5vw, 22px);
          color: white;
        }
        .av2-callout-text strong {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: clamp(11px, 1.6vw, 14px);
          font-weight: 700;
          color: #f2f0f8;
          margin-bottom: 2px;
          line-height: 1.3;
        }
        .av2-callout-text span {
          font-family: 'DM Mono', monospace;
          font-size: clamp(10px, 1.3vw, 12px);
          color: #c8c2de;
        }
        .av2-actions {
          display: flex;
          gap: clamp(10px, 1.5vw, 16px);
          opacity: 0;
          animation: av2-fadeUp 0.5s 0.6s ease forwards;
        }
        .av2-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: clamp(11px, 2vw, 16px) clamp(14px, 2.5vw, 24px);
          border-radius: clamp(10px, 1.8vw, 14px);
          font-family: 'DM Mono', monospace;
          font-size: clamp(11px, 1.5vw, 14px);
          font-weight: 500;
          border: none;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }
        .av2-btn svg {
          width: clamp(13px, 2vw, 17px);
          height: clamp(13px, 2vw, 17px);
          flex-shrink: 0;
        }
        .av2-btn--primary {
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
          color: white;
          box-shadow: 0 clamp(2px, 0.5vw, 5px) clamp(12px, 3vw, 28px) rgba(124,58,237,0.3), 0 1px 3px rgba(0,0,0,0.2);
        }
        .av2-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 clamp(4px, 1vw, 10px) clamp(16px, 4vw, 36px) rgba(124,58,237,0.45), 0 2px 6px rgba(0,0,0,0.2);
          letter-spacing: 0.03em;
        }
        .av2-btn--primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.06) 100%);
          pointer-events: none;
        }
        .av2-btn--outline {
          background: rgba(124, 58, 237, 0.08);
          color: #a78bfa;
          border: 1px solid rgba(124, 58, 237, 0.18);
        }
        .av2-btn--outline:hover {
          background: rgba(124, 58, 237, 0.16);
          border-color: rgba(124, 58, 237, 0.32);
          transform: translateY(-2px);
        }
        .av2-ribbon {
          text-align: right;
          margin-top: clamp(16px, 2.5vw, 28px);
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.3vw, 11px);
          color: #4a4565;
          opacity: 0;
          animation: av2-fadeUp 0.5s 0.75s ease forwards;
          letter-spacing: 0.04em;
        }
        .av2-ribbon span { color: #b89830; }
        @keyframes av2-fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 375px) {
          .av2-card { padding: 22px 18px 18px; border-radius: 14px; }
          .av2-watermark { font-size: 54px; top: 6px; right: 10px; }
          .av2-title h1 { font-size: 24px; }
          .av2-features { grid-template-columns: 1fr; gap: 6px; }
          .av2-actions { flex-direction: column; gap: 8px; }
          .av2-callout { flex-direction: column; text-align: center; gap: 10px; }
        }
        @media (min-width: 376px) and (max-width: 480px) {
          .av2-features { grid-template-columns: 1fr 1fr; gap: 6px; }
          .av2-actions { flex-direction: column; gap: 10px; }
        }
        @media (min-width: 769px) {
          .av2-card { max-width: 980px; }
        }
        @media (min-width: 1440px) {
          .av2-card { max-width: 1100px; padding: 56px 52px 48px; }
          .av2-title h1 { font-size: 52px; }
          .av2-desc { font-size: 16px; }
        }
      `}</style>

      <div className="relative w-full overflow-hidden rounded-[clamp(16px,3vw,28px)]">
        <img
          src="https://kceggzvolonyqavvowwc.supabase.co/storage/v1/object/public/codoora/ChatGPT%20Image%20Jun%209,%202026,%2002_24_47%20AM.png"
          alt="AgentVerse 2.0 event background"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(178deg, rgba(6, 5, 15, 0.85) 0%, rgba(6, 5, 15, 0.95) 100%)',
          zIndex: 1,
        }} />
        <div className="av2-card" style={{ position: 'relative', zIndex: 2 }}>
          <div className="av2-watermark" style={{ zIndex: 2 }}>2.0</div>

          <div className="av2-badges">
            <span className="av2-badge av2-badge--gold">Open Registration</span>
            <span className="av2-badge av2-badge--purple">Season Two</span>
          </div>

          <div className="av2-subtitle">India's only agent-exclusive AI event</div>

          <div className="av2-title">
            <h1>
              Agent<em>Verse</em> 2.0
            </h1>
          </div>

          <p className="av2-desc">
            Open to all students and colleges — collaborate, compete, and build
            real agents with institutional partnerships.
          </p>

          <div className="av2-features">
            <div className="av2-feature">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/></svg>
              </span>
              Agent-Based Only
            </div>
            <div className="av2-feature">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </span>
              College Collaboration
            </div>
            <div className="av2-feature">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </span>
              Open to All
            </div>
            <div className="av2-feature">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              Institutional Partnership
            </div>
          </div>

          <div className="av2-callout">
            <div className="av2-callout-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M6 20v-4"/><path d="M18 20v-4"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/></svg>
            </div>
            <div className="av2-callout-text">
              <strong>Agents Only — No Traditional Hackathon Categories</strong>
              <span>Build autonomous agents that solve real-world problems</span>
            </div>
          </div>

          <div className="av2-actions">
            <a href="#" className="av2-btn av2-btn--primary">
              Register Your College
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#" className="av2-btn av2-btn--outline">
              View Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </a>
          </div>

          <div className="av2-ribbon" style={{ position: 'relative', zIndex: 2 }}>
            Season Two · <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </>
  );
}
