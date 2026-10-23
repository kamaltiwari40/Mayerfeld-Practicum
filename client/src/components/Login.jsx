import { useState } from "react";
import { authClient } from "../lib/auth-client.js";

const pageStyle = {
  display: "grid",
  minHeight: "100vh",
  placeItems: "center",
  padding: "32px 20px",
  background: "var(--cream)",
};

const cardStyle = {
  width: "min(100%, 440px)",
  padding: "clamp(28px, 6vw, 48px)",
  background: "var(--paper)",
  boxShadow: "0 18px 60px rgba(29, 64, 57, .12)",
};

const inputStyle = {
  display: "block",
  width: "100%",
  minHeight: 48,
  marginTop: 8,
  padding: "12px 14px",
  border: "1px solid #d9ded8",
  borderRadius: 3,
  color: "var(--ink)",
  background: "white",
  font: "inherit",
};

export function Login({ initialMode = "sign-in" } = {}) {
  const [mode, setMode] = useState(initialMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSignUp = mode === "sign-up";

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const result = isSignUp
        ? await authClient.signUp.email({
            name: name.trim(),
            email: email.trim(),
            password,
          })
        : await authClient.signIn.email({
            email: email.trim(),
            password,
          });

      if (result.error) {
        setMessage(result.error.message || "Authentication failed. Please try again.");
      } else {
        setMessage(isSignUp ? "Your account has been created." : "You are signed in.");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function switchMode() {
    setMode(isSignUp ? "sign-in" : "sign-up");
    setMessage("");
  }

  return (
    <main style={pageStyle}>
      <section style={cardStyle} aria-labelledby="login-title">
        <a className="brand" href="/" aria-label="WanderMore home">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span className="brand-copy">
            <span className="brand-name">WanderMore</span>
            <span className="brand-subtitle">TRAVEL WITH FEELING</span>
          </span>
        </a>

        <span className="eyebrow" style={{ display: "flex", marginTop: 38 }}>
          <span className="eyebrow-line" />
          YOUR NEXT CHAPTER
        </span>
        <h1
          id="login-title"
          style={{
            margin: "12px 0 8px",
            color: "var(--ink)",
            font: '600 clamp(34px, 8vw, 46px)/1.1 "Playfair Display", Georgia, serif',
          }}
        >
          {isSignUp ? "Join the journey" : "Welcome back"}
        </h1>
        <p style={{ margin: "0 0 28px", color: "var(--muted)", lineHeight: 1.6 }}>
          {isSignUp
            ? "Create an account to start planning your next adventure."
            : "Sign in to continue planning your travels."}
        </p>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label style={{ display: "block", marginBottom: 18, fontSize: 13, fontWeight: 600 }}>
              Name
              <input
                autoComplete="name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                required
                style={inputStyle}
                type="text"
                value={name}
              />
            </label>
          )}

          <label style={{ display: "block", marginBottom: 18, fontSize: 13, fontWeight: 600 }}>
            Email address
            <input
              autoComplete="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              style={inputStyle}
              type="email"
              value={email}
            />
          </label>

          <label style={{ display: "block", marginBottom: 20, fontSize: 13, fontWeight: 600 }}>
            Password
            <input
              autoComplete={isSignUp ? "new-password" : "current-password"}
              minLength={8}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              required
              style={inputStyle}
              type="password"
              value={password}
            />
          </label>

          {message && (
            <p role="status" aria-live="polite" style={{ color: "var(--green)", fontSize: 13 }}>
              {message}
            </p>
          )}

          <button
            className="button nav-cta"
            disabled={isSubmitting}
            style={{ width: "100%", marginTop: 8, cursor: isSubmitting ? "wait" : "pointer" }}
            type="submit"
          >
            {isSubmitting ? "Please wait…" : isSignUp ? "Create account" : "Sign in"}
          </button>
        </form>

        <p style={{ margin: "24px 0 0", color: "var(--muted)", textAlign: "center", fontSize: 13 }}>
          {isSignUp ? "Already have an account?" : "New to WanderMore?"}{" "}
          <button
            onClick={switchMode}
            style={{ padding: 0, border: 0, color: "var(--green)", background: "none", font: "inherit", fontWeight: 700, cursor: "pointer" }}
            type="button"
          >
            {isSignUp ? "Sign in" : "Create an account"}
          </button>
        </p>
      </section>
    </main>
  );
}

export default Login;

