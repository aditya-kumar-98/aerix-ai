import React, { useState } from 'react';
import { SectionHeader } from './About';

import schoolImg from "../assets/Smart School.jpeg";
import deviceImg from "../assets/Ai_assistant_voice_box.png";
import safetyImg from "../assets/shaki_band_ai.png";
import assistantImg from "../assets/AI Assistant.png";

const products = [
  { img: schoolImg, gradient: 'linear-gradient(135deg,#0A1428,#1565c0)', tag: 'EDUCATION', name: 'AERIX AI Smart School System', desc: 'AI-powered platform for schools — smart learning, teacher assistance & real-time performance tracking.', cta1: 'Request Demo', cta2: 'Learn More' },
  { img: deviceImg, gradient: 'linear-gradient(135deg,#bf360c,#FF6200)', tag: 'EDTECH DEVICE', name: 'AERIXA AI Educational Device', desc: 'Compact AI companion for instant student queries and personalized learning experiences.', cta1: 'Get Quote', cta2: 'Learn More' },
  { img: safetyImg, gradient: 'linear-gradient(135deg,#00695c,#00bcd4)', tag: 'SAFETY WEARABLE', name: 'NAARIX AI Smart Safety Band', desc: 'Wearable safety device for women with real-time emergency detection and instant SOS alerts.', cta1: 'Pre-Order', cta2: 'Learn More' },
  { img: assistantImg, gradient: 'linear-gradient(135deg,#4a148c,#7b1fa2)', tag: 'AI ASSISTANT', name: 'AI Assistant System', desc: 'Conversational AI for fast, context-aware responses — helping businesses and institutions instantly.', cta1: 'Get Demo', cta2: 'Learn More' },
];

export default function Products() {
  const [hovered, setHovered] = useState(null);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="products" style={{ background: '#fff' }}>
      <SectionHeader badge="OUR OFFERINGS" title="Innovations &" accent="Products" desc="Four flagship AI-powered products designed to transform education, safety, and everyday intelligence across India." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, padding: '0 5% 80px' }}>
        {products.map((p, i) => (
          <div key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)',
              overflow: 'hidden', transition: 'var(--transition)', cursor: 'pointer',
              transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: hovered === i ? '0 16px 50px rgba(0,0,0,0.12)' : 'none',
            }}>
            <div style={{ height: 180, background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 52, transition: 'var(--transition)', transform: hovered === i ? 'scale(1.05)' : 'scale(1)' }}>
              <img 
                src={p.img} 
                alt={p.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
            <div style={{ padding: 22 }}>
              <div style={{ fontSize: 10, color: 'var(--red)', fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>{p.tag}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--navy)', marginBottom: 10, lineHeight: 1.3 }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => scrollTo('contact')} style={{
                  background: 'var(--red)', color: '#fff', padding: '9px 16px',
                  borderRadius: 'var(--radius-sm)', fontSize: 12, fontWeight: 700,
                  letterSpacing: 0.5, transition: 'var(--transition)',
                }}
                  onMouseEnter={e => e.target.style.background = 'var(--red-dark)'}
                  onMouseLeave={e => e.target.style.background = 'var(--red)'}
                >{p.cta1}</button>
                <button style={{
                  background: 'transparent', border: '1px solid var(--gray-200)', color: 'var(--gray-600)',
                  padding: '9px 16px', borderRadius: 'var(--radius-sm)', fontSize: 12, fontWeight: 700,
                  letterSpacing: 0.5, transition: 'var(--transition)',
                }}
                  onMouseEnter={e => { e.target.style.borderColor = 'var(--red)'; e.target.style.color = 'var(--red)'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'var(--gray-200)'; e.target.style.color = 'var(--gray-600)'; }}
                >{p.cta2}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
