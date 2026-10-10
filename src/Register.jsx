import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", role: "", email: "", password: "" });
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
      await api.post("/employee", form);
      alert("Employee registered successfully!");
      navigate("/");
    } catch (err) {
      setError(typeof err.response?.data === "string"
        ? err.response.data
        : "Registration failed. Check that the backend is running and the endpoint is correct.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="side-panel">
        <div className="brand-mark">EMS</div>
        <p className="eyebrow">GET STARTED</p>
        <h1>Build your employee workspace.</h1>
        <p className="side-copy">Create an account to get started with the Employee Management System.</p>
        <div className="side-footer">Simple. Secure. Organized.</div>
      </section>
      <section className="form-panel">
        <form className="form-card" onSubmit={handleSubmit}>
          <p className="eyebrow accent">NEW ACCOUNT</p>
          <h2>Create account</h2>
          <p className="muted">Fill in your details below.</p>
          {error && <div className="error-message">{String(error)}</div>}
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Enter your name"
            value={form.name} onChange={handleChange} required />
          <label htmlFor="role">Role</label>
          <input id="role" name="role" type="text" placeholder="e.g. Developer"
            value={form.role} onChange={handleChange} required />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="you@example.com"
            value={form.email} onChange={handleChange} required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Create a password"
            value={form.password} onChange={handleChange} minLength="6" required />
          <button className="primary-button" disabled={loading}>
            {loading ? "Creating account..." : "Register employee"}
          </button>
          <p className="switch-text">Already registered? <Link to="/">Sign in</Link></p>
        </form>
      </section>
    </main>
  );
}