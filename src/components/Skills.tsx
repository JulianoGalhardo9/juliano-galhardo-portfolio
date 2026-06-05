import React, { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";
import "./Skills.css";

const categoryColors: Record<string, string> = {
  frontend: "#6382ff",
  backend: "#34d399",
  database: "#a78bfa",
  tools: "#f87171",
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
};

const Skills: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag mono">// skills</span>
          <h2 className="section-title">Stack & <span className="accent-text">Habilidades</span></h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-meta">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-badge mono" style={{ color: categoryColors[skill.category] }}>
                  {categoryLabels[skill.category]}
                </span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: animated ? `${skill.level}%` : "0%", background: `linear-gradient(90deg, ${categoryColors[skill.category]}, ${categoryColors[skill.category]}88)` }} />
                <span className="skill-pct mono">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;