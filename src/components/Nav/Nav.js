import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Container from '../bfi-components/Container'

import WatchSub from './WatchSub'
import ExploreSub from './ExploreSub'
import MakeSub from './MakeSub'
import EducationSub from './EducationSub'
import AboutSub from './AboutSub'
import SupportSub from './SupportSub'

const StyledHeader = styled.header`
    -webkit-box-shadow: 0px 5px 20px -2px rgba(105,105,105,0.15);
    -moz-box-shadow: 0px 5px 20px -2px rgba(105,105,105,0.15);
    box-shadow: 0px 5px 20px -2px rgba(105,105,105,0.15);
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

const StyledTopNav = styled.nav`
    text-align: center;
    font-weight: 600;
    background: ${vars.colour.black};
        
    li { 
        a {
            color: ${vars.colour.white};
            padding: 15px;
            &:hover {
                text-decoration: none;
                background: rgba(${vars.colour.white}, 0.1)
            }
        }
    }
    li {
        &.active {
            a {
                color: ${vars.colour.black};
                background: ${vars.colour.white};
            }
        }
    }
`
const StyledMidNav = styled.nav`
    text-align: center;
    background: ${vars.colour.white};
    font-weight: 600;
    .header_brand {
        width: 20%;
        display: inline-block;
        text-align: left;
        color: ${vars.colour.black};
    }
    ul {
        display: inline-block;
        width: 80%;
        text-align: right;
        li {
            &:last-child {
                a {
                    padding-right: 0;
                }
            }
        }
    }
    .inner {
        border-bottom: rgba(${vars.colour.black}, 0.2) solid 1px;
    }
`

const StyledSubNav = styled.nav`
    text-align: center;
    background: ${vars.colour.white};
    font-weight: 600;
    li {
        &:first-child {
            a {
                padding-left: 0;
            }
        }
    }
`

const NavInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${vars.colour.white};
    padding: 0;
`

const Nav = ({currentHome}) => {

    function subNav() {
        switch(currentHome) {
            case "watch":
                return <WatchSub StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} />;
            case "explore":
                return <ExploreSub StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} />;
            case "make":
                return <MakeSub StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} />;
            case "education":
                return <EducationSub StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} />;
            case "about-us":
                return <AboutSub StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} />;
            case "support-and-join":
                return <SupportSub StyledSubNav={StyledSubNav} NavInner={NavInner} NavList={NavList} />;
            default:
                return null;
        }
    }

    return (
        <StyledHeader>
            <StyledTopNav>
                <Container>
                    <NavInner>
                        <NavList>
                            <li className={currentHome === 'watch' ? 'active' : '' }><Link to="/">Watch</Link></li>
                            <li className={currentHome === 'explore' ? 'active' : '' }><Link to="/explore">Explore</Link></li>
                            <li className={currentHome === 'make' ? 'active' : '' }><Link to="/make">Make</Link></li>
                            <li className={currentHome === 'education' ? 'active' : '' }><Link to="/education">Education</Link></li>
                            <li className={currentHome === 'about-us' ? 'active' : '' }><Link to="/about-us">About Us</Link></li>
                            <li className={currentHome === 'support-and-join' ? 'active' : '' }><Link to="/support-and-join">Support &amp; Join</Link></li>
                        </NavList>
                    </NavInner>
                </Container>
            </StyledTopNav>
            <StyledMidNav>
                <Container>
                    <NavInner>
                        <div className="header_brand">logo</div>
                        <NavList>
                            <li><a href="https://whatson.bfi.org.uk/Online/" target="_blank">Buy tickets</a></li>
                            <li><a href="https://shop.bfi.org.uk" target="_blank">Shop</a></li>
                            <li><a href="https://whatson.bfi.org.uk/Online/login.asp?targetPage=maintainAccount.asp" target="_blank">Log in</a></li>
                            <li><a href="https://www.bfi.org.uk/search/search-bfi/I'm%20looking%20for..." target="_blank">Search</a></li>
                        </NavList>
                    </NavInner>
                </Container>
            </StyledMidNav>
            { subNav() } 
        </StyledHeader>
    )
}

export default Nav
