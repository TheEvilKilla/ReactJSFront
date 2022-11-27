import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function EstablishmentCard({ name, address, city}) {
  return (
    <Card style={{ width: '85rem', margin: "2rem 2rem 0rem 0rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <Col sm={4}>
            <img className="event-card-image" src='https://th.bing.com/th/id/R.e7961605ad028fd58e1dc22f49119dc1?rik=dkcvD%2f0EZ0ULzQ&riu=http%3a%2f%2fwww.storytrender.com%2fwp-content%2fuploads%2f2018%2f09%2f25_MPM-LUXURY_DOG_HOTEL-8-1024x683.jpg&ehk=2el9ycQfGll62JEMmx1xtKfpqbiKbqadOYuTM3z%2fz7w%3d&risl=&pid=ImgRaw&r=0' style={{
                                    borderRadius: '20%',
                                    maxWidth: '252px',
                                    maxHeight: '252px',
                                }} />
          </Col>
          <Col sm={8}>
            <h1>{name}</h1>
            <h5>{city}</h5>
            <h3>{address}</h3>
            <h3>{city}</h3>
          </Col>
        </Card.Text>
        <Button variant="text">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default EstablishmentCard;