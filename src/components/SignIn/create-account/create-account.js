import React, { useEffect, useState, useRef } from 'react';
import * as Element from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { FormattedMessage } from 'react-intl';
import DefaultImg from '../../../assets/perfil.png';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import "primeicons/primeicons.css";
import './create-account.scss';

function CreateAccount() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasRoles, setHasRoles] = useState(true);
    const [validated, setValidated] = useState(false);

    const onCityChange = (e) => {
        setSelectedCity(e.value);
    }

    const onNameChange = (e) => {
        setName(e);
    }

    const onEmailChange = (e) => {
        setEmail(e);
    }

    const onPasswordChange = (e) => {
        setPassword(e);
    }

    const onSwitch = () => {
        setHasRoles(!hasRoles)
    }

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const logout = () => {
        localStorage.clear();
    }
    function logged() {
        return (
            <div>
                <h1 className='create-event-title' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '10px'
                }}><FormattedMessage id="Logged" /></h1>
                <a href='/login' onClick={logout} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'black',
                    fontWeight: '500',
                }}><FormattedMessage id="Incorrect" /></a>
            </div>
        );
    }

    function notLogged() {
        return (
            <div>
                <h1 className='create-event-title' style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}><FormattedMessage id="CreateAcct" /></h1>
                <Element.Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Element.Form.Group controlId='createAccountForm' className='user-form' style={{
                        paddingTop: '10px',
                        paddingBottom: '10px'
                    }}>
                        <div class='grid' className='grid5'>
                            <div class='grid-item' >
                                <FormattedMessage id="Name">
                                    {ph =>
                                        <Element.Form.Control type='text' placeholder={ph} onChange={e => onNameChange(e.target.value)} required />
                                    }
                                </FormattedMessage>
                                <Element.Form.Control.Feedback type="invalid">
                                    <FormattedMessage id="AssignName" />
                                </Element.Form.Control.Feedback>
                            </div>
                            <div class='grid-item'>
                                <FormattedMessage id="Mail">
                                    {ph =>
                                        <Element.Form.Control type='email' placeholder={ph} onChange={e => onEmailChange(e.target.value)} required />
                                    }
                                </FormattedMessage>
                                <Element.Form.Control.Feedback type="invalid">
                                    <FormattedMessage id="AssignMail" />
                                </Element.Form.Control.Feedback>
                            </div>
                            <div class='grid-item' >
                                <FormattedMessage id="Password">
                                    {ph =>
                                        <Element.Form.Control type='password' placeholder={ph} onChange={e => onPasswordChange(e.target.value)} required />
                                    }
                                </FormattedMessage>
                                <Element.Form.Control.Feedback type="invalid">
                                    <FormattedMessage id="AssignPass" />
                                </Element.Form.Control.Feedback>
                            </div>
                            <div class='grid-item' >
                            <FormattedMessage id="PickACity">
                                    {ph =>
                                        <Dropdown className='login-city-form' value={selectedCity} options={cities} onChange={onCityChange} optionLabel="name" placeholder={ph} required />
                                    }
                            </FormattedMessage>
                                
                            </div>
                            <div class='grid-item' >
                                <Element.Form>
                                <FormattedMessage id="Propietary">
                                    {ph =>
                                        <Element.Form.Check
                                        type="switch"
                                        id="roles-switch"
                                        label={ph}
                                        onChange={onSwitch}
                                    />
                                    }
                            </FormattedMessage>
                                   
                                </Element.Form>
                            </div>
                        </div>
                    </Element.Form.Group>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: '10px'
                    }}>
                        <Element.Button type="submit" className='create-account-submit'>
                            <FormattedMessage id="CreateUsr" />
                        </Element.Button>
                    </div>
                </Element.Form>
                <a href='/login' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'black',
                    fontWeight: '500'
                }}><FormattedMessage id="AlreadyAcc" /></a>
            </div>
        );
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        createUser();
    };

    function createUser() {
        let login = email;
        let city = selectedCity.name;
        let image = 'https://img.freepik.com/vector-premium/avatar-perfil-usuario-femenino-es-mujer-personaje-protector-pantalla-emociones_505620-617.jpg';

        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, login, password, city, image }),
        }).then(response => {
            console.log(response.text());
            return response.text();
        })

        if (hasRoles) {
            fetch('http://localhost:3000/api/v1/user-auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: 'userEventAll', password: '123' }),
            }).then(response => {
                console.log(response.text());
                return response.text();
            })
        } else {
            fetch('http://localhost:3000/api/v1/user-auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: 'userEventRead', password: '123' }),
            }).then(response => {
                console.log("No entro" + response.text());
                return response.text();
            })
        }
    }

    return (
        <div className='create-acount-container' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '50px',
            paddingBottom: '50px'
        }}>
            <Element.Card className='login-card' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '650px',
                height: 'auto',
                paddingBottom: '10px',
                borderRadius: '24px',
                backgroundColor: 'rgba(255,255,255, 0.25)',
                backdropFilter: 'blur(20px)',
                border: '4px solid #000'

            }}>
                {localStorage.length == 0 ? notLogged() : logged()}
            </Element.Card>
        </div>
    );
} export default CreateAccount;