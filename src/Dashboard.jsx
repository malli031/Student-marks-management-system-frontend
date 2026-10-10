import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className="dashboard-page">
      <header className="topbar">
        <Link className="top-brand" to="/home"><span className="brand-mark small">EMS</span> Employee Portal</Link>
        <button className="logout-button" onClick={logout}>Log out</button>
      </header>
      <main className="dashboard-content">
        <p className="eyebrow accent">WORKSPACE</p>
        <h1>Dashboard</h1>
        <p className="muted">Welcome to your Employee Management System.</p>
        <div className="dashboard-grid">
          <section className="dashboard-card">
            <div className="card-icon">＋</div>
            <h3>Employee registration</h3>
            <p>Add a new employee with their name, role, email, and password.</p>
            <Link className="card-link" to="/register">Register an employee →</Link>
          </section>
          <section className="dashboard-card">
            <div className="card-icon">✓</div>
            <h3>Account access</h3>
            <p>Your login request is handled by your Spring Boot backend.</p>
            <button className="text-button" onClick={logout}>Return to login →</button>
          </section>
        </div>
        <p className="dashboard-note">Employee list, update, and delete screens can be connected after confirming the exact controller endpoints.</p>
      </main>
    </div>
  );
}