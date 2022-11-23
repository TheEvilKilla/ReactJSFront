import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Element from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import EventList from './components/EventList/event-list';
import Footer from './components/Footer/footer';
import FrontPage from './components/FrontPage/front-page';
import Header from './components/Header/header';
import PostPet from "./components/PostPet/PostPet";
import PostProfile from "./components/PostProfile/PostProfile";
import './index.css';
import data from './MOCK_DATA.json';


function App() {
  return (
    <Element.Container className='main-container' >
      <Header data={data}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/mascotas" element={<PostPet />} />
          <Route path="/users/" element={<PostProfile/>} />
          <Route path="/events" element={<EventList/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </Element.Container >
  );
  
  //Se comenta porque no funciona.
  /*root.render(
      <EstablishmentCard name='La perrera' address='Calle 44d' type='Restaurante' city='Bogota' image='https://th.bing.com/th/id/OIP.CyLB5L3r3QlAls4bDpbcCgHaE9?pid=ImgDet&rs=1'/>
  );*/
} export default App;


