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
        background: ${vars.colour.black} no-repeat center center fixed;
        background: url(${props.image});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: 50% 50%;

        &:last-of-type {
            margin-left: 0;
            margin-right: auto;
        }
        @media ${vars.breakpoint.tablet} {
            width: 50%;
            height: 200px;
        }
        @media ${vars.breakpoint.desktop} {
            width: 33.33%;
            height: 200px;
        }
        @media ${vars.breakpoint.hd} {
            height: 250px;
        }
    `
    const FilmCardInformation = styled.div`
        position: absolute;
        top: 15px;
        right: 15px;
        height: calc(100% - 65px);
        width: calc(50% - 45px);
        padding: 15px;
        background-color: ${vars.colour.pink_light};
        background-color: rgba(${vars.colour.pink_light}, 0.95);
        overflow: hidden;
        h4 {
            margin: 0;
            text-transform: uppercase;
            color: ${vars.colour.pink_dark};
        }
        a {
            color: ${vars.colour.pink_dark};
        }
    `

    return (
        <StyledFilmCard title={"Find out more about " + props.title}>
            <FilmCardInformation>
                { props.subInfo && 
                    <span>{props.subInfo}</span>
                }

                <Heading as="h4">{props.title}</Heading>

                { props.onSouthbank &&
                    <>
                        <a href={props.onSouthbank} title="Book a ticket to this film at BFI SouthBank">SouthBank</a>
                        { props.onPlayer && 
                            <span> | </span>
                        }
                    </>
                }
                { props.onPlayer && 
                    <a href={props.onPlayer} title="Watch this film on BFI Player">Player</a>
                }
            </FilmCardInformation>
        </StyledFilmCard>
    )
}

FilmCard.defaultProps = {
    uuid: "null",
    title: "The film title",
    subInfo: "",
    onPlayer: false,
    onSouthbank: false,
    image: "https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))
}

export default FilmCard
