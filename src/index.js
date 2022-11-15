import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import PostPet from "./components/PostPet/PostPet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PostProfile from "./components/PostProfile/PostProfile";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import EventCard from './components/EventList/EventCard/event-card';
import img from './assets/gato.png'
import fotoPerfil from './assets/usuario1.jpeg'
import fotoPerfil2 from './assets/perro.jpg'
import ReviewCard from './components/ReviewList/review-list';
import NavBar from './components/NavBar/nav-bar';
import SearchBar from './components/SearchBar/search-bar';
import icono from './assets/magnifying-glass.png';
import data from './MOCK_DATA.json';
import EstablishmentCard from "./components/EstablishmentCard/EstablishmentCard";
import EventList from './components/EventList/event-list';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Container className="mt-3" >
    <SearchBar placeholder='Busqueda' icon= {icono} data={data}></SearchBar>
    <NavBar></NavBar>
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
    <Container>
      <h1 className='close-events'>
        Top eventos cercanos a tí
      </h1>
        <EventCard image={img} name='Evento 1' city='Bogota' date='16 de octubre' description='Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '></EventCard>
      <EventCard image={img} name='Evento 2' city='Bogota' date='17 de octubre' description='Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '></EventCard>
      
      <EventList></EventList>
    </Container>

    <Container>
      <h1 className='reviews'>
        Reseñas
      </h1>
      <ReviewCard image={fotoPerfil}  userName='Caroline' rating='calificacion: 4/5' date='17 de octubre' description='Gran lugar para pasar un rato, 
      sin duda una experiencia maravillosa para pasar junto a tu mascota '></ReviewCard>
      <ReviewCard image={fotoPerfil2}  userName='Caroline' rating='calificacion: 5/5' date='23 de diciembre' description='Impecable atencion y servicio.'></ReviewCard>
    </Container>    
  </Container >

);

//Se comenta porque no funciona.
/*root.render(
    <EstablishmentCard name="La perrera" address="Calle 44d" type="Restaurante" city="Bogota" image="https://th.bing.com/th/id/OIP.CyLB5L3r3QlAls4bDpbcCgHaE9?pid=ImgDet&rs=1"/>
);*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





