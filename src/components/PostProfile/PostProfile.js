import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import perfil from "../../assets/perfil.png";
import PostPet from "../PostPet/PostPet";
import "./PostProfile";


function PostProfile() {
    const [profile, setProfiles] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/42d1d0ad-398f-4997-b5c7-ad1217048a43";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setProfiles(data);
            });
    }, []);

    const [pets, setPets] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/42d1d0ad-398f-4997-b5c7-ad1217048a43";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setPets(data.pets);
            });
    }, []);

    console.log(pets);
    return (
        <Element.Container className='main-container' >
            < div class="container, PostProfile">
                <div class="row">
                    <div class="col-sm">
                        <h1>Perfil</h1>
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
                {pets.map(elem => {
                    return (
                        <PostPet name={elem.name} species={elem.species} image={elem.image} ></PostPet>)
                })}
            </div>
        </Element.Container>

    );
}


export default PostProfile;
