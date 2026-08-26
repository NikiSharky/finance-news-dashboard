import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper: fades/rises an element in once it enters the
 * viewport. Replaces the old vanilla IntersectionObserver + CSS-class
 * approach from the static template with Framer's built-in whileInView.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  as = "div",
  className,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 0.8, 0.24, 1],
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
