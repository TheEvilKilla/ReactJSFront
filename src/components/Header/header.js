import React from "react";
import * as Element from "react-bootstrap";
import SearchBar from '../SearchBar/search-bar';
import UserIcon from '../UserIcon/user-icon';
import NavBar from '../NavBar/nav-bar';
import './header.scss';

function Header({ data, userIcon }) {
    return (
        <div className="header-container">
            <div className='search-bar-container' style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div style={{ width: '20%', }} />
                <div style={{
                    width: '700px',
                }}>
                    <SearchBar placeholder='Busqueda' data={data} />
                </div>
                <div style={{ width: '20%', }} />
                <div style={{
                    width: '58px',
                }}>
                    <UserIcon image={userIcon} />
                </div>
            </div>
            <NavBar></NavBar>
        </div>

    );
} export default Header;