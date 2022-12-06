import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import EstablishmentCard from '../EstablishmentCard/EstablishmentCard';
import '../establishment-list.css';

function RestaurantList() {
    const [establishment, setEstablishment] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/establishments";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setEstablishment(data.filter((data) => data.type === "Restaurant"));
            });
    }, []);
    return (
        <div className='establishment-card-list'>
            <Element.Col>
                {establishment.slice(0, 5).map(elem => {
                    return (
                    <Element.Row>
                        <EstablishmentCard margin-bottom={"20rem"} id={elem.id} name={elem.name} image={elem.image} address={elem.address} city={elem.city} description={elem.description}   ></EstablishmentCard>
                    </Element.Row>)
                })}
            </Element.Col>
        </div>
    );
} export default RestaurantList;