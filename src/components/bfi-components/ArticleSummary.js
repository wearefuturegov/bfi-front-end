import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Heading from '../bfi-components/Heading';

const ArticleSummary = (props) => {  
    const StyledArticleSummary = styled.div`
        width: 100%;
        margin: auto;

        a {
            color: ${vars.colour.black};
            text-decoration: none;
        }

        &:last-of-type {
            margin-left: 0;
            margin-right: auto;
        }

        @media ${vars.breakpoint.desktop} {
            width: ${props.as === 'large' ? 'calc(74% - 20px)' : 'calc(24% - 20px)'};
        }
    `

    return (
        <StyledArticleSummary>
            <a href={props.link} rel="noopener noreferrer" target="_blank" title={"View article about " + props.title}>
                <Heading as="h3">{props.title}</Heading>
                <p>{props.desc}</p>
                <p>{props.author} - {props.date}</p>
            </a>
        </StyledArticleSummary>
    )
}

ArticleSummary.defaultProps = {
    as: "small"
}

export default ArticleSummary
