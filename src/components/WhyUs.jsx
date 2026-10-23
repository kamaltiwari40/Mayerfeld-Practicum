

const features = [
  {
    icon: "✳",
    title: "Thoughtfully personal",
    description:
      "Your trip should feel like yours. We shape every itinerary around your interests, pace and travel style.",
  },
  {
    icon: "⌁",
    title: "Local at heart",
    description:
      "Meet the people, discover the hidden corners and experience a place beyond the usual tourist trail.",
  },
  {
    icon: "♡",
    title: "Travel with confidence",
    description:
      "From your first idea to your journey home, we're here to make the details feel easy.",
  },
];

export function WhyUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-intro">
        <span className="eyebrow eyebrow-light">
          <span className="eyebrow-line" />
          A DIFFERENT WAY TO GO
        </span>

        <h2>
          Travel isn't just
          <br />
          <em>where you go.</em>
        </h2>

        <p>
          It's how a place makes you feel. The conversations you didn't plan.
          The road you almost didn't take. We make room for all of it.
        </p>

        <a className="button button-outline" href="#plan">
          Let's make a plan <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="feature-list">
        {features.map((feature, index) => (
          <article className="feature-item" key={feature.title}>
            <span className="feature-icon" aria-hidden="true">
              {feature.icon}
            </span>

            <div>
              <span className="feature-number">
                0{index + 1}
              </span>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}