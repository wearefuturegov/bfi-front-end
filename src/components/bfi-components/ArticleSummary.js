import React, { Component } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Heading from '../bfi-components/Heading';

const ArticleSummary = (props) => {  
    const StyledArticleSummary = styled.div`
        width: ${props.as === 'large' ? 'calc(74% - 20px)' : 'calc(24% - 20px)'};
        margin: auto;
    `

    return (
        <StyledArticleSummary>
            <Heading as="h3">{props.title}</Heading>
            <p>{props.desc}</p>
            <p>{props.author} - {props.date}</p>
        </StyledArticleSummary>
    )
}

ArticleSummary.defaultProps = {
    as: "small"
}

export default ArticleSummary
