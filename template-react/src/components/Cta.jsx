import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function Cta({ title, text, phone, phoneHref, address, hours, kitchen, photo }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="reservieren">
      <div className="container">
        <Reveal
          className="cta"
          style={
            photo
              ? {
                  backgroundImage: `radial-gradient(90% 140% at 15% 0%, rgba(201,162,39,.30), transparent 60%), linear-gradient(150deg, rgba(36,29,21,.88), rgba(23,19,14,.94) 70%), url(${photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 30%",
                }
              : undefined
          }
        >
          <div>
            <span className="eyebrow">Tisch reservieren</span>
            <h2 style={{ marginTop: ".6rem" }}>{title}</h2>
            <p>{text}</p>
            <div className="hero-actions" style={{ marginTop: "2rem" }}>
              <motion.a
                href={phoneHref}
                className="btn btn-primary"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              >
                {phone}
              </motion.a>
              <motion.a
                href="#top"
                className="btn btn-ghost"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              >
                Zurück nach oben
              </motion.a>
            </div>
          </div>
          <div className="cta-info">
            <div>
              <b>Adresse</b>
              <span>{address}</span>
            </div>
            <div>
              <b>Öffnungszeiten</b>
              <span>{hours}</span>
            </div>
            <div>
              <b>Küche</b>
              <span>{kitchen}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
