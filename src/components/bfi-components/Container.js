import React, { Component } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

const Container = (props) => {
    const StyledContainer = styled.div`
        max-width: ${vars.screen_size.desktop};
        margin: ${props.noMargin ? '0px' : '25px' } auto;
        padding: 0 15px;
        
        @media ${vars.breakpoint.hd} {
            margin: ${props.noMargin ? '0px' : '40px' }  auto;
            max-width: ${vars.screen_size.desktopL};        
        }
    `
    return (
        <StyledContainer>{props.children}</StyledContainer>
    )
}

Container.defaultProps = {
    noMargin: false
}

Container.propTypes = {
    noMargin: PropTypes.bool
}


export default Container
