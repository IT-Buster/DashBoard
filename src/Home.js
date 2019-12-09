import React from 'react'
import { Button, ButtonGroup, Container, Row, Col } from '../node_modules/react-bootstrap';

export const Home = () => (
        <div>
            <h2>Home Page</h2>
            <Button>START</Button>


            <Container>
            <Row>
              <Col variant="success">1 of 2</Col>
              <Col>2 of 2</Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>


        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>


    


        </div>
)
