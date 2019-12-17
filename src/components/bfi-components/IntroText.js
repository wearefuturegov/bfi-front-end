import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';

const IntroText = (props) => {
    const StyledIntroText = styled.p`
        font-size: 19px;
        line-height: 27px;
        max-width: ${vars.screen_size.desktop}
    `

    return (
        <StyledIntroText>{props.children}</StyledIntroText>   
    )
}

export default IntroText;