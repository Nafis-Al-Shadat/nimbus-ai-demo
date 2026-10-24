"use client";

import { useState } from "react";

const steps = [
  {
    tab: "Connect",
    title: "Connect your calendar",
    text: "Sign in with Google or Microsoft. Choose which meetings Nimbus should join: all, internal only, or just the ones you pick.",
    preview: ["Google Calendar connected", "Auto-join: internal meetings", "Skip: 1:1s and interviews"],
  },
  {
    tab: "Meet",
    title: "Just have your meeting",
    text: "Nimbus listens quietly and builds the transcript live. Anyone can pause it with one click.",
    preview: ["Recording · 00:14:32", "4 speakers detected", "Live transcript on"],
  },
  {
    tab: "Share",
    title: "Get the summary instantly",
    text: "Two minutes after the call, everyone gets the summary, decisions and action items wherever they work.",
    preview: ["Sent to #product-team on Slack", "3 action items assigned", "Saved to Notion"],
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="section section--tint" id="how">
      <div className="container how">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Set up in two minutes</h2>
          <div className="tabs" role="tablist">
            {steps.map((s, i) => (
              <button
                key={s.tab}
                role="tab"
                aria-selected={i === active}
                className={`tab ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span>{i + 1}</span>
                {s.tab}
              </button>
            ))}
          </div>
          <h3 className="how__title">{step.title}</h3>
          <p className="how__text">{step.text}</p>
        </div>

        <div className="how__panel" key={active}>
          {step.preview.map((line) => (
            <div key={line} className="how__row">
              <span className="how__dot" />
              {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
