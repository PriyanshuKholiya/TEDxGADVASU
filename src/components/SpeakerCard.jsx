import React, { useState } from 'react';
import './SpeakerCard.css';

// Redesigned, self-contained flip card component
// API kept identical: props { name, img, children } where
// children[0] = title (front), children[1] = description (back)
export default function SpeakerCard({ name, img, children, ...rest }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const childArr = React.Children.toArray(children);

  return (
    <div className={`speaker-card${isFlipped ? ' flipped' : ''}`} {...rest}>
      <div className="sc-card" role="group" aria-label={`Speaker card for ${name}`}>
        <button
          type="button"
          className="sc-flip-btn"
          onClick={(e) => { e.stopPropagation(); setIsFlipped(v => !v); }}
          aria-pressed={isFlipped}
          title={isFlipped ? 'Show Info' : 'Flip to Description'}
        >
          <span>Flip</span>
          <span role="img" aria-label="flip">🔄</span>
        </button>

        <div className="sc-inner">
          {/* FRONT */}
          <div className="sc-face sc-front">
            <div className="sc-image">
              <img src={img} alt={name} />
            </div>
            <div className="sc-info">
              <div className="sc-name" title={name}>{name}</div>
              <div className="sc-title">{childArr[0]}</div>
            </div>
          </div>

          {/* BACK */}
          <div className="sc-face sc-back">
            <div className="sc-back-content">
              <div className="sc-desc">{childArr[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}