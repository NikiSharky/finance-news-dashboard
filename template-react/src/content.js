// Platzhalter-Inhalte für die Basis-Vorlage. Für einen neuen Betrieb:
// diese Datei kopieren/anpassen — die Komponenten bleiben unverändert.
// [ECKIGE KLAMMERN] = hier echte Kundendaten einsetzen.
// photo-Felder: string (URL oder data:-URI) oder undefined für Platzhalter.

export const content = {
  brand: "[Restaurantname]",

  nav: [
    { href: "#konzept", label: "[Nav-Punkt 1]" },
    { href: "#speisekarte", label: "[Nav-Punkt 2]" },
    { href: "#ambiente", label: "[Nav-Punkt 3]" },
  ],

  hero: {
    eyebrow: "[Kurzbeschreibung · Adresse]",
    titleLines: ["[Zugkräftige Headline,]", "[zweite Zeile kursiv]."],
    subtitle: "[Ein bis zwei Sätze, die das Konzept auf den Punkt bringen.]",
    photo: undefined,
  },

  concept: {
    eyebrow: "[Rubrik]",
    title: "[Konzept-Überschrift.]",
    paragraphs: [
      "[Erster Absatz: was macht den Betrieb aus, nur verifizierte Fakten, keine erfundene Historie.]",
      "[Zweiter Absatz, optional.]",
    ],
    stats: [
      { value: "[X]", label: "[Kennzahl-Label]" },
      { value: "[X]", label: "[Kennzahl-Label]" },
      { value: "[X]", label: "[Kennzahl-Label]" },
    ],
    photo: undefined,
  },

  menu: {
    title: "[Menü-Überschrift.]",
    intro: "[Kurzbeschreibung des Angebots.]",
    tabs: [
      {
        id: "a",
        label: "[Kategorie A]",
        items: [
          { name: "[Gericht]", price: "€ 0,00", desc: "[Beschreibung]" },
          { name: "[Gericht]", price: "€ 0,00", desc: "[Beschreibung]", tag: "[Tag]" },
        ],
      },
      {
        id: "b",
        label: "[Kategorie B]",
        items: [{ name: "[Gericht]", price: "€ 0,00", desc: "[Beschreibung]" }],
      },
      {
        id: "c",
        label: "[Kategorie C]",
        items: [{ name: "[Gericht]", price: "€ 0,00", desc: "[Beschreibung]" }],
      },
    ],
  },

  ambience: {
    title: "[Ambiente-Überschrift.]",
    intro: "[Kurzer Einleitungssatz.]",
    cards: [
      { title: "[Titel]", text: "[Kurzbeschreibung.]", photo: undefined },
      { title: "[Titel]", text: "[Kurzbeschreibung.]", photo: undefined },
      { title: "[Titel]", text: "[Kurzbeschreibung.]", photo: undefined },
    ],
  },

  marqueeFacts: ["[Fakt 1]", "[Fakt 2]", "[Fakt 3]", "[Fakt 4]"],

  cta: {
    title: "[CTA-Überschrift.]",
    text: "[Kurzer Reservierungshinweis.]",
    phone: "[Telefonnummer]",
    phoneHref: "tel:+43000000000",
    address: "[Straße Nr., PLZ Ort]",
    hours: "[Öffnungszeiten]",
    kitchen: "[Kurzhinweis]",
  },

  footerNote:
    "Design-Entwurf für [Restaurantname], [Adresse] — kein offizieller Web-Auftritt, sondern ein unverbindliches Gestaltungsbeispiel. [Foto-Hinweis: Quelle/Erlaubnis der verwendeten Fotos ergänzen.]",
};
