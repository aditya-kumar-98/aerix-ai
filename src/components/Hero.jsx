import React, { useEffect, useRef } from 'react';

const stats = [
  { num: '3+', label: 'AI Products Developed' },
  { num: '10+', label: 'Schools Targeted' },
  { num: '24/7', label: 'AI Assistance' },
  { num: '<15min', label: 'Customer Support' },
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height, left, top } = currentTarget.getBoundingClientRect();
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" ref={heroRef} style={{
      minHeight: '100vh',
      background: 'var(--navy)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '100px 5% 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at var(--mx,30%) var(--my,50%), rgba(0,212,255,0.07) 0%, transparent 70%), radial-gradient(ellipse at 75% 85%, rgba(255,98,0,0.07) 0%, transparent 55%)',
        transition: 'background 0.1s',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Floating orbs */}
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', top: '15%', left: '8%', animation: 'float 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,98,0,0.07) 0%, transparent 70%)', bottom: '20%', right: '10%', animation: 'float 5s ease-in-out infinite reverse' }} />

      {/* Orbit ring */}
      <div style={{ position: 'absolute', width: 120, height: 120, top: '20%', right: '15%', opacity: 0.3 }}>
        <div style={{ width: '100%', height: '100%', border: '1px solid var(--blue)', borderRadius: '50%', position: 'relative' }}>
          <div style={{ position: 'absolute', width: 10, height: 10, background: 'var(--orange)', borderRadius: '50%', top: '50%', left: '50%', marginLeft: -5, marginTop: -5, animation: 'orbit 4s linear infinite' }} />
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 820 }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)',
          color: 'var(--blue)', padding: '6px 20px', borderRadius: 20,
          fontSize: 11, letterSpacing: 2.5, fontWeight: 600, marginBottom: 28,
          animation: 'fadeInUp 0.6s ease forwards',
        }}>AEROSPACE & AI BASED SOLUTIONS FOR EMERGING INDIA</div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6.5vw,78px)',
          fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: 14,
          letterSpacing: '-1px', animation: 'fadeInUp 0.7s ease 0.1s both',
        }}>
          Pioneering<br />
          <span style={{
            background: 'linear-gradient(90deg, var(--blue), #7DF9FF, var(--blue))',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            animation: 'shimmer 3s linear infinite',
          }}>Aerospace</span><br />
          Intelligence
        </h1>

        <p style={{ fontSize: 'clamp(12px,1.5vw,15px)', color: 'rgba(255,255,255,0.45)', marginBottom: 36, letterSpacing: 3, textTransform: 'uppercase', animation: 'fadeInUp 0.7s ease 0.2s both' }}>
          Intelligent technologies that empower education, safety &amp; innovation
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeInUp 0.7s ease 0.3s both' }}>
          <button onClick={() => scrollTo('products')} style={{
            background: 'transparent', border: '2px solid rgba(255,255,255,0.5)',
            color: '#fff', padding: '13px 30px', borderRadius: 'var(--radius-sm)',
            fontSize: 13, fontWeight: 700, letterSpacing: 1.5, transition: 'var(--transition)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
          >EXPLORE INNOVATIONS</button>
          <button onClick={() => scrollTo('workshops')} style={{
            background: 'var(--red)', border: '2px solid var(--red)',
            color: '#fff', padding: '13px 30px', borderRadius: 'var(--radius-sm)',
            fontSize: 13, fontWeight: 700, letterSpacing: 1.5, transition: 'var(--transition)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--red-dark)'; e.currentTarget.style.borderColor = 'var(--red-dark)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.borderColor = 'var(--red)'; }}
          >BOOK SCHOOL WORKSHOP</button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px',
          marginTop: 64, paddingTop: 48,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          animation: 'fadeInUp 0.7s ease 0.5s both',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, color: 'var(--blue)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5, marginTop: 8, textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.4 }}>
          <div style={{ fontSize: 10, color: '#fff', letterSpacing: 2 }}>SCROLL</div>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--blue), transparent)', animation: 'fadeInUp 1s ease infinite' }} />
        </div>
      </div>

      <style>{`
        @media(max-width:600px){
          #home { padding: 100px 5% 40px; }
          #home [style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
