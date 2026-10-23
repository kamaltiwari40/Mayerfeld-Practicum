

const reviews = [
  {
    quote:
      "Every detail felt considered, but nothing felt overplanned. It was the kind of trip that stays with you long after you get home.",
    name: "Sophie M.",
    location: "Italian Riviera",
  },
  {
    quote:
      "We discovered places we would never have found ourselves. It felt like travelling with a friend who knew all the best spots.",
    name: "James & Olivia",
    location: "Japan",
  },
  {
    quote:
      "The perfect balance of adventure and time to ourselves. Planning was effortless, and the memories are priceless.",
    name: "Charlotte R.",
    location: "Kenya",
  },
];

export function Reviews() {
  return (
    <section className="section reviews-section" id="stories">
      <div className="section-heading">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          NOT JUST OUR WORD
        </span>

        <h2>
          The good kind of <em>stories.</em>
        </h2>

        <p>
          A few words from travellers who came home with a little more.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="review-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>

            <span className="quote-mark" aria-hidden="true">
              “
            </span>

            <blockquote>{review.quote}</blockquote>

            <div className="review-author">
              <span className="author-avatar" aria-hidden="true">
                {review.name.charAt(0)}
              </span>

              <div>
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}