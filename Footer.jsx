export function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">W</span>

        <span>
          <span className="brand-name">WanderMore</span>
          <span className="brand-subtitle">TRAVEL WITH FEELING</span>
        </span>
      </a>

      <p className="footer-message">
        For the love of getting lost.
      </p>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} WanderMore Travel
        </span>

        <a href="#home">Back to the top ↑</a>
      </div>
    </footer>
  );
}