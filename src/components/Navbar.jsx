import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'HOME', id: 'home' },
  { label: 'ABOUT US', id: 'about' },
  { label: 'INNOVATIONS', id: 'products' },
  { label: 'PORTFOLIO', id: 'portfolio' },
  { label: 'WORKSHOPS', id: 'workshops' },
  { label: 'OUR TEAM', id: 'team' },
  { label: 'BLOG', id: 'blog' },
  { label: 'CONTACT', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => document.getElementById(l.id));
      const current = sections.find(s => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom > 80;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(10,20,40,0.97)' : 'rgba(10,20,40,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.12)' : '1px solid transparent',
        padding: '0 4%', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease',
      }}>
        {/* Logo */}
        <div onClick={() => scrollTo('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div style={{
            width: 42, height: 42,
            background: 'linear-gradient(135deg, #00D4FF, #FF6200)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 900, color: '#fff', fontSize: 13, letterSpacing: '-0.5px'
          }}>AI</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 900, color: '#fff', letterSpacing: 3 }}>
            <span style={{ color: 'var(--blue)' }}>AERIX</span> AI
          </div>
        </div>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: 24, listStyle: 'none', alignItems: 'center' }}
          className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.id}>
              <button onClick={() => scrollTo(link.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: active === link.id ? 'var(--blue)' : 'rgba(255,255,255,0.72)',
                fontSize: 11, fontWeight: 600, letterSpacing: 1.2,
                fontFamily: 'var(--font-body)', padding: '4px 0',
                borderBottom: active === link.id ? '2px solid var(--blue)' : '2px solid transparent',
                transition: 'var(--transition)',
              }}
                onMouseEnter={e => { if (active !== link.id) e.target.style.color = '#fff'; }}
                onMouseLeave={e => { if (active !== link.id) e.target.style.color = 'rgba(255,255,255,0.72)'; }}
              >{link.label}</button>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => scrollTo('contact')} style={{
            background: 'var(--red)', color: '#fff', padding: '9px 20px',
            borderRadius: 'var(--radius-sm)', fontSize: 12, fontWeight: 700, letterSpacing: 1,
            transition: 'var(--transition)', border: 'none',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--red-dark)'}
            onMouseLeave={e => e.target.style.background = 'var(--red)'}
          >GET IN TOUCH</button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
            background: 'none', border: 'none', cursor: 'pointer', display: 'none',
            flexDirection: 'column', gap: 5, padding: 4,
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2,
                background: '#fff', borderRadius: 2,
                transition: 'var(--transition)',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                            menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 999,
          background: 'rgba(10,20,40,0.98)', padding: '20px 4%',
          borderBottom: '1px solid rgba(0,212,255,0.1)',
        }}>
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', color: '#fff',
              padding: '12px 0', fontSize: 13, fontWeight: 600, letterSpacing: 1,
              borderBottom: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer',
            }}>{link.label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width: 900px) { .desktop-nav { display: none !important; } }
        @media(max-width: 900px) { .hamburger { display: flex !important; } }
      `}</style>
    </>
  );
}
