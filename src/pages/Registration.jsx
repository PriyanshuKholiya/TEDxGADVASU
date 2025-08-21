import React from 'react';

export default function Nomination() {
  return (
    <div className="page nomination" style={{ textAlign: 'center', marginTop: '4rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Nominations are now closed</h1>
      <p style={{ maxWidth: 600, margin: '1.5rem auto', fontSize: '1.15rem' }}>
        Thank you for your interest in TEDxGADVASU. Nominations for speakers are now closed.<br />
        Please stay tuned for updates and future opportunities.
      </p>
      <div
        aria-disabled="true"
        style={{
          display: 'inline-block',
          margin: '2rem 0',
          padding: '1rem 2.5rem',
          background: '#c3c3c3',
          color: '#444',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          border: 'none',
          cursor: 'not-allowed',
          boxShadow: '0 2px 8px #00000014'
        }}
      >
        Nominations Closed
      </div>
    </div>
  );
}
