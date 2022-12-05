import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Element from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import EventList from './components/EventList/event-list';
import Footer from './components/Footer/footer';
import FrontPage from './components/FrontPage/front-page';
import Header from './components/Header/header';
import Login from './components/SignIn/login/login';
import PostProfile from "./components/PostProfile/PostProfile";
import localeEnMessages from "./locales/en_profile";
import localeEsMessages from "./locales/es_profile";
import data from './MOCK_DATA.json';
import CreateAccount from './components/SignIn/create-account/create-account';
import './index.css';
import CreatePet from './components/CreatePet/createPet'

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

        </Routes>
      </BrowserRouter>
      <Footer />
      </IntlProvider>
    </Element.Container >
  );
} export default App;


