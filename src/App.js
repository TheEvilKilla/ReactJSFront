import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Element from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import EventList from './components/EventList/event-list';
import RestaurantList from './components/EstablishmentList/Restaurant/establishment-list';
import HotelList from './components/EstablishmentList/Hotel/establishment-list';
import VetList from './components/EstablishmentList/Vet/establishment-list';
import Footer from './components/Footer/footer';
import FrontPage from './components/FrontPage/front-page';
import Header from './components/Header/header';
import Login from './components/SignIn/login/login';
import PostProfile from "./components/PostProfile/PostProfile";
import localeEnMessages from "./locales/en_profile";
import { IntlProvider } from 'react-intl';
import EstablishmentCardDetail from './components/EstablishmentList/EstablishmentCard/EstablishmentCardDetail';
import localeEsMessages from "./locales/es_profile";
import data from './MOCK_DATA.json';
import CreateAccount from './components/SignIn/create-account/create-account';
import './index.css';
import CreatePet from './components/CreatePet/createPet'

var usrlang = navigator.language;

let usrlang = navigator.language || navigator.userLanguage;
function App() {
  return (
    <Element.Container className='main-container' >
      <IntlProvider locale={usrlang} messages={usrlang === 'en' ? localeEnMessages : localeEsMessages}>
      <Header data={data} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/" element={<PostProfile />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/pets" element={<CreatePet />} />
          <Route path="/establishments/restaurants" element={<RestaurantList/>}/>
          <Route path="/establishments/hotels" element={<HotelList />} />
          <Route path="/establishments/vets" element={<VetList />} />
          <Route path="/establishments/:id" element={<EstablishmentCardDetail/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </IntlProvider>
    </Element.Container >
  );
} export default App;


