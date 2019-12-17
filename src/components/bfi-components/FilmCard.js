import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Heading from '../bfi-components/Heading';
import DuoToneImage from '../bfi-components/DuoToneImage';


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
        color: rgb(${vars.colour.black})
    }


    @media ${vars.breakpoint.tablet} {
        width: 50%;
        height: 200px;
    }
    @media ${vars.breakpoint.desktop} {
        width: 33.33%;
        height: 200px;
    }
    @media ${vars.breakpoint.super_hd} {
        height: 250px;
    }
`
const FilmCardInformation = styled.div`
        position: absolute;
        top: 15px;
        right: 15px;
        height: calc(100% - 75px);
        width: calc(50% - 45px);
        padding: 10px;
        background-color: rgb(${vars.colour.pink_light});
        background-color: rgba(${vars.colour.pink_light}, 0.95);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        a {
            color: rgb(${vars.colour.pink_dark});
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
            width: calc(60% - 75px);
        }
        @media ${vars.breakpoint.super_hd} {
            width: calc(50% - 55px);

            .filmcardinformation__subinfo {
                font-size: 16px;
            }
        }
`

const FilmCard = (props) => {  

    var titleLength = props.title.split(" ").length;

    const StlyedFilmCardInformation = styled(FilmCardInformation)`
        h4 {
            margin: 0;
            text-transform: uppercase;
            word-wrap: break-word;
            -webkit-hyphens: auto;
            -moz-hyphens: auto;
            hyphens: auto;
            color: rgb(${vars.colour.pink_dark});
            font-size: ${(titleLength <= 2 ? '45' : (titleLength <= 4 ? '35' : (titleLength <= 6 ? '27' : (titleLength <= 14 ? '24' : '18'))))}px;
        }

        @media ${vars.breakpoint.tablet} {
            h4 {
                font-size: ${(titleLength <= 2 ? '27' : (titleLength <= 4 ? '25' : (titleLength <= 6 ? '22' : (titleLength <= 14 ? '16' : '14'))))}px;
            }
        }
        @media ${vars.breakpoint.super_hd} {
            h4 {
                font-size: ${(titleLength <= 2 ? '42' : (titleLength <= 4 ? '35' : (titleLength <= 6 ? '27' : (titleLength <= 14 ? '24' : '18'))))}px;
            }
        }
    `

    const FilmTag = styled.span`
        font-size: 13px;
        padding: 2px 10px;
        margin-right: 6px;
        vertical-align: middle;
        border-radius: 5px;
        background: rgb(${vars.colour.pink_dark});
        color: rgb(${vars.colour.white});

        @media ${vars.breakpoint.tablet} {
            font-size: 11px;
            padding: 1px 5px;
            margin-right: 4px;
        }

        @media ${vars.breakpoint.super_hd} {
            font-size: 14px;
            padding: 2px 10px;
            margin-right: 6px;
        }
    `

    return (
        <StyledFilmCard title={"Find out more about " + props.title}>
            <Link to={"/watch/film/" + props.uuid}>
                <DuoToneImage image={props.image} />

                <StlyedFilmCardInformation>
                    { props.subInfo && 
                        <span className="filmcardinformation__subinfo">{props.subInfo}</span>
                    }

                    <Heading as="h4">{props.title}</Heading>

                    <div className="filmcardinformation__links">
                        { props.onSouthbank &&
                            <FilmTag>SouthBank</FilmTag>
                        }
                        { props.onPlayer && 
                            <FilmTag>Player</FilmTag>
                        }
                    </div>
                </StlyedFilmCardInformation>
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




const FilmSkeleton = styled.div`
    height: 100%;
    width: 100%;
    background: rgb(${vars.colour.grey});
    border: 1px solid rgb(${vars.colour.grey_dark});
    
    .react-loading-skeleton {
        height: 15px
        margin-bottom: 10px;
        background-color: rgb(${vars.colour.pink_dark});
        background-image: linear-gradient(90deg, rgb(${vars.colour.pink_dark}), rgb(${vars.colour.pink}), rgb(${vars.colour.pink_dark}));
    }
    .skeleton_tag {
        .react-loading-skeleton {
            margin-top: 60px;
            margin-right: 5px;
            width: 20px;
            height: 10px;
            display: inline-block;
        }
    }
`

export const FilmCardSkeleton = () => {
    return( 
        <StyledFilmCard>
            <FilmSkeleton color={vars.colour.pink_dark} highlightColor={vars.colour.pink_light}>
                <FilmCardInformation>
                    <Skeleton />
                    <Skeleton width={75} />
                    <div className="skeleton_tag">
                        <Skeleton /><Skeleton />
                    </div>
                </FilmCardInformation>
            </FilmSkeleton>
        </StyledFilmCard>
    )
}