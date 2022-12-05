import React from 'react';
import * as Element from "react-bootstrap";
import FooterLogo from '../../assets/footerLogo.png';
import { FormattedMessage } from 'react-intl';


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
                        <img src={FooterLogo} alt = "logo" style={{
                            maxWidth: '78px',
                            maxHeight: '78px'
                        }}></img>
                    </Element.Row>
                    <Element.Row style={{
                        paddingTop: '10px',
                        textAlign: 'center'
                    }}>
                        <h2 style ={{
                            fontSize: '1vw'
                        }}><FormattedMessage id="Footer" /></h2>
                    </Element.Row>
                </Element.Col>
            </div>
        </div>
    );
} export default Footer;