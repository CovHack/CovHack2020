import React from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'

import { Link } from 'gatsby'

const NavItemLink = props => (
  <NavItem>
    <Link to={props.to} className="nav-link">
      {props.children}
    </Link>
  </NavItem>
)

const Header = class extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" className="navbar">
          <div className="container">
            <Link to="/" className="navbar-brand">
              CovHack2020
            </Link>

            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItemLink to="/register">Register</NavItemLink>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header
