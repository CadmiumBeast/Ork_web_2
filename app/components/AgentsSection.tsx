"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Integration",
    heading: "Works where you work",
    description: "Connect every channel, data source, and tool in one place — so your agents always have the full picture.",
    features: [
      { icon: "◇", title: "Seamless integrations", text: "Connect commerce, email/SMS, ads, analytics, and CDP in minutes" },
      { icon: "⚡", title: "Fast onboarding", text: "Import brand voice, offers, constraints, and KPIs in minutes" },
      { icon: "▤", title: "Clean data layer", text: "Standardises events, products, and audiences so decisions stay consistent" },
      { icon: "⚙", title: "No rip and replace", text: "Sits on top of your stack and activates through your existing tools" },
    ],
  },
  {
    label: "Agents",
    heading: "Always-on execution, every day",
    description: "Specialized agents that plan, test, optimize, and report — while your team focuses on strategy.",
    features: [
      { icon: "◈", title: "Campaign builder agent", text: "Turns a goal into segments, offers, creatives, and launch plan" },
      { icon: "⊕", title: "Audience agent", text: "Builds cohorts, exclusions, and timing rules per lifecycle stage" },
      { icon: "↻", title: "Experiment agent", text: "Runs holdouts/A-B tests, promotes winners, retires losers" },
      { icon: "▥", title: "Optimization agent", text: "Adjusts timing, frequency, and targeting to hit performance goals" },
      { icon: "◉", title: "Insights agent", text: 'Monitors performance and surfaces plays, risks, and opportunities with the "why"' },
    ],
  },
  {
    label: "Intelligence",
    heading: "Intelligence that compounds",
    description: "Category-native logic and persistent memory that gets meaningfully smarter with every campaign you run.",
    features: [
      { icon: "◎", title: "Category models", text: "Built-in logic for timing, replenishment, upsell moments from day one" },
      { icon: "▥", title: "Compounding ROI", text: "Learns what drives conversion, retention, and LTV over time" },
      { icon: "⚡", title: "Compounding efficiency", text: "Learns your playbooks so setup gets faster every campaign" },
      { icon: "▤", title: "Memory layer", text: "Keeps context across campaigns so decisions improve instead of resetting" },
    ],
  },
];

// ── Blobs ─────────────────────────────────────────────────────────────────────
function Blob({ style }: { style: React.CSSProperties }) {
  return (
    <div style={{
      position: "absolute", borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
      filter: "blur(48px)", pointerEvents: "none", zIndex: 0, ...style,
    }} />
  );
}

// ── Integration Diagram ───────────────────────────────────────────────────────
function IntegrationDiagram() {
  const hub = { x: 195, y: 155 };
  const R = 112;
  const sources = [
    { label: "Commerce",    angle: -100 },
    { label: "Email / SMS", angle:  -30 },
    { label: "Analytics",   angle:   40 },
    { label: "CDP",         angle:  110 },
    { label: "Ads",         angle:  180 },
  ];

  return (
    <svg viewBox="0 0 390 310" style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <defs>
        <radialGradient id="wo-hub-glow" cx="50%" cy="50%">
          <stop offset="0%"   stopColor="#E86233" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#E86233" stopOpacity="0" />
        </radialGradient>
        <filter id="wo-soft">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {sources.map((s, i) => {
        const sx = hub.x + R * Math.cos((s.angle * Math.PI) / 180);
        const sy = hub.y + R * Math.sin((s.angle * Math.PI) / 180);
        const mx = (hub.x + sx) / 2 + (i % 2 === 0 ? 12 : -12);
        const my = (hub.y + sy) / 2;
        return (
          <g key={i}>
            <path d={`M${sx},${sy} Q${mx},${my} ${hub.x},${hub.y}`}
              fill="none" stroke="#E0422D" strokeWidth="1.5" strokeOpacity="0.18"
              strokeDasharray="5 5" />
            <circle r="4" fill="#E86233" opacity="0.85">
              <animateMotion dur={`${2.0 + i * 0.3}s`} repeatCount="indefinite"
                path={`M${sx},${sy} Q${mx},${my} ${hub.x},${hub.y}`} />
            </circle>

            <rect x={sx - 44} y={sy - 16} width={88} height={32} rx={16}
              fill="#FFF4EE" stroke="#E0422D" strokeOpacity="0.28" strokeWidth="1.2" />
            <text x={sx} y={sy + 5.5} textAnchor="middle"
              fill="#B04020" fontSize="10.5" fontWeight="700">
              {s.label}
            </text>
          </g>
        );
      })}

      <circle cx={hub.x} cy={hub.y} r={90} fill="url(#wo-hub-glow)" />
      <circle cx={hub.x} cy={hub.y} r={74} fill="none" stroke="#E0422D" strokeWidth="1" strokeOpacity="0.1">
        <animate attributeName="r" values="70;80;70" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.1;0;0.1" dur="3.2s" repeatCount="indefinite" />
      </circle>

      <circle cx={hub.x} cy={hub.y} r={54} fill="#FFF4EE" stroke="#E0422D" strokeWidth="2" strokeOpacity="0.45">
        <animate attributeName="r" values="52;56;52" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <text x={hub.x} y={hub.y - 7}  textAnchor="middle" fill="#E0422D" fontSize="14" fontWeight="800">AI</text>
      <text x={hub.x} y={hub.y + 11} textAnchor="middle" fill="#E0422D" fontSize="14" fontWeight="800">HUB</text>
    </svg>
  );
}

