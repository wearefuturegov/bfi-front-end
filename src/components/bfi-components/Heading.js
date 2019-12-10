import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

export const Heading = (props) => {
    const StyledHeading = styled(props.as)`
        margin-top: 0;
        font-family: ${props.as === 'h1' || props.style === 'h1' ? vars.font.heading : vars.font.body};
        text-transform: ${props.as === 'h1' || props.style === 'h1' ? 'uppercase' : 'none'};
        font-weight: ${props.as === 'h1' || props.style === 'h1' ? '800' : (props.as === 'h2' ? '400' : (props.as === 'h3' ? '600' : '800'))};
        font-size: ${props.as === 'h1' || props.style === 'h1' ? '30px' : (props.as === 'h2' ? '27px' : (props.as === 'h3' ? '22px' : '20px'))};

        @media ${vars.breakpoint.tablet} {
            font-size: ${props.as === 'h1' || props.style === 'h1' ? '25px' : (props.as === 'h2' ? '22px' : (props.as === 'h3' ? '20px' : '18px'))};
        }
        @media ${vars.breakpoint.desktop} {
            font-size: ${props.as === 'h1' || props.style === 'h1' ? '33px' : (props.as === 'h2' ? '27px' : (props.as === 'h3' ? '22px' : '20px'))};
        }
        @media ${vars.breakpoint.hd} {
            font-size: ${props.as === 'h1' || props.style === 'h1' ? '37px' : (props.as === 'h2' ? '32px' : (props.as === 'h3' ? '27px' : '24px'))};
        }
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


export const HeadingBuffer = () => {
    const HeadingBuffer = styled.div`
        width: 100%;
        height: 35px;
    `
    return (
        <HeadingBuffer />
    )
}