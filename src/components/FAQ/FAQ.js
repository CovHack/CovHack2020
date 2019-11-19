import React from 'react'

import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'

export const FAQ = props => (
  <Row className="row-eq-height">
    {props.faqs
      .sort((a, b) => a.listOrder - b.listOrder)
      .map(faq => (
        <Col md="12" lg="4" key={faq.id} className="mb-3">
          <Card className="shadow-sm bg-white h-100">
            <CardBody>
              <CardTitle>
                <h4>{faq.title}</h4>
              </CardTitle>

              <CardText>
                <div dangerouslySetInnerHTML={{ __html: faq.html }} />
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
  </Row>
)