// ── Agents Diagram ────────────────────────────────────────────────────────────
function AgentsDiagram() {
  const gx = 158, gy = 18;
  const agents = [
    { label: "Campaign",    x: 14,  y: 110 },
    { label: "Audience",    x: 132, y: 110 },
    { label: "Experiment",  x: 250, y: 110 },
    { label: "Optimize",    x: 73,  y: 215 },
    { label: "Insights",    x: 191, y: 215 },
  ];

  return (
    <svg viewBox="0 0 360 295" style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <defs>
        <filter id="wo-card-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#E0422D" floodOpacity="0.12" />
        </filter>
      </defs>

      {agents.map((a, i) => {
        const sx = gx + 46, sy = gy + 19;
        const tx = a.x + 50, ty = a.y + 8;
        const mx = (sx + tx) / 2, my = (sy + ty) / 2 - 24;
        return (
          <g key={i}>
            <path d={`M${sx},${sy} Q${mx},${my} ${tx},${ty}`}
              fill="none" stroke="#E0422D" strokeWidth="1.4" strokeOpacity="0.2" strokeDasharray="4 4" />
            <circle r="3.5" fill="#E86233">
              <animateMotion dur={`${2.2 + i * 0.28}s`} repeatCount="indefinite"
                path={`M${sx},${sy} Q${mx},${my} ${tx},${ty}`} />
            </circle>
          </g>
        );
      })}

      {/* Goal */}
      <rect x={gx} y={gy} width={92} height={38} rx={19} fill="#E0422D" filter="url(#wo-card-shadow)" />
      <text x={gx + 46} y={gy + 24} textAnchor="middle"
        fill="white" fontSize="14" fontWeight="800">GOAL</text>

      {agents.map((a, i) => (
        <g key={`ac${i}`} filter="url(#wo-card-shadow)">
          <rect x={a.x} y={a.y} width={100} height={58} rx={18}
            fill="#FFF4EE" stroke="#E0422D" strokeOpacity="0.32" strokeWidth="1.5" />
          <circle cx={a.x + 88} cy={a.y + 13} r={4.5} fill="#4ade80">
            <animate attributeName="opacity" values="1;0.2;1" dur={`${1.1 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
          <text x={a.x + 50} y={a.y + 31} textAnchor="middle"
            fill="#B04020" fontSize="10" fontWeight="700">{a.label}</text>
          <text x={a.x + 50} y={a.y + 45} textAnchor="middle"
            fill="#E0422D" fontSize="8.5" opacity="0.55">Agent ●</text>
        </g>
      ))}
    </svg>
  );
}

// ── Intelligence Diagram ──────────────────────────────────────────────────────
function IntelligenceDiagram() {
  const cx = 185, cy = 150, r = 102;
  const nodes = [
    { label: "Campaign", angle: -90 },
    { label: "Data",     angle:   0 },
    { label: "Learning", angle:  90 },
    { label: "Results",  angle: 180 },
  ];
  const pt = (deg: number) => ({
    x: cx + r * Math.cos((deg * Math.PI) / 180),
    y: cy + r * Math.sin((deg * Math.PI) / 180),
  });
  const arcPath = `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r}`;

  return (
    <svg viewBox="0 0 370 300" style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <defs>
        <radialGradient id="wo-il-glow" cx="50%" cy="50%">
          <stop offset="0%"   stopColor="#E86233" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E86233" stopOpacity="0" />
        </radialGradient>
        <filter id="wo-il-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#E0422D" floodOpacity="0.14" />
        </filter>
      </defs>

      <circle cx={cx} cy={cy} r={70} fill="url(#wo-il-glow)" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#E0422D" strokeWidth="1.5" strokeOpacity="0.18"
        strokeDasharray="6 5" />

      {/* Orbiting dots */}
      {[{ dur: "5s", begin: "0s" }, { dur: "5s", begin: "-2.5s" }].map((d, i) => (
        <circle key={i} r={i === 0 ? 5 : 3.5} fill="#E86233" opacity={i === 0 ? 0.9 : 0.4}>
          <animateMotion dur={d.dur} begin={d.begin} repeatCount="indefinite" path={arcPath} />
        </circle>
      ))}

      {/* Spoke lines */}
      {nodes.map((n, i) => {
        const p = pt(n.angle);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y}
          stroke="#E0422D" strokeWidth="1" strokeOpacity="0.08" />;
      })}

      {/* Center card */}
      <rect x={cx - 38} y={cy - 36} width={76} height={72} rx={20}
        fill="#FFF4EE" stroke="#E0422D" strokeOpacity="0.35" strokeWidth="1.5"
        filter="url(#wo-il-shadow)" />
      <text x={cx} y={cy - 14} textAnchor="middle"
        fill="#B04020" fontSize="8" fontWeight="700" letterSpacing="0.06em">
        ROI ↑
      </text>
      {[13, 20, 30].map((bh, i) => (
        <rect key={i}
          x={cx - 17 + i * 13} y={cy + 22 - bh} width={9} height={bh} rx={4}
          fill="#E0422D" opacity={0.3 + i * 0.25}>
          <animate attributeName="height" values={`${bh};${bh + 8};${bh}`} dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="y" values={`${cy + 22 - bh};${cy + 22 - bh - 8};${cy + 22 - bh}`} dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}

      {/* Node circles */}
      {nodes.map((n, i) => {
        const p = pt(n.angle);
        return (
          <g key={i} filter="url(#wo-il-shadow)">
            <circle cx={p.x} cy={p.y} r={33} fill="#FFF4EE" stroke="#E0422D" strokeOpacity="0.35" strokeWidth="1.5" />
            <text x={p.x} y={p.y + 5} textAnchor="middle"
              fill="#B04020" fontSize="10" fontWeight="700">
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const DIAGRAMS = [IntegrationDiagram, AgentsDiagram, IntelligenceDiagram];

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AgentsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [animKey,   setAnimKey]   = useState(0);

  const current = tabs[activeTab];
  const Diagram = DIAGRAMS[activeTab];

  const handleTab = (i: number) => { setActiveTab(i); setAnimKey(k => k + 1); };

  return (
    <>
      <style>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .wo-rise { animation: riseIn 0.55s cubic-bezier(.22,1,.36,1) both; }
        .wo-fade { animation: fadeIn 0.5s ease both; }
        .d1 { animation-delay: .06s; }
        .d2 { animation-delay: .12s; }
        .d3 { animation-delay: .18s; }
        .d4 { animation-delay: .24s; }
        .d5 { animation-delay: .30s; }
        .d6 { animation-delay: .36s; }

        .wo-tab {
          border: none; cursor: pointer;
          border-radius: 100px; padding: 11px 28px;
          font-size: 13.5px; font-weight: 800;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          letter-spacing: .01em;
          transition: all .25s cubic-bezier(.22,1,.36,1);
        }
        .wo-tab:hover { transform: translateY(-1px); }

        .wo-feature:hover .wo-feature-icon {
          transform: scale(1.08) rotate(-4deg);
          background: #FFDDD0 !important;
        }
        .wo-feature-icon { transition: all .22s ease; }

        .wo-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease;
        }
        .wo-card:hover { transform: translateY(-3px); }
      `}</style>

      <section id="agents-section" style={{
        fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
        background: "#FFFAF6",
        padding: "96px 7%",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background blobs */}
        <Blob style={{ top: "-80px", right: "-80px", width: "420px", height: "380px", background: "radial-gradient(circle, #FFD4C2 0%, #FFEADE 60%, transparent 85%)", opacity: 0.7 }} />
        <Blob style={{ bottom: "-60px", left: "-60px", width: "340px", height: "300px", background: "radial-gradient(circle, #FFE4D6 0%, transparent 75%)", opacity: 0.5 }} />
        <Blob style={{ top: "40%", left: "38%", width: "280px", height: "240px", background: "radial-gradient(circle, #FFF0E8 0%, transparent 70%)", opacity: 0.6 }} />

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 1, marginBottom: "64px" }}>
          <span style={{
            display: "inline-block",
            background: "#FFE8DC",
            color: "#C83820",
            fontSize: "11px", fontWeight: 800,
            letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "6px 18px", borderRadius: "100px",
            marginBottom: "22px",
          }}>
            Platform
          </span>

          <h1 style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: 1.15,
            color: "#2C1208",
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
          }}>
            AI Agents built for 
            <em style={{ fontStyle: "italic", color: "#E0422D" }}> DTC Marketers</em>
          </h1>

          <p style={{
            color: "#8C5A44",
            fontSize: "1.05rem", lineHeight: 1.8,
            maxWidth: "480px", margin: "0 auto",
          }}>
            Orchestrate your entire marketing workflow with intelligent agents
            that learn, adapt, and compound over time.
          </p>
        </div>

        {/* ── Tabs ────────────────────────────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "60px", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "flex", gap: "6px",
            background: "#FFE8DC",
            borderRadius: "100px", padding: "5px",
            boxShadow: "0 4px 24px rgba(200,56,32,.12)",
          }}>
            {tabs.map((tab, i) => (
              <button key={tab.label} className="wo-tab" onClick={() => handleTab(i)} style={{
                background: activeTab === i
                  ? "linear-gradient(135deg, #E0422D 0%, #E86233 100%)"
                  : "transparent",
                color: activeTab === i ? "white" : "#B04020",
                boxShadow: activeTab === i ? "0 4px 20px rgba(200,56,32,.35)" : "none",
              }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Body ────────────────────────────────────────────────────── */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "48px",
          alignItems: "center", maxWidth: "1140px",
          margin: "0 auto", position: "relative", zIndex: 1,
        }}>

          {/* Text */}
          <div key={`t-${activeTab}`} style={{ flex: "1 1 310px", minWidth: 0 }}>
            <h2 className="wo-rise" style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 700, fontStyle: "italic",
              fontSize: "clamp(1.65rem, 2.8vw, 2.4rem)",
              lineHeight: 1.25, color: "#2C1208",
              margin: "0 0 16px", letterSpacing: "-0.01em",
            }}>
              {current.heading}
            </h2>
            <p className="wo-rise d1" style={{
              color: "#8C5A44", fontSize: "1rem",
              lineHeight: 1.8, maxWidth: "400px", marginBottom: "40px",
            }}>
              {current.description}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
              {current.features.map((f, i) => (
                <li key={f.title} className={`wo-rise wo-feature d${i + 2}`}
                  style={{ display: "flex", gap: "14px", alignItems: "flex-start", cursor: "default" }}>
                  <span className="wo-feature-icon" style={{
                    width: "40px", height: "40px", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#FFEADE",
                    borderRadius: "14px",
                    color: "#E0422D", fontSize: "15px",
                    boxShadow: "0 2px 10px rgba(224,66,45,.10)",
                  }}>
                    {f.icon}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                      fontWeight: 800, fontSize: "13.5px",
                      color: "#2C1208", margin: "0 0 3px",
                    }}>
                      {f.title}
                    </p>
                    <p style={{
                      fontSize: "13px", color: "#8C5A44",
                      lineHeight: 1.72, margin: 0,
                    }}>
                      {f.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagram card */}
          <div className="wo-card" style={{
            flex: "1 1 310px", minWidth: 0,
            background: "#FFFAF6",
            borderRadius: "32px",
            padding: "44px 36px",
            minHeight: "460px",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
            boxShadow: "0 20px 72px rgba(200,80,40,.10), 0 4px 20px rgba(200,80,40,.07)",
            border: "1.5px solid rgba(224,66,45,.14)",
          }}>
            {/* Inner blobs */}
            <div style={{
              position: "absolute", top: "-30px", right: "-30px",
              width: "200px", height: "200px",
              background: "radial-gradient(circle, #FFD4C2 0%, transparent 70%)",
              borderRadius: "50%", opacity: 0.7, pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: "-20px", left: "-20px",
              width: "160px", height: "160px",
              background: "radial-gradient(circle, #FFE4D6 0%, transparent 70%)",
              borderRadius: "50%", opacity: 0.5, pointerEvents: "none",
            }} />

            <span style={{
              position: "absolute", top: "22px", left: "28px",
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontSize: "10px", fontWeight: 800,
              color: "#E0422D", opacity: 0.45,
              letterSpacing: "0.14em", textTransform: "uppercase",
            }}>
              {current.label} Flow
            </span>

            <div key={`d-${animKey}`} className="wo-fade"
              style={{ width: "100%", height: "300px", position: "relative", zIndex: 1 }}>
              <Diagram />
            </div>
          </div>
        </div>

    
      </section>
    </>
  );
}