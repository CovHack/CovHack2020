import React from 'react'

import './mlhtrustbadge.scss'

export const MLHTrustBadge = ({ color, year, region }) => (
  <div className="mlh-trust-badge">
    <a
      href={`https://mlh.io/seasons/${region}-${year}/events?utm_source=${region}-hackathon&utm_medium=TrustBadge&utm_campaign=${year}-season&utm_content=${color}`}
      target="_blank">
      <img
        src={`https://s3.amazonaws.com/logged-assets/trust-badge/${year}/mlh-trust-badge-${year}-${color}.svg`}
        alt={`Major League Hacking ${year} Hackathon Season`}
      />
    </a>
  </div>
)
