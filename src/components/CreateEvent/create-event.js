import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import React, { useState } from 'react';
import * as Element from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import WalkingPet from '../../assets/walkingPet.jpg';
import './create-event.scss';

function CreateEvent() {
    //https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
    const [file, setFile] = useState(WalkingPet);
    const [date, setDate] = useState(null);
    //https://www.primefaces.org/primereact/multiselect/
    const [selectedEstablishments, setSelectedEstablishments] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

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

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const establishmentTemplate = (option) => {
        return (
            <div className="establishment-item">
                <div>{option.name}</div>
            </div>
        );
    }

    const selectedEstablishmentTemplate = (option) => {
        if (option) {
            return (
                <div className="establishment-item establishment-item-value">
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
                <b>{length}</b> elemento{length < 2  ? '' : 's'} seleccionado{length < 2 ? '' : 's'}.
            </div>
        );
    }

    const onCityChange = (e) => {
        setSelectedCity(e.value);
    }

    const onNameChange = (e) => {
        setName(e)
    }

    const onAddressChange = (e) => {
        setAddress(e)
    }

    const onDescriptionChange = (e) => {
        setDescription(e)
    }

    function createEvent() {
        let image = 'https://www.elcolombiano.com/binrepository/580x392/1c27/580d365/none/11101/VUKY/shutterstock-1745691734_38337368_20210815194625.jpg';

        fetch('http://localhost:3000/api/v1/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, address, image, city: selectedCity.name}),
        }).then(response => {
            console.log(response.text())
            return response.text();
        })
    }

    return (
        <div className='create-event-container' style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '25px'
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
                }}> <FormattedMessage id="CreateEvnt" /></h1>
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
                                        <FormattedMessage id="EvntImg" />
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
                            <FormattedMessage id="NameEvent">
                                {ph =>
                                    <Element.Form.Group className='event-name-form' controlId='formEventName'>
                                        <Element.Form.Control type='text' onChange={e => onNameChange(e.target.value)} placeholder={ph} required style={{
                                            width: '525px',
                                            height: '42px'
                                        }} />
                                    </Element.Form.Group>
                                }
                            </FormattedMessage>
                        </Element.Row>
                        <Element.Row style={{
                            paddingBottom: '10px'
                        }}>
                            <FormattedMessage id="Addrs">
                                {ph =>
                                    <Element.Form.Group className='event-address-form' controlId='formEventAddress'>
                                        <Element.Form.Control type='text' onChange={e => onAddressChange(e.target.value)} placeholder={ph} required style={{
                                            width: '525px',
                                            height: '42px'
                                        }} />
                                    </Element.Form.Group>
                                }
                            </FormattedMessage>
                        </Element.Row>
                        <div style={{
                            paddingBottom: '10px',
                            maxWidth: '525px'
                        }}>
                            <FormattedMessage id="PickACity">
                                {ph =>
                                    <Dropdown className='event-city-form' value={selectedCity} options={cities} onChange={onCityChange} optionLabel="name" placeholder={ph} />
                                }
                            </FormattedMessage>
                        </div>
                        <FormattedMessage id="H&Date">
                            {ph =>
                                <Calendar className='event-date-form' value={date} onChange={(e) => setDate(e.value)} showTime selectionMode="range" minDate={minDate}
                                    placeholder={ph} />
                            }
                        </FormattedMessage>
                        <FormattedMessage id="Description">
                            {ph =>
                                <Element.Form.Group className='event-description-form' controlId="exampleForm.formEventDescription" style={{
                                    paddingBottom: '10px'
                                }} >
                                    <Element.Form.Control as="textarea" rows="4" onChange={e => onDescriptionChange(e.target.value)} placeholder={ph} style={{
                                        width: '525px',
                                        maxWidth: '525px',
                                    }} />
                                </Element.Form.Group>
                            }
                        </FormattedMessage>
                        <div style={{
                            paddingBottom: '15px'
                        }}>
                            <FormattedMessage id="Select">
                                {ph =>
                                    <MultiSelect className="event-multiselect" value={selectedEstablishments} options={countries} onChange={(e) => setSelectedEstablishments(e.value)}
                                        optionLabel="name" placeholder={ph} filter itemTemplate={establishmentTemplate}
                                        selectedItemTemplate={selectedEstablishmentTemplate} panelFooterTemplate={panelFooterTemplate} />
                                }
                            </FormattedMessage>
                        </div>
                    </Element.Col>
                </Element.Row>
                <Element.Button className='submit' onClick={createEvent}>Submit</Element.Button>
            </Element.Card>
        </div>
    );
} export default CreateEvent;