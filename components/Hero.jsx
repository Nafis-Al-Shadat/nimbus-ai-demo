"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

// The summary "types itself" to show what the product does, without a video or GIF.
const summary = "Team agreed to move the launch to 12 March. Priya owns the pricing page; Tom will confirm the beta list by Friday.";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(summary);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(summary.slice(0, i));
      if (i >= summary.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="pill"><span className="pill__dot" /> New: summaries in 30+ languages</p>
          <h1>
            Your meetings, <em>already</em> written up.
          </h1>
          <p className="lead">
            Nimbus joins your calls, takes the notes and sends everyone a clear summary with decisions and action items, so
            you can actually pay attention.
          </p>
          <div className="hero__cta">
            <a href="#pricing" className="btn btn--dark">Start free <Icon name="arrow" size={18} /></a>
            <a href="#how" className="btn btn--ghost">See how it works</a>
          </div>
          <p className="hero__note">Works with Zoom, Google Meet and Microsoft Teams</p>
        </div>

        <div className="mock" aria-label="Example meeting summary">
          <div className="mock__bar">
            <span /><span /><span />
            <p>Weekly product sync · 32 min</p>
          </div>
          <div className="mock__body">
            <div className="mock__live">
              <span className="mock__rec" /> Listening
              <div className="wave" aria-hidden="true">
                {Array.from({ length: 18 }).map((_, i) => (
                  <i key={i} style={{ animationDelay: `${(i % 6) * 0.12}s` }} />
                ))}
              </div>
            </div>
            <h3>Summary</h3>
            <p className="mock__summary">
              {typed}
              <span className="caret" />
            </p>
            <h3>Action items</h3>
            <ul className="mock__tasks">
              <li><span className="tick"><Icon name="check" size={14} /></span>Update pricing page <em>Priya · Wed</em></li>
              <li><span className="tick"><Icon name="check" size={14} /></span>Confirm beta testers <em>Tom · Fri</em></li>
              <li><span className="tick tick--empty" />Share launch plan with sales <em>You · Mon</em></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
