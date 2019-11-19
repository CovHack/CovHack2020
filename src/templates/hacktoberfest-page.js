import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import BackgroundImage from 'gatsby-background-image'
import { DiagonalSplit, Layout, Button, Countdown } from '../components'

export default function HacktoberfestPage({ data }) {
  const { markdownRemark, file } = data
  const { html, frontmatter } = markdownRemark

  const backgroundImage = file.childImageSharp.fluid

  return (
    <Layout titleOverride={frontmatter.title}>
      <BackgroundImage fluid={backgroundImage}>
        <div className="jumbo-outer">
          <Container className="jumbotron-padding">
            <div className="jumbo-inner">
              <h1 className="tagline">
                <img src="/hacktoberfest-white.png" alt="Hacktoberfest logo" />
              </h1>
            </div>
          </Container>

          <DiagonalSplit />
        </div>
      </BackgroundImage>

      <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <div style={{ textAlign: 'right' }}>
          <Button primary to="https://ti.to/covhack/coventry-hacktoberfest-2019">
            Get Tickets
          </Button>
        </div>

        <div
          className="markdown-content"
          style={{ fontSize: '1.2rem', marginBottom: '2rem' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <h2 style={{ textAlign: 'center' }}>Tickets</h2>

        <tito-widget event="covhack/coventry-hacktoberfest-2019"></tito-widget>

        <Row>
          <Col>
            <a href="https://hacktoberfest.digitalocean.com/">
              <img src="/hacktoberfest.png" alt="Hacktoberfest logo" style={{ marginTop: '2em' }} />
            </a>
          </Col>
          <Col>
            <Countdown targetDate="2019-10-23 13:00" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HacktoberfestPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "hacktoberfest-page" } }) {
      html
      frontmatter {
        title
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
