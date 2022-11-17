import React from "react";
import * as Element from "react-bootstrap";
import './event-card.scss';

function EventCard({ image, name, city, date, description }) {
    return (
        <div className='event-card-container' style={{
            paddingTop: '46px'
        }}>
            <Element.Card className='event-card' style={{
                width: '100%',
                borderRadius: '24px',
                height: '300px',
                verticalAlign: 'center',
                backgroundColor: 'rgba(255,255,255, 0.25)',
                backdropFilter: 'blur(20px)',
                border: '4px solid #fff'
            }}>
                <Element.Card.Body className="event-card-body" style={{
                    display: 'flex',
                }}>
                    <Element.Row>
                        <Element.Col style={{
                            display: 'flex',
                            maxWidth: '252px',
                            maxHeight: '252px',
                        }}>
                            <img className="event-card-image" src={image} style={{
                                borderRadius: '20%',
                                maxWidth: '252px',
                                maxHeight: '252px',
                            }} />
                        </Element.Col>
                        <Element.Col className="event-card-text-content" style={{
                            paddingLeft: '45px'
                        }}>
                            <Element.Row>
                                <Element.Card.Title className="event-card-title" style={{
                                    fontSize: '24px'
                                }}>{name}</Element.Card.Title>
                                <Element.Card.Subtitle className="event-card-city" style={{
                                    fontSize: '16px'
                                }}>{city}</Element.Card.Subtitle>
                                <Element.Card.Text className="event-card-date" style={{
                                    fontSize: '15px'
                                }}>{date}</Element.Card.Text>
                            </Element.Row>
                            <br></br>
                            <Element.Row className="event-card-description-container" >
                                <Element.Card.Text className="event-card-description" style={{
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