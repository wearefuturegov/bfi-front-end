import React from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import PropTypes from 'prop-types';

export const Container = (props) => {
    const StyledContainer = styled.div`
        max-width: ${vars.screen_size.desktop};
        // max-width: ${!props.withSidebar ? vars.screen_size.desktop : 'calc('+vars.screen_size.desktop+' - 33%)'};
        margin: ${props.margin === 'none' ? '0px' : (props.margin === 'small' ? '15px' : '25px') } auto;
        padding: 0 15px;
        display: ${!props.withSidebar ? 'block' : 'flex'};
        
        @media ${vars.breakpoint.tablet} {
            padding: 0 30px;
            margin: ${props.margin === 'none' ? '0px' : (props.margin === 'small' ? '25px' : '40px') }  auto;
        }
        @media ${vars.breakpoint.desktop} {
            margin: ${props.margin === 'none' ? '0px' : (props.margin === 'small' ? '40px' : '60px') }  auto;
        }
        @media ${vars.breakpoint.super_hd} {
            margin: ${props.margin === 'none' ? '0px' : (props.margin === 'small' ? '60px' : '80px') }  auto;
            // max-width: ${!props.withSidebar ? vars.screen_size.hd : 'calc('+vars.screen_size.hd+' - 33%)'};
            max-width: ${vars.screen_size.hd};
            padding: 0 75px;
        }
    `
    const ContainerInner = styled.div`
        width: 66%;
        display: inline-block;
    `
    const SidebarContainer = styled.div`
        width: 34%;
        display: inline-block;
        padding-left: ${props.sidebarSide === 'right' ? '25px' : '0'};
        padding-right: ${props.sidebarSide === 'right' ? '0' : '25px'};
    `
    return (
        <StyledContainer>
            {!props.withSidebar ? 
                props.children
            : 
                props.sidebarSide === 'right' ?
                    <>
                    <ContainerInner>{props.children[0]}</ContainerInner>
                    <SidebarContainer>{props.children[1]}</SidebarContainer>
                    </>
                : 
                    <>
                    <SidebarContainer>{props.children[1]}</SidebarContainer>
                    <ContainerInner>{props.children[0]}</ContainerInner>
                    </>
            }
        </StyledContainer>
    )
}

Container.defaultProps = {
    margin: 'default',
    withSidebar: false,
    sidebarSide: 'right'
}

Container.propTypes = {
    margin: PropTypes.string,
    withSidebar: PropTypes.bool,
    sidebarSide: PropTypes.string,
}


export default Container
