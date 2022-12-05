import React from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
//import '../establishment-list.css';
import '../EstablishmentCard/EstablishmentCard.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

function EstablishmentCardDetail() {
    const {id} = useParams();
    const [establishment, setEstablishment] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/establishments";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setEstablishment(data.filter((data) => data.id === id.toString()));
            });
    }, []);
    console.log(establishment)
  return (
    <div>
         {establishment.map((elem) => (
            <Card className="establishment-card" style={{ width: '81rem', margin: "2rem 2rem 0rem 0rem" }}>
            <Card.Body>
            <Card.Text>
            <Row>
            <Col sm={3}>
                    <img className="event-card-image" src={elem.image} style={{
                                            borderRadius: '10%',
                                            maxWidth: '300px',
                                            maxHeight: '300px',
                                        }} />
            </Col>
            <Col sm={9}>
                    <h1>{elem.name}</h1>
                    <h5>{elem.city}</h5>
                    <h3>{elem.address}</h3>
                    
            </Col>
            </Row>
            <Row>
            <h10 className='establishment-card-detail' >{elem.description}</h10>
            </Row>
              </Card.Text>
            </Card.Body>
          </Card>
         ))}
    </div>

  );
}
export default EstablishmentCardDetail;