import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';


const DuoToneImage = (props) => {
    const DuoToneImageWrapper = styled.div`
        background-color:    ${props.highlightColour};
        display:             flex;
        flex:                1 1 100%;
        height:              100%;
        overflow:            hidden;
        position:            relative;
        img {
            width:               100%;
            height:              100%;
            max-width:           100%;
            object-fit:          cover;
            flex:                1 0 100%;
            position:            relative;
            -webkit-transition: all ease 0.15s;
            -moz-transition: all ease 0.15s;
            -o-transition: all ease 0.15s;
            transition: all ease 0.15s;
        }

        &:hover, .hovered {
            img {
                filter:              grayscale(100%) contrast(1) blur(0px);
                mix-blend-mode:      multiply;
                opacity:             1;
            }
            &::before {
                background-color:    ${props.bgColour};
                bottom:              0;
                content:             '';
                height:              100%;
                left:                0;
                mix-blend-mode:      lighten;
                position:            absolute;
                right:               0;
                top:                 0;
                width:               100%;
                z-index:             1;
            }
        }
    `

    return (
        <DuoToneImageWrapper className={props.isHovered ? 'hovered' : ''}>
            <img alt="" src={props.image} />
        </DuoToneImageWrapper>   
    )
}

DuoToneImage.defaultProps = {
    isHovered: false,
    bgColour: vars.colour.black,
    highlightColour: vars.colour.pink,
    image: "https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))
}

export default DuoToneImage
