import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Heading from '../bfi-components/Heading';

const FilmCard = (props) => {  
    const StyledFilmCard = styled.div`
        width: 100%;
        margin: auto;
        height: 225px;
        position: relative;

        a {
            color: ${vars.colour.white};
            text-decoration: none;
        }

        h4 {
            margin: 0;
            text-shadow: -1px 1px 0 #031D45;
            position: absolute;
            bottom: 20px;
            left: 15px;
            right: 15px;
        }

        &:last-of-type {
            margin-left: 0;
            margin-right: auto;
        }
        @media ${vars.breakpoint.tablet} {
            width: 50%;
            height: 200px;
        }
        @media ${vars.breakpoint.desktop} {
            width: 25%;
            height: 175px;
        }
    `
    const Background = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${vars.colour.black} no-repeat center center fixed;
        background: url(${props.image});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: 50% 50%;
    `

    return (
        <StyledFilmCard>
            <a href="#" title={"Watch " + props.title}>
                <Background>
                    <Heading as="h4">{props.title}</Heading>
                </Background>
            </a>
        </StyledFilmCard>
    )
}

FilmCard.defaultProps = {
    uuid: "null",
    title: "The film title",
    onPlayer: false,
    onSouthbank: false,
    image: "https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))
}

export default FilmCard
