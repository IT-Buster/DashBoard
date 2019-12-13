import React from 'react'
import {  Card,CardColumns,Badge } from 'react-bootstrap';

export const Home = () => (
  <div>
    <CardColumns>
      <Card bg="dark" border="secondary" text="white" className="text-center">
        <Card.Header>Temperatura Zew.</Card.Header>
        <Card.Body>
          <Card.Text>
          <h3>
           7&deg;C
           </h3>
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
