import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Header({ brand = "[Restaurantname]", navItems }) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      initial={false}
      transition={{ duration: 0.4 }}
    >
      <a href="#top" className="brand">
        {brand}
      </a>
      <nav className="site-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li className="nav-cta-item">
            <a href="#reservieren" className="nav-cta">
              Tisch reservieren
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
