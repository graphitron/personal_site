import { useEffect, useState } from 'react';

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fades in every `.reveal` element the first time it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
    setTheme(next);
  };

  return { theme, toggle };
}

/** Types out each phrase, pauses, deletes it, then moves to the next. */
export function useTypewriter(phrases: string[]) {
  const [text, setText] = useState(prefersReducedMotion() ? phrases[0] : '');

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let i = 0;
    let len = 0;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const phrase = phrases[i];
      len += deleting ? -1 : 1;
      setText(phrase.slice(0, len));
      let delay = deleting ? 22 : 48;
      if (!deleting && len === phrase.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && len === 0) {
        deleting = false;
        i = (i + 1) % phrases.length;
        delay = 350;
      }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return text;
}
