import React from 'react';
import lab from "../assets/Lab Workspace.png";
import schoolWorkshop from "../assets/School Workshop.png";
import aerixLogo from "../assets/AERIX AI.png";
import aiIcon from "../assets/AI Innovation.png";
import eduIcon from "../assets/Smart Education.png";
import safetyIcon from "../assets/Women Safety.png";

const features = [
  { icon: aiIcon, title: 'AI-DRIVEN INNOVATION', desc: 'Leveraging cutting-edge AI to build products that solve real challenges and improve quality of life across India.', filled: true },
  { icon: eduIcon, title: 'SMART EDUCATION', desc: 'Bringing interactive AI learning experiences to schools — making technology accessible to every student nationwide.', filled: false },
  { icon: safetyIcon, title: 'WOMEN SAFETY TECH', desc: 'Wearable safety solutions with real-time emergency detection and instant SOS alert systems for women.', filled: true },
];

const SectionHeader = ({ badge, title, accent, desc }) => (
  <div style={{ textAlign: 'center', padding: '80px 5% 48px' }}>
    <div style={{ display: 'inline-block', background: 'rgba(229,57,53,0.1)', color: 'var(--red)', padding: '5px 16px', borderRadius: 20, fontSize: 11, letterSpacing: 2.5, fontWeight: 700, marginBottom: 14, textTransform: 'uppercase' }}>{badge}</div>
    <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: 'var(--navy)', marginBottom: 14, fontFamily: 'var(--font-display)', letterSpacing: -0.5 }}>
      {title} <span style={{ color: 'var(--red)' }}>{accent}</span>
    </h2>
    <div style={{ width: 48, height: 3, background: 'var(--red)', margin: '0 auto 16px', borderRadius: 2 }} />
    {desc && <p style={{ fontSize: 15, color: 'var(--gray-600)', maxWidth: 580, margin: '0 auto', lineHeight: 1.75 }}>{desc}</p>}
  </div>
);

export default function About() {
  return (
    <section id="about" style={{ background: '#f9f9f9' }}>
      <SectionHeader
        badge="WHO WE ARE"
        title="Our"
        accent="History"
        desc="AERIX AI was founded with a vision to transform everyday life through intelligent, practical, and accessible AI solutions. Starting as an educational innovation initiative, we expanded into real-world problem-solving — combining AI, IoT, and smart devices to create impactful products for society."
      />

      {/* Three-image grid (exact Figma layout) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1fr', gap: 16, padding: '0 5% 48px' }}>
        {/* Left: Lab workspace */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'linear-gradient(135deg,#e8e8e8,#d0d0d0)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10, position: 'relative' }}>
          <img
            src={lab}
            alt="Lab Workspace"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0
            }}
          />
          <div style={{ fontSize: 13, fontWeight: 600, color: '#666', letterSpacing: 1 }}>Lab Workspace</div>
        </div>

        {/* Center: AERIX AI dramatic text — like "THE NEW WORLD" */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'transparent', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, position: 'relative' }}>
          <img
            src={aerixLogo}
            alt="AERIX AI"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0
            }}
          />
        </div>

        {/* Right: School workshop */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'linear-gradient(135deg,#1a237e,#283593)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10, position: 'relative' }}>
          <img
            src={schoolWorkshop}
            alt="School Workshop"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0
            }}
          />
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: 1 }}>School Workshop</div>
        </div>
      </div>

      {/* Feature icons row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, padding: '48px 5% 80px' }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
              background: 'rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
            }}>
              <img 
                src={f.icon} 
                alt="" 
                style={{ 
                  width: "60%", 
                  height: "60%", 
                  objectFit: "contain",
                  opacity: 0.9 
                }} 
              />
            </div>
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, marginBottom: 8, color: 'var(--navy)' }}>{f.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          #about [style*="grid-template-columns: 1fr 1.6fr 1fr"] { grid-template-columns: 1fr !important; }
          #about [style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export { SectionHeader };
