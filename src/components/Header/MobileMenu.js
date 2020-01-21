import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import * as vars from '../../variables.js';
import posed, { PoseGroup } from 'react-pose';

import SubNavItems from './SubNavItems';
import MobileMenuBlock  from './MobileMenuBlock';

// TODO - for some reason this animation is not working
const ShowMenu = posed.nav({
    exit: { opacity: 0 },
    enter: { opacity: 1 }
});

const StyledMobileMenu = styled(ShowMenu)`
    width: 100%;
    background: rgb(${vars.colour.white});
    z-index: 10;
    position: absolute;
    top: 59px;
    max-height: calc(100vh - 60px);
    overflow: scroll;
    border-bottom: 1px solid rgb(${vars.colour.grey});

    @media ${vars.breakpoint.tablet} {
        display: none;
    }
    @media ${vars.breakpoint.desktop} {
        display: none;
    }
`

const MobileMenu = ({mobileMenuOpen}) => {
    return (
        <PoseGroup>
            {mobileMenuOpen &&
                <StyledMobileMenu key="menu">
                    <MobileMenuBlock subMenuName="Watch" SubNavItems={SubNavItems.WatchLinks} />
                    <MobileMenuBlock subMenuName="Explore" SubNavItems={SubNavItems.ExploreLinks} />
                    <MobileMenuBlock subMenuName="Make" SubNavItems={SubNavItems.MakeLinks} />
                    <MobileMenuBlock subMenuName="Education" SubNavItems={SubNavItems.EducationLinks} />
                    <MobileMenuBlock subMenuName="About Us" SubNavItems={SubNavItems.AboutLinks} />
                    <MobileMenuBlock subMenuName="Support & Join" SubNavItems={SubNavItems.SupportLinks} />
                </StyledMobileMenu>
            }
        </PoseGroup>
    )
}

export default MobileMenu;