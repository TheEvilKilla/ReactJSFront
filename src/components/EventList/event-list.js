import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import EventCard from './EventCard/event-card';
import img from '../../assets/gato.png'
import './event-list.css';

function EventList() {
    const eventos= [{ image: img, name: 'Evento 1', city: 'Bogota', date: '15 de octubre', description: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` },
    { image: img, name: 'Evento 2', city: 'Medellin', date: '16 de octubre', description: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` },
    { image: img, name: 'Evento 3', city: 'Cali', date: '17 de octubre', description: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` }];

    return (
        <div className='event-card-list'>
            <Element.Col>
                {eventos.slice(0, 5).map(elem => {
                    return (
                    <Element.Row>
                        <EventCard image={elem.image} name={elem.name} city={elem.city} date={elem.date} description={elem.description}></EventCard>
                    </Element.Row>)

                })}
            </Element.Col>
        </div>
    );
} export default EventList;