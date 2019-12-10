import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

const ImageBanner = (props) => {
    const StyledImageBanner = styled.div`
        background-color: ${props.colour === 'pink' ? vars.colour.pink : props.colour};
        color: ${props.colour === 'pink' ? vars.colour.pink_dark : '#fff'};
        padding: 25px;
        background-image: url(${props.image});
        background-position: ${props.image_position};
        background-repeat: no-repeat;

        h2 {
            max-width: 350px;
        }
        
        @media ${vars.breakpoint.tablet} {

        }
        @media ${vars.breakpoint.desktop} {
        
        }
        @media ${vars.breakpoint.hd} {

        }
    `
    return (
        <StyledImageBanner>{props.children}</StyledImageBanner>
    )
}

ImageBanner.defaultProps = {
    colour: 'pink',
    image: '',
    image_position: 'right center'
}

ImageBanner.propTypes = {
    colour: PropTypes.string,
    image: PropTypes.object,
    image_position: PropTypes.string
}


export default ImageBanner
