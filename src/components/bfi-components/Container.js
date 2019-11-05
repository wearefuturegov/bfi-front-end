import React, { Component } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
`


export class Container extends Component {
    render() {
        return (
            <StyledContainer>{this.props.children}</StyledContainer>
        )
    }
}

export default Container
