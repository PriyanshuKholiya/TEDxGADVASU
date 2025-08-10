import React from 'react';

export default function Nomination() {
  return (
    <div className="page nomination" style={{ textAlign: 'center', marginTop: '4rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Nominations are now open!</h1>
      <p style={{ maxWidth: 600, margin: '1.5rem auto', fontSize: '1.15rem' }}>
        We are excited to announce that nominations for TEDxGADVASU are now open.<br />
        If you or someone you know would make a great speaker, please submit your nomination using the link below.
      </p>
      <a
        href="https://forms.gle/DTdheEAk847r7Z5u5"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          margin: '2rem 0',
          padding: '1rem 2.5rem',
          background: '#e62b1e',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 8px #e62b1e33'
        }}
      >
        Nominate Now
      </a>
    </div>
  );
}
