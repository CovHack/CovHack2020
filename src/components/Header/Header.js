import React, { useState, useEffect } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap'
import { Link } from 'gatsby'

import './Header.scss'

const NavItemLink = props => (
  <NavItem>
    {!props.external ? (
      <Link to={props.to} className="nav-link">
        {props.children}
      </Link>
    ) : (
      <a href={props.to} className="nav-link">
        {props.children}
      </a>
    )}
  </NavItem>
)

export const Header = ({ clearBadge }) => {
  const [expand, setExpand] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const updateExpand = () => setExpand(window.scrollY < 60)

  useEffect(() => {
    updateExpand()
    window.addEventListener('scroll', updateExpand)
  })

  return (
    <Navbar
      light
      expand={clearBadge ? 'xl' : 'md'}
      className={`navbar navbar-dark fixed-top header ${clearBadge ? 'clear-badge' : ''} ${
        expand ? 'header-expand' : 'shadow-sm'
      }`}>
      <Container>
        <Link to="/" className="navbar-brand">
          <img src="/covhack-logo-white.png" alt="CovHack Logo" height={28} />
          <div>CovHack</div>
        </Link>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto header-navbar" navbar>
            <NavItemLink to="/">Home</NavItemLink>
            <NavItemLink to="/2020-photos">Photos</NavItemLink>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}
