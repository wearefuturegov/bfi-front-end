import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Container from '../bfi-components/Container';

const NavSections = ({currentHome, NavInner, NavList, setnavHover, navHover, navPadding, navSidePadding}) => {

    const StyledNavSections = styled.nav`
        text-align: center;
        font-weight: 600;
        width: 100%;
        z-index: 99999;
        display: none;

        li { 
            a {
                padding: ${navPadding}px ${navSidePadding}px;
                -webkit-transition: background-color ease 0.25s;
                -moz-transition: background-color ease 0.25s;
                -o-transition: background-color ease 0.25s;
                transition: background-color ease 0.25s;
                &:hover {
                    text-decoration: none;
                }
            }
        }

        @media ${vars.breakpoint.tablet} {
            position: relative;
            display: block;
            top: 6px;
            li {
                a {
                    padding: ${navPadding-5}px ${navSidePadding-5}px;
                }
            }
        }
        @media ${vars.breakpoint.desktop} {
            top: 0;
            li {
                a {
                    padding: ${navPadding}px ${navSidePadding}px;
                }
            }
        }
    `
    return (
        <StyledNavSections>
            <NavInner>
                <NavList>
                    <li className={(currentHome === 'watch' ? 'active' : '') + (navHover === 'watch' ? ' hovered' : '') } onMouseOver={() => setnavHover('watch')} ><Link to="/">Watch</Link></li>
                    <li className={(currentHome === 'explore' ? 'active' : '') + (navHover === 'explore' ? ' hovered' : '') } onMouseOver={() => setnavHover('explore')} ><Link to="/explore">Explore</Link></li>
                    <li className={(currentHome === 'make' ? 'active' : '') + (navHover === 'make' ? ' hovered' : '') } onMouseOver={() => setnavHover('make')} ><Link to="/make">Make</Link></li>
                    <li className={(currentHome === 'education' ? 'active' : '') + (navHover === 'education' ? ' hovered' : '') } onMouseOver={() => setnavHover('education')} ><Link to="/education">Education</Link></li>
                    <li className={(currentHome === 'about-us' ? 'active' : '') + (navHover === 'about-us' ? ' hovered' : '') } onMouseOver={() => setnavHover('about-us')} ><Link to="/about-us">About Us</Link></li>
                    <li className={(currentHome === 'support-and-join' ? 'active' : '') + (navHover === 'support-and-join' ? ' hovered' : '') } onMouseOver={() => setnavHover('support-and-join')} ><Link to="/support-and-join">Support &amp; Join</Link></li>
                </NavList>
            </NavInner>
        </StyledNavSections>
    )
}

export default NavSections;