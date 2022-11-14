import "./EstablishmentCreate"
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function EstablishmentCreate(est) {
    return (
        < div class="container, PostProfile">
            <div class="row">
                <div class="col">
                    <div class = "col">
                        <img src="https://vegaslens.com/wp-content/uploads/2020/01/Pet-Friendly-Restaurants-in-Las-Vegas.jpg" alt="icono perfil" height="150" width="150" />
                    </div>
                    <div class = "col">
                        <h1>{est.name}</h1>
                        <h2>{est.address}</h2>
                        <h3>{est.type}</h3>
                        <h3>{est.city}</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <div menu>
                        <h1> {est.menu} </h1>
                    </div>
                </div>
              
            </div>
        </div>
    );
}