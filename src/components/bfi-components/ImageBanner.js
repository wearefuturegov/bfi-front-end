import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

const ImageBanner = (props) => {
    const StyledImageBanner = styled.div`
        background-color: ${props.colour === 'pink' ? vars.colour.pink : props.colour};
        color: ${props.colour === 'pink' ? vars.colour.pink_dark : '#fff'};
        padding: ${props.padding}px;
        position: relative;
        overflow: hidden;

        h2 {
            line-height: 1.3;
        }
        
        @media ${vars.breakpoint.tablet} {
            h2 {
                max-width: 90%;
            }
        }
        @media ${vars.breakpoint.desktop} {
            min-height: 250px;

            button {
                position: absolute; 
                bottom: ${props.padding}px;
            }
        }
        @media ${vars.breakpoint.hd} {
            padding: ${(props.padding*2)}px;

            button {
                bottom: ${(props.padding*2)}px;
            }
        }
    `
    const InnerContainer = styled.div`
    
        @media ${vars.breakpoint.tablet} {
            margin-left: ${props.text_right ? '55%' : '0'};
            width: 50%;
        } 
        @media ${vars.breakpoint.desktop} {
            margin-left: ${props.text_right ? 'calc(50% + '+props.padding+'px)' : '0'};
        }   
    `
    const VerticalAlignHelper = styled.span`
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        position: absolute;
        right: ${props.text_right ? 'inherit' : '0'};
        left: ${props.text_right ? '0' : 'inherit'};
        top: 0;
        width: 50%;    
    `
    const SideImage = styled.img`
        width: 100%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    `
    return (
        <StyledImageBanner>
            <InnerContainer>
                {props.children}
                { props.image &&
                    <VerticalAlignHelper><SideImage src={props.image} alt="" /></VerticalAlignHelper>
                }
            </InnerContainer>
        </StyledImageBanner>
    )
}

ImageBanner.defaultProps = {
    colour: 'pink',
    image: '',
    image_position: 'right center',
    image_origin: 'intial',
    image_size: 'small',
    padding: '25',
    text_right: false
}

ImageBanner.propTypes = {
    colour: PropTypes.string,
    image: PropTypes.object,
    image_position: PropTypes.string,
    image_origin: PropTypes.string,
    image_size: PropTypes.string,
    padding: PropTypes.string,
    text_right: PropTypes.bool
}


export default ImageBanner
