import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Element from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/Logo.svg';
import EventList from '../EventList/event-list';
import QuestionsList from '../QuestionsList/QuestionsList';

function FrontPage() {
  return (
    <Element.Container className='main-container' >
      <img src={logo} alt="imagen principal perro" />
      <Element.Container className='close-events-container'>
        <h1 className='close-events-text' style={{
          paddingTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <FormattedMessage id="TopEvents" />
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
    </Element.Container >
  );
} export default FrontPage;


