import React from 'react'
import { Container, Row, Col } from 'reactstrap'

// import { Link } from 'gatsby'

import { DiagonalSplit } from '..'

import './Footer.scss'

export const Footer = () => (
  <div className="footer">
    <DiagonalSplit invert />
    <div className="footer-inner">
      <Container>
        <Row>
          <Col>
            <div style={{ whiteSpace: 'nowrap' }}>© 2019 Coventry University Hackathon Society</div>
          </Col>
          <Col>
            <div>hello@covhack.org</div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
)
