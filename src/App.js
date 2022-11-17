import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Element from 'react-bootstrap';
import logo from './assets/Logo.svg';
import gato from './assets/gato.png'
import EventList from './components/EventList/event-list';
import NavBar from './components/NavBar/nav-bar';
import Header from './components/Header/header';
import PostPet from './components/PostPet/PostPet';
import PostProfile from './components/PostProfile/PostProfile';

import data from './MOCK_DATA.json';
import './App.css';

function App() {
  return (
    <Element.Container className='main-container' >
      <Header data={data} userIcon={gato}></Header>
      <img src={logo} />
      <Element.Container className='close-events-container'>
        <h1 className='close-events-text' style={{
          paddingTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          Top eventos cercanos a tí
        </h1>
        <EventList></EventList>
      </Element.Container>
      {/*<Element.Row>
        <PostProfile name='Isabela Ortiz' login='i.ortizj' city='Bogota' />
      </Element.Row>
      <Element.Container className='mt-2' >
        <Element.Row>
          <h2> Mis mascotas</h2>
        </Element.Row>
      </Element.Container>
      <Element.Container className='mt-1' >
        <Element.Row className='row-1'>
          <Element.Col className='col-pet'>
            <PostPet name='Juana' species='Perro' image='./assets/perro.jpg' />
          </Element.Col>
          <Element.Col className='col-pet'>
            <PostPet name='Toto' species='Gato' image='./assets/gato.png' />
          </Element.Col>
        </Element.Row>
      </Element.Container>
      <Element.Container className='mt-0' >
        <Element.Row>
          <button className='button' >AGREGAR MASCOTA</button>
        </Element.Row>
      </Element.Container>*/}
    </Element.Container >
  );

  //Se comenta porque no funciona.
  /*root.render(
      <EstablishmentCard name='La perrera' address='Calle 44d' type='Restaurante' city='Bogota' image='https://th.bing.com/th/id/OIP.CyLB5L3r3QlAls4bDpbcCgHaE9?pid=ImgDet&rs=1'/>
  );*/
} export default App;


