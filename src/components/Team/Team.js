import React from 'react'
import Img from 'gatsby-image'

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { Socials } from '../../components'

import './Team.scss'

export const Team = props => {
  const listOfFiles = useStaticQuery(imageQuery).allFile.edges
  const allFiles = Object.assign(
    {},
    ...listOfFiles.map(item => ({ [item.node.name]: item.node.childImageSharp.fluid }))
  )
  return (
    <Row className="row-eq-height">
      {props.team
        .sort((a, b) => a.listOrder - b.listOrder)
        .map(member => (
          <Col md="12" lg="4" key={member.id} className="mb-3">
            <Card className="shadow-sm bg-white h-100">
              <CardBody>
                <Img fluid={allFiles[member.name]} className='image' />
                <CardTitle style={{ marginBottom: '1em' }}>
                  <Socials socials={member.socials} />
                  <h4>{member.name}</h4>
                </CardTitle>
                <CardSubtitle>
                  <h6 className="role">{member.role}</h6>
                </CardSubtitle>
                <CardText>
                  <div dangerouslySetInnerHTML={{ __html: member.html }} />
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
    </Row>
  )
}

const imageQuery = graphql`
  query {
    allFile(filter: { relativePath: { glob: "team/*" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
