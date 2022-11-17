import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './App.css';
import logo from './assets/Logo.svg';
import icono from './assets/magnifying-glass.png';
import EventList from './components/EventList/event-list';
import NavBar from './components/NavBar/nav-bar';
import PostPet from "./components/PostPet/PostPet";
import PostProfile from "./components/PostProfile/PostProfile";
import SearchBar from './components/SearchBar/search-bar';
import './index.css';
import data from './MOCK_DATA.json';

function App() {
  return (
    <Container className="main-container" >
      <div className='search-bar-container' style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-around',
      }}>
        <div style={{
          width: '700px'
        }}>
          <SearchBar placeholder='Busqueda' icon={icono} data={data}></SearchBar>
        </div>
      </div>

      <NavBar></NavBar>
      <img src={logo} />
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
        <EventList></EventList>
      </Container>
    </Container >
  );

  //Se comenta porque no funciona.
  /*root.render(
      <EstablishmentCard name="La perrera" address="Calle 44d" type="Restaurante" city="Bogota" image="https://th.bing.com/th/id/OIP.CyLB5L3r3QlAls4bDpbcCgHaE9?pid=ImgDet&rs=1"/>
  );*/
}

export default App;
