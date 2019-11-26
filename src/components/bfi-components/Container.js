import React, { Component } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';

const StyledContainer = styled.div`
    max-width: ${vars.size.desktop};
    margin: 0 auto;
    padding: 0 15px;
    @media ${vars.breakpoint.hd} {
        padding: 0;
    }
`


export class Container extends Component {
    render() {
        return (
            <StyledContainer>{this.props.children}</StyledContainer>
        )
    }
}

export default Container
