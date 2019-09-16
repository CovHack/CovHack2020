import React from 'react'

import './Map.scss'

export const Map = () => (
  <div className="map-responsive mt-5 mb-5">
    <iframe
      title="CovHack Map"
      src="https://maps.google.com/maps?q=Engineering%20%26%20Computing%20Building%2C%20Coventry%20University&t=&z=13&ie=UTF8&iwloc=&output=embed"
      scrolling="no"
      frameBorder="0"
    />
  </div>
)
