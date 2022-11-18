import React from 'react';
import * as Element from "react-bootstrap";
import './user-icon.scss';

function UserIcon({ image, options }) {
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
                    <Element.Image className='user-icon' src={image} style={{
                        borderRadius: '100%',
                        maxWidth: '58px',
                        maxHeight: '58px',
                        padding: '0'
                    }}>
                    </Element.Image>
                </Element.Dropdown.Toggle>
                <Element.Dropdown.Menu>
                    {
                        //TODO Se pueden replicar las opciones dependiendo lo que se busque.
                    }
                    <Element.Dropdown.Item href="#/action-1">Perfil</Element.Dropdown.Item>
                    <Element.Dropdown.Item href="#/action-2">Mis mascotas</Element.Dropdown.Item>
                    <Element.Dropdown.Divider />
                    <Element.Dropdown.Item href="#/action-3">Cerrar sesion</Element.Dropdown.Item>
                </Element.Dropdown.Menu>
            </Element.Dropdown>
        </div>
    );
} export default UserIcon;