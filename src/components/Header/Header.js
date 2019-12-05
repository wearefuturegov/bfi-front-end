import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';

import NavSections from './NavSections'
import PromoBar from './PromoBar';
import SubNav from './SubNav'

import Container from '../bfi-components/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LogoBlack from '../../images/logos/bfi-logo-black.svg'
import LogoWhite from '../../images/logos/bfi-logo-white.svg'



const Header = ({currentHome}) => {
    const [navSidePadding, setnavSidePadding] = useState(30);  
    const [navTopPadding, setnavTopPadding] = useState(20);  
    const [navHover, setnavHover] = useState('');  
    const [headingHover, setheadingHover] = useState(false);  
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        setSticky(ref.current.getBoundingClientRect().top <= 0);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);


    const HeaderBuffer = styled.div`
        width: 100%;
        height: 115px;
    `

    const HeaderContainer = styled.div`
    
    `

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
        background: transparent;
        font-weight: 600;
        -webkit-transition: background-color ease 0.15s;
        -moz-transition: background-color ease 0.15s;
        -o-transition: background-color ease 0.15s;
        transition: background-color ease 0.15s;
        position: absolute;
        width: 100%;
        z-index: 99999;

        a {
            color: ${vars.colour.white};
        }
        li {
            &.active, &.hovered {
                a {
                    position: relative;
                    &:after {
                        content: "";
                        height: 2px;
                        width: calc(100% - ${navTopPadding*2}px);
                        background-color: ${vars.colour.white};
                        position: absolute;
                        bottom: ${navSidePadding-5}px;
                        left: ${navTopPadding}px;                        
                    }
                }
            }
            &.hovered { 
                a {
                    &:after {
                        background-color: ${vars.colour.grey_dark};
                    }
                }
            }
        }

        &.hovered {
            background: ${vars.colour.white};
            a {
                color: ${vars.colour.black};
            }
            li {
                a {
                    color: ${vars.colour.black}
                }
                &.active {
                    a {
                        &:after {
                            background-color: ${vars.colour.black};
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
        color: ${vars.colour.white};
        padding: 0;
        display: flex;
        align-items: left;
        justify-content: left;
    `

    const SearchButton = styled.div`
        margin-left: auto;
        display: inline-flex;
        a {
            padding: ${navSidePadding}px 0px;
            padding-left: 15px;
        }
    `

    const NavSectionsContainer = styled.div`
        @media ${vars.breakpoint.hd} {
            display: none;
        }
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
                padding: 20px 15px;
                &:hover {
                    text-decoration: underline;
                }
            }
        }   
    `

    return (
        <>
        <HeaderContainer>
            <PromoBar NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} />
            <StickyHeaderContainer className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                <div className="sticky-inner">
                    <StyledHeader className={isSticky || headingHover || navHover ? 'hovered' : ''} onMouseOver={() => setheadingHover(true)} onMouseLeave={() => setheadingHover(false)}>
                        <Container noMargin={true}>
                            <NavInner>
                                <LogoContainer>
                                    <Link to="/">
                                        <BFILogo src={isSticky || headingHover ? LogoBlack : LogoWhite} alt="BFI Logo" />
                                    </Link>
                                </LogoContainer>
                                <NavSectionContainer>
                                    <NavSections currentHome={currentHome} NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} navHover={navHover} navSidePadding={navSidePadding} navTopPadding={navTopPadding} />
                                </NavSectionContainer>
                                <SearchButton>
                                    <a href="https://www.bfi.org.uk/search/search-bfi/I'm%20looking%20for..." target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </a>
                                </SearchButton>
                            </NavInner>
                        </Container>
                    </StyledHeader>
                    <SubNav currentHome={currentHome} setnavHover={setnavHover} navHover={navHover} NavInner={NavInner} NavList={NavList} setheadingHover={setheadingHover} />
                </div>      
            </StickyHeaderContainer>
        </HeaderContainer>
        {/* <HeaderBuffer/> */}
        </>
    )
}

export default Header
