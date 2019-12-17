import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';

const BFIPlayerCTA = (props) => {
    const StyledBFIPlayerCTA = styled.div`
        button {
            color: rgb(${vars.colour.white});
            font-size: 30px;
            text-align: left;
            text-transform: uppercase;
            padding: 20px;
            padding-top: 10px;
            line-height: 50px;
            margin-bottom: 15px;
            // width: 100%;

            img {
                display: block;
            }
        }
    `

    return (
        <StyledBFIPlayerCTA>{props.children}</StyledBFIPlayerCTA> 
    )
}

export default BFIPlayerCTA
