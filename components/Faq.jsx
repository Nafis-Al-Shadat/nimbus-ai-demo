"use client";

import { useState } from "react";
import Icon from "./Icon";

const faqs = [
  { q: "Do other people in the call know Nimbus is recording?", a: "Yes. Nimbus announces itself when it joins and shows as a participant, and anyone can pause it." },
  { q: "Which meeting apps does it work with?", a: "Zoom, Google Meet and Microsoft Teams. You can also upload a recording from anywhere else." },
  { q: "How accurate are the summaries?", a: "Very good for clear audio. You can edit any summary before it's shared, and Nimbus learns your team's names and terms." },
  { q: "Can I cancel anytime?", a: "Yes. Plans are month-to-month or yearly, and you keep access until the end of your billing period." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--tint" id="faq">
      <div className="container faq">
        <div className="section__head">
          <p className="eyebrow">FAQ</p>
          <h2>Questions, answered</h2>
        </div>
        {faqs.map((f, i) => (
          <div key={f.q} className={`faq__item ${open === i ? "is-open" : ""}`}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}
              <Icon name="plus" size={20} />
            </button>
            <div className="faq__answer"><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
