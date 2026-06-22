import { useState, useEffect, useRef } from "react";

const PRODUCTS = [
  {
    id: "hackeval",
    name: "HACKEVAL",
    tagline:
      "AI-powered hackathon evaluation platform that automates judging, scoring, and feedback at scale.",
    category: "AI Platform",
    accent: "#3B82F6",
    video: "/videos/hackeval.gif",
    image:
      "https://kceggzvolonyqavvowwc.supabase.co/storage/v1/object/public/codoora/hackeven%20image.png",
    description:
      "Transform how hackathons are judged. HackEval uses advanced AI agents to evaluate submissions in real-time, providing consistent, unbiased, and detailed feedback to every participant.",
    features: [
      "Real-time automated submission evaluation",
      "Multi-criteria intelligent scoring system",
      "Instant personalized participant feedback",
      "Customizable judging rubrics & weights",
      "Live leaderboards with analytics dashboard",
    ],
    stats: { speed: "50x", accuracy: "98.7%", events: "200+" },
  },
  {
    id: "bitbenchmark",
    name: "BITBENCHMARK",
    tagline:
      "Comprehensive benchmarking suite for evaluating AI models against industry-standard metrics.",
    category: "Analytics",
    accent: "#10B981",
    video: "/videos/bitbenchmark.gif",
    image:
      "https://kceggzvolonyqavvowwc.supabase.co/storage/v1/object/public/codoora/BitBenchmark%20image.png",
    description:
      "Stop guessing which model works best. BitBenchmark runs your AI models through rigorous, standardized tests and gives you clear, actionable performance reports.",
    features: [
      "Standardized cross-model comparison",
      "Performance tracking over time",
      "Cost-efficiency analysis per query",
      "Custom benchmark creation tools",
      "Automated regression detection alerts",
    ],
    stats: { models: "500+", tests: "10K+", latency: "<2s" },
  },
  {
    id: "autodash",
    name: "AUTODASH",
    tagline:
      "Automated CI/CD pipeline intelligence that predicts failures before they happen.",
    category: "DevOps",
    accent: "#F59E0B",
    video: "/videos/autodash.gif",
    image:
      "https://kceggzvolonyqavvowwc.supabase.co/storage/v1/object/public/codoora/AutoDash%20image.png",
    description:
      "Your deployment pipeline, on autopilot. AutoDash monitors every stage of your CI/CD workflow, predicts failures before they occur, and auto-heals common issues.",
    features: [
      "Predictive failure detection with AI",
      "Auto-healing for common pipeline issues",
      "Smart deployment scheduling & rollback",
      "Cross-platform integration hub",
      "Real-time team alert notifications",
    ],
    stats: { uptime: "99.9%", deploys: "50K+", saved: "12h/w" },
  },
  {
    id: "aas",
    path: "/agent-as-a-service",
    name: "AGENT AS A SERVICE",
    tagline:
      "Deploy intelligent AI agents as managed cloud services with enterprise-grade reliability.",
    category: "Infrastructure",
    accent: "#8B5CF6",
    video: "/videos/agent-as-a-service.gif",
    image:
      "https://kceggzvolonyqavvowwc.supabase.co/storage/v1/object/public/codoora/Agent%20as%20a%20Service%20image.png",
    description:
      "Why build AI agents from scratch? AaaS gives you production-ready intelligent agents that run 24/7 in the cloud. Scale up or down instantly based on demand.",
    features: [
      "One-click agent deployment to cloud",
      "Auto-scaling based on traffic load",
      "Built-in memory & context management",
      "Multi-model fallback & redundancy",
      "Usage-based metered billing system",
    ],
    stats: { agents: "1K+", uptime: "99.99%", regions: "12" },
  },
  {
    id: "cas",
    path: "/custom-agent-dev",
    name: "CUSTOMIZED AGENTIC SOLUTIONS",
    tagline:
      "Bespoke AI agent architectures engineered for your unique business challenges.",
    category: "Enterprise",
    accent: "#EC4899",
    video: "/videos/custom-agent.gif",
    image:
      "https://kceggzvolonyqavvowwc.supabase.co/storage/v1/object/public/codoora/Customized%20Agentic%20Solutions%20image.png",
    description:
      "Every business is different. Our team designs, builds, and deploys custom AI agent systems tailored specifically to your workflows, data, and goals.",
    features: [
      "End-to-end custom agent architecture",
      "Deep integration with existing tools",
      "Dedicated solution engineering team",
      "Ongoing optimization & support SLA",
      "White-label & private deployment options",
    ],
    stats: { clients: "50+", roi: "4.2x", weeks: "4-8" },
  },
];

