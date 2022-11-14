import React from "react";
import * as Element from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";
import './event-list.css';

function EventCard(props) {
    return (
        <div className='event-card'>
            <Element.Col style={{
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
                                <img src={props.image} style={{
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
                                    }}>{props.name}</Element.Card.Title>
                                    <Element.Card.Subtitle style={{
                                        fontSize: '16px'
                                    }}>{props.city}</Element.Card.Subtitle>
                                    <Element.Card.Text style={{
                                        fontSize: '15px'
                                    }}>{props.date}</Element.Card.Text>
                                </Element.Row>
                                <br></br>
                                <Element.Row>
                                    <Element.Card.Text style={{
                                        fontSize: '20px'
                                    }}>{props.description}</Element.Card.Text>
                                </Element.Row>
                            </Element.Col>
                        </Element.Row>
                    </Element.Card.Body>
                </Element.Card>
            </Element.Col>
        </div>
    );
} export default EventCard;