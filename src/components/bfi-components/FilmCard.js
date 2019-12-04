import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import { Link } from 'react-router-dom'

import Heading from '../bfi-components/Heading';
import DuoToneImage from '../bfi-components/DuoToneImage';

const FilmCard = (props) => {  
    const StyledFilmCard = styled.div`
        width: 100%;
        margin: auto;
        height: 225px;
        position: relative;

        &:hover {
            cursor: pointer;
        }

        &:last-of-type {
            margin-left: 0;
            margin-right: auto;
        }

        img {
            width: 100%;
            height: auto;
        }
        a {
            color: ${vars.colour.black}
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
        display: flex;
        flex-direction: column;
        h4 {
            margin: 0;
            text-transform: uppercase;
            color: ${vars.colour.pink_dark};
        }
        a {
            color: ${vars.colour.pink_dark};
        }
        span {
            font-size: 13px;
        }
        .filmcardinformation__subinfo {
            margin-bottom: 5px;
        }
        .filmcardinformation__links {
            align-self: flex-start;
            margin-top: auto;
        }
    `

    return (
        <StyledFilmCard title={"Find out more about " + props.title}>
            <Link to={"/watch/film/" + props.uuid}>
                <DuoToneImage image={props.image} />
                    
                <FilmCardInformation>
                    { props.subInfo && 
                        <span className="filmcardinformation__subinfo">{props.subInfo}</span>
                    }

                    <Heading as="h4">{props.title}</Heading>

                    <div className="filmcardinformation__links">
                        { props.onSouthbank &&
                            <>
                                <span>SouthBank</span>
                                {/* <a href={props.onSouthbank} title="Book a ticket to this film at BFI SouthBank">SouthBank</a> */}
                                { props.onPlayer && 
                                    <span> | </span>
                                }
                            </>
                        }
                        { props.onPlayer && 
                            // <a href={props.onPlayer} title="Watch this film on BFI Player">Player</a>
                            <span>Player</span>
                        }
                    </div>
                </FilmCardInformation>
            </Link>
        </StyledFilmCard>
    )
}

FilmCard.defaultProps = {
    uuid: "ccc481e1-f1c2-5b60-bbe7-77ad5645fb1a",
    title: "The film title",
    subInfo: "",
    onPlayer: false,
    onSouthbank: false,
    image: "https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))
}

export default FilmCard
