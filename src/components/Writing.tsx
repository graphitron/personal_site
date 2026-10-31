import { useRef } from 'react';
import { POSTS, PROFILE } from '../data';
import SectionHead from './SectionHead';
import { ArrowLeft, ArrowRight, ArrowUpRight } from './Icons';

export default function Writing() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section id="writing" className="section section--tint">
      <div className="container">
        <SectionHead
          index="04"
          label="Writing"
          title={<>Notes on design &amp; <em>AI</em></>}
          aside={
            <div className="writing__controls">
              <button className="icon-btn" onClick={() => scroll(-1)} aria-label="Scroll posts left"><ArrowLeft /></button>
              <button className="icon-btn" onClick={() => scroll(1)} aria-label="Scroll posts right"><ArrowRight /></button>
            </div>
          }
        />
        <p className="writing__intro reveal">
          I share carousels on UX, AI and craft on LinkedIn.{' '}
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">
            Follow along <ArrowUpRight />
          </a>
        </p>
      </div>

      <div className="posts" ref={track} tabIndex={0} aria-label="LinkedIn posts">
        {POSTS.map((p) => (
          <a
            key={p.image}
            className="post"
            href={p.url ?? PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={p.image} alt="" loading="lazy" width={720} height={900} />
            <span>{p.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
