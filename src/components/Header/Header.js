import React from 'react'
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

export const Header = class extends React.Component {
  state = {
    expand: true,
  }

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  expand = () => this.setState({ expand: window.scrollY < 60 })

  componentDidMount() {
    this.expand()
    window.addEventListener('scroll', this.expand)
  }

  render() {
    return (
      <Navbar
        light
        expand="md"
        className={`navbar navbar-dark fixed-top header ${
          this.state.expand ? 'header-expand' : 'shadow-sm'
        }`}>
        <Container>
          <Link to="/" className="navbar-brand">
            <img src="/covhack-logo-white.png" alt="CovHack Logo" height={28} />
            <div>CovHack</div>
          </Link>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto header-navbar" navbar>
              <NavItemLink to="/">Home</NavItemLink>
              <NavItemLink to="/hacktoberfest-2019" external>
                Hacktoberfest 2019
              </NavItemLink>
              <NavItemLink to="http://2019.covhack.org" external>
                CovHack 2019
              </NavItemLink>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
