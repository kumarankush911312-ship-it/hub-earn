* {
  box-sizing: border-box;
}

:root {
  font-family: Inter, 'Segoe UI', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #e6eefb;
  background: #071521;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(28, 102, 210, 0.35), transparent 35%),
    #071521;
}

button,
input,
textarea {
  font: inherit;
}

#root {
  min-height: 100vh;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #7cc6ff;
  font-size: 0.75rem;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 18px;
  margin-bottom: 28px;
}

.stat-card,
.panel {
  background: rgba(9, 27, 40, 0.85);
  border: 1px solid rgba(120, 180, 255, 0.16);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.stat-card {
  padding: 24px;
}

.stat-card span {
  display: block;
  color: #a9bed8;
  margin-bottom: 12px;
}

.stat-card strong {
  font-size: clamp(1.8rem, 2.5vw, 2.6rem);
}

.content-grid {
  display: grid;
  grid-template-columns: 420px minmax(0, 1fr);
  gap: 22px;
}

.panel {
  padding: 22px;
}

.panel-header {
  margin-bottom: 18px;
}

.reward-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.reward-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #c5d6ee;
}

.reward-form input,
.reward-form textarea {
  width: 100%;
  border: 1px solid rgba(157, 196, 255, 0.18);
  border-radius: 12px;
  background: rgba(5, 16, 28, 0.9);
  color: #eaf2ff;
  padding: 12px 14px;
}

.primary-button {
  border: none;
  background: linear-gradient(135deg, #59c0ff, #6d84ff);
  color: white;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
}

.reward-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.reward-item {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(152, 186, 255, 0.16);
  background: rgba(10, 21, 30, 0.8);
}

.reward-item h3 {
  margin-bottom: 8px;
}

.reward-item p {
  margin-bottom: 0;
  color: #aac0dc;
}

.reward-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  min-width: 120px;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 6px 10px;
  text-transform: capitalize;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.badge-available {
  background: rgba(91, 203, 143, 0.17);
  color: #9af2c3;
}

.badge-pending {
  background: rgba(255, 185, 70, 0.17);
  color: #ffd87d;
}

.badge-claimed {
  background: rgba(140, 150, 255, 0.17);
  color: #c5c8ff;
}

.muted {
  color: #9ab0cd;
}

@media (max-width: 800px) {
  .content-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .topbar,
  .reward-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .reward-meta {
    align-items: flex-start;
  }
}
