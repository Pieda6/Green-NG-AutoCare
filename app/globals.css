:root {
  --green-deep: #0D2B1A;
  --green-dark: #1B4332;
  --green-mid: #2D6A4F;
  --green-accent: #74C365;
  --green-lime: #A8E063;
  --cream: #F5F0E8;
  --cream-dark: #EDE6D6;
  --charcoal: #1A1A18;
  --text-muted: #6B7B6E;
  --white: #FFFFFF;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body), 'DM Sans', sans-serif;
  background-color: var(--cream);
  color: var(--charcoal);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: var(--font-display), 'Playfair Display', serif;
  line-height: 1.1;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}

.animate-fadeUp          { animation: fadeUp 0.8s ease forwards; }
.animate-fadeUp-delay-1  { animation: fadeUp 0.8s 0.15s ease both; }
.animate-fadeUp-delay-2  { animation: fadeUp 0.8s 0.3s  ease both; }
.animate-fadeUp-delay-3  { animation: fadeUp 0.8s 0.45s ease both; }
.animate-fadeUp-delay-4  { animation: fadeUp 0.8s 0.6s  ease both; }
.animate-fadeUp-delay-5  { animation: fadeUp 0.8s 0.75s ease both; }

.btn-primary {
  display: inline-block;
  background: var(--green-accent);
  color: var(--green-deep);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  padding: 14px 32px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.25s, transform 0.2s;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
}
.btn-primary:hover { background: var(--green-lime); transform: translateY(-2px); }

.btn-outline {
  display: inline-block;
  background: transparent;
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  padding: 13px 32px;
  border: 1.5px solid rgba(255,255,255,0.4);
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.25s, color 0.25s, transform 0.2s;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
}
.btn-outline:hover { border-color: var(--green-accent); color: var(--green-accent); transform: translateY(-2px); }

.btn-dark {
  display: inline-block;
  background: var(--green-deep);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  padding: 14px 32px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.25s, transform 0.2s;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
}
.btn-dark:hover { background: var(--green-mid); transform: translateY(-2px); }

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--green-accent);
  margin-bottom: 14px;
}
.section-label::before {
  content: '';
  display: inline-block;
  width: 22px;
  height: 1.5px;
  background: var(--green-accent);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--cream); }
::-webkit-scrollbar-thumb { background: var(--green-mid); border-radius: 3px; }

@media (max-width: 768px) {
  .container { padding: 0 20px; }
}
