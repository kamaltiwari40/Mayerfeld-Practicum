import { Footer } from "./Footer";
import { Header } from "./Header";
import { destinations } from "./Destinations";

const destinationExtras = {
  "italian-riviera": {
    duration: "5–7 days",
    pace: "Slow coastal days",
    highlights: ["Wander the colourful Ligurian villages", "Follow scenic coastal walking paths", "Take long lunches by the sea"],
    intro: "A relaxed escape shaped by sea air, hillside villages and meals that deserve an unhurried afternoon.",
  },
  "alpine-escape": {
    duration: "6–8 days",
    pace: "Fresh air and open trails",
    highlights: ["Explore lakeside paths", "Take in wide mountain views", "Balance active days with quiet village stays"],
    intro: "A restorative mountain journey for crisp mornings, clear lakes and rewarding days outdoors.",
  },
  "japan-uncovered": {
    duration: "10–14 days",
    pace: "City energy and quiet moments",
    highlights: ["Discover neighbourhoods old and new", "Make time for gardens and temples", "Taste regional dishes along the way"],
    intro: "A thoughtful introduction to Japan, pairing lively city streets with calmer cultural discoveries.",
  },
  "wild-kenya": {
    duration: "7–10 days",
    pace: "Wildlife and wide-open spaces",
    highlights: ["Spend time on guided wildlife drives", "Experience the changing light over the savannah", "Stay in small, locally run lodges"],
    intro: "A wildlife-focused journey through open landscapes, guided by local expertise and time in nature.",
  },
  "desert-dreaming": {
    duration: "5–8 days",
    pace: "Colourful cities and desert calm",
    highlights: ["Explore the lanes and markets of Marrakech", "See the landscapes change beyond the city", "Enjoy an evening beneath the open sky"],
    intro: "A vivid change of pace, with lively markets, warm colours and quieter moments among desert landscapes.",
  },
  "island-slowdown": {
    duration: "7–10 days",
    pace: "Unhurried island living",
    highlights: ["Swim in clear Aegean water", "Visit whitewashed island villages", "Leave room for spontaneous boat trips"],
    intro: "A gentle island break built around bright water, village strolls and days with plenty of breathing room.",
  },
};

export function DestinationDetails({ slug }) {
  const destination = destinations.find(
    (item) => item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === slug,
  );

  if (!destination) {
    return (
      <>
        <Header />
        <main className="section" style={{ minHeight: "60vh", textAlign: "center" }}>
          <span className="eyebrow"><span className="eyebrow-line" /> NOT FOUND</span>
          <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>We couldn't find that destination.</h1>
          <a className="button nav-cta" href="/#destinations">Explore destinations</a>
        </main>
        <Footer />
      </>
    );
  }

  const extra = destinationExtras[slug];
  const subject = encodeURIComponent(`Let's plan a trip to ${destination.name}`);

  return (
    <>
      <Header />
      <main>
        <section
          className="hero"
          id="destination-top"
          style={{
            minHeight: "min(620px, calc(100svh - 82px))",
            backgroundImage: `linear-gradient(90deg, rgba(16, 34, 31, .78), rgba(16, 34, 31, .25)), url("${destination.image}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow">
              <span className="eyebrow-line" />
              {destination.country} · {destination.tag.toUpperCase()}
            </span>
            <h1>{destination.name}</h1>
            <p>{extra.intro}</p>
            <div className="hero-actions">
              <a className="button button-light" href={`mailto:hello@wandermore.example?subject=${subject}`}>
                Plan this journey <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link hero-link" href="/#destinations">Back to destinations</a>
            </div>
          </div>
        </section>

        <section className="section destinations-section" id="destination-details">
          <div className="section-topline">
            <div className="section-heading">
              <span className="eyebrow"><span className="eyebrow-line" /> A CLOSER LOOK</span>
              <h2>Make room for <em>the moments.</em></h2>
              <p>{destination.description}</p>
            </div>
            <span className="section-count">A WANDERMORE JOURNEY</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 22, maxWidth: 1160, margin: "0 auto" }}>
            <article style={{ padding: 26, background: "var(--cream)" }}>
              <span className="eyebrow">SUGGESTED LENGTH</span>
              <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>{extra.duration}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>A starting point to help shape your plans. We can tailor the pace to you.</p>
            </article>
            <article style={{ padding: 26, background: "var(--cream)" }}>
              <span className="eyebrow">THE RHYTHM</span>
              <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>{extra.pace}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Thoughtful travel leaves space to explore, rest and follow your curiosity.</p>
            </article>
            <article style={{ padding: 26, background: "var(--cream)" }}>
              <span className="eyebrow">DON'T MISS</span>
              <ul style={{ margin: "14px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
                {extra.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="plan-section">
          <span className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER</span>
          <h2>Let's make <em>{destination.name}</em> yours.</h2>
          <p>Tell us what you have in mind and we can help you shape a journey around it.</p>
          <a className="button button-light" href={`mailto:hello@wandermore.example?subject=${subject}`}>
            Start planning <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default DestinationDetails;

