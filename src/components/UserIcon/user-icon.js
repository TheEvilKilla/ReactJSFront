import React, {useState} from 'react';
import * as Element from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/perfil.png';
import './user-icon.scss';

function UserIcon({ image, options }) {
    const logout = () => {
        localStorage.clear();
    }

    const isLogged = () => {
        return (
            <Element.Dropdown.Menu>
                <Element.Dropdown.Item href="/users"><FormattedMessage id="Profile" /></Element.Dropdown.Item>
                <Element.Dropdown.Divider />
                <Element.Dropdown.Item href='/' onClick={() => logout()}><FormattedMessage id="Log Out" /></Element.Dropdown.Item>
            </Element.Dropdown.Menu>
        );
    }

    const notLogged = () => {
        return (
            <Element.Dropdown.Menu>
                <Element.Dropdown.Item href="/login">Login</Element.Dropdown.Item>
            </Element.Dropdown.Menu>
        );
    }
    //https://react-bootstrap.github.io/components/dropdowns/
    return (
        <div className='user-icon-container'>
            <Element.Dropdown className="dropdown-container">
                <Element.Dropdown.Toggle className="dropdown-toggle" style={{
                    borderRadius: '100%',
                    width: '58px',
                    height: '58px',
                    maxWidth: '58px',
                    maxHeight: '58px',
                    border: '0',
                    padding: '0',
                    backgroundColor: 'rgba(255,255,255,0)'
                }}>
                    <Element.Image className='user-icon' src={logo} alt = "user icon" style={{
                        borderRadius: '100%',
                        maxWidth: '58px',
                        maxHeight: '58px',
                        padding: '0'
                    }}>
                    </Element.Image>
                </Element.Dropdown.Toggle>
                {
                    localStorage.getItem('user') !== null ? isLogged() : notLogged()
                }
            </Element.Dropdown>
        </div>
    );
} export default UserIcon;