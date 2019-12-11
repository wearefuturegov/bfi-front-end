import React from 'react'
import styled, { keyframes } from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

const Skeleton = (props) => {
    function chooseSkeleton(type) {
        switch(type) {
            case "film":
                return <FilmSkeleton />;
            case "hero":
                return <HeroSkeleton />;
            default:
                return null;
        }
    }
    const animateCard = keyframes`
        to {
            background-position:
                250% 0,        
                ${props.cardPadding} ${props.titleOffset},  
                ${props.cardPadding} ${props.line1Position},
                ${props.cardPadding} ${props.line2Position},
                ${props.cardPadding} ${props.cardPadding},
                0 ${props.cardHeight},
                0 0
                ;
        }
    `
    const animateHero = keyframes`
        to {
            background-position:
                250% 0,        
                calc(${props.cardPadding}*2) ${props.titleOffset},  
                calc(${props.cardPadding}*2) ${props.line1Position},
                calc(${props.cardPadding}*2) ${props.line2Position},
                calc(${props.cardPadding}*2) calc(${props.line2Position}*1.095),
                calc(${props.cardPadding}*2) calc(${props.cardPadding}*2),
                0 ${props.cardHeight},
                0 0
                ;
        }
    `
    const HeroSkeleton = styled('div')`
        width: 100%;
        height: ${props.heroHeight};
        margin-bottom: 50px;
        margin-top: -30px;
        
        &:empty::after {
            content:"";
            display:block;
            width: 100%;
            height: 100%;
            border-radius: 0px;
            border: 1px solid #999;

            background-image: 
                linear-gradient(90deg, rgba(211, 211, 211, 0) 0, rgba(211, 211, 211, 0.8) 50%, rgba(211, 211, 211, 0) 100%), 
                linear-gradient(rgb(${vars.colour.white}) ${props.titleHeight}, transparent 0), 
                linear-gradient(rgb(${vars.colour.white}) ${props.lineHeight}, transparent 0), 
                linear-gradient(rgb(${vars.colour.white}) ${props.lineHeight}, transparent 0), 
                linear-gradient(rgb(${vars.colour.white}) ${props.lineHeight}, transparent 0), 
                radial-gradient(circle calc(${props.titleHeight} / 2), rgb(${vars.colour.white}) 0%, transparent 0), 
                linear-gradient(rgb(${vars.colour.white}) 0px, transparent 0), 
                linear-gradient(${vars.colour.grey_dark} ${props.heroHeight}, 
                transparent 0);

            background-size: 
                ${props.heroTitleWidth} ${props.heroHeight}, 
                ${props.heroTitleWidth} ${props.titleHeight}, 
                ${props.heroLine1Width} ${props.lineHeight}, 
                ${props.heroLine1Width} ${props.lineHeight}, 
                ${props.heroLine2Width} ${props.lineHeight}, 
                ${props.titleHeight} ${props.titleHeight}, 
                100% 0px, 100% 100%;
            background-position:
                -150% 0,                      //animation
                calc(${props.cardPadding}*2) ${props.titleOffset},        //title
                calc(${props.cardPadding}*2) ${props.line1Position},  //desc1
                calc(${props.cardPadding}*2) ${props.line2Position},  //desc2
                calc(${props.cardPadding}*2) calc(${props.line2Position}*1.095),  //desc3
                calc(${props.cardPadding}*2) calc(${props.cardPadding}*2),       //avatar
                0 0;

                background-repeat: no-repeat;
                animation: ${animateHero} ${props.animateTime} infinite;
        }
    `
    const FilmSkeleton = styled('div')`
        width: calc(25% - 2px);
        height: ${props.cardHeight};
        display: inline-block;
        margin: 0;
        margin-top: -3px;
        background: ${vars.colour.grey};
        border: 1px solid ${vars.colour.grey_dark};
    `

    return (
        chooseSkeleton(props.as)
    )
}

Skeleton.defaultProps = {
    as: "film",
    cardPadding: "17px",
    cardHeight: "180px",
    animateTime: "2s",

    titleHeight: "25px",
    titleWidth: "60%",
    titleOffset: "160px",

    lineHeight: "13px",
    line1Width: "80%",
    line1Position: "195px",
    line2Width: "65%",
    line2Position: "215px",

    heroHeight: "400px",
    heroTitleWidth: "40%",
    heroLine1Width: "30%",
    heroLine2Width: "27%"
}

Skeleton.propTypes = {
    as: PropTypes.string,
    cardPadding: PropTypes.string,
    cardHeight: PropTypes.string,
    anmiateTime: PropTypes.string,

    titleHeight: PropTypes.string,
    titleWidth: PropTypes.string,
    titleOffset: PropTypes.string,

    lineHeight: PropTypes.string,
    line1Width: PropTypes.string,
    line1Position: PropTypes.string,
    line2Width: PropTypes.string,
    line2Position: PropTypes.string,

    heroHeight: PropTypes.string,
    heroTitleWidth: PropTypes.string,
    heroLine1Width: PropTypes.string,
    heroLine2Width: PropTypes.string
}

export default Skeleton
