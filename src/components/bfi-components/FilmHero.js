import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';

import Heading from './Heading';
import Container from './Container';


const FilmHero = (props) => {
    const FilmHeroWrapper = styled.div`
        width: 100%;
        position: relative;
        max-width: calc(${vars.screen_size.hd} + 30px);
        margin: 0 auto;
        min-height: 400px;
        img {
            width: 100%;
            height: auto;
        }
    `
    const FilmHeroOverlay = styled.div`
        position: absolute;
        width: 100%;
        height: calc(100% - 3px);
        top: 0;
        left: 0;
        background: linear-gradient(to bottom, rgba(${vars.colour.black}, 0.3), rgba(${vars.colour.black}, 0.7));

        h1 {
            position: absolute;
            bottom: 15px;
            color: rgb(${vars.colour.white});

            @media ${vars.breakpoint.super_hd} {
                left: 25px;
            }
        }
    `

    return (
        <FilmHeroWrapper>
            <img alt={props.title} src={props.image[0].url} />
            <FilmHeroOverlay>
                <Container margin="none">
                    <Heading>{props.title}</Heading>
                </Container>
            </FilmHeroOverlay>
        </FilmHeroWrapper>   
    )
}

FilmHero.defaultProps = {
    title: "Film Title",
    image: "https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))
}

export default FilmHero
