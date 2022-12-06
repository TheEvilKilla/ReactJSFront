import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CreatePet from './components/CreatePet/createPet';
import EstablishmentCardDetail from './components/EstablishmentList/EstablishmentCard/EstablishmentCardDetail';
import HotelList from './components/EstablishmentList/Hotel/establishment-list';
import RestaurantList from './components/EstablishmentList/Restaurant/establishment-list';
import VetList from './components/EstablishmentList/Vet/establishment-list';
import EventList from './components/EventList/event-list';
import Footer from './components/Footer/footer';
import FrontPage from './components/FrontPage/front-page';
import Header from './components/Header/header';
import PostProfile from "./components/PostProfile/PostProfile";
import CreateAccount from './components/SignIn/create-account/create-account';
import Login from './components/SignIn/login/login';
import './index.css';
import localeEnMessages from "./locales/en_profile";
import localeEsMessages from "./locales/es_profile";

var usrlang = navigator.language;

function App() {
  const [data, setData] = useState();

    useEffect(() => {
        const URL =
            'http://localhost:3000/api/v1/establishments';
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setData(data);
            });
    }, [data]);

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


