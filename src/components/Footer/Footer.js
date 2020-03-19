import React from 'react'
import { FaHeart, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// import { Link } from 'gatsby'

import { DiagonalSplit } from '..'

import './Footer.scss'

export const Footer = () => (
  <div className="footer">
    <DiagonalSplit invert />
    <div className="footer-inner">
      <div className="love">
        Made with <FaHeart /> and GatsbyJS by{' '}
        <a href="https://www.cusu.org/society/hackathon/">CovHackSoc</a> — Edit this site on{' '}
        <a href="https://github.com/CovHack/CovHack2020">GitHub</a>
      </div>

      <div>
        <div>
          <FaTwitter /> <a href="https://twitter.com/covhack">@covhack</a>
          {' / '}
          <a href="https://twitter.com/covhacksoc">@covhacksoc</a>
          {' / '}
          <MdEmail /> <a href="mailto:hello@covhack.org">hello@covhack.org</a>
        </div>
      </div>
    </div>
  </div>
)
