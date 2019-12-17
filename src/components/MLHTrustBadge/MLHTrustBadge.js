import React from 'react'

export const MLHTrustBadge = () => (
  <div>
    <a
      id="mlh-trust-badge"
      style={{
        display: 'block',
        'max-width': '100px',
        'min-width': '60px',
        position: 'fixed',
        right: '50px',
        top: 0,
        width: '10%',
        'z-index': 10000,
      }}
      href="https://mlh.io/seasons/eu-2020/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
      target="_blank">
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg"
        alt="Major League Hacking 2020 Hackathon Season"
        style={{
          width: '100%',
        }}
      />
    </a>
  </div>
)
