import React, { useEffect, useState, useRef } from 'react';
import * as Element from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import "primeicons/primeicons.css";
import './create-pet.scss';

function CreatePet() {
    

    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');

    const onNameChange = (e) => {
        setName(e);
    }


    const [selectedSpecie, setSelectedSpecie] = useState(null);
        
    const species = [
        { name: 'Perro' },
        { name: 'Gato' },
        { name: 'Pajaro' },
    ];

    const onSpecieChange = (e) => {
        setSelectedSpecie(e.value);
    }

    function create(){
    return (
        <Element.Form noValidate onSubmit={handleSubmit}>

        <div className='create-pet-container' style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Element.Card className='create-pet-card' style={{
                width: '894px',
                height: 'auto',
                maxWidth: '894px',
                borderRadius: '24px',
                verticalAlign: 'center',
                backgroundColor: 'rgba(255,255,255, 0.25)',
                backdropFilter: 'blur(20px)',
                border: '4px solid #fff'
            }}>
                <h1 className='create-pet-title' style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>Ingresa los datos de tu mascota</h1>
                <Element.Row className='create-pet-main-row' tyle={{
                    width: '100%'
                }}>
                    
                    <Element.Col className='create-pet-forms'>
                        <Element.Row style={{
                            paddingTop: '15px',
                            paddingBottom: '10px'
                        }}>
                            <Element.Form.Group className='pet-name-form' controlId='formPetName'>
                                <h2>Escribe el nombre de tu mascota</h2>
                                <Element.Form.Control type='text' placeholder='Nombre' style={{
                                    width: '525px',
                                    height: '42px'
                                }} />
                            </Element.Form.Group>
                        </Element.Row>
                        <div style={{
                            paddingBottom: '10px',
                            maxWidth: '525px'
                        }}>
                           <h2>Escoge la especie de tu mascota</h2>

                            <Dropdown className='pet-specie-form' value={selectedSpecie} options={species} onChange={onSpecieChange} optionLabel="name" placeholder="Especie" />
                        </div>
                        <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: '10px'
                    }}>
                        <Element.Button type="submit" className='create-account-submit'>
                            Crear mascota
                        </Element.Button>
                    </div>
                       
                    </Element.Col>
                    
                </Element.Row>
               
            </Element.Card>
        </div>
        </Element.Form>


    );
    }
    
    const handleSubmit = (pet) => {
        const form = pet.currentTarget;
        if (form.checkValidity() === false) {
            pet.prpetDefault();
            pet.stopPropagation();
        }

        createPet();
    };


    function createPet() {
        let name = name;
        let species = selectedSpecie.specie;
        let image = 'https://img.freepik.com/vector-premium/avatar-perfil-usuario-femenino-es-mujer-personaje-protector-pantalla-emociones_505620-617.jpg';

        fetch('http://localhost:3000/api/v1/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, species, image }),
        }).then(response => {
            console.log(response.text());
            return response.text();
        })
        

    }

    return (
        <div className='create-pet-container' style={{
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
                {create()}
            </Element.Card>
        </div>
    );

        

} export default CreatePet;