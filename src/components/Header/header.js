import React, { useEffect, useState } from 'react';
import * as Element from "react-bootstrap";
import SearchBar from '../SearchBar/search-bar';
import UserIcon from '../UserIcon/user-icon';
import NavBar from '../NavBar/nav-bar';
import HeaderLogo from '../../assets/PetPlace.svg';
import './header.scss';

function Header({ data }) {
    const [user, setUser] = useState({});
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/59afae09-6c26-41ee-8bf0-086f9b659717";
        fetch(URL)
            .then(data => data.json())
            .then(data => {
                setUser(data);
            });
    }, []);

    //Trae la data de los establecimientos. No existe el api
    /*const [establishments, setEstablishments] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/486ef9d5-315c-4fb4-95c8-9e9ae46208ba";
        fetch(URL)
            .then(data => data.json())
            .then(data => {
                setEstablishments(data);
            });
    }, []);*/

    return (
        <div className="header-container">
            <div className='search-bar-container' style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div>
                    <a href='/'>
                        <img src={HeaderLogo} alt ="logo" style={{
                            width: '145px',
                            maxWidth: '145px',

                        }}></img>
                    </a>
                </div>
                <div style={{ width: '10%', }} />
                <div style={{
                    width: '700px',
                }}>
                    <SearchBar placeholder='Search' data={data} />
                </div>
                <div style={{ width: '20%', }} />
                <div style={{
                    width: '58px',
                }}>
                    <UserIcon image={user.image} />
                </div>
            </div>
            <NavBar></NavBar>
        </div>

    );
} export default Header;