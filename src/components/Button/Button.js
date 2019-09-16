import React from 'react'

import './Button.scss'

import { Link } from 'gatsby'

export const Button = props => {
  console.log('props :', props)
  const primary = props.primary

  return (
    <Link to={props.to} className={`button button--large header-font` + (primary ? ' primary' : '')}>
      <span>{props.children}</span>
    </Link>
  )
}
