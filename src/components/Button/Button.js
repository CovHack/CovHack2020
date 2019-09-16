import React from 'react'

import './Button.scss'

import { Link } from 'gatsby'

export const Button = props => {
  return (
    <Link
      to={props.to}
      className={`button button--large header-font` + (props.primary ? ' primary' : '')}>
      <span>{props.children}</span>
    </Link>
  )
}
