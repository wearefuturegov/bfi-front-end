import React, { useRef } from 'react';
import styled from 'styled-components';
import { bool, node } from "prop-types";
import posed from 'react-pose';


// TODO - this animation also not working

const SlideInContent = posed.div({
    exit: { height: 0 },
    enter: { height: 'auto' }
});

const StyledSlideInContent = styled(SlideInContent)`
    overflow: hidden;
    height: 0;
`

const SlideToggleContent = ({ isVisible, children, key }) => {
    return (
        <>
        {isVisible &&
            <StyledSlideInContent key={key}>
                {children}
            </StyledSlideInContent>
        }
        </>   
    )
};


export default SlideToggleContent
