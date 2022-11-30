import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import perfil from "../../assets/perfil.png";
import PostPet from "../PostPet/PostPet";
import "./PostProfile";
import { FormattedMessage } from 'react-intl';
import Login from '../SignIn/login/login';


function PostProfile() {
    const [profile, setProfiles] = useState([]);

    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/286f816b-9376-4299-82aa-e4c0328d8cea";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setProfiles(data);
            });
    }, []);

    const [pets, setPets] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/286f816b-9376-4299-82aa-e4c0328d8cea";
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
