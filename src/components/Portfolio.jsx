import React, { useState } from 'react';
import { SectionHeader } from './About';

import lab from "../assets/Lab Workspace.png";
import schoolWorkshop from "../assets/School Workshop.png";
import smartSchool from "../assets/Smart School.jpeg";
import safetyBand from "../assets/Safety Band.png";
import aerixa from "../assets/AERIXA.png";
import aiAssistant from "../assets/AI Assistant.png";
import workshop from "../assets/School Workshop.png";
import aerospace from "../assets/Aerospace.png";

const categories = ['ALL', 'EDUCATION', 'SAFETY', 'AEROSPACE', 'AI SYSTEMS'];

const items = [
  { img: smartSchool, gradient: 'linear-gradient(135deg,#0A1428,#1565c0)', title: 'Smart School System', subtitle: 'AI Education Platform', cat: 'EDUCATION', featured: true },
  { img: safetyBand, gradient: 'linear-gradient(135deg,#00695c,#00acc1)', title: 'Safety Band', subtitle: 'Women Safety Tech', cat: 'SAFETY' },
  { img: aerixa, gradient: 'linear-gradient(135deg,#4a148c,#880e4f)', title: 'AI Hardware System', subtitle: 'Smart Embedded Technology', cat: 'EDUCATION' },
  { img: aiAssistant, gradient: 'linear-gradient(135deg,#bf360c,#e65100)', title: 'AI Assistant', subtitle: 'Conversational AI', cat: 'AI SYSTEMS' },
  { img: workshop, gradient: 'linear-gradient(135deg,#1b5e20,#388e3c)', title: 'Workshop Program', subtitle: 'School Education', cat: 'EDUCATION' },
  { img: aerospace, gradient: 'linear-gradient(135deg,#263238,#455a64)', title: 'Aerospace R&D', subtitle: 'Innovation Lab', cat: 'AEROSPACE' },
];

export default function Portfolio() {
  const [active, setActive] = useState('ALL');
  const [hovered, setHovered] = useState(null);

  const filtered = active === 'ALL' ? items : items.filter(i => i.cat === active);

  return (
    <section id="portfolio" style={{ background: '#f9f9f9' }}>
      <SectionHeader badge="OUR WORK" title="Recent" accent="Work" desc="Explore our portfolio of AI systems, education projects, safety tech, and aerospace innovations." />

      {/* Filter tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', padding: '0 5% 32px' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{
            padding: '8px 20px', borderRadius: 'var(--radius-sm)',
            fontSize: 11, fontWeight: 700, letterSpacing: 1.5, transition: 'var(--transition)',
            background: active === cat ? 'var(--red)' : '#fff',
            color: active === cat ? '#fff' : 'var(--gray-600)',
            border: active === cat ? 'none' : '1px solid var(--gray-200)',
          }}>{cat}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 3, padding: '0 5%' }}>
        {filtered.map((item, i) => (
          <div key={item.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              aspectRatio: '1', background: item.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              gridColumn: item.featured && filtered.length > 2 ? 'span 2' : 'span 1',
              gridRow: item.featured && filtered.length > 2 ? 'span 2' : 'span 1',
            }}>
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                transition: 'transform 0.3s',
                transform: hovered === i ? 'scale(1.15)' : 'scale(1)'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.25)'
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              opacity: hovered === i ? 1 : 0,
              transition: 'opacity 0.3s',
              color: '#fff',
              padding: 20,
              textAlign: 'center',
              backdropFilter: 'blur(4px)'
            }}>
              <h4 style={{ fontSize: item.featured ? 20 : 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
              <p style={{ fontSize: 13, opacity: 0.9 }}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '40px 5% 72px' }}>
        <button style={{
          background: 'transparent', border: '2px solid var(--navy)', color: 'var(--navy)',
          padding: '12px 32px', borderRadius: 'var(--radius-sm)', fontSize: 13, fontWeight: 700, letterSpacing: 1.5, transition: 'var(--transition)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)'; }}
        >VIEW FULL PORTFOLIO</button>
      </div>

      <style>{`@media(max-width:768px){ #portfolio [style*="grid-template-columns: repeat(4"]{grid-template-columns:repeat(2,1fr) !important;} }`}</style>
    </section>
  );
}
