import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Visuals from './components/Visuals';
import Writing from './components/Writing';
import Contact from './components/Contact';
import { useReveal } from './hooks';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#work">Skip to work</a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Visuals />
        <Writing />
        <Contact />
      </main>
    </>
  );
}
