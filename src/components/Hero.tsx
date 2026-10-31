import { PROFILE, PROMPTS, yearsOfExperience } from '../data';
import { useTypewriter } from '../hooks';
import { ArrowRight, Download, Send, Sparkle } from './Icons';

const STATS = [
  { value: `${yearsOfExperience()}+`, label: 'years designing AI products' },
  { value: '4×', label: 'daily active users at Ailaysa' },
  { value: '10+', label: 'AI modules shipped' },
  { value: '0 → 1', label: 'Chaireader, idea to launch' },
];

export default function Hero() {
  const typed = useTypewriter(PROMPTS);

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden />
      <div className="container">
        <div className="hero__meta reveal">
          <span>{PROFILE.name}</span>
          <span className="dot" aria-hidden />
          <span>{PROFILE.role}</span>
          {PROFILE.openToWork && (
            <span className="pill pill--live">
              <span className="pulse" aria-hidden />
              Open to new roles
            </span>
          )}
        </div>

        <h1 className="hero__title reveal">
          Designing AI products
          <br />
          that feel <em>human.</em>
        </h1>

        <div className="hero__grid">
          <p className="hero__lede reveal">
            I design clear, calm interfaces for complex AI systems — across B2B SaaS and consumer
            products. Currently shaping multilingual AI at Ailaysa.
          </p>

          <div className="prompt reveal" aria-label="Things I design for">
            <div className="prompt__field">
              <Sparkle className="prompt__spark" />
              <span className="prompt__text">
                {typed}
                <span className="caret" aria-hidden />
              </span>
              <span className="prompt__send" aria-hidden><Send width={16} height={16} /></span>
            </div>
            <div className="prompt__hint">What I design for</div>
          </div>
        </div>

        <div className="hero__ctas reveal">
          <a href="#work" className="btn btn--solid">
            See selected work <ArrowRight />
          </a>
          <a href={PROFILE.resume} className="btn btn--ghost" download>
            Résumé <Download />
          </a>
        </div>

        <dl className="stats reveal">
          {STATS.map((s) => (
            <div key={s.label} className="stats__item">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
