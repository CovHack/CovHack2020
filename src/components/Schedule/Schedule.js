import React from 'react'

import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'

export const Schedule = props => (
  <Row className="row-eq-height">
    {props.schedule
      .sort((a, b) => a.listOrder - b.listOrder)
      .map(schedule => (
        <Col md="12" lg="6" key={Schedule.id} className="mb-3">
          <Card className="shadow-sm bg-white h-100">
            <CardBody>
              <CardTitle>
                <h4>{schedule.title}</h4>
              </CardTitle>

              <CardText>
                <div dangerouslySetInnerHTML={{ __html: schedule.html }} />
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
  </Row>
)
