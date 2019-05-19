import React from 'react'
import { graphql } from 'gatsby'
// import { Link } from 'gatsby'

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
