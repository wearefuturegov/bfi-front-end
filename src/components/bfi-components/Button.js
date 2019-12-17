import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';
import { darken } from 'polished'

const Button = (props) => {
    const StyledButton = styled.button`
        background:  ${props.colour === 'transparent' ? 'transparent' : 'rgb('+props.colour+')'};
        color: rgb(${props.highlight});
        display: inline-block;
        position: relative;
        border: none;
        cursor: pointer;
        padding: 8px 15px;
        font-weight: 700;
        margin-left: 3px;

        -webkit-box-shadow: -3px 3px 0px 0px rgb(${props.highlight});
        -moz-box-shadow: -3px 3px 0px 0px rgb(${props.highlight});
        box-shadow: -3px 3px 0px 0px rgb(${props.highlight});

        &:hover {
            background: ${darken(0.1, 'rgb('+props.colour+')')};
        }
        &:focus {
            box-shadow: 
                    rgb(${vars.colour.white}) 
                    0px 0px 0px 2px, 
                    rgb(${props.highlight === vars.colour.white ? props.colour : props.highlight}) 
                    0px 0px 0px 5px !important;
            outline: none !important;
        }
        &:active {
            box-shadow: none;
            top: 3px;
            margin-left: 0;
        }
    `

    return (
        props.url ? 
            <a tabIndex="-1" href={props.url} title={props.title} target="_blank">
                <StyledButton>{props.children}</StyledButton> 
            </a>
        : 
            <StyledButton>{props.children}</StyledButton> 
        
    )
}

Button.defaultProps = {
    colour: vars.colour.pink,
    highlight: vars.colour.pink_dark,
    url: ''
}

Button.propTypes = {
    colour: PropTypes.string,
    highlight: PropTypes.string,
    url: PropTypes.string
}

export default Button
