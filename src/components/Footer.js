import React from 'react'
// import { } from 'reactstrap'

// import { Link } from 'gatsby'

import DiagonalSplit from './DiagonalSplit'

const Footer = () => (
  <div className="footer">
    <DiagonalSplit invert />
    <div className="footer-inner">
      <div className="container">
        <div className="copyright">© 2019 Coventry University Hackathon Society</div>
      </div>
    </div>
  </div>
)

export default Footer
