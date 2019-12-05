import React, { useState } from 'react';
import styled from 'styled-components';
import * as vars from '../../variables.js';

import SubNavItems from './SubNavItems'
import WatchSub from './WatchSub'
import ExploreSub from './ExploreSub'
import MakeSub from './MakeSub'
import EducationSub from './EducationSub'
import AboutSub from './AboutSub'
import SupportSub from './SupportSub'


const SubNav = ({currentHome, setnavHover, navHover, NavInner, NavList, setheadingHover}) => {
    const StyledSubNav = styled.nav`
        text-align: center;
        background: ${vars.colour.grey};
        opacity: 1;
        font-weight: 600;
        display: none;
        position: absolute;
        top: 78px;
        width: 100%;
        transform: translateY(0px);
        -webkit-transition: all ease 1.25s;
        -moz-transition: all ease 1.25s;
        -o-transition: all ease 1.25s;
        transition: all ease 1.25s;
        z-index: 10;
        li {
            a {
                padding: 15px 15px;
                color: ${vars.colour.black};
            }
        }

        

        @media ${vars.breakpoint.tablet} {
            opacity: 0;
            transform: translateY(-48px);
            
            &.hovered  {
                opacity: 1;
                transform: translateY(0px);
                background-color: ${vars.colour.grey_light}
            }
            &.active  {
                background-color: ${vars.colour.grey}
            }
        }
        @media ${vars.breakpoint.desktop} {
            display: block;
        }
    `
    const MobileMenu = styled.nav`
        padding: 15px 15px;
        background:  ${vars.colour.white};
        display: block;
        span {
            margin-left: 10px;
        }
        @media ${vars.breakpoint.tablet} {
            display: none;
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
    const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

    function selectSubNav(nav) {
        switch(nav) {
            case "watch":
                return <WatchSub subMenuName="Watch" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} navHover={navHover} setnavHover={setnavHover} currentHome={currentHome} />;
            case "explore":
                return <ExploreSub subMenuName="Explore" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} navHover={navHover} setnavHover={setnavHover} currentHome={currentHome} />;
            case "make":
                return <MakeSub subMenuName="Make" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} navHover={navHover} setnavHover={setnavHover} currentHome={currentHome} />;
            case "education":
                return <EducationSub subMenuName="Education" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} navHover={navHover} setnavHover={setnavHover} currentHome={currentHome} />;
            case "about-us":
                return <AboutSub subMenuName="About Us" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} navHover={navHover} setnavHover={setnavHover} currentHome={currentHome} />;
            case "support-and-join":
                return <SupportSub subMenuName="About Us" SubNavItems={SubNavItems} StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} MobileMenu={MobileMenu} MobileMenuList={MobileMenuList} MobileMenuButton={MobileMenuButton} mobileMenuOpen={mobileMenuOpen} handleMobileMenuClick={handleMobileMenuClick} navHover={navHover} setnavHover={setnavHover} currentHome={currentHome} />;
            default:
                return null;
        }
    }
    const handleMobileMenuClick = () => {
        if(mobileMenuOpen) {
            setmobileMenuOpen(false);
        } else {
            setmobileMenuOpen(true);
        }
    }
    function HandleLeave() {
        setheadingHover(false);
        setnavHover(false);
    }

    return (
        <div onMouseOver={() => setheadingHover(true)} onMouseLeave={() => HandleLeave()}>
            {selectSubNav(navHover ? navHover : currentHome)}
        </div>
    )
}

export default SubNav;