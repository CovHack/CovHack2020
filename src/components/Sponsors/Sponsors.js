import React, { Component } from 'react'
import { Jumbotron, Container, Card, Row, Col } from 'reactstrap'

import { DiagonalSplit } from '..'

const sponsorTiers = {
  platinum: {
    name: 'Platinum',
    color: '#CCC2C2',
    order: 1,
    companies: [],
  },
  gold: {
    name: 'Gold',
    color: '#C98910',
    order: 2,
    companies: [],
  },
  silver: {
    name: 'Silver',
    color: '#A8A8A8',
    order: 3,
    companies: [],
  },
  bronze: {
    name: 'Bronze',
    color: '#965A38',
    order: 4,
    companies: [],
  },
  partner: {
    name: 'Partner',
    color: '#323232',
    order: 5,
    companies: [],
  },
}

const ComingSoon = () => (
  <p className="mt-4 mb-4" style={{ textAlign: 'center', opacity: 0.6 }}>
    coming soon{' '}
    <span aria-label="sparkles" role="img">
      ✨
    </span>
  </p>
)

const Tier = ({ tier }) => (
  <div key={tier.name}>
    <h2 className="mt-5" style={{ color: tier.color, textAlign: 'center' }}>
      {tier.name.toUpperCase()}
    </h2>
    <Row className="justify-content-md-center">
      {tier.companies && tier.companies.length ? (
        tier.companies.map(sponsor => (
          <Col xs="6" sm="4">
            <a href={sponsor.url}>
              <img src={sponsor.logo} alt={sponsor.name} />
            </a>
          </Col>
        ))
      ) : (
        <Col>
          <ComingSoon />
        </Col>
      )}
    </Row>
  </div>
)

export const Sponsors = ({ sponsors }) => {
  /* Build up the tier list */
  let tierList = { ...sponsorTiers }
  sponsors.map(company => {
    const { name, url, logo, tier } = company
    tierList[tier].companies.push({ name, url, logo })
  })
  const sponsorData = Object.values(tierList).sort((a, b) => a.order - b.order)
  return (
    <Jumbotron style={{ padding: 0 }}>
      <DiagonalSplit invert />
      <Container className="jumbotron-padding" style={{ paddingTop: '4em', paddingBottom: '2em' }}>
        <h1 style={{ textAlign: 'center' }}>Sponsors</h1>

        {sponsorData.map(tier => (
          <div>{tier.companies.length > 0 && <Tier tier={tier} />}</div>
        ))}

        <p className="mt-4 mb-4" style={{ textAlign: 'center' }}>
          Interested in sponsoring? Email us at{' '}
          <a href="mailto:hello@covhack.org">hello@covhack.org</a>!
        </p>
      </Container>
      <DiagonalSplit />
    </Jumbotron>
  )
}