const thicknessLayers = [-1.47, -0.73, 0, 0.73, 1.47];

function ProductDetailModal({
  product,
  onClose,
}: {
  product: (typeof PRODUCTS)[number];
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 400);
  };

  return (
    <div
      className={`modal-backdrop ${visible ? "modal-backdrop-active" : "modal-backdrop-enter"}`}
      style={{ background: "rgba(0,0,0,0.65)" }}
      onClick={handleClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div
        className={`modal-card ${visible ? "modal-card-active" : "modal-card-enter"}`}
        style={{ background: "#0a0a0a" }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        <div className="modal-card-visual">
          <img
            src={product.video}
            alt={product.name}
            className="modal-card-video"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, #0a0a0a 0%, transparent 50%)",
            }}
          />
          <button className="modal-close" onClick={handleClose}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div
            className="animate-in animate-in-1 modal-category"
            style={{
              background: `${product.accent}18`,
              color: product.accent,
              border: `1px solid ${product.accent}30`,
            }}
          >
            {product.category}
          </div>

          <div className="animate-in animate-in-2 modal-title">
            {product.name}
          </div>
          <div className="animate-in animate-in-2 modal-tagline">
            {product.tagline}
          </div>

          <div className="animate-in animate-in-3 modal-stats">
            {Object.entries(product.stats).map(([key, val]) => (
              <div key={key} className="modal-stat">
                <div
                  className="modal-stat-value"
                  style={{ color: product.accent }}
                >
                  {val}
                </div>
                <div className="modal-stat-label">{key}</div>
              </div>
            ))}
          </div>

          <div className="animate-in animate-in-4 modal-section">
            <div className="modal-section-title">Overview</div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.6,
              }}
            >
              {product.description}
            </div>
          </div>

          <div className="animate-in animate-in-5 modal-section">
            <div className="modal-section-title">Key Features</div>
            {product.features.map((f, idx) => (
              <div key={idx} className="modal-feature">
                <div
                  className="modal-feature-dot"
                  style={{ background: product.accent }}
                />
                <div className="modal-feature-text">{f}</div>
              </div>
            ))}
          </div>

          <a
            href={product.path || `/${product.id}`}
            className="animate-in animate-in-5 modal-cta"
            style={{
              background: product.accent,
              color: "white",
              marginTop: "0.5rem",
              textDecoration: "none",
            }}
          >
            Learn More
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1 7H13M13 7L8 2M13 7L8 12"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProductCarousel() {
  const cardCount = PRODUCTS.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameId = useRef(0);
  const progress = useRef(0);
  const targetProgress = useRef(0);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const drag = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    startProgress: 0,
    velocity: 0,
    lastX: 0,
    lastTime: 0,
    hasMoved: false,
    isScrolling: false,
  });
  const [metrics, setMetrics] = useState({ cardW: 336, cardH: 210 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeProduct, setActiveProduct] = useState<
    (typeof PRODUCTS)[number] | null
  >(null);

  useEffect(() => {
    const onMove = (clientX: number) => {
      if (!drag.current.isDragging) return;
      const now = performance.now();
      const dx = clientX - drag.current.lastX;
      const dt = now - drag.current.lastTime;
      if (dt > 0) {
        const rawV = dx / dt;
        drag.current.velocity = drag.current.velocity * 0.85 + rawV * 0.15;
      }
      drag.current.lastX = clientX;
      drag.current.lastTime = now;
      if (Math.abs(clientX - drag.current.startX) > 5) {
        drag.current.hasMoved = true;
      }
      const sensitivity = 0.0018;
      targetProgress.current = drag.current.startProgress - (clientX - drag.current.startX) * sensitivity;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (drag.current.isDragging) {
        e.preventDefault();
        onMove(e.clientX);
      } else {
        const rx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const ry = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        mouse.current.targetX = Math.max(-1, Math.min(1, rx));
        mouse.current.targetY = Math.max(-1, Math.min(1, ry));
      }
    };

    const startDrag = (clientX: number, clientY: number = 0) => {
      drag.current.isDragging = true;
      drag.current.hasMoved = false;
      drag.current.isScrolling = false;
      drag.current.startX = clientX;
      drag.current.startY = clientY;
      drag.current.startProgress = progress.current;
      drag.current.velocity = 0;
      drag.current.lastX = clientX;
      drag.current.lastTime = performance.now();
      document.body.style.cursor = 'grabbing';
    };

    const endDrag = () => {
      if (!drag.current.isDragging) return;
      drag.current.isDragging = false;
      document.body.style.cursor = '';
      targetProgress.current = progress.current - drag.current.velocity * 6;
    };

    const handleMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('.modal-backdrop')) return;
      if ((e.target as HTMLElement).closest('.card-wrapper')) {
        startDrag(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = () => endDrag();
    const handleMouseLeave = () => {
      mouse.current.targetX = 0;
      mouse.current.targetY = 0;
      endDrag();
    };

    const handleWheel = (e: WheelEvent) => {
      if ((e.target as HTMLElement).closest('.modal-backdrop')) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      targetProgress.current += delta * 0.0008;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if ((e.target as HTMLElement).closest('.modal-backdrop')) return;
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if ((e.target as HTMLElement).closest('.modal-backdrop')) return;
      if (!drag.current.isDragging) return;

      const touch = e.touches[0];
      const dx = Math.abs(touch.clientX - drag.current.startX);
      const dy = Math.abs(touch.clientY - drag.current.startY);

      if (!drag.current.hasMoved && !drag.current.isScrolling) {
        if (dy > dx && dy > 5) {
          drag.current.isScrolling = true;
          drag.current.isDragging = false;
          return;
        }
      }

      if (drag.current.isScrolling) return;

      if (e.cancelable) {
        e.preventDefault();
      }
      onMove(touch.clientX);
    };
    const handleTouchEnd = () => endDrag();

    const container = containerRef.current;

    // Global listeners for drag continuation outside the carousel
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Scoped listeners — only respond when interacting inside the carousel
    if (container) {
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("wheel", handleWheel, { passive: true });
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: false });
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsMobile(w < 800);
      let cardW = Math.round(w * 0.16 + 130);
      const heightFactor = Math.min(1.0, Math.max(0.65, h / 850));
      cardW = Math.round(cardW * heightFactor);
      cardW = Math.min(340, Math.max(160, cardW));
      const cardH = Math.round(cardW / 1.6);
      setMetrics({ cardW, cardH });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderLoop = () => {
    if (!drag.current.isDragging) {
      targetProgress.current += 0.004;
      drag.current.velocity *= 0.92;
      if (Math.abs(drag.current.velocity) > 0.0001) {
        targetProgress.current += drag.current.velocity;
      }
      progress.current += (targetProgress.current - progress.current) * 0.2;
    } else {
      progress.current += (targetProgress.current - progress.current) * 0.4;
    }
    mouse.current.x +=
      (mouse.current.targetX - mouse.current.x) * 0.2;
    mouse.current.y +=
      (mouse.current.targetY - mouse.current.y) * 0.2;

    const cards = cardsRefs.current;
    const w = window.innerWidth;
    const { cardW } = metrics;
    const continuousProgress = progress.current;
    const roundedIndex = Math.round(continuousProgress);
    const diffFromRound = continuousProgress - roundedIndex;
    const easedDiff =
      (Math.sign(diffFromRound) *
        Math.pow(Math.abs(diffFromRound) * 2, 1.6)) /
      2;
    const virtualActiveIndex = roundedIndex + easedDiff;

    for (let i = 0; i < cardCount; i++) {
      const card = cards[i];
      if (!card) continue;

      let offset = i - virtualActiveIndex;
      const halfCount = cardCount / 2;
      while (offset > halfCount) offset -= cardCount;
      while (offset < -halfCount) offset += cardCount;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      if (absOffset > 3.0) {
        card.style.visibility = "hidden";
        continue;
      } else {
        card.style.visibility = "visible";
      }

      const gap = 36;
      const peekAmount = -55;
      const D = 1350;
      let x = 0,
        z = 0,
        rot = 0;

      if (absOffset <= 1) {
        const t = absOffset;
        const easedT = t * t * (3 - 2 * t);
        x = sign * (easedT * (cardW + gap));
        z = 400 + easedT * (220 - 400);
        rot = easedT * 132;
      } else if (absOffset <= 2) {
        const t = absOffset - 1;
        const easedT = t * t * (3 - 2 * t);
        const xStart = cardW + gap;
        const zEnd = -60;
        const sEnd = D / (D - zEnd);
        const xEnd = (w / 2 - peekAmount) / sEnd - cardW / 2;
        x = sign * (xStart + easedT * (xEnd - xStart));
        z = 220 + easedT * (-60 - 220);
        rot = 132 + easedT * (175 - 132);
      } else {
        const t = Math.min(absOffset - 2, 1);
        const easedT = t * t * (3 - 2 * t);
        const sEnd2 = D / (D - -60);
        const xEnd2 = (w / 2 - peekAmount) / sEnd2 - cardW / 2;
        const sEnd3 = D / (D - -250);
        const xEnd3 = (w / 2 + 100) / sEnd3 + cardW / 2;
        x = sign * (xEnd2 + easedT * (xEnd3 - xEnd2));
        z = -60 + easedT * (-250 - -60);
        rot = 175 + easedT * (195 - 175);
      }

      const localCardRotation = sign * rot;
      const centerFactor = Math.max(0, 1 - absOffset);
      const totalRotX = -mouse.current.y * 12 * centerFactor;
      const totalRotY =
        localCardRotation + mouse.current.x * 15 * centerFactor;

      card.style.zIndex = Math.round(z).toString();
      card.style.opacity = "1";
      card.style.transform = `translateX(${x.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) rotateZ(-3deg)`;
    }
  };

  useEffect(() => {
    const tick = () => {
      renderLoop();
      frameId.current = requestAnimationFrame(tick);
    };
    frameId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId.current);
  }, [metrics]);

  return (
    <>
      <style>{`
        .carousel-root { position: relative; width: 100%; height: 100%; overflow: hidden; user-select: none; }
        .carousel-perspective { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; pointer-events: none; perspective: 1350px; }
        .carousel-viewport { position: absolute; transform-style: preserve-3d; }
        .card-wrapper { position: absolute; inset: 0; transform-style: preserve-3d; backface-visibility: visible; cursor: grab; pointer-events: auto; outline: none; }
        .card-wrapper:focus-visible { outline: 2px solid #8B5CF6; outline-offset: 10px; border-radius: 20px; }
        .card-wrapper:active { cursor: grabbing; }
        .card-layer { position: absolute; inset: 0; border-radius: 20px; pointer-events: none; overflow: hidden; }
        .card-layer-front { background: rgba(10, 10, 10, 0.4); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); backface-visibility: hidden; }
        .card-layer-back { background: rgba(10, 10, 10, 0.8); backface-visibility: hidden; border-radius: 20px; }
        .card-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 20px; }
        .card-image-fallback { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 20px; }
        .card-front-content { position: absolute; inset: 0; color: white; font-family: 'Inter', sans-serif; z-index: 10; display: flex; flex-direction: column; justify-content: flex-end; }
        
        .card-sheen {
          position: absolute; inset: 0; z-index: 20; mix-blend-mode: overlay; pointer-events: none;
          background: linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 25%, transparent 30%);
          opacity: 0.5;
        }

        @keyframes pulseOpacity {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .modal-backdrop { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: flex-end; justify-content: center; transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .modal-backdrop-enter { opacity: 0; backdrop-filter: blur(0px); }
        .modal-backdrop-active { opacity: 1; backdrop-filter: blur(24px); }
        
        /* Mobile First Modal Base */
        .modal-card { position: relative; width: 100vw; border-radius: 24px 24px 0 0; overflow: hidden; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1); max-height: 92vh; display: flex; flex-direction: column; -webkit-overflow-scrolling: touch; overscroll-behavior-y: contain; }
        .modal-card-enter { transform: translateY(100%); opacity: 0; }
        .modal-card-active { transform: translateY(0); opacity: 1; }
        
        .modal-card-visual { position: relative; width: 100%; aspect-ratio: 16/9; flex-shrink: 0; overflow: hidden; }
        .modal-card-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .modal-close { position: absolute; top: 1rem; right: 1rem; width: 36px; height: 36px; border-radius: 50%; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 50; transition: background 0.2s, transform 0.2s; backdrop-filter: blur(8px); }
        .modal-close:hover { background: rgba(255,255,255,0.15); transform: scale(1.1); }
        
        .modal-body { padding: 1.5rem; overflow-y: auto; flex-grow: 1; }
        .modal-body::-webkit-scrollbar { display: none; }
        .modal-category { display: inline-flex; align-items: center; padding: 0.35rem 0.8rem; border-radius: 999px; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem; }
        .modal-title { font-size: 1.5rem; font-weight: 800; color: white; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 0.5rem; }
        .modal-tagline { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.5; margin-bottom: 1.5rem; }
        
        .modal-section { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 1.25rem; margin-bottom: 1rem; }
        .modal-section-title { font-size: 0.7rem; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; }
        .modal-feature { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.4rem 0; }
        .modal-feature-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .modal-feature-text { font-size: 0.85rem; color: rgba(255,255,255,0.8); line-height: 1.5; }
        
        .modal-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1rem; }
        .modal-stat { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 1rem 0.5rem; text-align: center; }
        .modal-stat-value { font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 700; color: white; }
        .modal-stat-label { font-size: 0.55rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 0.3rem; }
        
        .modal-cta { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 1rem; border-radius: 14px; border: none; font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: transform 0.2s, opacity 0.2s; letter-spacing: 0.02em; margin-top: 1.5rem; }
        .modal-cta:hover { transform: scale(1.02); }
        .modal-cta:active { transform: scale(0.98); }

        /* Desktop Modal Layout */
        @media (min-width: 800px) {
          .modal-backdrop { align-items: center; }
          .modal-card { 
            flex-direction: row;
            border-radius: 24px; 
            max-height: 85vh; 
            width: 94vw; 
            max-width: 1000px; 
          }
          .modal-card-enter { transform: scale(0.85) translateY(40px); opacity: 0; }
          .modal-card-active { transform: scale(1) translateY(0); opacity: 1; }
          
          .modal-card-visual { width: 45%; aspect-ratio: auto; border-right: 1px solid rgba(255,255,255,0.08); }
          .modal-body { width: 55%; padding: 2.5rem; }
          
          .modal-title { font-size: 1.75rem; }
          .modal-tagline { font-size: 0.88rem; margin-bottom: 1.25rem; }
          .modal-section { padding: 1.25rem; margin-bottom: 0.85rem; }
          .modal-stat { padding: 0.9rem 0.75rem; }
          .modal-stat-value { font-size: 1rem; }
        }

        @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 0.4s ease forwards; }
        .animate-in-1 { animation-delay: 0.05s; opacity: 0; }
        .animate-in-2 { animation-delay: 0.1s; opacity: 0; }
        .animate-in-3 { animation-delay: 0.15s; opacity: 0; }
        .animate-in-4 { animation-delay: 0.2s; opacity: 0; }
        .animate-in-5 { animation-delay: 0.25s; opacity: 0; }
      `}</style>

      <div ref={containerRef} className="carousel-root" style={{ height: "520px", background: "var(--background)" }}>
        <div
          className="carousel-perspective"
          style={{ perspective: "1350px" }}
        >
          <div
            className="carousel-viewport"
            style={{ width: metrics.cardW, height: metrics.cardH }}
          >
            {Array.from({ length: cardCount }).map((_, i) => {
              const p = PRODUCTS[i];
              return (
                <div
                  key={i}
                  ref={(el) => {
                    cardsRefs.current[i] = el;
                  }}
                  className="card-wrapper"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveProduct(p);
                    }
                  }}
                  onClick={() => {
                    if (!drag.current.hasMoved) {
                      setActiveProduct(p);
                    }
                  }}
                  style={{
                    width: `${metrics.cardW}px`,
                    height: `${metrics.cardH}px`,
                    visibility: "hidden",
                    opacity: 0,
                  }}
                >
                  {isMobile ? (
                    <div
                      className="card-layer card-layer-front"
                      style={{
                        background: `rgba(5, 5, 5, 0.4)`,
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: `1px solid rgba(255,255,255,0.08)`,
                        borderTop: `2px solid ${p.accent}`,
                        boxShadow: `inset 0 20px 40px -20px ${p.accent}40, 0 10px 30px -10px rgba(0,0,0,0.8)`,
                        overflow: "hidden",
                      }}
                    >
                      {/* Static Image Background for Rich Blur (No GIFs to prevent lag) */}
                      <img
                        src={p.image}
                        alt=""
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          opacity: 0.4,
                          filter: "blur(15px)",
                          transform: "scale(1.2)",
                        }}
                      />
                      
                      {/* Grid Pattern Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
                          backgroundSize: "20px 20px",
                          backgroundPosition: "center",
                          opacity: 0.6,
                          maskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
                          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 90%)"
                        }}
                      />
                      
                      {/* Inner Content Container */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          padding: "1rem 0.8rem 2.2rem 0.8rem",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          zIndex: 10,
                          background: `radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)`
                        }}
                      >
                        {/* High-tech Category Badge */}
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "4px",
                            fontSize: "0.4rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            background: `linear-gradient(90deg, ${p.accent}20, transparent)`,
                            color: p.accent,
                            borderLeft: `2px solid ${p.accent}`,
                            marginBottom: "0.4rem",
                            boxShadow: `0 0 15px ${p.accent}15`,
                          }}
                        >
                          {p.category}
                        </div>

                        {/* Product Name */}
                        <div
                          style={{
                            width: "100%",
                            fontSize: "0.85rem",
                            lineHeight: 1.2,
                            fontWeight: 800,
                            color: "white",
                            letterSpacing: "-0.02em",
                            textShadow: "0 4px 15px rgba(0,0,0,0.9)",
                            marginBottom: "0.3rem",
                            wordBreak: "break-word",
                          }}
                        >
                          {p.name}
                        </div>
                      </div>
                      
                      {/* Bottom "TAP" hint */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                          right: "0",
                          padding: "0.6rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.45rem",
                          color: p.accent,
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          background: `linear-gradient(to top, rgba(0,0,0,0.8), transparent)`,
                          zIndex: 10,
                          animation: "pulseOpacity 2.5s infinite"
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4M12 8h.01" />
                        </svg>
                        EXPLORE
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* FRONT FACE (Holographic Glass) */}
                      <div
                        className="card-layer card-layer-front"
                        style={{
                          transform: `translateZ(0.5px)`,
                          border: `1px solid ${p.accent}70`,
                          boxShadow: `inset 0 0 20px ${p.accent}20, 0 15px 45px -10px ${p.accent}40, inset 0 1px 1px rgba(255,255,255,0.4)`,
                        }}
                      >
                        <img
                          src={p.video}
                          alt={`${p.name} video`}
                          className="card-video"
                          style={{ opacity: 0.65, mixBlendMode: 'lighten' }}
                        />
                        <img
                          src={p.image}
                          alt={`${p.name} product preview`}
                          className="card-image-fallback"
                          style={{ zIndex: 0, opacity: 0.4 }}
                        />
                        
                        {/* Dynamic Sheen overlay to simulate glass reflection */}
                        <div className="card-sheen" />

                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%, ${p.accent}15 100%)`,
                            zIndex: 5,
                          }}
                        />
                        
                        <div
                          className="card-front-content"
                          style={{ padding: "1.5rem", zIndex: 10 }}
                        >
                          {/* Category Badge */}
                          <div
                            style={{
                              position: "absolute",
                              top: "1.2rem",
                              left: "1.2rem",
                              display: "inline-flex",
                              padding: "0.3rem 0.75rem",
                              borderRadius: 999,
                              fontSize: "0.55rem",
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.15em",
                              background: `${p.accent}15`,
                              color: p.accent,
                              border: `1px solid ${p.accent}50`,
                              backdropFilter: "blur(12px)",
                              boxShadow: `0 0 15px ${p.accent}30`
                            }}
                          >
                            {p.category}
                          </div>

                          {/* TAP Pulse Indicator */}
                          <div
                            style={{
                              position: "absolute",
                              top: "1.2rem",
                              right: "1.2rem",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              fontSize: "0.55rem",
                              color: "white",
                              fontWeight: 700,
                              letterSpacing: "0.15em",
                              animation: "pulseOpacity 2.5s ease-in-out infinite"
                            }}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 16v-4M12 8h.01" />
                            </svg>
                            TAP
                          </div>

                          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                            <div
                              style={{
                                fontSize: "1.3rem",
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                lineHeight: 1.1,
                                textShadow: "0 4px 12px rgba(0,0,0,0.9)"
                              }}
                            >
                              {p.name}
                            </div>
                            <div
                              style={{
                                fontSize: "0.65rem",
                                color: "rgba(255,255,255,0.75)",
                                lineHeight: 1.5,
                                maxWidth: "95%",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textShadow: "0 2px 6px rgba(0,0,0,0.9)"
                              }}
                            >
                              {p.tagline}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div
                        className="card-layer card-layer-back"
                        style={{
                          transform: `translateZ(-0.5px) rotateY(180deg)`,
                          border: `1px solid ${p.accent}50`,
                          boxShadow: `inset 0 0 30px rgba(0,0,0,0.8)`
                        }}
                      >
                        <div style={{ position: "absolute", inset: 0, filter: "blur(20px)", transform: "scale(1.2)", pointerEvents: "none" }}>
                          <img src={p.video} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
                        </div>
                        <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.9)", zIndex: 1 }} />
                        
                        <div style={{ position: "absolute", inset: 0, padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 10 }}>
                          <div>
                            <div style={{ fontSize: "0.6rem", fontWeight: 800, color: p.accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
                              {p.category}
                            </div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>
                              {p.name}
                            </div>
                          </div>
                          <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                            {p.description}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {activeProduct && (
          <ProductDetailModal
            product={activeProduct}
            onClose={() => setActiveProduct(null)}
          />
        )}
      </div>
    </>
  );
}
