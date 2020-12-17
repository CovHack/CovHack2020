import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'
import BackgroundImage from 'gatsby-background-image'

import {
  DiagonalSplit,
  Map,
  Sponsors,
  Layout,
  Schedule,
  HowToFindUs,
  FAQ,
  Team,
  Button,
  MLHTrustBadge,
} from '../components'

export default function IndexPage({ data, pageContext: { font } }) {
  const { markdownRemark, schedule, howToFindUs, faq, team, file, sponsor } = data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    if (font) document.body.style.fontFamily = font
  })

  const scheduleData = schedule.edges
    .map(e => ({ ...e.node, ...e.node.frontmatter }))
    .filter(e => e.type === 'schedule')
  const faqData = faq.edges
    .map(e => ({ ...e.node, ...e.node.frontmatter }))
    .filter(e => e.type === 'faq')
  const howToFindUsData = howToFindUs.edges
    .map(e => ({ ...e.node, ...e.node.frontmatter }))
    .filter(e => e.type === 'how-to-find-us')
  const teamData = team.edges
    .map(e => ({ ...e.node, ...e.node.frontmatter }))
    .filter(e => e.type === 'team')
  const sponsorData = sponsor.edges
    .map(e => ({ ...e.node, ...e.node.frontmatter }))
    .filter(e => e.type === 'sponsor')

  const backgroundImage = file.childImageSharp.fluid

  const Emoji = ({ value }) => (
    <span role="img" aria-label="emoji">
      {value}
    </span>
  )

  return (
    <Layout clearBadge={true}>
      <BackgroundImage fluid={backgroundImage}>
        <div className="jumbo-outer">
          <Container className="jumbotron-padding">
            <div className="jumbo-inner">
              <h1 className="tagline">{frontmatter.tagline}</h1>
            </div>
          </Container>

          <DiagonalSplit />
        </div>
      </BackgroundImage>

      <div className="cta-container">
        <Card className="cta shadow bg-dark" style={{ textAlign: 'center' }}>
          <CardBody>
            <Button primary to="/2020-photos" className="button">
              CovHack2020 Photos
            </Button>

            {/* Should link to videos on YouTube when released */}
            {/* <Button to="https://youtube.com/" className="button">
              Videos
            </Button> */}
          </CardBody>
        </Card>
      </div>

      <span id="findoutmore" style={{ position: 'absolute', marginTop: '-40px' }} />

      <Container style={{ marginTop: '3em', marginBottom: '3em' }}>
        <Row>
          <Col md="12" lg="8">
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
          </Col>

          <Col md="12" lg="4">
            <div className="box card-shadow-effect">
              <div style={{ padding: '1.5em' }} className="key-points">
                <ul>
                  <li>
                    <Emoji value={'📅'} /> 15-16th February 2020
                  </li>
                  <li>
                    <Emoji value={'🎓'} /> Open to all students
                  </li>
                  <li>
                    <Emoji value={'💸'} /> Free!
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        {/* <h2 style={{ marginTop: '1.5rem' }}>
          <Emoji value={'🎫'} /> Tickets
        </h2>

        <tito-widget event="covhack/covhack2020"></tito-widget> */}
      </Container>

      <Sponsors sponsors={sponsorData} className="mb-10" />

      <Container style={{ marginTop: '3em', marginBottom: '3em' }}>
        <h2 style={{ marginTop: '1.5rem' }}>
          <Emoji value={'🕒'} /> Schedule
        </h2>
        <p>This is subject to change, but our planned schedule is as follows:</p>

        <Schedule schedule={scheduleData} style={{ marginBottom: '2em' }} />
      </Container>

      <Container style={{ marginTop: '3em', marginBottom: '3em' }}>
        <h2 style={{ marginTop: '1.5rem' }}>
          <Emoji value={'📍'} /> How To Find Us
        </h2>

        <p>
          CovHack is being held at the Engineering, Environment, and Computing building (known as
          the EEC) at the Coventry University Campus.
        </p>

        <HowToFindUs howToFindUs={howToFindUsData} style={{ marginBottom: '2em' }} />

        <Map />
      </Container>

      <Container style={{ marginTop: '3em', marginBottom: '3em' }}>
        <h2 style={{ marginTop: '1.5rem' }}>
          <Emoji value={'💬'} /> FAQ
        </h2>

        <FAQ faqs={faqData} style={{ marginBottom: '2em' }} />
      </Container>

      <Container style={{ marginTop: '3em', marginBottom: '3em' }}>
        <h2 style={{ marginTop: '1.5rem' }}>
          <Emoji value={'👩'} /> Team
        </h2>

        <Team team={teamData} style={{ marginBottom: '2em' }} />
      </Container>

      <MLHTrustBadge color="black" year="2020" region="eu" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        tagline
      }
    }

    howToFindUs: allMarkdownRemark(filter: { frontmatter: { type: { eq: "how-to-find-us" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            listOrder
            type
          }
        }
      }
    }

    schedule: allMarkdownRemark(filter: { frontmatter: { type: { eq: "schedule" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            type
            listOrder
          }
        }
      }
    }

    faq: allMarkdownRemark(filter: { frontmatter: { type: { eq: "faq" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            listOrder
            type
          }
        }
      }
    }

    team: allMarkdownRemark(filter: { frontmatter: { type: { eq: "team" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            name
            role
            socials {
              github
              twitter
              linkedin
              instagram
              devpost
            }
            listOrder
            type
          }
        }
      }
    }

    sponsor: allMarkdownRemark(filter: { frontmatter: { type: { eq: "sponsor" } } }) {
      edges {
        node {
          id
          frontmatter {
            name
            url
            logo
            tier
            type
            heightOverride
          }
        }
      }
    }

    file(relativePath: { eq: "CH-20190316-20-27-27.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
