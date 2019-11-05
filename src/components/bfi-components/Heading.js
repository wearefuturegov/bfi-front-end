import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = (props) => {
    const StyledHeading = styled(props.as)`
        
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
