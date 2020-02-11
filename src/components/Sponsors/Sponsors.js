import React from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap'

import { DiagonalSplit } from '..'

import './Sponsors.scss'

const ComingSoon = () => (
  <p className="mt-4 mb-4" style={{ textAlign: 'center', opacity: 0.6 }}>
    more coming soon{' '}
    <span aria-label="sparkles" role="img">
      ✨
    </span>
  </p>
)

const Tier = ({ tier }) => (
  <div key={tier.name} className="mt-2 mb-5">
    {tier.name && (
      <h3 className="mt-2 tier-name" style={{ color: tier.color }}>
        {tier.name}
      </h3>
    )}

    <Row className="justify-content-md-center" style={{ justifyContent: 'center' }}>
      {tier.companiesList.map(sponsor => (
        <Col sm={tier.colUnits || 6} className="sponsor-col">
          <a href={sponsor.url}>
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              height={sponsor.heightOverride || tier.height || '100px'}
            />
          </a>
        </Col>
      ))}
    </Row>
  </div>
)

export const Sponsors = ({ sponsors }) => {
  const tierList = {
    headline: {
      colUnits: 12,
      height: '240px',
      companiesList: [],
    },
    featured: {
      colUnits: 6,
      height: '200px',
      companiesList: [],
    },
    starter: {
      colUnits: 4,
      height: '180px',
      companiesList: [],
    },
    partner: {
      colUnits: 3,
      height: '80px',
      name: 'Partners',
      companiesList: [],
    },
  }

  const tieredSponsors = sponsors.reduce((acc, sponsor) => {
    const { name, url, logo, tier } = sponsor
    acc[tier].companiesList.push({ name, url, logo })
    return acc
  }, tierList)

  const noMainSponsors = !sponsors.reduce((acc, s) => acc + (s.tier === 'partner' ? 0 : 1), 0)

  return (
    <Jumbotron style={{ padding: 0 }}>
      <DiagonalSplit invert />

      <Container className="jumbotron-padding" style={{ paddingTop: '4em', paddingBottom: '2em' }}>
        <h1 style={{ textAlign: 'center' }}>Sponsors</h1>

        {noMainSponsors && <ComingSoon />}

        {sponsors.length &&
          Object.values(tieredSponsors).map(tier =>
            tier.companiesList.length > 0 ? <Tier tier={tier} /> : null
          )}

        <p className="mt-4 mb-4" style={{ textAlign: 'center' }}>
          Interested in sponsoring? Email us at{' '}
          <a href="mailto:hello@covhack.org">hello@covhack.org</a>!
        </p>
      </Container>

      <DiagonalSplit />
    </Jumbotron>
  )
}
