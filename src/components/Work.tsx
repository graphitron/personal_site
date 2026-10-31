import { useEffect, useState } from 'react';
import { CASE_STUDIES, type CaseStudy } from '../data';
import { prefersReducedMotion } from '../hooks';
import SectionHead from './SectionHead';
import { ArrowUpRight } from './Icons';

function Gallery({ study }: { study: CaseStudy }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % study.gallery.length), 4500);
    return () => window.clearInterval(id);
  }, [paused, study.gallery.length]);

  return (
    <div
      className="case__media"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="browser">
        <div className="browser__bar" aria-hidden>
          <i /><i /><i />
          <span>{study.url.replace('https://', '')}</span>
        </div>
        <div className="browser__view">
          {study.gallery.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={i === active ? 'is-active' : ''}
              aria-hidden={i !== active}
            />
          ))}
        </div>
      </div>
      <div className="case__dots" role="tablist" aria-label={`${study.title} screenshots`}>
        {study.gallery.map((img, i) => (
          <button
            key={img.src}
            role="tab"
            aria-selected={i === active}
            aria-label={`Show screenshot ${i + 1}`}
            onClick={() => {
              setActive(i);
              setPaused(true);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead index="01" label="Selected work" title={<>Products I've <em>shaped</em></>} />

        <div className="cases">
          {CASE_STUDIES.map((s, i) => (
            <article key={s.id} className={`case reveal ${i % 2 ? 'case--flip' : ''}`}>
              <Gallery study={s} />

              <div className="case__body">
                <div className="case__top">
                  <span className="mono">0{i + 1}</span>
                  <ul className="tags">
                    {s.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>

                <h3 className="case__title">{s.title}</h3>
                <p className="case__tagline">{s.tagline}</p>
                <p className="case__summary">{s.summary}</p>

                <dl className="case__metrics">
                  {s.metrics.map((m) => (
                    <div key={m.label}>
                      <dd>{m.value}</dd>
                      <dt>{m.label}</dt>
                    </div>
                  ))}
                </dl>

                <p className="case__roles">
                  <span className="mono">My role</span> {s.roles.join(' · ')}
                </p>

                <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Visit {s.title} <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
