import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

const ImageBanner = (props) => {
    const SideImage = styled.img`
        position: absolute;
        right: ${props.text_right ? 'default' : '0'};
        left: ${props.text_right ? '0' : 'default'};
        top: 0;
        width: 50%;
        height: auto;
    `
    const StyledImageBanner = styled.div`
        background-color: ${props.colour === 'pink' ? vars.colour.pink : props.colour};
        color: ${props.colour === 'pink' ? vars.colour.pink_dark : '#fff'};
        padding: ${props.padding}px;
        position: relative;
        overflow: hidden;
        
        @media ${vars.breakpoint.tablet} {
            // background-image: url(${props.image});
            // background-size: 50% auto;
            // background-repeat: no-repeat;
            // background-position: ${props.image_position};
            // background-origin: ${props.image_origin};
            // min-height: 175px;
            
            h2 {
                max-width: 90%;
            }
        }
        @media ${vars.breakpoint.desktop} {
            min-height: 250px;
            background-size: ${props.image_size === "large" ? "50%" : "40%"} auto;

            button {
                position: absolute; 
                bottom: ${props.padding}px;
            }
            h2 {
                max-width: 100%;
            }
        }
        @media ${vars.breakpoint.hd} {
            padding: ${(props.padding*2)}px;
            background-size: 30% auto;
            button {
                bottom: ${(props.padding*2)}px;
            }
        }
    `
    const InnerContainer = styled.div`
        @media ${vars.breakpoint.tablet} {
            margin-left: ${props.text_right ? '55%' : '0'};
            width: 50%;
        } 
        @media ${vars.breakpoint.desktop} {
            margin-left: ${props.text_right ? 'calc(50% + '+props.padding+'px)' : '0'};
        }   
    `
    return (
        <StyledImageBanner>
            <InnerContainer>
                {props.children}
                <SideImage src={props.image} alt="" />
            </InnerContainer>
        </StyledImageBanner>
    )
}

ImageBanner.defaultProps = {
    colour: 'pink',
    image: '',
    image_position: 'right center',
    image_origin: 'intial',
    image_size: 'small',
    padding: '25',
    text_right: false
}

ImageBanner.propTypes = {
    colour: PropTypes.string,
    image: PropTypes.object,
    image_position: PropTypes.string,
    image_origin: PropTypes.string,
    image_size: PropTypes.string,
    padding: PropTypes.string,
    text_right: PropTypes.bool
}


export default ImageBanner
