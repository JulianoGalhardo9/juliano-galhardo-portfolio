import React, { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-brand">
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">Juliano Galhardo</span>
          <span className="brand-bracket">/&gt;</span>
        </a>
        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link mono" onClick={() => setOpen(false)}>
              <span className="link-num">~</span> {l.label}
            </a>
          ))}
          <a href="https://github.com/JulianoGalhardo9" target="_blank" rel="noreferrer" className="nav-cta">
            GitHub
          </a>
        </nav>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;