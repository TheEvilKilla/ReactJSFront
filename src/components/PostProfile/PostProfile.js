import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import perfil from "../../assets/perfil.png";
import PostPet from "../PostPet/PostPet";
import "./PostProfile";
import { FormattedMessage } from 'react-intl';
import Login from '../SignIn/login/login';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuestionsList from '../QuestionsList/QuestionsList';

function PostProfile() {



    const [profile, setProfiles] = useState([]);
    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("user-complete") != null) {
                setProfiles(localStorage.getItem("user-complete"));
            }
        } else {
            const URL =
                'http://localhost:3000/api/v1/users/' + localStorage.getItem('user');
            fetch(URL)
                .then((data) => data.json())
                .then((data) => {
                    setProfiles(data);
                    localStorage.setItem("user-complete", data);
                    console.log("data " + data)
                })
        }
    }, []);




    const [pets, setPets] = useState([]);

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("pets") != null) {
                setPets(localStorage.getItem("pets"));
            }
        } else {
            const URL =
                'http://localhost:3000/api/v1/users/' + localStorage.getItem('user');
            fetch(URL)
                .then((data) => data.json())
                .then((data) => {
                    setPets(data.pets);
                    localStorage.setItem("pets", data.pets);

                })

        }
    }, []);

    return (
        <Element.Container className='main-container' >
            <br></br>
            <br></br>

            < div class="container, PostProfile">
                <Row>
                    <Col>
                        <h1 scope="col"> <FormattedMessage id="Profile" /></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={perfil} alt="icono perfil" height="150" width="150" />
                    </Col>
                    <Col>
                        <h2>{profile.name}</h2>
                        <h3>{profile.login}</h3>
                        <h3>{profile.city}</h3>
                    </Col>
                </Row>
            </div>
            <div>
                <br></br>
                <br></br>
                <h1 scope="row"> <FormattedMessage id="MyPets" /></h1>
                {pets.map(elem => {
                    return (
                        <PostPet name={elem.name} species={elem.species} image={elem.image} ></PostPet>)
                })}
            </div>

            <Element.Container className="mt-3">
                <h1 className='my-questions' style={{
                    paddingTop: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <FormattedMessage id="MyQuestions" />
                </h1>
                <QuestionsList ></QuestionsList>
            </Element.Container>
        </Element.Container>

    );
}

export default PostProfile;
