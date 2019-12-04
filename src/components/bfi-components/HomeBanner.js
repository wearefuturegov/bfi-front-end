import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Heading from './Heading.js';
import Container from './Container.js';


const HomeBanner = ({title, image}) => {
    const StyledHomeBanner = styled.div`
        width: 100%;
        padding: 50px 0;
        background: ${vars.colour.black} no-repeat center center fixed;
        background: url(${image});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: 50% 50%;
        color: ${vars.colour.white};

        h1 {
            max-width: 80%;
            margin-top: 50px;
            font-size: 30px;
        }

        @media ${vars.breakpoint.tablet} {
            padding: 65px 0;
            h1 {
                font-size: 38px;
                margin-top: 75px;
            }
        }
        @media ${vars.breakpoint.desktop} {
            padding: 75px 0;
            h1 {
                font-size: 45px;
                margin-top: 100px;
            }
        }
    `
    return (
        <StyledHomeBanner>
            <Container>
                <Heading>{title}</Heading>
            </Container>
        </StyledHomeBanner>
    )
}

export default HomeBanner
