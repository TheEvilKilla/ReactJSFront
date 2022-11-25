import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import perfil from "../../assets/perfil.png";
import PostPet from "../PostPet/PostPet";
import "./PostProfile";
import { FormattedMessage } from 'react-intl';
import Login from '../Create-Login/login/login';


function PostProfile() {
    const [profile, setProfiles] = useState([]);

    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/a7b274f0-48df-4d6f-afbd-fd4cb9b2cc72";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setProfiles(data);
            });
    }, []);

    const [pets, setPets] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/a7b274f0-48df-4d6f-afbd-fd4cb9b2cc72";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setPets(data.pets);
            });
    }, []);

    return (
        <Element.Container className='main-container' >
            < div class="container, PostProfile">
                <div class="row">
                    <div class="col-sm">
                    <h1 scope="col"> <FormattedMessage id="Profile" /></h1>
                    </div>
                    <div class="col-8">
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                    </div>
                    <div class="col-2">
                        <img src={perfil} alt="icono perfil" height="150" width="150" />
                    </div>
                    <div class="col-8">
                        <h3>{profile.name}</h3>
                        <h4>{profile.login}</h4>
                        <h4>{profile.city}</h4>
                    </div>
                </div>
            </div>
            <div>
            <h1 scope="col"> <FormattedMessage id="MyPets" /></h1>

                {pets.map(elem => {
                    return (
                        <PostPet name={elem.name} species={elem.species} image={elem.image} ></PostPet>)
                })}
            </div>
        </Element.Container>

    );
}

export default PostProfile;
