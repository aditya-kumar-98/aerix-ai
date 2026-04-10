import React, { useState, useEffect } from 'react';
import { SectionHeader } from './About';

// ── FEATURES ─────────────────────────────────────────────────────
const featureList = [
  { icon: '🎨', title: 'TRENDY & PRACTICAL DESIGN', desc: 'Products built for real classroom and field environments — functional, durable, and student-friendly.', filled: true },
  { icon: '⚡', title: 'REAL-TIME AI INTELLIGENCE', desc: 'Live AI processing for instant responses, smart recommendations, and continuous learning support.', filled: false },
  { icon: '🛡️', title: 'SMART SAFETY INTEGRATION', desc: 'Emergency detection algorithms with sub-5-second response time — trusted, reliable, life-saving.', filled: true },
  { icon: '🎓', title: 'EDUCATION-FIRST INNOVATION', desc: 'Every product and workshop is designed with pedagogy in mind — easy to teach, easy to learn.', filled: false },
];

export function Features() {
  return (
    <section id="features" style={{ background: '#f9f9f9', padding: '80px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--red)', fontWeight: 700, letterSpacing: 2.5, marginBottom: 12, textTransform: 'uppercase' }}>WHY AERIX AI</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, color: 'var(--navy)', marginBottom: 10 }}>
            More Features of <span style={{ color: 'var(--red)' }}>AERIX AI</span>
          </h2>
          <div style={{ width: 40, height: 3, background: 'var(--red)', borderRadius: 2, marginBottom: 16 }} />
          <p style={{ color: 'var(--gray-600)', fontSize: 14, marginBottom: 36, lineHeight: 1.75 }}>Everything designed with education and real-world impact at the core.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {featureList.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                  background: f.filled ? 'var(--red)' : 'transparent',
                  border: f.filled ? 'none' : '2px solid var(--red)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
                }}>{f.icon}</div>
                <div>
                  <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 5, color: 'var(--navy)' }}>{f.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #0d2347 100%)', borderRadius: 'var(--radius-lg)', padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.1) 0%, transparent 70%)' }} />
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 80, animation: 'float 3s ease-in-out infinite' }}>🚀</div>
            <div style={{ fontFamily: 'var(--font-display)', color: 'var(--blue)', fontSize: 22, fontWeight: 900, marginTop: 20, letterSpacing: 3 }}>AERIX AI</div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 8, letterSpacing: 1 }}>Aerospace Intelligence<br />for Emerging India</p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ #features > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// ── TESTIMONIALS ─────────────────────────────────────────────────
const testimonials = [
  { text: '"AERIX AI solutions are truly innovative and practical for modern schools. The AI workshop completely transformed how our students think about technology."', name: 'School Director', role: 'Government Senior Secondary School, Rajasthan', initials: 'SD', color: '#1565c0' },
  { text: '"The safety band concept is impressive and has real-world impact. Every school should have this kind of safety awareness program for their students."', name: 'College Faculty', role: 'Engineering College, Gujarat', initials: 'CF', color: '#00695c' },
  { text: '"Students loved the AI assistant demo — very engaging and useful. AERIX AI workshops are the best thing that happened to our school this year."', name: 'Head Teacher', role: 'Private School, Rajasthan', initials: 'HT', color: '#4a148c' },
];

export function Testimonials() {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[cur];
  return (
    <section id="testimonials" style={{ background: 'linear-gradient(135deg,var(--navy),#0d2347)', padding: '80px 5%', textAlign: 'center' }}>
      <div style={{ display: 'inline-block', background: 'rgba(229,57,53,0.15)', color: 'var(--red)', padding: '5px 16px', borderRadius: 20, fontSize: 11, letterSpacing: 2.5, fontWeight: 700, marginBottom: 14, textTransform: 'uppercase' }}>CLIENT VOICES</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, color: '#fff', marginBottom: 14 }}>TESTIMONIALS</h2>
      <div style={{ width: 48, height: 3, background: 'var(--red)', margin: '0 auto 48px', borderRadius: 2 }} />
      <div style={{ maxWidth: 700, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', padding: 40, position: 'relative' }}>
        <div style={{ fontSize: 80, color: 'var(--blue)', opacity: 0.25, position: 'absolute', top: 8, left: 24, lineHeight: 1, fontFamily: 'Georgia' }}>"</div>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: 28, fontStyle: 'italic' }}>{t.text}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg,${t.color},var(--orange))`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: 14 }}>{t.initials}</div>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>{t.name}</h4>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>{t.role}</p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 28 }}>
        {testimonials.map((_, i) => (
          <div key={i} onClick={() => setCur(i)} style={{ width: 8, height: 8, borderRadius: '50%', background: cur === i ? 'var(--blue)' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'background 0.3s' }} />
        ))}
      </div>
    </section>
  );
}

