import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'
import BackgroundImage from 'gatsby-background-image'
import Gallery from 'jmsv-gatsby-image-gallery'

import { DiagonalSplit, Layout } from '../components'

import 'jmsv-gatsby-image-gallery/dist/style.css'

export default function Photos2020Page({ data }) {
  const { markdownRemark, file } = data
  const { html, frontmatter } = markdownRemark

  const fullSize = data.images.edges.map(edge => edge.node.full.fluid.src)
  const thumbs = data.images.edges.map(edge => edge.node.thumb.fluid)

  const backgroundImage = file.childImageSharp.fluid

  return (
    <Layout>
      <BackgroundImage fluid={backgroundImage}>
        <div className="jumbo-outer" style={{ margin: 0 }}>
          <Container className="jumbotron-padding">
            <div className="jumbo-inner">
              <h1 className="tagline">{frontmatter.tagline}</h1>
            </div>
          </Container>

          <DiagonalSplit />
        </div>
      </BackgroundImage>

      <Container style={{ marginTop: '3em', marginBottom: '3em' }}>
        <div
          className="markdown-content"
          style={{ fontSize: '1.2rem', marginBottom: '2rem' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>

      <DiagonalSplit color="black" />
      <div className="gallery-outer">
        <div class="gallery-inner">
          <Gallery
            images={fullSize}
            thumbs={thumbs}
            colWidth={100 / 3}
            mdColWidth={100 / 4}
            lgColWidth={100 / 6}
            gutter={'0.5rem'}
            imgClass={''}
          />
        </div>
        <DiagonalSplit />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Photos2020PageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "photos-2020-page" } }) {
      html
      frontmatter {
        title
        tagline
      }
    }

    file(relativePath: { eq: "CH-20190316-20-27-27.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    images: allFile(filter: { relativeDirectory: { eq: "photos-2020" } }, sort: { fields: name }) {
      edges {
        node {
          id
          thumb: childImageSharp {
            fluid(maxWidth: 360, maxHeight: 360, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(maxWidth: 3072, quality: 90, srcSetBreakpoints: [576, 992, 1200]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
