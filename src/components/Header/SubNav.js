import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as vars from '../../variables.js';

import SubNavItems from './SubNavItems'
import SubNavInner  from './SubNavInner'

import { slideInDown } from 'react-animations'

const slideInDownAnimation = keyframes`${slideInDown}`;

const SubNav = ({currentHome, navHover, NavInner, NavList}) => {
    const StyledSubNav = styled.nav`
        text-align: center;
        background: rgb(${vars.colour.grey});
        opacity: 1;
        font-weight: 600;
        display: none;
        position: absolute;
        top: 58px;
        width: 100%;
        z-index: 10;
        li {
            a {
                padding: 15px 15px;
                color: rgb(${vars.colour.black});
            }
        }

        @media ${vars.breakpoint.tablet} {
            opacity: 0;
            display: block;
            
            &.subNavShow  {
                opacity: 1;
                animation: 0.5s ${slideInDownAnimation};
                background-color: rgb(${vars.colour.grey})
            }
        }

    `

    function selectSubNav(nav) {
        switch(nav) {
            case "watch":
                return <SubNavInner subMenuName="Watch" SubNavItems={SubNavItems.WatchLinks} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} navHover={navHover} currentHome={currentHome} />;
            case "explore":
                return <SubNavInner subMenuName="Explore" SubNavItems={SubNavItems.ExploreLinks} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} navHover={navHover} currentHome={currentHome} />;
            case "make":
                return <SubNavInner subMenuName="Make" SubNavItems={SubNavItems.MakeLinks} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} navHover={navHover} currentHome={currentHome} />;
            case "education":
                return <SubNavInner subMenuName="Education" SubNavItems={SubNavItems.EducationLinks} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} navHover={navHover} currentHome={currentHome} />;
            case "about-us":
                return <SubNavInner subMenuName="About Us" SubNavItems={SubNavItems.AboutLinks} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} navHover={navHover} currentHome={currentHome} />;
            case "support-and-join":
                return <SubNavInner subMenuName="Support & Join" SubNavItems={SubNavItems.SupportLinks} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} navHover={navHover} currentHome={currentHome} />;
            default:
                return null;
        }
    }

    return (
        selectSubNav(navHover ? navHover : currentHome)
    )
}

export default SubNav;