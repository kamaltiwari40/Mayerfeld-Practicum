import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((isOpen) => !isOpen);
  }

  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        onClick={closeMenu}
        aria-label="WanderMore home"
      >
        <span className="brand-mark" aria-hidden="true">W</span>
        <span className="brand-copy">
          <span className="brand-name">WanderMore</span>
          <span className="brand-subtitle">TRAVEL WITH FEELING</span>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`main-nav${menuOpen ? " is-open" : ""}`}
        id="main-navigation"
        aria-label="Main navigation"
      >
        <a href="#destinations" onClick={closeMenu}>Destinations</a>
        <a href="#about" onClick={closeMenu}>Our approach</a>
        <a href="#stories" onClick={closeMenu}>Travel stories</a>
        <a className="nav-login" href="/login" onClick={closeMenu}>Login</a>
        <a className="nav-signup" href="/signup" onClick={closeMenu}>Sign up</a>
        <a className="nav-cta" href="#plan" onClick={closeMenu}>
          Plan your trip <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
