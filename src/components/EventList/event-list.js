import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import EventCard from './EventCard/event-card';
import img from '../../assets/gato.png'
import './event-list.css';

function EventList({ slice }) {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/events";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setEvents(data);
            });
    }, [events]);


    return (
        <div className='event-card-list'>
            <Element.Col>
                {
                    slice === 'true' ?
                        events.slice(0, 3).map(elem => {
                            return (
                                <Element.Row>
                                    <EventCard image={elem.image} name={elem.name} city={elem.city} date={elem.date} description={elem.description}></EventCard>
                                </Element.Row>)
                        }) :
                        events.map(elem => {
                            return (
                                <Element.Row>
                                    <EventCard image={elem.image} name={elem.name} city={elem.city} date={elem.date} description={elem.description}></EventCard>
                                </Element.Row>)
                        })
                }
            </Element.Col>
        </div>
    );
} export default EventList;