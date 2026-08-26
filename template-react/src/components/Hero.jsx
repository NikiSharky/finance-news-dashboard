import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 0.8, 0.24, 1] },
  },
};

/**
 * Hero photo is optional: without one, the same layered gradient recipe
 * as the static template is used. Pass `photo` (a URL or data: URI) once
 * a real client photo is available — the slow Ken Burns zoom activates
 * automatically.
 */
export default function Hero({ eyebrow, titleLines, subtitle, photo }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-bg"
        style={
          photo
            ? {
                backgroundImage: `linear-gradient(100deg, rgba(15,12,8,.95) 0%, rgba(17,14,9,.82) 32%, rgba(17,14,9,.4) 62%, rgba(17,14,9,.15) 85%), radial-gradient(120% 90% at 50% 112%, rgba(201,162,39,.30), transparent 60%), radial-gradient(70% 50% at 82% 8%, rgba(92,110,82,.22), transparent 65%), linear-gradient(180deg, rgba(16,13,9,.45) 0%, rgba(20,16,11,.68) 55%, rgba(23,18,12,.92) 100%), url(${photo})`,
              }
            : undefined
        }
        initial={reduceMotion ? false : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: [0.16, 0.8, 0.24, 1] }}
      />
      <svg className="hero-grain" width="100%" height="100%" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" opacity="0.05" />
      </svg>
      <div className="container hero-inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={item}>
            {eyebrow}
          </motion.span>
          <motion.h1 variants={item}>
            {titleLines[0]}
            <br />
            <i>{titleLines[1]}</i>
          </motion.h1>
          <motion.p className="hero-sub" variants={item}>
            {subtitle}
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <motion.a
              href="#reservieren"
              className="btn btn-primary"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Tisch reservieren
            </motion.a>
            <motion.a
              href="#speisekarte"
              className="btn btn-ghost"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Speisekarte ansehen
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <div className="scroll-cue">
        <span>Scrollen</span>
        <motion.span
          className="line"
          animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
          transition={reduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
