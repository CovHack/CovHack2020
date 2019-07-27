import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Container, Card, CardBody } from 'reactstrap'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { DiagonalSplit, Map, Sponsors, Layout, HowToFindUs } from '../components'

export default function IndexPage({ data }) {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const howToFindUs = allMarkdownRemark.edges.map(e => ({ ...e.node, ...e.node.frontmatter }))

  return (
    <Layout>
      <div className="jumbo-outer">
        <Container className="jumbotron-padding">
          <div className="jumbo-inner">
            <h1 className="tagline">{frontmatter.tagline}</h1>
          </div>
        </Container>

        <DiagonalSplit />
      </div>

      <div className="cta-container">
        <Card className="cta shadow center">
          <CardBody>
            <Link to="/register" className="btn btn-lg btn-primary">
              Get Tickets
            </Link>

            <Link to="#findoutmore" className="btn btn-lg btn-outline-primary grad-text">
              Find Out More <MdKeyboardArrowDown className="brand-color" />
            </Link>
          </CardBody>
          <span id="findoutmore" />
        </Card>
      </div>

      <Container style={{ marginTop: '5em', marginBottom: '5em' }}>
        <div
          data-aos="fade-up"
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <HowToFindUs howToFindUs={howToFindUs} style={{ marginBottom: '2em' }} />

        <div data-aos="fade-up">
          <Map />
        </div>
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

    allMarkdownRemark(filter: { frontmatter: { type: { eq: "how-to-find-us" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            listOrder
          }
        }
      }
    }
  }
`
