# Basis-Vorlage (React + Framer Motion)

React/Vite-Version der Basis-Vorlage aus `demos/_template/`, mit
[Framer Motion](https://www.framer.com/motion/) für Scroll-Reveals,
den Menü-Tab-Übergang und Micro-Interactions (Button-Hover, animierter
Tab-Indikator per `layoutId`).

**Wichtig:** Anders als die statische Vorlage in `demos/_template/` läuft
das hier nicht als einzelne Datei — es braucht Node/npm und einen
Build-Schritt. Interaktionen (Tabs, Hover) funktionieren nur mit
JavaScript. Für schnelle Akquise-Demos (Datei per Mail/Chat verschicken,
in jedem Kontext lauffähig) bleibt `demos/_template/` die bessere Wahl.
Diese React-Version eignet sich für die **echte Kunden-Website**, sobald
ein Auftrag zustande gekommen ist.

## Struktur

- `src/content.js` — alle Texte/Daten an einer Stelle, `[eckige Klammern]`
  markieren Platzhalter. Für einen neuen Betrieb: nur diese Datei anpassen.
- `src/components/` — je eine Komponente pro Sektion (Hero, Concept,
  Menu, Ambience, Marquee, Cta, Footer) plus `Reveal.jsx` als
  wiederverwendbarer Scroll-Reveal-Wrapper.
- `src/sections.css` — Layout/Optik, identisch zur statischen Vorlage.

## Verwenden

```bash
npm install
npm run dev       # lokaler Dev-Server mit Hot Reload
npm run build     # Produktions-Build nach dist/
npm run preview   # Build lokal testen
```

Fotos einbinden: `photo`-Feld in `src/content.js` auf eine Bild-URL oder
ein importiertes Asset setzen (z. B. `import hero from "./assets/hero.jpg"`).
Ohne Foto zeigt jede Sektion einen dezenten Platzhalter.
