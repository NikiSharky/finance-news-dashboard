import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function Ambience({ eyebrow = "Ambiente", title, intro, cards }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ambiente">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{intro}</p>
        </Reveal>
        <div className="ambience-grid">
          {cards.map((card, i) => (
            <Reveal as="div" key={card.title} delay={i * 0.09}>
              <motion.div
                className="amb-card"
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.35 }}
              >
                {card.photo ? (
                  <img className="amb-photo" src={card.photo} alt="" />
                ) : (
                  <div className="amb-photo-placeholder">Foto hier einsetzen</div>
                )}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
