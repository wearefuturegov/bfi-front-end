import React, {useState} from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Heading from '../bfi-components/Heading';
import DuoToneImage from './DuoToneImage.js';

const ArticleSummary = ({size, link, title, desc, author, date, image}) => {  
    const StyledArticleSummary = styled.div`
        width: 100%;
        margin: 0px auto;
        flex-grow: 1;
        margin-bottom: 10px;
        padding-bottom: 10px;

        a {
            color: ${vars.colour.black};
            text-decoration: none;
            display: block;
        }
        h4 {
            margin-top: 10px;
        }
        

        @media ${vars.breakpoint.tablet} {
            width: ${size === 'large' ? 'calc(75% - 30px)' : 'calc(25% - 30px)'};
            max-width: ${size === 'large' ? 'calc(75% - 30px)' : 'calc(25% - 30px)'};
            margin-right: 15px;
            padding-right: 15px;
        } 
    `
    const [hovered, sethovered] = useState(false)

    return (
        <StyledArticleSummary>
            <a href={link} rel="noopener noreferrer" target="_blank" title={"View article about " + title} onMouseOver={() => sethovered(true)} onMouseLeave={() => sethovered(false)}>
                <DuoToneImage image={image} isHovered={hovered} bgColour={vars.colour.blue_dark} highlightColour={vars.colour.blue_light} />
                <Heading as="h4">{title}</Heading>
                <p>{desc}</p>
                {author && 
                    <p>{author} - {date}</p>
                }
            </a>
        </StyledArticleSummary>
    )
}

ArticleSummary.defaultProps = {
    size: "small",
    desc: "",
    author: "",
    date: ""
}

export default ArticleSummary
