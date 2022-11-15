import React from "react";
import * as Element from "react-bootstrap";
import './event-card.css';

function EventCard({image, name, city, date, description}) {
    return (
        <div className='event-card' style={{
            paddingTop: '46px'
        }}>
            <Element.Card style={{
                width: '100%',
                borderRadius: '24px',
                height: '300px',
                verticalAlign: 'center',
                backgroundColor: 'rgba(255,255,255, 0.25)',
                backdropFilter: 'blur(20px)',
                border: '4px solid #fff'
            }}>
                <Element.Card.Body style={{
                    display: 'flex',
                }}>
                    <Element.Row>
                        <Element.Col style={{
                            display: 'flex',
                            maxWidth: '252px',
                            maxHeight: '252px',
                            alignContent: 'center'
                        }}>
                            <img src={image} style={{
                                borderRadius: '20%',
                                maxWidth: '252px',
                                maxHeight: '252px'
                            }} />
                        </Element.Col>
                        <Element.Col style={{
                            paddingLeft: '45px'
                        }}>
                            <Element.Row>
                                <Element.Card.Title style={{
                                    fontSize: '24px'
                                }}>{name}</Element.Card.Title>
                                <Element.Card.Subtitle style={{
                                    fontSize: '16px'
                                }}>{city}</Element.Card.Subtitle>
                                <Element.Card.Text style={{
                                    fontSize: '15px'
                                }}>{date}</Element.Card.Text>
                            </Element.Row>
                            <br></br>
                            <Element.Row>
                                <Element.Card.Text style={{
                                    fontSize: '20px'
                                }}>{description}</Element.Card.Text>
                            </Element.Row>
                        </Element.Col>
                    </Element.Row>
                </Element.Card.Body>
            </Element.Card>
        </div>
    );
} export default EventCard;