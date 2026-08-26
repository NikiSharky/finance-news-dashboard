import "./sections.css";
import { content } from "./content.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Concept from "./components/Concept.jsx";
import Menu from "./components/Menu.jsx";
import Ambience from "./components/Ambience.jsx";
import Marquee from "./components/Marquee.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header brand={content.brand} navItems={content.nav} />
      <main>
        <Hero {...content.hero} />
        <Concept {...content.concept} />
        <Menu {...content.menu} />
        <Ambience {...content.ambience} />
        <Marquee facts={content.marqueeFacts} />
        <Cta {...content.cta} />
      </main>
      <Footer brand={content.brand} note={content.footerNote} />
    </>
  );
}
