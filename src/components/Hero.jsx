export function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero-image"
        role="img"
        aria-label="Sunlit Mediterranean coastline"
      />

      <div className="hero-content">
        <span className="eyebrow hero-eyebrow">
          <span className="eyebrow-line" />
          A LITTLE FURTHER, A LITTLE FREER
        </span>

        <h1>
          Find your
          <br />
          <em>somewhere.</em>
        </h1>

        <p>
          Thoughtful journeys for curious souls. Discover the world
          at your own pace, with the little details that make a big difference.
        </p>

        <div className="hero-actions">
          <a className="button button-light" href="#destinations">
            Explore destinations <span aria-hidden="true">↗</span>
          </a>

          <a className="text-link hero-link" href="#about">
            Get to know us <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero-note">
          <span className="hero-note-star" aria-hidden="true">
            ✳
          </span>
          <span>Less itinerary. More intuition.</span>
        </div>
      </div>

      <a className="scroll-cue" href="#destinations">
        <span>SCROLL TO WANDER</span>
        <span aria-hidden="true">↓</span>
      </a>

      <div className="hero-index">01 / THE ART OF GETTING AWAY</div>
    </section>
  );
}