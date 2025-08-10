import React from "react";
import SpeakerCard from '../components/SpeakerCard';

const placeholder = "https://via.placeholder.com/320x320?text=Speaker";
const speakers = [
  { name: "Riya Kapoor", title: "Founder - Bright Minds Academy", img: placeholder, desc: "Riya is passionate about empowering students and building creative learning ecosystems." },
  { name: "Arjun Mehta", title: "Creative Director - Visionary Media Labs", img: placeholder, desc: "Arjun brings stories to life at the intersection of media and technology." },
  { name: "Sanya Verma", title: "Innovation Strategist", img: placeholder, desc: "Sanya helps organizations design for bold, human-centered change." },
  { name: "Kabir Shah", title: "Youth Ambassador", img: placeholder, desc: "Kabir advocates for youth leadership and civic participation." },
  { name: "Dr. Neeraj Bansal", title: "CEO - FinX Global Solutions", img: placeholder, desc: "Dr. Bansal pioneers inclusive fintech for emerging markets." },
  { name: "Dr. Meera Chawla", title: "Advisor - Harmony Foundation", img: placeholder, desc: "Dr. Chawla works on cross-cultural dialogue and social harmony." },
  { name: "Dr. Alok Banerjee", title: "Founder & CEO - Linguo Learning Hub", img: placeholder, desc: "Dr. Banerjee explores language learning at scale with AI." },
  { name: "Dr. Sneha Rathi", title: "President - Rathi Global Ventures", img: placeholder, desc: "Dr. Rathi mentors founders building sustainable ventures." },
  { name: "Dr. Vishal Sharma", title: "Founder & CEO - Aurum Luxe Designs", img: placeholder, desc: "Dr. Sharma blends design, craft, and technology for luxury." },
];

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
            <SpeakerCard key={i} name={sp.name} img={sp.img}>
              {/* Front content: title */}
              <div className="speaker-card-title" style={{ color: '#e62b1e', fontWeight: 600, fontSize: '1.02rem' }}>{sp.title}</div>
              {/* Back content: description */}
              <div className="speaker-card-desc">{sp.desc || 'No description available.'}</div>
            </SpeakerCard>
          ))}
        </div>
      </section>
    </div>
  );
}

