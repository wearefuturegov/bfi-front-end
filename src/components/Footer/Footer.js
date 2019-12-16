import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';

import Container from '../bfi-components/Container';
import { Link } from 'react-router-dom';
import LogoWhite from '../../images/logos/bfi-logo-white.svg';

const Footer = () => {
    
    const FooterContainer = styled.footer`
        background: rgb(${vars.colour.black});
        color: rgb(${vars.colour.white});
        display: flex;
        
        a {
            color: rgb(${vars.colour.white});
        }
    `

    const BFILogo = styled.img`
        vertical-align: middle;
        max-width: 47px;
        margin-right: 50px;
    `
    return (
        <FooterContainer>
            <Container>
                <BFILogo src={LogoWhite} alt="BFI Logo" />
            </Container>             
        </FooterContainer>
    )
}

export default Footer
