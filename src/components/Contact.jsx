import React, { useState } from 'react';

const contactInfo = [
  { icon: '📞', label: 'PHONE', detail: '+91 9358855881\n+91 7742126600\n+91 8200589187' },
  { icon: '✉️', label: 'EMAIL', detail: 'aerixteam@gmail.com' },
  { icon: '📍', label: 'LOCATION', detail: 'India — Serving schools nationwide' },
];

export function Contact() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', type: 'School Workshop Booking', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ background: 'var(--navy)', padding: '80px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, maxWidth: 1000, margin: '0 auto' }}>
        {/* Info */}
        <div>
          <div style={{ display: 'inline-block', background: 'rgba(0,212,255,0.1)', color: 'var(--blue)', padding: '5px 16px', borderRadius: 20, fontSize: 11, letterSpacing: 2.5, fontWeight: 700, marginBottom: 14 }}>GET IN TOUCH</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
            Let's Work <span style={{ color: 'var(--red)' }}>Together</span>
          </h2>
          <div style={{ width: 40, height: 3, background: 'var(--red)', borderRadius: 2, marginBottom: 20 }} />
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>Whether you're a school principal, investor, or just curious about our products — we'd love to hear from you.</p>
          {contactInfo.map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>{c.label}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{c.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', padding: 32 }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>We'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                {[['First Name', 'fname', 'Your name'], ['Last Name', 'lname', 'Last name']].map(([label, key, ph]) => (
                  <div key={key}>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>{label.toUpperCase()}</label>
                    <input value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={ph} style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, color: '#fff', padding: '10px 14px', fontSize: 13, fontFamily: 'var(--font-body)', outline: 'none' }} />
                  </div>
                ))}
              </div>
              {[['Email', 'email', 'email', 'your@email.com'], ['Phone', 'phone', 'tel', '+91 XXXXXXXXXX']].map(([label, key, type, ph]) => (
                <div key={key} style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>{label.toUpperCase()}</label>
                  <input type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={ph} style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, color: '#fff', padding: '10px 14px', fontSize: 13, fontFamily: 'var(--font-body)', outline: 'none' }} />
                </div>
              ))}
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>INQUIRY TYPE</label>
                <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, color: '#fff', padding: '10px 14px', fontSize: 13, fontFamily: 'var(--font-body)', outline: 'none' }}>
                  {['School Workshop Booking', 'Product Order / Bulk Quote', 'Partnership / Collaboration', 'General Inquiry'].map(o => <option key={o} style={{ background: '#0A1428' }}>{o}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>MESSAGE</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your school or project..." style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, color: '#fff', padding: '10px 14px', fontSize: 13, fontFamily: 'var(--font-body)', outline: 'none', height: 90, resize: 'none' }} />
              </div>
              <button onClick={handleSubmit} style={{ width: '100%', background: 'var(--red)', color: '#fff', padding: 13, borderRadius: 6, fontSize: 14, fontWeight: 700, letterSpacing: 1.5, transition: 'var(--transition)' }}
                onMouseEnter={e => e.target.style.background = 'var(--red-dark)'}
                onMouseLeave={e => e.target.style.background = 'var(--red)'}
              >SEND MESSAGE →</button>
            </>
          )}
        </div>
      </div>
      <style>{`@media(max-width:768px){ #contact > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

export function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const links = ['HOME', 'ABOUT US', 'INNOVATIONS', 'WORKSHOPS', 'OUR TEAM', 'CONTACT'];
  const ids =   ['home',  'about',    'products',    'workshops',  'team',     'contact'];
  return (
    <footer style={{ background: '#060e1e', padding: '40px 5%', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 20 }}>
        <div style={{ width: 38, height: 38, background: 'linear-gradient(135deg,var(--blue),var(--orange))', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, color: '#fff', fontSize: 12 }}>AI</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 900, color: '#fff', letterSpacing: 3 }}><span style={{ color: 'var(--blue)' }}>AERIX</span> AI</div>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, marginBottom: 20, maxWidth: 400, margin: '0 auto 20px', lineHeight: 1.6 }}>Aerospace & AI Based Solutions for Emerging India</p>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
        {links.map((l, i) => (
          <button key={l} onClick={() => scrollTo(ids[i])} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', fontSize: 11, letterSpacing: 1.5, cursor: 'pointer', transition: 'color 0.2s', fontFamily: 'var(--font-body)' }}
            onMouseEnter={e => e.target.style.color = 'var(--blue)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
          >{l}</button>
        ))}
      </div>
      <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.05)', margin: '0 0 20px' }} />
      <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>© 2026 AERIX AI. All rights reserved. | aerixteam@gmail.com | +91 9358855881</p>
    </footer>
  );
}
