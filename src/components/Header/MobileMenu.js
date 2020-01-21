import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import * as vars from '../../variables.js';
import posed, { PoseGroup } from 'react-pose';

import SubNavItems from './SubNavItems';
import MobileMenuBlock  from './MobileMenuBlock';

import { slideInDown } from 'react-animations'

const slideInDownAnimation = keyframes`${slideInDown}`;

const StyledMobileMenu = styled.nav`
    width: 100%;
    background: rgb(${vars.colour.white});
    z-index: 10;
    position: absolute;
    top: 59px;
    max-height: calc(100vh - 60px);
    overflow: scroll;
    border-bottom: 1px solid rgb(${vars.colour.grey});
    animation: 0.5s ${slideInDownAnimation};


    @media ${vars.breakpoint.tablet} {
        display: none;
    }
    @media ${vars.breakpoint.desktop} {
        display: none;
    }
`

const MobileMenu = ({mobileMenuOpen}) => {
    return (
        <>
            {mobileMenuOpen && 
            <StyledMobileMenu key="menu">
                <MobileMenuBlock subMenuName="Watch" SubNavItems={SubNavItems.WatchLinks} />
                <MobileMenuBlock subMenuName="Explore" SubNavItems={SubNavItems.ExploreLinks} />
                <MobileMenuBlock subMenuName="Make" SubNavItems={SubNavItems.MakeLinks} />
                <MobileMenuBlock subMenuName="Education" SubNavItems={SubNavItems.EducationLinks} />
                <MobileMenuBlock subMenuName="About Us" SubNavItems={SubNavItems.AboutLinks} />
                <MobileMenuBlock subMenuName="Support &amp; Join" SubNavItems={SubNavItems.SupportLinks} />
            </StyledMobileMenu>
            }
        </>
    )
}

export default MobileMenu;