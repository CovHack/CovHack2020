import React from 'react'

import { Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap'

export const Team = props => (
  <Row className="row-eq-height">
    {props.team
      .sort((a, b) => a.listOrder - b.listOrder)
      .map(member => (
        <Col md="12" lg="4" key={member.id} className="mb-3">
          <Card className="shadow-sm bg-white h-100">
            <CardBody>
              <CardImg src={member.image}/>
              <CardTitle>
                <h4>{member.name}</h4>
              </CardTitle>
              <CardSubtitle>
                <h6>{member.role}</h6>
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
