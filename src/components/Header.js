import React from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap'

import { Link } from 'gatsby'

const NavItemLink = props => (
  <NavItem>
    <Link to={props.to} className="nav-link">
      {props.children}
    </Link>
  </NavItem>
)

const Header = class extends React.Component {
  state = {
    class: 'header',
  }

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

  expand = () => {
    this.setState({ class: `header ${window.scrollY > 60 ? 'shadow-sm' : 'header-expand'}` })
  }

  componentDidMount() {
    this.expand()
    window.addEventListener('scroll', this.expand)
  }

  render() {
    return (
      <Navbar light expand="md" className={`navbar navbar-light fixed-top ${this.state.class}`}>
        <Container>
          <Link to="/" className="navbar-brand">
            <div className="grad-text">CovHack2020</div>
          </Link>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto header-navbar" navbar>
              <NavItemLink to="/">Home</NavItemLink>
              <NavItemLink to="/register">Register</NavItemLink>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header
