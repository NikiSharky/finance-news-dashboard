# Website-Modernisierungs-Service

Business-Setup für Website-Relaunches an kleine/mittlere Betriebe in der DACH-Region
(Schwerpunkt Graz & Umgebung), die eine veraltete oder gar keine Website haben.

**Preismodell:**
- Einmalig **449,99 €** für den Website-Relaunch
- Optional **34,99 €/Monat** Wartungsabo (Updates, kleine Änderungen, Hosting-Betreuung)

## Inhalt dieses Repos

- [`demos/_template/`](demos/_template/index.html) — **Basis-Vorlage für neue Demos.**
  Enthält das komplette Design-System (dunkle, warme Palette, Scroll-Reveal-Animation,
  Hero-Zoom, Tabs) mit `[eckigen Klammern]` als Platzhaltern statt echten Kundendaten. Für
  einen neuen Betrieb: Datei kopieren, Platzhalter ersetzen, echte Fotos einbauen (siehe
  Kommentare in der Datei). Menü-Tabs laufen über reines CSS (Radio-Buttons statt JS) und
  funktionieren daher auch dort, wo Skripte nicht ausgeführt werden.
- [`demos/gasthof-lindenwirt/`](demos/gasthof-lindenwirt/index.html) — Fertig ausgefülltes
  Beispiel der Basis-Vorlage für die Zielgruppe „Gasthaus/Gasthof" (fiktiver Betrieb, ohne
  echte Kundendaten) — gut zum direkten Zeigen bei der Akquise.
- [`docs/leads-graz.md`](docs/leads-graz.md) — Recherche-Ergebnis zu den aktuellen
  Web-Präsenzen der Graz-Gastro-Lead-Liste, priorisiert nach Akquise-Potenzial.

Alle Demos: reines HTML/CSS/JS, keine Build-Abhängigkeiten — `index.html` einfach im Browser
öffnen oder per Static Hosting deployen. Personalisierte Entwürfe mit echten Fotos/Namen
konkreter Zielbetriebe (z. B. für Kaltakquise) gehören **nicht** in dieses öffentliche Repo,
solange der Betrieb nicht Kunde ist — die werden lokal erstellt und direkt übergeben.

## Nächste Schritte

1. Weitere Demo-Vorlagen für andere Branchen bauen (Frisör/Barber, Physio-Praxis, Handwerk).
2. Akquise-Material (Pitch-E-Mail, Preisblatt, Wartungsvertrag) ausarbeiten.
3. Restliche Lead-Liste (Friseure, Physio, Handwerker) recherchieren.
