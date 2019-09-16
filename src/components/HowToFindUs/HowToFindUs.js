import React from 'react'

import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'

export const HowToFindUs = props => (
  <Row className="row-eq-height">
    {props.howToFindUs
      .sort((a, b) => a.listOrder - b.listOrder)
      .map(how => (
        <Col md="12" lg="4" key={how.id} className="mb-3">
          <Card className="shadow-sm bg-white h-100">
            <CardBody>
              <CardTitle>
                <h4>{how.title}</h4>
              </CardTitle>

              <CardText>
                <div dangerouslySetInnerHTML={{ __html: how.html }} />
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
  </Row>
)
