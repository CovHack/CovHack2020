import React, { Component } from 'react'
import { Jumbotron, Container, Card, Row, Col } from 'reactstrap'

import { DiagonalSplit } from '..'

// TODO: Replace with sponsors from CMS
const tempSponsors = [
  // {
  //   tierName: 'Platinum',
  //   color: '#CCC2C2',
  //   // sponsors: [{ name: 'Company name', logo: 'image source', link: 'url' }],
  // },
  // {
  //   tierName: 'Gold',
  //   color: '#C98910',
  //   sponsors: [],
  // },
  // {
  //   tierName: 'Silver',
  //   color: '#A8A8A8',
  //   sponsors: [],
  // },
  // {
  //   tierName: 'Bronze',
  //   color: '#965A38',
  //   sponsors: [],
  // },
]

const ComingSoon = () => (
  <p className="mt-4 mb-4" style={{ textAlign: 'center', opacity: 0.6 }}>
    coming soon{' '}
    <span aria-label="sparkles" role="img">
      ✨
    </span>
  </p>
)

export class Sponsors extends Component {
  render() {
    return (
      <Jumbotron style={{ padding: 0 }}>
        <DiagonalSplit invert />
        <Container
          className="jumbotron-padding"
          style={{ paddingTop: '4em', paddingBottom: '2em' }}>
          <h1 style={{ textAlign: 'center' }}>Sponsors</h1>

          <ComingSoon />

          <p className="center mt-4 mb-4">
            Interested in sponsoring? <a href="mailto:hello@covhack.org">Email us</a>!
          </p>

          {tempSponsors.map(tier => (
            <div key={tier.tierName}>
              <h2
                className="mt-5"
                style={{ color: tier.color, textAlign: 'center' }}>
                {tier.tierName.toUpperCase()}
              </h2>

              <Row className="justify-content-md-center">
                {tier.sponsors && tier.sponsors.length ? (
                  tier.sponsors.map(sponsor => (
                    <Col xs="6" sm="4">
                      <Card>
                        <h3>{sponsor.name}</h3>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col>
                    <ComingSoon />
                  </Col>
                )}
              </Row>
            </div>
          ))}
        </Container>
        <DiagonalSplit />
      </Jumbotron>
    )
  }
}
