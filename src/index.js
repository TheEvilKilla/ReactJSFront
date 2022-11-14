import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import PostPet from "./components/PostPet/PostPet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PostProfile from "./components/PostProfile/PostProfile";
import Button from "react-bootstrap/Button";

import Col from 'react-bootstrap/Col';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Container className="mt-3" >
    <Row>
      <PostProfile name="Isabela Ortiz" login="i.ortizj" city="Bogota" />
    </Row>
    <Container className="mt-2" >
      <Row>
        <h2> Mis mascotas</h2>
      </Row>
    </Container>
    <Container className="mt-1" >
      <Row className="row-1">
        <Col className="col-pet">
          <PostPet name="Juana" species="Perro" image="./assets/perro.jpg" />
        </Col>
        <Col className="col-pet">
          <PostPet name="Toto" species="Gato" image="./assets/gato.png" />
        </Col>
      </Row>
    </Container>
    <Container className="mt-0" >
    <Row>
      <button className="button" >AGREGAR MASCOTA</button>
      </Row>
    </Container>
  </Container >

);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





