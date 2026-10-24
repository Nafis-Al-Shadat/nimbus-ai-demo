"use client";

import { useState } from "react";
import Icon from "./Icon";

const YEARLY_DISCOUNT = 0.2;

const plans = [
  { name: "Free", monthly: 0, blurb: "Try it on real meetings.", features: ["10 meetings a month", "Summaries & action items", "7-day history"], cta: "Start free" },
  { name: "Pro", monthly: 15, blurb: "For people who live in meetings.", features: ["Unlimited meetings", "Search across all calls", "Slack & Notion sharing", "30+ languages"], cta: "Start 14-day trial", featured: true },
  { name: "Team", monthly: 29, blurb: "Shared notes for the whole team.", features: ["Everything in Pro", "Shared workspace", "Admin controls", "Priority support"], cta: "Talk to us" },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  const price = (monthly) => (yearly ? Math.round(monthly * (1 - YEARLY_DISCOUNT)) : monthly);

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Pricing</p>
          <h2>Simple plans. <em>Cancel anytime.</em></h2>
          <div className="toggle" role="group" aria-label="Billing period">
            <button className={!yearly ? "is-active" : ""} onClick={() => setYearly(false)}>Monthly</button>
            <button className={yearly ? "is-active" : ""} onClick={() => setYearly(true)}>
              Yearly <span className="save">−20%</span>
            </button>
          </div>
        </div>

        <div className="plans">
          {plans.map((p) => (
            <article key={p.name} className={`plan ${p.featured ? "plan--featured" : ""}`}>
              {p.featured && <span className="plan__tag">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="plan__blurb">{p.blurb}</p>
              <p className="plan__price">
                ${price(p.monthly)}
                <small>/user/month</small>
              </p>
              <p className="plan__billing">{p.monthly === 0 ? "Free forever" : yearly ? `Billed yearly ($${price(p.monthly) * 12})` : "Billed monthly"}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}><Icon name="check" size={16} />{f}</li>
                ))}
              </ul>
              <a href="#top" className={`btn ${p.featured ? "btn--dark" : "btn--ghost"}`}>{p.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
