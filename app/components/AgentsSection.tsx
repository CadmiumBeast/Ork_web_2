"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Integration",
    heading: "Works where you work",
    description:
      "Multi-Model AI: Orchestrate your agents, channels, and data in one interface with continuous intelligence",
    features: [
      {
        icon: "◇",
        title: "Seamless integrations",
        text: "Connect your channels + data sources (commerce, email/SMS, ads, analytics, CDP)",
      },
      {
        icon: "⚡",
        title: "Fast onboarding",
        text: "Import brand voice, offers, constraints, and KPIs in minutes",
      },
      {
        icon: "▤",
        title: "Clean data layer",
        text: "Standardises events, products, and audiences so decisions stay consistent",
      },
      {
        icon: "⚙",
        title: "No rip and replace",
        text: "Sits on top of your stack and activates through your existing tools",
      },
    ],
  },
  {
    label: "Agents",
    heading: "Always-on execution that ships work daily",
    description:
      "Deploy specialized agents that work 24/7 to optimize every aspect of your marketing campaigns",
    features: [
      {
        icon: "📦",
        title: "Campaign builder agent",
        text: "Turns a goal into segments, offers, creatives, and launch plan",
      },
      {
        icon: "✓",
        title: "Audience agent",
        text: "Builds cohorts, exclusions, and timing rules per lifecycle stage",
      },
      {
        icon: "↻",
        title: "Experiment agent",
        text: "Runs holdouts/A-B tests, promotes winners, retires losers",
      },
      {
        icon: "▥",
        title: "Optimization agent",
        text: "Adjusts timing, frequency, and targeting to hit performance goals",
      },
      {
        icon: "♡",
        title: "24/7-on insights agent",
        text: 'Monitors performance and surfaces plays, risks, and opportunities with the "why"',
      },
    ],
  },
  {
    label: "Intelligence",
    heading: "Category-native intelligence that compounds",
    description:
      "Built-in logic and memory that gets smarter with every campaign you run",
    features: [
      {
        icon: "◎",
        title: "Category models",
        text: "Built-in logic for timing, replenishment, upsell moments, and buyer nuance from day one",
      },
      {
        icon: "▥",
        title: "Compounding ROI",
        text: "Learns what drives conversion, retention, and LTV and systematically lifts performance over time",
      },
      {
        icon: "⚡",
        title: "Compounding efficiency",
        text: "Learns your team's playbooks and preferences so setup time gets easier and faster every campaign",
      },
      {
        icon: "▤",
        title: "Memory layer",
        text: "Keeps context across campaigns so decisions improve instead of resetting every launch",
      },
    ],
  },
];

export default function AgentsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="agents-section" className="bg-white px-[10%] py-16">
      {/* Section header */}
      <div className="mx-auto w-full max-w-5xl text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-5xl">
          AI Agents built for DTC Marketers
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl">
          Orchestrate your entire marketing workflow with intelligent agents that
          learn and adapt
        </p>
      </div>

      {/* Pill tab bar */}
      <div className="mx-auto mt-12 flex w-fit items-center rounded-full bg-gradient-to-r from-[#E0422D] via-[#EB5825] to-[#E86233] p-1 shadow-md">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(index)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeTab === index
                ? "bg-white text-[#E0422D] shadow-sm"
                : "bg-transparent text-white hover:text-white/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mx-auto mt-14 flex w-full max-w-6xl flex-col items-start gap-10 md:flex-row md:gap-16">
        {/* Text column */}
        <div className="flex-1 text-left">
          <h2
            key={`heading-${activeTab}`}
            className="animate-fade-in text-2xl font-extrabold leading-snug text-zinc-900 md:text-4xl"
          >
            {current.heading}
          </h2>

          <p
            key={`desc-${activeTab}`}
            className="animate-fade-in mt-3 max-w-lg text-base leading-relaxed text-zinc-500 md:text-lg"
          >
            {current.description}
          </p>

          <ul
            key={`features-${activeTab}`}
            className="animate-fade-in mt-8 flex flex-col gap-5"
          >
            {current.features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#E0422D]/15 bg-[#E0422D]/5 text-lg text-[#E0422D]">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold leading-snug text-zinc-900">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
                    {feature.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Infographic area */}
        <div className="flex w-full flex-1 items-center justify-center">
          <div
            key={`infographic-${activeTab}`}
            className="animate-fade-in flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-zinc-100/80 text-sm text-zinc-400 shadow-inner"
          >
            {current.label} infographic
          </div>
        </div>
      </div>
    </section>
  );
}