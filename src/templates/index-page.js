import React from 'react'
import { graphql } from 'gatsby'
import Jumbotron from 'reactstrap/lib/Jumbotron'
// import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default function IndexPage({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Jumbotron className="tagline-container">
        <div className="container">
          <h1 className="tagline">{frontmatter.tagline}</h1>
        </div>
      </Jumbotron>

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
