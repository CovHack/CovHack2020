import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import { DiagonalSplit, Layout } from '../components'

export default function HacktoberfestPage({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <Layout>
      <div className="jumbo-outer">
        <Container className="jumbotron-padding">
          <div className="jumbo-inner">
            <h1 className="tagline">
              <img src="hacktoberfest-white.png" alt="Hacktoberfest logo" />
            </h1>
          </div>
        </Container>

        <DiagonalSplit />
      </div>

      <Container style={{ marginTop: '4rem', marginBottom: '3rem' }}>
        <div
          className="markdown-content"
          style={{ fontSize: '1.2rem', marginBottom: '2rem' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <tito-widget event="covhack/coventry-hacktoberfest-2019"></tito-widget>

        <a href="https://hacktoberfest.digitalocean.com/">
          <img src="hacktoberfest.png" alt="Hacktoberfest logo" />
        </a>
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
        tagline
      }
    }
  }
`
