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
          <path style="" fill="#7f7f7f" stroke="none" d="M53.125,120L25,120A75,75,0,0,1,175,120L146.875,120A46.875,46.875,0,0,0,53.125,120Z" fill-opacity="0.5" filter="url(#inner-shadow-gauge_64)"></path>
        </Card.Text>
        </Card.Body>
        <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardColumns>
  </div>
)
