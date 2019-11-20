import React from 'react'
import { Container } from 'reactstrap'
import { FaHeart, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// import { Link } from 'gatsby'

import { DiagonalSplit } from '..'

import './Footer.scss'

export const Footer = () => (
  <div className="footer">
    <DiagonalSplit invert />
    <div className="footer-inner">
      <Container>
        <div style={{ whiteSpace: 'nowrap' }}>
          Made with <FaHeart /> by <a href="https://www.cusu.org/society/hackathon/">CovHackSoc</a>
        </div>
        <br />
        <div>
          <FaTwitter />
          <span> </span>
          <a href="https://twitter.com/covhack">@covhack</a> /<span> </span>
          <a href="https://twitter.com/covhacksoc">@covhacksoc</a>
        </div>
        <div>
          <MdEmail />
          <span> </span>
          <a href="mailto:hello@covhack.org">hello@covhack.org</a>
        </div>
      </Container>
    </div>
  </div>
)
