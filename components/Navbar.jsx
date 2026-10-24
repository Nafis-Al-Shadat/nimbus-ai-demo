"use client";

import { useState } from "react";
import Icon from "./Icon";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="logo">
          <span className="logo__mark" />
          nimbus
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} onClick={() => setOpen(false)}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#pricing" className="btn btn--dark btn--sm">Try it free</a>
          <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? "x" : "menu"} size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
