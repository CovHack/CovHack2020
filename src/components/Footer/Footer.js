import React from 'react'
import { FaHeart, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { DiagonalSplit } from '..'

import './Footer.scss'

export const Footer = () => (
  <div className="footer">
    <DiagonalSplit invert />
    <div className="footer-inner">
      <div className="love">
        Made with <FaHeart /> and GatsbyJS by{' '}
        <a href="https://www.cusu.org/society/hackathon/" target="_blank" rel="noopener noreferrer">
          CovHackSoc
        </a>{' '}
        — Edit this site on{' '}
        <a href="https://github.com/CovHack/CovHack2020" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      <div>
        <div>
          <FaTwitter />{' '}
          <a href="https://twitter.com/covhack" target="_blank" rel="noopener noreferrer">
            @covhack
          </a>
          {' / '}
          <a href="https://twitter.com/covhacksoc" target="_blank" rel="noopener noreferrer">
            @covhacksoc
          </a>
          {' / '}
          <MdEmail /> <a href="mailto:hello@covhack.org">hello@covhack.org</a>
        </div>
      </div>
    </div>
  </div>
)
