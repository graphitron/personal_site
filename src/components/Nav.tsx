import { useEffect, useState } from 'react';
import { PROFILE } from '../data';
import { useTheme } from '../hooks';
import { Moon, Sun } from './Icons';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#visuals', label: 'Visuals' },
  { href: '#writing', label: 'Writing' },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={`${PROFILE.name} — home`}>
          <span className="nav__mark">J</span>
          <span className="nav__name">{PROFILE.shortName}</span>
        </a>

        <nav aria-label="Primary" className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <a href="#contact" className="btn btn--small btn--solid">Let's talk</a>
        </div>
      </div>
    </header>
  );
}
