

const destinations = [
  {
    name: "Italian Riviera",
    country: "ITALY",
    description:
      "Colourful villages, coastal walks and long lunches by the sea.",
    image:
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1000&q=85",
    tag: "Coastal escape",
  },
  {
    name: "Alpine Escape",
    country: "SWITZERLAND",
    description:
      "Mountain air, peaceful lakes and trails worth waking up for.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85",
    tag: "Nature & adventure",
  },
  {
    name: "Japan Uncovered",
    country: "JAPAN",
    description:
      "Ancient traditions, vibrant cities and unforgettable food.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
    tag: "Culture & discovery",
  },
  {
    name: "Wild Kenya",
    country: "KENYA",
    description:
      "Golden savannahs, incredible wildlife and open skies.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=85",
    tag: "Wildlife journey",
  },
  {
    name: "Desert Dreaming",
    country: "MOROCCO",
    description:
      "Desert sunsets, winding souks and nights under the stars.",
    image:
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1000&q=85",
    tag: "A different world",
  },
  {
    name: "Island Slowdown",
    country: "GREECE",
    description:
      "Clear blue water, whitewashed villages and slower days.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
    tag: "Island living",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export function Destinations() {
  return (
    <section className="section destinations-section" id="destinations">
      <div className="section-topline">
        <SectionHeading
          eyebrow="THE WORLD IS WAITING"
          title={
            <>
              Somewhere <em>special.</em>
            </>
          }
          description="A few places we're dreaming about right now. Which one is calling you?"
        />

        <span className="section-count">01 — 06</span>
      </div>

      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <a
            className="destination-card"
            href="#plan"
            key={destination.name}
            aria-label={`Plan a trip to ${destination.name}`}
          >
            <div className="destination-image-wrap">
              <img
                className="destination-image"
                src={destination.image}
                alt={destination.name}
                loading="lazy"
              />

              <span className="destination-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="destination-arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="destination-meta">
              <span>{destination.country}</span>
              <span>{destination.tag}</span>
            </div>

            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </a>
        ))}
      </div>

      <div className="destinations-footer">
        <p>Your kind of adventure might be somewhere else entirely.</p>

        <a className="text-link" href="#plan">
          Tell us what you're dreaming of <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}