import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';


const Heading = (props) => {
    const StyledHeading = styled(props.as)`
        font-family: ${vars.font.heading};
        text-transform: ${props.as === 'h1' || props.as === 'h2' ? 'uppercase' : 'default'};

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
