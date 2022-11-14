import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

// Se planea llamar con un for una lista de elementos. 
export default function EstablishmentCard(card) {
  return (
    <>
      <Col md={3}>
        <Card>
        <Card.Img variant="top" src = {card.image} />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Address>
              {card.address}
            </Card.Address>
            <Card.Address>
              {card.type}
            </Card.Address>
            <Card.Address>
              {card.city}
            </Card.Address>
            <Button variant="primary"> Read More</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}