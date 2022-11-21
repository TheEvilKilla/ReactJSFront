import React from 'react';
import * as Element from "react-bootstrap";
import FooterLogo from '../../assets/footerLogo.png';

import './footer.scss';

function Footer() {
    return (
        <div>
            <hr/>
            <div className='footer-container' style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Element.Col>
                    <Element.Row style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src={FooterLogo} style={{
                            maxWidth: '78px',
                            maxHeight: '78px'
                        }}></img>
                    </Element.Row>
                    <Element.Row style={{
                        paddingTop: '10px',
                        textAlign: 'center'
                    }}>
                        <h5>Hecho con PetAd. Copyright 2022 - Todos los derechos reservados</h5>
                    </Element.Row>
                </Element.Col>
            </div>
        </div>
    );
} export default Footer;