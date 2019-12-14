import React from 'react'
import {  Card,CardColumns,Badge } from 'react-bootstrap';

export const Home = () => (
  <div>
    <CardColumns>
      <Card bg="dark" border="secondary" text="white" className="text-center">
        <Card.Header>Temperatura Zew.</Card.Header>
        <Card.Body>
          <Card.Text>
          -1&deg;C
      </Card.Text>
        </Card.Body>
        <Card.Footer>
         <small className="text-muted">3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" border="secondary" text="white" className="text-center">
      <Card.Header>Temperatura Salon.</Card.Header>
      <Card.Body>
        <Card.Text>
        19&deg;C
    </Card.Text>
      </Card.Body>
      <Card.Footer>
       <small className="text-muted">3 mins ago</small>
      </Card.Footer>
    </Card>
    </CardColumns>
    <Badge variant="secondary">Temperatura Zew. -7&deg;C</Badge>

    </div>
)
