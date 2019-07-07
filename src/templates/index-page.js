import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Card, CardBody, Container } from 'reactstrap'

import DiagonalSplit from '../components/DiagonalSplit'
import Sponsors from '../components/Sponsors'
import Layout from '../components/Layout'

export default function IndexPage({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="jumbo-outer">
        <Container className="jumbotron-padding">
          <div className="jumbo-inner">
            <h1 className="tagline" data-aos="fade">
              {frontmatter.tagline}
            </h1>
          </div>
        </Container>

        <DiagonalSplit />
      </div>

      <div className="cta-container">
        <Card className="cta shadow center" data-aos="zoom-in">
          <CardBody>
            <Link to="/register" className="btn btn-lg btn-primary">
              Get Tickets
            </Link>
            <Link to="/hello" className="btn btn-lg btn-outline-primary grad-text">
              Find Out More
            </Link>
          </CardBody>
        </Card>
      </div>

      <Container className="mb-10">
        <div
          data-aos="fade-up"
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>

      <Sponsors className="mb-10" />
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
  }
`
