import React from 'react'
import { Code } from '../../compontent/code'
import { Row,Col } from 'antd'
import { docs } from '../../mock/docs'

export function Index(props) {
  return (
    <div>
      <Row>
        <Col span = { 18 }>
          <Code 
            autoPlay = { true }
            code = { docs.Promise } 
            interval = { 100 }
          />
        </Col>
      </Row>
    </div>
  )
}
