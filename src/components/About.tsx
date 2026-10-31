import { CAPABILITIES, EXPERIENCE, TOOLS, yearsOfExperience } from '../data';
import SectionHead from './SectionHead';

export default function About() {
  return (
    <section id="about" className="section section--tint">
      <div className="container">
        <SectionHead index="02" label="About" title={<>Structured thinking, <em>human</em> outcomes</>} />

        <div className="about">
          <div className="about__story reveal">
            <p className="about__lead">
              I'm a product designer with {yearsOfExperience()}+ years of experience creating
              AI-driven digital products.
            </p>
            <p>
              My work blends structured thinking, simple interfaces and deeply human interaction
              patterns — across SaaS (B2B) and consumer (B2C) experiences.
            </p>
            <p>
              From helping scale Ailaysa to 9k+ users, to building Chaireader from zero to
              enterprise white-labels, I care about design that shows up in the numbers.
            </p>
          </div>

          <div className="about__side reveal">
            <h3 className="mini-title">What I do</h3>
            <ul className="chips">
              {CAPABILITIES.map((c) => <li key={c}>{c}</li>)}
            </ul>

            <h3 className="mini-title">Daily tools</h3>
            <ul className="tools">
              {TOOLS.map((t) => (
                <li key={t.name}>
                  <img src={t.icon} alt="" width={28} height={28} loading="lazy" />
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="experience reveal">
          <h3 className="mini-title">Experience</h3>
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="exp">
              <img src={e.logo} alt="" className="exp__logo" width={48} height={48} />
              <div className="exp__main">
                <div className="exp__head">
                  <h4>{e.role} <span>· {e.company}</span></h4>
                  <span className="mono">{e.period}</span>
                </div>
                <p className="exp__meta">{e.meta}</p>
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
