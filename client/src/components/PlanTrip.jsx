export function PlanTrip() {
  return (
    <section className="plan-section" id="plan">
      <div className="plan-decoration" aria-hidden="true">
        ✳
      </div>

      <span className="eyebrow eyebrow-light">
        <span className="eyebrow-line" />
        YOUR NEXT CHAPTER
      </span>

      <h2>
        So, where do
        <br />
        <em>you want to go?</em>
      </h2>

      <p>
        Tell us what you're imagining. We'll help you turn that little
        daydream into a journey you'll never forget.
      </p>

      <a
        className="button button-light"
        href="mailto:hello@wandermore.example?subject=Let's%20plan%20a%20trip"
      >
        Let's plan something <span aria-hidden="true">↗</span>
      </a>

      <span className="plan-footnote">
        No pressure. Just possibilities.
      </span>
    </section>
  );
}