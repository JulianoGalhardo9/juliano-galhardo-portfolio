import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    if (!/\S+@\S+\.\S+/.test(form.email)) { setStatus("error"); return; }
    setStatus("sending");
    setTimeout(() => { setStatus("done"); setForm({ name: "", email: "", message: "" }); }, 900);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag mono">// contact</span>
          <h2 className="section-title">Vamos <span className="accent-text">Conversar?</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-desc">Estou disponível para projetos freelance, oportunidades de emprego ou apenas para bater um papo sobre tecnologia. Manda uma mensagem!</p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="ci-label mono">// github</span>
                <a href="https://github.com/JulianoGalhardo9" target="_blank" rel="noreferrer" className="ci-value">github.com/JulianoGalhardo9</a>
              </div>
              <div className="contact-item">
                <span className="ci-label mono">// linkedin</span>
                <a href="https://www.linkedin.com/in/juliano-galhardo-de-oliveira-5b05a035a/" target="_blank" rel="noreferrer" className="ci-value">linkedin.com/in/juliano-galhardo</a>
              </div>
              <div className="contact-item">
                <span className="ci-label mono">// status</span>
                <span className="ci-value available"><span className="status-dot" /> Disponível para oportunidades</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="mono" htmlFor="name">nome *</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label className="mono" htmlFor="email">email *</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" />
            </div>
            <div className="form-group">
              <label className="mono" htmlFor="message">mensagem *</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Olá! Gostaria de..." />
            </div>
            {status === "error" && <p className="form-msg error mono">// erro: email inválido</p>}
            {status === "done" && <p className="form-msg success mono">// mensagem enviada com sucesso!</p>}
            <button type="submit" className="btn-submit mono" disabled={status === "sending"}>
              {status === "sending" ? "enviando..." : "> enviar_mensagem()"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;