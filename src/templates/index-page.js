import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Card, CardBody } from 'reactstrap'

import Layout from '../components/Layout'

export default function IndexPage({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="jumbo-outer">
        <div className="container">
          <div className="jumbo-inner">
            <h1 className="tagline">{frontmatter.tagline}</h1>
          </div>
        </div>

        <div className="split" />

        <div className="cta-container">
          <Card className="cta shadow center">
            <CardBody>
              <Link to="/register" className="btn btn-lg btn-primary">
                Get Tickets
              </Link>
              <Link to="/hello" className="btn btn-lg btn-outline-primary">
                Find Out More
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
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
