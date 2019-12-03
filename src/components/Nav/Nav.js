import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';

import SectionNav from './SectionNav'
import MainNav from './MainNav'
import SubNavItems from './SubNavItems'
import WatchSub from './WatchSub'
import ExploreSub from './ExploreSub'
import MakeSub from './MakeSub'
import EducationSub from './EducationSub'
import AboutSub from './AboutSub'
import SupportSub from './SupportSub'

const StyledHeader = styled.header`
    border-bottom: 1px solid ${vars.colour.lightgrey};
    margin-bottom: 40px;
`

const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
        display: inline-block;
        padding: 0;

        a {
            display: block;
            text-decoration: none;
            color: ${vars.colour.black};
            padding: 20px 15px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    
`

const NavInner = styled.div`
    justify-content: space-between;
    align-items: center;
    color: ${vars.colour.white};
    padding: 0;
    display: flex;
`

const StyledSubNav = styled.nav`
    text-align: center;
    background: ${vars.colour.white};
    font-weight: 600;
    display: none;
    z-index:9999;
    li {
        a {
            padding: 15px 15px;
        }
        &:first-child {
            a {
                padding-left: 0;
            }
        }
    }
    @media ${vars.breakpoint.tablet} {
        
    }
    @media ${vars.breakpoint.desktop} {
        display: block;
    }
`
const MobileMenu = styled.nav`
    padding: 15px 15px;
    span {
        margin-left: 10px;
    }
    @media ${vars.breakpoint.tablet} {
        
    }
    @media ${vars.breakpoint.desktop} {
        display: none;
    }
`
const MobileMenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    -webkit-transition: max-height 0.3s, opacity 0.2s 0.1s, visibility 0s 0.3s;
    -moz-transition: max-height 0.3s, opacity 0.2s 0.1s, visibility 0s 0.3s;
    -ms-transition: max-height 0.3s, opacity 0.2s 0.1s, visibility 0s 0.3s;
    -o-transition: max-height 0.3s, opacity 0.2s 0.1s, visibility 0s 0.3s;
    transition: max-height 0.3s, opacity 0.2s 0.1s, visibility 0s 0.3s;
    max-height: 0;
    display: block;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    &.open {
        -webkit-transition: max-height 0.3s, opacity 0.2s, visibility 0s;
        -moz-transition: max-height 0.3s, opacity 0.2s, visibility 0s;
        -ms-transition: max-height 0.3s, opacity 0.2s, visibility 0s;
        -o-transition: max-height 0.3s, opacity 0.2s, visibility 0s;
        transition: max-height 0.3s, opacity 0.2s, visibility 0s;
        max-height: 200px;
        opacity: 1;
        visibility: visible;
    }
    li {
        &:first-child {
            margin-top: 15px;
        }
    }
    a {
        padding: 5px 0;
        display: block;
        color: ${vars.colour.black};
    }
`
const MobileMenuButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 600;
`

const SectionNavContainer = styled.div`

    @media ${vars.breakpoint.hd} {
        display: none;
    }
`
const SubNavContainer = styled.div`

`

// CURRENTLY TODO - WORKING ON NAVIGATION
// 1. Need to update styles of section nav now that it is in the middle
// 2. on larger screens could section nav live inside the top nav similar to this site: https://www.cosstores.com/en_gbp/index.html
//       - then on medium screens it would become a secondary and on mobile it would become the tab bar?
// 4. need to add in hover state to images on watch screen


const Nav = ({currentHome}) => {

    const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
    const [navHover, setnavHover] = useState('');

    const handleMobileMenuClick = () => {
        if(mobileMenuOpen) {
            setmobileMenuOpen(false);
        } else {
            setmobileMenuOpen(true);
        }
    }

    function selectSubNav(nav) {
        switch(nav) {
            case "watch":
                return <WatchSub subMenuName="Watch" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} setnavHover={setnavHover} />;
            case "explore":
                return <ExploreSub subMenuName="Explore" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} setnavHover={setnavHover} />;
            case "make":
                return <MakeSub subMenuName="Make" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} setnavHover={setnavHover} />;
            case "education":
                return <EducationSub subMenuName="Education" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} setnavHover={setnavHover} />;
            case "about-us":
                return <AboutSub subMenuName="About Us" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} setnavHover={setnavHover} />;
            case "support":
                return <SupportSub subMenuName="About Us" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} setnavHover={setnavHover} />;
            default:
                return null;
        }
    }

    return (
        <StyledHeader>
            <MainNav currentHome={currentHome} NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} navHover={navHover} />
            <SectionNavContainer>
                <SectionNav currentHome={currentHome} NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} navHover={navHover} /> 
            </SectionNavContainer>    
            <SubNavContainer onMouseOut={() => setnavHover('')}>      
                { selectSubNav(navHover ? navHover : currentHome) } 
            </SubNavContainer> 
        </StyledHeader>
    )
}

export default Nav
