import React, { useEffect, useState, useRef } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import * as Element from 'react-bootstrap';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import './login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [profile, setProfile] = useState();

    const navigate = useNavigate();
    useEffect(() => {
        const URL =
            'http://localhost:3000/api/v1/users';
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                const user = data.filter(e => {
                    if (e.login == email && e.password == password) {
                        return e;
                    }
                });
                setProfile(user);
            });
    }, [profile]);

    const onEmailChange = (e) => {
        setEmail(e);
    }

    const onPasswordChange = (e) => {
        setPassword(e);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if (profile.length !== 0){
            const perfil = profile[0].id;
            localStorage.setItem('user', perfil);
            navigate('/');
            window.location.reload();
        }            
    };

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
                }}>Usted ya se encuentra loggeado</h1>
                <a href='/login' onClick={logout} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'black',
                    fontWeight: '500',                    
                }}>¿Es la cuenta incorrecta? Cierre sesión</a>
            </div>
        );
    }
    function notLogged() {
        return (
            <div>
                <h1 className='create-event-title' style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>Ingresar</h1>
                <Element.Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Element.Form.Group controlId='loginForm' className='user-form' style={{
                        paddingTop: '10px',
                        paddingBottom: '10px'
                    }}>
                        <div class='grid'>
                            <div class='grid-item'>
                                <Element.Form.Control type='email' placeholder='Correo' onChange={e => onEmailChange(e.target.value)} required />
                                <Element.Form.Control.Feedback type='invalid'>
                                    Ingrese un correo valido
                                </Element.Form.Control.Feedback>
                            </div>
                            <div class='grid-item' >
                                <Element.Form.Control type='password' placeholder='Password' onChange={e => onPasswordChange(e.target.value)} required />
                                <Element.Form.Control.Feedback type='invalid'>
                                    Ingrese la contraseña
                                </Element.Form.Control.Feedback>
                            </div>
                        </div>
                    </Element.Form.Group>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: '10px'
                    }}>
                        <Element.Button type='submit' className='create-account-submit'>
                            Login
                        </Element.Button>
                    </div>
                </Element.Form>
                <a href='/create' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'black',
                    fontWeight: '500'
                }}>¿No tiene una cuenta? Crear cuenta</a>
            </div>
        );
    }

    return (
        <div className='login-container' style={{
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
} export default Login;
