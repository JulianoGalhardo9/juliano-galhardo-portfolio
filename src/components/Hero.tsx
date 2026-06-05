import React, { useEffect, useRef } from "react";
import { stack } from "../data/portfolio";
import "./Hero.css";

const TYPING_STRINGS = [
  "Full Stack Developer",
  "Node.js Engineer",
  "API Architect",
  "TypeScript Fan",
];

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let strIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = TYPING_STRINGS[strIdx];
      const el = typingRef.current;
      if (!el) return;
      if (deleting) {
        el.textContent = current.slice(0, charIdx--);
        if (charIdx < 0) {
          deleting = false;
          strIdx = (strIdx + 1) % TYPING_STRINGS.length;
          charIdx = 0;
          timer = setTimeout(tick, 400);
          return;
        }
      } else {
        el.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? 50 : 80);
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="grid-overlay" />
        <div className="glow-blob glow-1" />
        <div className="glow-blob glow-2" />
      </div>

      <div className="hero-inner">
        <div className="hero-pre mono">
          <span className="pre-prompt">~$</span> whoami
        </div>
        <h1 className="hero-title">
          Juliano <span className="accent-text">Galhardo</span>
        </h1>
        <p className="hero-role mono">
          <span className="role-prefix">{">"}</span>{" "}
          <span ref={typingRef} className="typing-text" />
          <span className="cursor">|</span>
        </p>
        <p className="hero-desc">
          Graduando em Engenharia de Software focado em construir ecossistemas
          backend robustos, APIs de alta performance e soluções prontas para a
          nuvem. Em busca da minha primeira oportunidade de {" "}
          <strong className="highlight">estágio em backend</strong>.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Ver Projetos
          </a>
          <a href="#contact" className="btn-ghost mono">
            ./contact.sh
          </a>
        </div>
        <div className="stack-section">
          <p className="stack-label mono">// tech stack</p>
          <div className="stack-pills">
            {stack.map((s) => (
              <span
                key={s.label}
                className="stack-pill mono"
                style={{ borderColor: s.color + "44", color: s.color }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-code-block">
        <div className="code-window">
          <div className="code-dots">
            <span />
            <span />
            <span />
          </div>
          <pre className="mono code-content">
            <span className="c-comment">{"// developer.ts"}</span>
            {"\n\n"}
            <span className="c-kw">const</span>{" "}
            <span className="c-var">developer</span>{" "}
            <span className="c-op">=</span> {"{\n  "}
            <span className="c-prop">name</span>
            {": "}
            <span className="c-str">"Juliano Galhardo"</span>
            {",\n  "}
            <span className="c-prop">role</span>
            {": "}
            <span className="c-str">"Backend Developer"</span>
            {",\n  "}
            <span className="c-prop">stack</span>
            {": [\n    "}
            <span className="c-str">"C#/.NET"</span>
            {", "}
            <span className="c-str">"Node"</span>
            {",\n    "}
            <span className="c-str">"React"</span>
            {", "}
            <span className="c-str">"AWS"</span>
            {", "}
            <span className="c-str">"SQL"</span>
            {",\n  ],\n  "}
            <span className="c-prop">available</span>
            {": "}
            <span className="c-bool">true</span>
            {",\n}"}
            {"\n\n"}
            <span className="c-fn">console</span>
            <span className="c-op">.</span>
            <span className="c-fn">log</span>
            {"("}
            <span className="c-var">developer</span>
            {"."}
            <span className="c-prop">available</span>
            {"); "}
            <span className="c-comment">{"// → true"}</span>
          </pre>
        </div>
      </div>

      <div className="scroll-hint mono">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
