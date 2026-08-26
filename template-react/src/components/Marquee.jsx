export default function Marquee({ facts }) {
  const looped = [...facts, ...facts];

  return (
    <section className="quotes">
      <div className="marquee">
        <div className="marquee-track">
          {looped.map((fact, i) => (
            <div className="quote" key={i}>
              {fact}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
