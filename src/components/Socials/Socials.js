import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import './Socials.scss'

export const Socials = props => {
  return (
    <div className="socials">
      {props.socials && (
        <div>
          {props.socials.twitter && (
            <span className="separator">
              <a href={`https://twitter.com/${props.socials.twitter}`}>
                <FaTwitter />
              </a>
            </span>
          )}
          {props.socials.github && (
            <span className="separator">
              <a href={`https://github.com/${props.socials.github}`}>
                <FaGithub />
              </a>
            </span>
          )}
          {props.socials.linkedin && (
            <span className="separator">
              <a href={`https://linkedin.com/in/${props.socials.linkedin}`}>
                <FaLinkedin />
              </a>
            </span>
          )}
          {props.socials.instagram && (
            <span className="separator">
              <a href={`https://instagram.com/${props.socials.instagram}`}>
                <FaInstagram />
              </a>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
