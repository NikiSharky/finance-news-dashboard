import Reveal from "./Reveal.jsx";

export default function Concept({ eyebrow, title, paragraphs, stats, photo }) {
  return (
    <section id="konzept">
      <div className="container story">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 style={{ marginTop: ".6rem" }}>{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} style={i === 0 ? { marginTop: "1.4rem" } : undefined}>
              {p}
            </p>
          ))}
          <div className="stat-row">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="story-figure" delay={0.1}>
          {photo ? (
            <img src={photo} alt="" />
          ) : (
            <span className="placeholder-label">Foto hier einsetzen</span>
          )}
        </Reveal>
      </div>
    </section>
  );
}