// ── TEAM ─────────────────────────────────────────────────────────
const team = [
  { name: 'Dr. Kamal Sharma', role: 'FOUNDER & OWNER', initials: 'KS', bg: 'linear-gradient(135deg,#0A1428,#1565c0)', bio: 'Visionary leader driving innovation in AI and smart technology solutions.' },
  { name: 'Ajay Pratap Devra', role: 'SENIOR DEVELOPER', initials: 'AP', bg: 'linear-gradient(135deg,#880e4f,#ad1457)', bio: 'Leads core system development and advanced AI integration.' },
  { name: 'Aditya', role: 'JUNIOR DEVELOPER', initials: 'AD', bg: 'linear-gradient(135deg,#00695c,#00897b)', bio: 'Works on AI models, system testing, and implementation.' },
  { name: 'Raghav', role: 'FULL STACK DEVELOPER', initials: 'RG', bg: 'linear-gradient(135deg,#4a148c,#6a1b9a)', bio: 'Handles frontend, backend, and system architecture.' },
  { name: 'Karan Singh', role: 'TECH TEAM MEMBER', initials: 'KS', bg: 'linear-gradient(135deg,#bf360c,#d84315)', bio: 'Supports hardware integration and technical operations.' },
];

export function Team() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="team" style={{ background: '#fff' }}>
      <SectionHeader badge="OUR PEOPLE" title="Awesome" accent="Team" desc="Passionate engineers and innovators building the future of AI-powered education and safety in India." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 24, padding: '0 5% 80px' }}>
        {team.map((m, i) => (
          <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ textAlign: 'center', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', transition: 'var(--transition)', transform: hovered === i ? 'translateY(-4px)' : 'none', boxShadow: hovered === i ? 'var(--shadow-md)' : 'none' }}>
            <div style={{ height: 200, background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, fontWeight: 900, color: '#fff', position: 'relative', letterSpacing: -1 }}>
              {m.initials}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(229,57,53,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s', gap: 12 }}>
                {['in', '@', 'f'].map(s => (
                  <div key={s} style={{ width: 32, height: 32, border: '2px solid #fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>{s}</div>
                ))}
              </div>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontSize: 11, color: 'var(--gray-600)', letterSpacing: 0.5, marginBottom: 8 }}>{m.role}</div>
              <div style={{ fontSize: 12, color: 'var(--gray-400)', lineHeight: 1.5 }}>{m.bio}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── BLOG ─────────────────────────────────────────────────────────
const posts = [
  { emoji: '🏫', bg: 'linear-gradient(135deg,#0A1428,#1565c0)', day: '10', mon: 'APR', title: 'How AI is Transforming Indian Schools in 2026', excerpt: 'From smart classrooms to personalized learning paths — discover how AERIX AI is helping schools deliver better outcomes for every student.', cat: 'EDUCATION' },
  { emoji: '⌚', bg: 'linear-gradient(135deg,#00695c,#00acc1)', day: '05', mon: 'APR', title: 'Building Safety Tech for Women: The NAARIX Story', excerpt: 'Inside the development journey of India\'s most affordable AI-powered women\'s safety wearable device and what drove us to build it.', cat: 'SAFETY' },
  { emoji: '🚀', bg: 'linear-gradient(135deg,#4a148c,#880e4f)', day: '01', mon: 'APR', title: 'Why Aerospace Education Matters for India\'s Youth', excerpt: 'With ISRO\'s growing ambitions, India needs a new generation of aerospace thinkers. Here\'s how AERIX AI is building them, one workshop at a time.', cat: 'AEROSPACE' },
];

export function Blog() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="blog" style={{ background: '#f9f9f9' }}>
      <SectionHeader badge="INSIGHTS" title="Our" accent="Blogs" desc="Stay updated with our latest thinking on AI, aerospace, education, and safety innovation." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 24, padding: '0 5% 80px' }}>
        {posts.map((p, i) => (
          <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--gray-200)', transition: 'var(--transition)', boxShadow: hovered === i ? 'var(--shadow-md)' : 'none', cursor: 'pointer' }}>
            <div style={{ height: 180, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, position: 'relative', transition: 'var(--transition)', transform: hovered === i ? 'scale(1.02)' : 'scale(1)' }}>
              {p.emoji}
              <div style={{ position: 'absolute', bottom: 0, left: 16, background: 'var(--red)', color: '#fff', padding: '8px 12px', fontSize: 12, fontWeight: 700, lineHeight: 1.2, textAlign: 'center' }}>
                {p.day}<br />{p.mon}
              </div>
            </div>
            <div style={{ padding: 22 }}>
              <div style={{ fontSize: 10, color: 'var(--red)', fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>{p.cat}</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--navy)', marginBottom: 10, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 14 }}>{p.excerpt}</p>
              <span style={{ color: 'var(--red)', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>READ MORE →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
