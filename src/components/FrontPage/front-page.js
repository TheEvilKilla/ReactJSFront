import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Element from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
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
        <h1 className='my-questions' style={{
          paddingTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <FormattedMessage id = "MyQuestions"/>
        </h1>
        <QuestionsList ></QuestionsList>
      </Element.Container>
      <CreateEvent></CreateEvent>
    </Element.Container >
  );
} export default FrontPage;


