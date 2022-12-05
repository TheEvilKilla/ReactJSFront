import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
//import EventCard from './EventCard/event-card';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import './PostPet.css'
import dog from "../../assets/perro.jpg"

function PostPet({name, species, image}) {
  
  return (
        <div className="PostPet">
            <Card style={{ width: "16rem" }}> 
              <Card.Body className="card">
                <Card.Title>{name}</Card.Title>         
                <Card.Text>{species}</Card.Text>          
                <img src ={image} alt = "imagen de la mascota" className = "card--image"/>
              </Card.Body>
            </Card>
        
          </div>
  );
}

export default PostPet;
