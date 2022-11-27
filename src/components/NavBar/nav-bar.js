import React from 'react';
import * as Element from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import NavButton from './NavButton/nav-button';
import restaurant from '../../assets/restaurant.svg';
import hotel from '../../assets/hotel.svg';
import vet from '../../assets/vet.svg';
import other from '../../assets/other.svg';
import './nav-bar.css';

function NavBar() {
    const buttonsContent = [{ text: 'Restaurants', icon: restaurant, href: '/restaurants' },
    { text: 'Hotels', icon: hotel, href: '/hotels'},
    { text: 'Vets', icon: vet, href: '/vets' },
    { text: 'Events', icon: other, href: '/events' }];

    return (
        <div className='nav-bar'>
            <Element.Row className='nav-bar-row'>
                {buttonsContent.map(btn => (
                    <Element.Col key={btn.text} className='nav-bar-element'>
                        <NavButton text={btn.text} icon={btn.icon} href={btn.href} />
                    </Element.Col>
                ))}
            </Element.Row>
        </div>
    );
} export default NavBar;