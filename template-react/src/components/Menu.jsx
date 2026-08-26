import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

/**
 * tabs: [{ id, label, note, items: [{ name, price, desc, tag }] }]
 */
export default function Menu({ eyebrow = "Speisekarte", title, intro, tabs }) {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active);

  return (
    <section id="speisekarte">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{intro}</p>
        </Reveal>

        <Reveal className="menu-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={tab.id === active}
              className={`menu-tab${tab.id === active ? " active" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.id === active && (
                <motion.span
                  className="menu-tab-bg"
                  layoutId="menu-tab-bg"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
              <span className="menu-tab-label">{tab.label}</span>
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 0.8, 0.24, 1] }}
          >
            {activeTab.items.map((menuItem) => (
              <div className="menu-item" key={menuItem.name}>
                <span className="menu-item-name">{menuItem.name}</span>
                <span className="menu-item-price">{menuItem.price}</span>
                <span className="menu-item-desc">{menuItem.desc}</span>
                {menuItem.tag && <span className="menu-item-tag">{menuItem.tag}</span>}
              </div>
            ))}
            {activeTab.note && <p className="eyebrow" style={{ marginTop: "1.6rem" }}>{activeTab.note}</p>}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
