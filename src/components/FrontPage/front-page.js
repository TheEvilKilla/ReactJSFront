import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Element from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from '../../assets/Logo.svg';
import EventList from '../EventList/event-list';
import Header from '../Header/header';
import PostPet from "../PostPet/PostPet";
import QuestionsList from '../QuestionsList/QuestionsList';
import data from '../../MOCK_DATA.json';
import UserIcon from '../UserIcon/user-icon';

function FrontPage() {
  return (
    <Element.Container className='main-container' >
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
      <Element.Container className="mt-3">
      <h1 className='my-questions'>
        Mis preguntas:
      </h1>
      <QuestionsList user = 'Usuario X' date = '3 de marzo' content='¿Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ?' placeholder = 'Responder'></QuestionsList>
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
} export default FrontPage;


