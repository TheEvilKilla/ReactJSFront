import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../EstablishmentCard/EstablishmentCard.css';

function EstablishmentCard({id, name, address, city, image}) {
  var urlT = "http://localhost:3001/establishments/"+id
  return (
    <div>
      <Card style={{ width: '81rem', margin: "2rem 2rem 0rem 0rem" }}>
      <Card.Body className="event-card-allign">
        <Card.Text>
          <Row>
          <Col sm={3}>
            <img className="event-card-image" src={image} style={{
                                    borderRadius: '10%',
                                    maxWidth: '300px',
                                    maxHeight: '300px',
                                }} />
          </Col>
          <Col sm={9}>
            <h1>{name}</h1>
            <h5>{city}</h5>
            <h3>{address}</h3>
          </Col>
          <Button variant="text" href={urlT}>Read More</Button>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default EstablishmentCard;