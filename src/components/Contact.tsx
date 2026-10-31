import { useState } from 'react';
import { PROFILE } from '../data';
import { Check, Copy, Download, LinkedIn } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="mono contact__label reveal">05 — Contact</p>
        <h2 className="contact__title reveal">
          Let's build something <em>clear.</em>
        </h2>
        <p className="contact__lede reveal">
          Open to roles in product design, UX/UI and AI-first products.
        </p>

        <div className="contact__email reveal">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <button className="icon-btn" onClick={copy} aria-label="Copy email address">
            {copied ? <Check /> : <Copy />}
          </button>
          <span className="sr-only" aria-live="polite">{copied ? 'Email copied' : ''}</span>
        </div>

        <div className="contact__links reveal">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            <LinkedIn /> LinkedIn
          </a>
          <a href={PROFILE.resume} download className="btn btn--ghost">
            <Download /> Résumé (PDF)
          </a>
        </div>
      </div>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Designed &amp; built by me</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}
