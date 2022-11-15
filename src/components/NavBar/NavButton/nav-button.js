import React from "react";
import * as Element from "react-bootstrap";
import './nav-button.css';

function NavButton(props) {
    return (
        <div className='nav-button'>
            <Element.Button style={{
                display: 'block',
                width: '292px',
                height: '101px',
                borderRadius: '24px',
                verticalAlign: 'center',
                backgroundColor: 'rgba(255,255,255, 0)',
                border: '4px solid #000'
            }}>
                <Element.Row className="button-row" style={{
                    display: 'flex',
                    padding: '0'
                }}>
                    <Element.Col className="button-col-text" style={{
                        maxWidth: '220px',
                        widht: '220px',
                        paddingLeft: '12px',
                        paddingRight: '0px'
                    }}>
                        <h2 className="button-text" style={{
                            display: 'flex',
                            textAlign: 'left',
                            maxWidth: '210px',
                            color: '#000',
                            padding: '0'
                        }}>{props.text}</h2>
                    </Element.Col>
                    <Element.Col className="button-col-image" style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0',
                        maxWidth: '45px',
                        widht: '45px',
    
                    }}>
                        <img className="button-image" src={props.icon} style={{
                            maxWidth: '45px',
                            maxHeight: '45px',
                        }} />
                    </Element.Col>
                </Element.Row>
            </Element.Button>
        </div>
    );
} export default NavButton;