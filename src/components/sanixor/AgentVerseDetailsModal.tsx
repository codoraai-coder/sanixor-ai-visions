import React from "react";

interface Props {
  onClose: () => void;
}

export function AgentVerseDetailsModal({ onClose }: Props) {
  return (
    <div className="av2-overlay" onClick={onClose}>
      <div className="av2-modal" onClick={(e) => e.stopPropagation()}>
        <div className="av2-modal-head">
          <h2>Event Details</h2>
          <button className="av2-modal-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="av2-modal-body">
          <span className="av2-sec-label">A New Chapter Begins</span>
          <p className="av2-sec-text">
            AgentVerse 1.0 lit a spark with 50+ builders. Now we are taking it offline. Into a real room. 
            With real pressure. Real competition. And a real problem that needs a real solution. 
            Forget single-model AI. We are building ecosystems of specialized intelligent agents (Swarms) and MCP Servers.
          </p>

          <span className="av2-sec-label">The Format: Four Acts. One Unforgettable Day.</span>
          {[
            {
              label: "Act I — The Workshop",
              text: "Learn from the people who build this for a living. Deep, no-nonsense workshop on Agentic AI.",
              icon: <><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></>,
            },
            {
              label: "Act II & III — The Problem & Build",
              text: "A real-world problem is placed in front of you. No hints. No templates. Just your thinking, tools, and execution.",
              icon: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/></>,
            },
            {
              label: "Act IV — The Showcase",
              text: "Step up, present your solution to a panel of judges, articulate your thinking, and defend your decisions.",
              icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
            },
          ].map(({ label, text, icon }) => (
            <div className="av2-detail-row" key={label}>
              <div className="av2-detail-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
              </div>
              <div>
                <span className="av2-detail-label">{label}</span>
                <div className="av2-detail-text">{text}</div>
              </div>
            </div>
          ))}

          <span className="av2-sec-label" style={{ marginTop: 20, display: "block" }}>Who Belongs In This Room</span>
          <p className="av2-sec-text">
            Students who want something real in their portfolio. Developers evolving from code to intelligence. 
            Professionals refusing to be left behind.
          </p>

          <span className="av2-sec-label">What You Will Walk Away With</span>
          <p className="av2-sec-text" style={{ marginBottom: 24 }}>
            A working intelligent system you built yourself. Top 3 performers take home exclusive prizes. 
            One outstanding builder walks away with a guaranteed internship into the AI industry.
          </p>

          <span className="av2-sec-label" style={{ display: "block" }}>Partnerships & Collaborations</span>
          <p className="av2-sec-text">
            We are looking for forward-thinking partners to co-host, support, and grow the AgentVerse ecosystem. Contact us directly at <a href="mailto:team@sanixor.space" style={{ color: '#a855f7' }}>team@sanixor.space</a>
          </p>
          <div style={{ display: 'grid', gap: 12, marginBottom: 0 }}>
            <a 
              href="mailto:team@sanixor.space?subject=College%20Collaboration%20-%20AgentVerse%202.0" 
              onClick={(e) => { 
                e.preventDefault(); 
                navigator.clipboard.writeText("team@sanixor.space");
                alert("Email address (team@sanixor.space) copied to clipboard! Opening mail client...");
                window.location.href = "mailto:team@sanixor.space?subject=College%20Collaboration%20-%20AgentVerse%202.0"; 
              }}
              style={{ textDecoration: 'none' }}
            >
              <div className="av2-detail-row" style={{ margin: 0, alignItems: 'center' }}>
                <div className="av2-detail-ico" style={{ width: 36, height: 36 }}>
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16 }}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <div>
                  <span className="av2-detail-label">College Collaboration</span>
                  <div className="av2-detail-text">Co-host an offline Agentic AI workshop and competition on your campus.</div>
                </div>
              </div>
            </a>
            <a 
              href="mailto:team@sanixor.space?subject=Community%20Partnership%20-%20AgentVerse%202.0" 
              onClick={(e) => { 
                e.preventDefault(); 
                navigator.clipboard.writeText("team@sanixor.space");
                alert("Email address (team@sanixor.space) copied to clipboard! Opening mail client...");
                window.location.href = "mailto:team@sanixor.space?subject=Community%20Partnership%20-%20AgentVerse%202.0"; 
              }}
              style={{ textDecoration: 'none' }}
            >
              <div className="av2-detail-row" style={{ margin: 0, alignItems: 'center' }}>
                <div className="av2-detail-ico" style={{ width: 36, height: 36 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16 }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <span className="av2-detail-label">Community Partner</span>
                  <div className="av2-detail-text">For tech clubs and developer communities. Grow this movement with us.</div>
                </div>
              </div>
            </a>
            <a 
              href="mailto:team@sanixor.space?subject=Startup%20Partnership%20-%20AgentVerse%202.0" 
              onClick={(e) => { 
                e.preventDefault(); 
                navigator.clipboard.writeText("team@sanixor.space");
                alert("Email address (team@sanixor.space) copied to clipboard! Opening mail client...");
                window.location.href = "mailto:team@sanixor.space?subject=Startup%20Partnership%20-%20AgentVerse%202.0"; 
              }}
              style={{ textDecoration: 'none' }}
            >
              <div className="av2-detail-row" style={{ margin: 0, alignItems: 'center' }}>
                <div className="av2-detail-ico" style={{ width: 36, height: 36 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16 }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div>
                  <span className="av2-detail-label">Startup Collaboration</span>
                  <div className="av2-detail-text">Sponsor problem statements, hire top builders, and shape the next generation.</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
