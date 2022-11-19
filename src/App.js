import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Element from 'react-bootstrap';
import logo from './assets/Logo.svg';
import gato from './assets/gato.png'
import Header from './components/Header/header';
import data from './MOCK_DATA.json';
import './App.css';
import EventList from './components/EventList/event-list';
import PostPet from "./components/PostPet/PostPet";
import PostProfile from "./components/PostProfile/PostProfile";
import QuestionsList from './components/QuestionsList/QuestionsList';
import './index.css';
import FrontPage from './components/FrontPage/front-page';

function App() {
  return (
    <Element.Container className='main-container' >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/mascotas" element={<PostPet />} />
        </Routes>
      </BrowserRouter>
    </Element.Container >
  );

  //Se comenta porque no funciona.
  /*root.render(
      <EstablishmentCard name='La perrera' address='Calle 44d' type='Restaurante' city='Bogota' image='https://th.bing.com/th/id/OIP.CyLB5L3r3QlAls4bDpbcCgHaE9?pid=ImgDet&rs=1'/>
  );*/
} export default App;


