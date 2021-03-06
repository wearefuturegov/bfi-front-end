import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';

import NavSections from './NavSections'
import PromoBar from './PromoBar';
import SubNav from './SubNav'
import MobileMenu from './MobileMenu'

import Container from '../bfi-components/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LogoBlack from '../../images/logos/bfi-logo-black.svg';
import LogoWhite from '../../images/logos/bfi-logo-white.svg';

const Header = ({currentHome, whiteHeader}) => {
    const [navPadding, setnavPadding] = useState(20);  
    const [navSidePadding, setnavSidePadding] = useState(20);  
    const [navHover, setnavHover] = useState('');  
    const [headingHover, setheadingHover] = useState(false);  
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

    const handleScroll = () => {
        setSticky(ref.current.getBoundingClientRect().top <= 0);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const HeaderContainer = styled.div``

    const StickyHeaderContainer = styled.div`
        position: relative;

        &.sticky {
            .sticky-inner {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 9999;
            }
        }
    `

    const StyledHeader= styled.header`
        font-weight: 600;
        position: absolute;
        width: 100%;
        z-index: 99999;
        background: rgba(${vars.colour.white}, 0);

        a, button {
            color: rgb(${vars.colour.white});
        }
        li {
            &.active, &.hovered {
                a {
                    position: relative;
                    &:after {
                        content: "";
                        height: 2px;
                        position: absolute;
                        background-color: rgb(${vars.colour.white});

                        @media ${vars.breakpoint.tablet} {
                            width: calc(100% - ${(navSidePadding-5)*2}px);
                            bottom: ${(navPadding-5)-5}px;
                            left: ${(navSidePadding-5)}px;  
                        }
                        @media ${vars.breakpoint.desktop} {
                            width: calc(100% - ${navSidePadding*2}px);
                            bottom: ${navPadding-5}px;
                            left: ${navSidePadding}px;  
                        }
                    }
                }
            }
            &.hovered { 
                &:not(.active) {
                    a {
                        &:after {
                            display:none;
                        }
                    }
                }
                a {
                    &:before {
                        content: "";
                        position: absolute;
                        bottom: -1px;
                        left: calc(50% - 10px);   
                        border-left: 10px solid transparent;
                        border-right: 10px solid transparent;
                        
                        border-bottom: 10px solid rgb(${vars.colour.grey});  

                        @media ${vars.breakpoint.tablet} {
                            bottom: -7px;
                        }
                        @media ${vars.breakpoint.desktop} {
                            bottom: -1px;
                        }
                    }
                }
            }
        }

        &.whiteHeader {
            border-bottom: 1px solid rgb(${vars.colour.grey});
            background: rgba(${vars.colour.white}, 1);

            a, button {
                color: rgb(${vars.colour.black});
            }
            li {
                a {
                    color: rgb(${vars.colour.black})
                }
                &.active {
                    a {
                        &:after {
                            background-color: rgb(${vars.colour.black});
                        }
                    }
                }
            }
        }
    `
    const LogoContainer = styled.div`
        display: inline-flex;
        a {
            display: inline-flex;
        }
    `   

    const BFILogo = styled.img`
        vertical-align: middle;
        max-width: 47px;
        margin-right: 50px;
    `
    const NavSectionContainer = styled.div`
        display: inline-block;
    `
    const NavInner = styled.div`
        color: rgb(${vars.colour.white});
        padding: 0;
        display: flex;
        align-items: left;
        justify-content: left;
    `

    const SearchButton = styled.div`
        margin-left: auto;
        display: none;
        a {
            padding: ${navPadding}px 0px;
            padding-left: 15px;
            text-decoration: none;
        }
        svg {
            margin-right: 10px;
        }
        @media ${vars.breakpoint.tablet} {
            display: inline-flex;
        }
    `
    const MobileMenuButton = styled.button`
        margin-left: auto;
        display: inline-flex;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: ${navPadding}px ${navPadding/2}px;

        svg {
            margin-top: 1px;
            margin-right 5px;
        }
        @media ${vars.breakpoint.tablet} {
            display: none;
        }
    `
    const NavList = styled.ul`
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: ${vars.font.base_size};
        li {
            display: inline-block;
            padding: 0;

            a {
                display: block;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }   

        @media ${vars.breakpoint.tablet} {
            font-size: 14px;
        }
        @media ${vars.breakpoint.desktop} {
            font-size: ${vars.font.base_size};
        }
        @media ${vars.breakpoint.super_hd} {
            font-size: 18px;
        }
    `

    function HandleLeave() {
        setheadingHover(false);
        setnavHover(false);
    }
    
    function handleMobileMenuClick() {
        if(mobileMenuOpen) {
            setmobileMenuOpen(false);
        } else {
            setmobileMenuOpen(true);
        }
    }

    return (
        <HeaderContainer onMouseLeave={() => HandleLeave()}>
            <PromoBar NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} />
            <StickyHeaderContainer className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                <div className="sticky-inner">
                    <StyledHeader className={isSticky || headingHover || whiteHeader || mobileMenuOpen ? 'whiteHeader' : ''} onMouseOver={() => setheadingHover(true)}>
                        <Container margin="none">
                            <NavInner>
                                <LogoContainer>
                                    <Link to="/">
                                        <BFILogo src={isSticky || headingHover || whiteHeader || mobileMenuOpen ? LogoBlack : LogoWhite} alt="BFI Logo" />
                                    </Link>
                                </LogoContainer>
                                <NavSectionContainer>
                                    <NavSections currentHome={currentHome} NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} navHover={navHover} navPadding={navPadding} navSidePadding={navSidePadding} />
                                </NavSectionContainer>
                                <SearchButton>
                                    <a href="https://www.bfi.org.uk/search/search-bfi/I'm%20looking%20for..." target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faSearch} />
                                        Search
                                    </a>
                                </SearchButton>
                                <MobileMenuButton onClick={handleMobileMenuClick}>
                                    <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                                    {mobileMenuOpen ? 'Close' : 'Menu'}
                                </MobileMenuButton>
                            </NavInner>
                        </Container>
                    </StyledHeader>
                    <SubNav currentHome={currentHome} setnavHover={setnavHover} navHover={navHover} NavInner={NavInner} NavList={NavList} />
                    <MobileMenu mobileMenuOpen={mobileMenuOpen} />
                </div>      
            </StickyHeaderContainer>
        </HeaderContainer>
    )
}

export default Header
