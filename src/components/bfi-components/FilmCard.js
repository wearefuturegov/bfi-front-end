import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import { Link } from 'react-router-dom'

import Heading from '../bfi-components/Heading';
import DuoToneImage from '../bfi-components/DuoToneImage';

const FilmCard = (props) => {  

    var titleLength = props.title.split(" ").length;

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
        padding: 10px;
        background-color: ${vars.colour.pink_light};
        background-color: rgba(${vars.colour.pink_light}, 0.95);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        h4 {
            margin: 0;
            text-transform: uppercase;
            color: ${vars.colour.pink_dark};
            font-size: ${(titleLength <= 2 ? '45' : (titleLength <= 4 ? '35' : (titleLength <= 6 ? '27' : (titleLength <= 14 ? '24' : '18'))))}px;
        }
        a {
            color: ${vars.colour.pink_dark};
        }
        .filmcardinformation__subinfo {
            margin-bottom: 5px;
            font-size: 13px;
            font-weight: 600;
        }
        .filmcardinformation__links {
            align-self: flex-start;
            margin-top: auto;
        }

        @media ${vars.breakpoint.tablet} {
            width: calc(60% - 45px);
            h4 {
                font-size: ${(titleLength <= 2 ? '27' : (titleLength <= 4 ? '25' : (titleLength <= 6 ? '22' : (titleLength <= 14 ? '16' : '14'))))}px;
            }
        }
        @media ${vars.breakpoint.hd} {
            width: calc(50% - 45px);
            
            h4 {
                font-size: ${(titleLength <= 2 ? '45' : (titleLength <= 4 ? '35' : (titleLength <= 6 ? '27' : (titleLength <= 14 ? '24' : '18'))))}px;
            }
            .filmcardinformation__subinfo {
                font-size: 16px;
            }
        }
    `

    const FilmTag = styled.span`
        font-size: 13px;
        padding: 2px 10px;
        margin-right: 6px;
        vertical-align: middle;
        border-radius: 5px;
        background: ${vars.colour.pink_dark};
        color: rgb(${vars.colour.white});

        @media ${vars.breakpoint.tablet} {
            font-size: 11px;
            padding: 1px 5px;
            margin-right: 4px;
        }

        @media ${vars.breakpoint.hd} {
            font-size: 14px;
            padding: 2px 10px;
            margin-right: 6px;
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
                                <FilmTag>SouthBank</FilmTag>
                                {/* <a href={props.onSouthbank} title="Book a ticket to this film at BFI SouthBank">SouthBank</a> */}
                            </>
                        }
                        { props.onPlayer && 
                            // <a href={props.onPlayer} title="Watch this film on BFI Player">Player</a>
                            <FilmTag>Player</FilmTag>
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
