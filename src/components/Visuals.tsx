import { useCallback, useEffect, useRef, useState } from 'react';
import { VISUALS, type VisualProject } from '../data';
import SectionHead from './SectionHead';
import { ArrowLeft, ArrowRight, Close } from './Icons';

function Lightbox({ project, onClose }: { project: VisualProject; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  const n = project.images.length;
  const go = useCallback((d: number) => setI((x) => (x + d + n) % n), [n]);

  useEffect(() => {
    ref.current?.showModal();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  return (
    <dialog
      ref={ref}
      className="lightbox"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-label={project.title}
    >
      <div className="lightbox__top">
        <div>
          <strong>{project.title}</strong>
          <span className="mono"> {i + 1} / {n}</span>
        </div>
        <button className="icon-btn" onClick={() => ref.current?.close()} aria-label="Close">
          <Close />
        </button>
      </div>
      <img src={project.images[i]} alt={`${project.title} — image ${i + 1} of ${n}`} />
      {n > 1 && (
        <div className="lightbox__nav">
          <button className="icon-btn" onClick={() => go(-1)} aria-label="Previous image"><ArrowLeft /></button>
          <button className="icon-btn" onClick={() => go(1)} aria-label="Next image"><ArrowRight /></button>
        </div>
      )}
    </dialog>
  );
}

export default function Visuals() {
  const [open, setOpen] = useState<VisualProject | null>(null);

  return (
    <section id="visuals" className="section">
      <div className="container">
        <SectionHead
          index="03"
          label="Visual design"
          title={<>Brand, print &amp; <em>story</em></>}
        />

        <div className="visuals">
          {VISUALS.map((v) => (
            <button
              key={v.id}
              className={`visual reveal visual--${v.ratio}`}
              onClick={() => setOpen(v)}
              aria-label={`Open ${v.title} gallery`}
            >
              <div className="visual__img">
                <img src={v.images[0]} alt="" loading="lazy" />
                <span className="visual__count mono">{v.images.length} images</span>
              </div>
              <div className="visual__cap">
                <span className="visual__title">{v.title}</span>
                <span className="visual__kind">{v.kind} · {v.tools.join(', ')}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && <Lightbox project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
