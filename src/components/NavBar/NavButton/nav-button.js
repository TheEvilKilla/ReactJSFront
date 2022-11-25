import React from 'react';
import * as Element from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import './nav-button.css';

function NavButton({ text, icon, href }) {
    return (
        <div className='nav-button-container' style={{
            width: '292px',
            height: '101px',
            borderRadius: '24px',
        }}>
            <a href={href}>
                <Element.Button className='nav-button' style={{
                    width: '292px',
                    height: '101px',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(255,255,255, 0)',
                    border: '4px solid #000',
                    boxShadow: '0 2px 4px rgba(0,0,0,.35)',
                    alignContent: 'center',

                }}>
                    <Element.Row className='nav-button-row' style={{
                        display: 'flex',
                        padding: '0',
                    }}>
                        <Element.Col className='nav-button-col-text' style={{
                            maxWidth: '220px',
                            widht: '220px',
                            paddingLeft: '12px',
                            paddingRight: '0px'
                        }}>
                            <h2 className='nav-button-text' style={{
                                display: 'flex',
                                textAlign: 'left',
                                maxWidth: '210px',
                                color: '#000',
                                padding: '0'
                            }}>{text}</h2>
                        </Element.Col>
                        <Element.Col className='nav-button-col-image' style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0',
                            maxWidth: '45px',
                            widht: '45px',

                        }}>
                            <img className='nav-button-image' src={icon} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                maxWidth: '45px',
                                maxHeight: '45px',
                            }} />
                        </Element.Col>
                    </Element.Row>
                </Element.Button>
            </a>
        </div>
    );
} export default NavButton;