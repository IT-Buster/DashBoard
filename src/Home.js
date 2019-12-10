import React from 'react'
import { Container, Row, Col, Card,CardGroup,CardHeader,CardColumns } from 'react-bootstrap';

export const Home = () => (
  <div>
    <CardColumns>
      <Card bg="dark" border="secondary" text="white">
        <Card.Header>Temp. Zew.</Card.Header>
        <Card.Body>
          <Card.Text>
            7&deg;C
      </Card.Text>
        </Card.Body>
        <Card.Footer>
         <small className="text-muted">3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white" >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
          
        </Card.Text>
        </Card.Body>
        <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardColumns>
  </div>
)
