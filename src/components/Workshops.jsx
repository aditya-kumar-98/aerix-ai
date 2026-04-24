import React, { useState } from 'react';
import { SectionHeader } from './About';
import aiIcon from '../assets/AI & Smart Technology.png';
import safetyIcon from '../assets/Women Safety Tech Workshop.png';
import chatbotIcon from '../assets/AI Assistant.png';
import rocketIcon from '../assets/rocket_icon.png';

const workshops = [
  { icon: aiIcon, title: 'AI & Smart Technology Workshop', age: 'Class 6–12', duration: '2 Days', type: 'Live Demo', desc: 'AI basics, real-life applications, interactive demonstrations, and hands-on experiments for school students.' },
  { icon: safetyIcon, title: 'Women Safety Tech Workshop', age: 'All Ages', duration: '1 Day', type: 'Device Demo', desc: 'Smart safety devices, emergency response systems, live NAARIX band demo and safety awareness sessions.' },
  { icon: chatbotIcon, title: 'AI Assistant & Chatbot Development', age: 'Class 8–12', duration: '3 Days', type: 'Hands-on', desc: 'AI basics, NLP introduction, building simple chatbot assistants — no prior coding experience needed.' },
  { icon: rocketIcon, title: 'Aerospace & Innovation Workshop', age: 'Class 6–12', duration: '3 Days', type: 'Projects', desc: 'Rocket science basics, innovation thinking methodology, hands-on model-building and aerospace careers.' },
];

export default function Workshops() {
  const [hovered, setHovered] = useState(null);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="workshops" style={{ background: '#fff' }}>
      <SectionHeader badge="SCHOOL PROGRAMS" title="Workshops &" accent="Education" desc="Empowering the next generation of Space & AI leaders through hands-on, curriculum-aligned workshop programs." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, padding: '0 5% 64px' }}>
        {workshops.map((w, i) => (
          <div key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              border: hovered === i ? '1px solid var(--red)' : '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-lg)', padding: 28, transition: 'var(--transition)',
              boxShadow: hovered === i ? '0 8px 30px rgba(229,57,53,0.1)' : 'none', cursor: 'pointer',
            }}>
            <div style={{ marginBottom: 16 }}>
              <img src={w.icon} alt={w.title} style={{ width: 40, height: 40, objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--navy)', marginBottom: 12, lineHeight: 1.3 }}>{w.title}</h3>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
              {[w.age, w.duration, w.type].map(tag => (
                <span key={tag} style={{ fontSize: 11, background: 'var(--gray-100)', color: '#555', padding: '4px 10px', borderRadius: 20, fontWeight: 600 }}>{tag}</span>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 20 }}>{w.desc}</p>
            <button onClick={() => scrollTo('contact')} style={{
              background: 'var(--navy)', color: '#fff', padding: '10px 20px',
              borderRadius: 'var(--radius-sm)', fontSize: 12, fontWeight: 700,
              letterSpacing: 0.5, transition: 'var(--transition)',
            }}
              onMouseEnter={e => e.target.style.background = 'var(--red)'}
              onMouseLeave={e => e.target.style.background = 'var(--navy)'}
            >Book for Your School</button>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div style={{ background: 'var(--navy)', padding: '64px 5%', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3vw,32px)', fontWeight: 900, color: '#fff', marginBottom: 14 }}>Host a Workshop in Your School</h3>
        <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 28, fontSize: 15 }}>Partner with AERIX AI to bring cutting-edge AI & Aerospace education to your students.</p>
        <button onClick={() => scrollTo('contact')} style={{
          background: 'var(--red)', border: '2px solid var(--red)', color: '#fff',
          padding: '14px 36px', borderRadius: 'var(--radius-sm)', fontSize: 14, fontWeight: 700, letterSpacing: 1.5, transition: 'var(--transition)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--red-dark)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; }}
        >INQUIRE NOW →</button>
      </div>
    </section>
  );
}
