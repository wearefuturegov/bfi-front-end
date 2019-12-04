import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

export const HeadingBuffer = () => {
    const HeadingBuffer = styled.div`
        width: 100%;
        height: 35px;
    `
    return (
        <HeadingBuffer />
    )
}

export const Heading = (props) => {
    const StyledHeading = styled(props.as)`
        font-family: ${props.as === 'h1' ? vars.font.heading : vars.font.body};
        text-transform: ${props.as === 'h1' ? 'uppercase' : 'default'};
    `

    return (
        <StyledHeading>{props.children}</StyledHeading>   
    )
}

Heading.defaultProps = {
    as: "h1"
}

Heading.propTypes = {
    as: PropTypes.string
}

export default Heading
