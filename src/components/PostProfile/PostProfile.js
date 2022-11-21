import "./PostProfile"
import perfil from "../../assets/perfil.png"
import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import PostPet from "../PostPet/PostPet";
import Header from '../Header/header';
import data from '../../MOCK_DATA.json';


function PostProfile() {
    const [profile, setProfiles] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3000/api/v1/users/c7f8d124-adea-45f2-8022-026df0f1f43f";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setProfiles(data);
            });
    }, []);
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
            <PostPet>
            </PostPet>
        </Element.Container>
    );
}


export default PostProfile;
