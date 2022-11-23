import React, { useEffect, useState, useRef } from 'react';
import * as Element from 'react-bootstrap';
import { MultiSelect } from 'primereact/multiselect';
import WalkingPet from '../../assets/walkingPet.jpg';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import "primeicons/primeicons.css";
import './create-event.scss';

function CreateEvent() {
    //https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
    const [file, setFile] = useState(WalkingPet);
    const [date, setDate] = useState(null);
    //https://www.primefaces.org/primereact/multiselect/
    const [selectedEstablishments, setSelectedEstablishments] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    let minDate = new Date();
    minDate.setMonth(minDate.getMonth());
    minDate.setFullYear(minDate.getFullYear());

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
        
    const countries = [
        { name: 'Australia' },
        { name: 'Brazil' },
        { name: 'China' },
        { name: 'Egypt' },
        { name: 'France' },
        { name: 'Germany' },
        { name: 'India' },
        { name: 'Japan' },
        { name: 'Spain' },
        { name: 'United States' }
    ];

    const cityTemplate = (option) => {
        return (
            <div className="country-item">
                <div>{option.name}</div>
            </div>
        );
    }

    const selectedEstablishmentTemplate = (option) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <div>{option.name}</div>
                </div>
            );
        }
        return "Seleccione los establecimientos";
    }

    const panelFooterTemplate = () => {
        const selectedItems = selectedEstablishments;
        const length = selectedItems ? selectedItems.length : 0;
        return (
            <div className="py-2 px-3">
                <b>{length}</b> elemento{length < 2 ? '' : 's'} seleccionado{length < 2 ? '' : 's'}.
            </div>
        );
    }

    return (
        <div className='create-event-container' style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Element.Card className='create-event-card' style={{
                width: '894px',
                height: 'auto',
                maxWidth: '894px',
                borderRadius: '24px',
                verticalAlign: 'center',
                backgroundColor: 'rgba(255,255,255, 0.25)',
                backdropFilter: 'blur(20px)',
                border: '4px solid #fff'
            }}>
                <h1 className='create-event-title' style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>Crear evento</h1>
                <Element.Row className='create-event-main-row' tyle={{
                    width: '100%'
                }}>
                    <Element.Col className='create-event-image-container' style={{
                        maxWidth: '35%'
                    }}>
                        <div style={{
                            paddingLeft: '25px',
                            paddingTop: '25px',
                        }}>
                            <Element.OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Element.Tooltip id={`tooltip-bottom`}>
                                        Seleccione la imagen para su evento
                                    </Element.Tooltip>
                                }>
                                <div className='create-event-image-upload'
                                    style={{
                                        width: '252px',
                                        height: '252px',
                                        maxWidth: '252px',
                                        maxHeight: '252px',
                                    }}>
                                    <input id='file-input' type='file' accept='image/*' onChange={handleChange} />
                                    <label class='file-input-label' for='file-input' >
                                        <img class='create-event-image' src={file} style={{
                                            width: '252px',
                                            height: '252px',
                                            maxWidth: '252px',
                                            maxHeight: '252px',
                                            borderRadius: '24px',
                                        }} />
                                    </label>
                                </div>
                            </Element.OverlayTrigger>
                        </div>
                    </Element.Col>
                    <Element.Col className='create-event-forms'>
                        <Element.Row style={{
                            paddingTop: '15px',
                            paddingBottom: '10px'
                        }}>
                            <Element.Form.Group className='event-name-form' controlId='formEventName'>
                                <Element.Form.Control type='text' placeholder='Nombre del evento' style={{
                                    width: '525px',
                                    height: '42px'
                                }} />
                            </Element.Form.Group>
                        </Element.Row>
                        <div style={{
                            paddingBottom: '10px',
                            maxWidth: '525px'
                        }}>
                            <Element.Form.Select className='event-city-form' controlId='formEventCity' value={selectedCity} onChange={(e) => setSelectedCity(e.value)} style={{
                                paddingBottom: '8px',
                                paddingTop: '8px',
                                color: 'gray'
                            }}>
                                <option>Seleccione la ciudad el evento</option>
                            </Element.Form.Select>
                        </div>
                        <Calendar className='event-date-form' value={date} onChange={(e) => setDate(e.value)} showTime selectionMode="range" minDate={minDate}
                            placeholder='Fecha y hora del evento' />
                        <Element.Form.Group className='event-description-form' controlId="exampleForm.formEventDescription" style={{
                            paddingBottom: '10px'
                        }} >
                            <Element.Form.Control as="textarea" rows="4" placeholder='Descripcion' style={{
                                width: '525px',
                                maxWidth: '525px',
                            }} />
                        </Element.Form.Group>
                        <div style={{
                            paddingBottom: '15px'
                        }}>
                            <MultiSelect className="event-multiselect" value={selectedEstablishments} options={countries} onChange={(e) => setSelectedEstablishments(e.value)}
                                optionLabel="name" placeholder="Seleccione los establecimientos" filter itemTemplate={cityTemplate}
                                selectedItemTemplate={selectedEstablishmentTemplate} panelFooterTemplate={panelFooterTemplate} />
                        </div>
                    </Element.Col>
                </Element.Row>
            </Element.Card>
        </div>
    );
} export default CreateEvent;