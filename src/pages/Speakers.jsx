import React from "react";
import SpeakerCard from '../components/SpeakerCard';
import speakers from '../data/speakers';

export default function Speakers() {
  return (
    <div className="page speakers">
      <h1 style={{ color: "#e62b1e", marginTop: '2.2rem', fontSize: '2rem', fontWeight: 900, letterSpacing: '1px', textAlign: 'center' }}>Our Eminent Speakers</h1>
      <section style={{ margin: "2.5rem 0 0 0", width: "100%" }}>
        <div
          className="speakers-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            padding: "2rem 0 2rem 0",
            margin: "0 auto",
            maxWidth: "1200px",
            width: "100%",
            justifyItems: "center"
          }}
        >
          {speakers.map((sp, i) => (
            <SpeakerCard key={i} name={sp.name} img={sp.img} objectPosition={sp.objectPosition}>
              <div className="speaker-card-title" style={{ color: '#e62b1e', fontWeight: 600, fontSize: '1.02rem' }}>{sp.title}</div>
            </SpeakerCard>
          ))}
        </div>
      </section>
    </div>
  );
}

