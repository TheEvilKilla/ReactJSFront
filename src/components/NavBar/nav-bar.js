import React from 'react';
import * as Element from 'react-bootstrap';
import NavButton from './NavButton/nav-button';
import restaurant from '../../assets/restaurant.svg';
import hotel from '../../assets/hotel.svg';
import vet from '../../assets/vet.svg';
import other from '../../assets/other.svg';
import './nav-bar.css';

function NavBar() {
    const buttonsContent = [{ text: 'Restaurantes', icon: restaurant, href: '/establishments/restaurants' },
    { text: 'Hoteles', icon: hotel, href: '/establishments/hotels'},
    { text: 'Veterinarias', icon: vet, href: '/establishments/vets' },
    { text: 'Cosas por hacer', icon: other, href: '/events' }];

    return (
        <div className='nav-bar'>
            <Element.Row className='nav-bar-row'>
                {buttonsContent.map(btn => (
                    <Element.Col className='nav-bar-element'>
                        <NavButton text={btn.text} icon={btn.icon} href={btn.href} />
                    </Element.Col>
                ))}
            </Element.Row>
        </div>
    );
} export default NavBar;