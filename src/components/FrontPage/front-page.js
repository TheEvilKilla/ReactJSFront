import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Element from 'react-bootstrap';
import logo from '../../assets/Logo.svg';
import CreateEvent from '../CreateEvent/create-event';
import EventList from '../EventList/event-list';
import QuestionsList from '../QuestionsList/QuestionsList';

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
        <QuestionsList user='Usuario X' date='3 de marzo' content='¿Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ?' placeholder='Responder'></QuestionsList>
      </Element.Container>
      <CreateEvent></CreateEvent>
    </Element.Container >
  );
} export default FrontPage;


