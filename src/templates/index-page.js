import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'
import { MdKeyboardArrowDown } from 'react-icons/md'
import BackgroundImage from 'gatsby-background-image'

import { DiagonalSplit, Map, Sponsors, Layout, HowToFindUs, FAQ, Team, Button } from '../components'

export default function IndexPage({ data, pageContext: { font } }) {
  const { markdownRemark, howToFindUs, faq, team, file } = data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    if (font) document.body.style.fontFamily = font
  })

  const faqData = faq.edges
    .map(e => ({ ...e.node, ...e.node.frontmatter }))
    .filter(e => e.type === 'faq')
  const howToFindUsData = howToFindUs.edges
    .map(e => ({ ...e.node, ...e.node.frontmatter }))
    .filter(e => e.type === 'how-to-find-us')
  const teamData = team.edges
    .map(e => ({ ...e.node, ...e.node.frontmatter }))
    .filter(e => e.type === 'team')

  const backgroundImage = file.childImageSharp.fluid

  const findOutMore = () => document.getElementById('findoutmore').scrollIntoView(true)

  const Emoji = ({ value }) => (
    <span role="img" aria-label="emoji">
      {value}
    </span>
  )

  return (
    <Layout>
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
            {/* TODO: to /register */}
            <Button primary internal to="/" className="button" badge="Coming soon">
              Get Tickets
            </Button>

            <Button onClick={findOutMore} className="button">
              Find Out More <MdKeyboardArrowDown className="brand-color" />
            </Button>
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

        <h2 style={{ marginTop: '1.5rem' }}>
          <Emoji value={'📍'} /> How To Find Us
        </h2>

        <p>
          CovHack is being held at the Engineering, Environment, and Computing building (known as
          the EEC) the Coventry University Campus.
        </p>

        <HowToFindUs howToFindUs={howToFindUsData} style={{ marginBottom: '2em' }} />

        <Map />
      </Container>

      <Sponsors className="mb-10" />

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
            image
            socials {
              github
              twitter
              linkedin
              instagram
            }
            listOrder
            type
          }
        }
      }
    }

    file(relativePath: { eq: "CH-20190316-20-27-27.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
