import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
//import EventCard from './EventCard/event-card';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import './PostPet.css'
import dog from "../../assets/perro.jpg"


function PostPet(props) {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const URL =
      "http://localhost:3000/api/v1/pets";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setPets(data);
      });
  }, []);
  return (
    <h1></h1>
    //AQUI VA LA PARTE DE LISTAR LAS MASCOTAS DE UN USUARIO, SIN EMBARGO NO ESTÁ SIRVIENDO POR TEMAS DE SEGURIDAD
/*
    <div className='PostPet'>
        <h1></h1>
      <Element.Col>
        {pets.slice(0, 5).map(elem => {
          return (
            <Element.Row>
              <Card style={{ width: "16rem" }}>


                <Card.Title>{elem.name}</Card.Title>
                <Card.Text>{elem.species}</Card.Text>
                <img src={dog} alt="perro" />

              </Card>
            </Element.Row>)
        })}
      </Element.Col>

    </div>
*/




    /*
        <div className="PostPet">
          <Col>
            <Card style={{ width: "16rem" }}>
              
              <Card.Body className="card">
    
                <Card.Title>{props.name}</Card.Title>         
                <Card.Text>{props.species}</Card.Text>          
                <img src ={dog} alt = "perro"/>
              </Card.Body>
            </Card>
          </Col>
          </div>*/
  );
}

export default PostPet;
