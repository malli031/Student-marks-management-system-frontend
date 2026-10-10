import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.post("/employee/login", form);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data || "Login failed. Check your email, password, and backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="side-panel">
        <div className="brand-mark">EMS</div>
        <p className="eyebrow">EMPLOYEE MANAGEMENT SYSTEM</p>
        <h1>Manage your team with confidence.</h1>
        <p className="side-copy">A simple place to register employees and access your workspace.</p>
        <div className="side-footer">Organized teams. Better work.</div>
      </section>
      <section className="form-panel">
        <form className="form-card" onSubmit={handleSubmit}>
          <p className="eyebrow accent">WELCOME BACK</p>
          <h2>Sign in</h2>
          <p className="muted">Enter your account details to continue.</p>
          {error && <div className="error-message">{String(error)}</div>}
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="you@example.com"
            value={form.email} onChange={handleChange} required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Enter your password"
            value={form.password} onChange={handleChange} required />
          <button className="primary-button" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <p className="switch-text">Don't have an account? <Link to="/register">Create one</Link></p>
        </form>
      </section>
    </main>
  );
}