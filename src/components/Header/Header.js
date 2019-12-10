import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import {useSpring, animated} from 'react-spring';

import NavSections from './NavSections'
import PromoBar from './PromoBar';
import SubNav from './SubNav'

import Container from '../bfi-components/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LogoBlack from '../../images/logos/bfi-logo-black.svg'
import LogoWhite from '../../images/logos/bfi-logo-white.svg'

// TODO currently trying to implement react-spring

const Header = ({currentHome}) => {

    const [navPadding, setnavPadding] = useState(20);  
    const [navSidePadding, setnavSidePadding] = useState(20);  
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
    const animateHeader = useSpring({
        background: isSticky || headingHover || navHover ? 'rgba('+ vars.colour.white +', 1)' : 'rgba('+ vars.colour.white +', 0)'
    });
    const StyledHeader= styled(animated.header)`
        font-weight: 600;
        position: absolute;
        width: 100%;
        z-index: 99999;

        a {
            color: rgb(${vars.colour.white});
        }
        li {
            &.active, &.hovered {
                a {
                    position: relative;
                    &:after {
                        content: "";
                        height: 2px;
                        width: calc(100% - ${navSidePadding*2}px);
                        background-color: rgb(${vars.colour.white});
                        position: absolute;
                        bottom: ${navPadding-5}px;
                        left: ${navSidePadding}px;                        
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
            border-bottom: 1px solid ${vars.colour.grey};

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
        color: rgb(${vars.colour.white});
        padding: 0;
        display: flex;
        align-items: left;
        justify-content: left;
    `

    const SearchButton = styled.div`
        margin-left: auto;
        display: inline-flex;
        a {
            padding: ${navPadding}px 0px;
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
                    <StyledHeader style={animateHeader} className={isSticky || headingHover || navHover ? 'hovered' : ''} onMouseOver={() => setheadingHover(true)} onMouseLeave={() => setheadingHover(false)}>
                        <Container noMargin={true}>
                            <NavInner>
                                <LogoContainer>
                                    <Link to="/">
                                        <BFILogo src={isSticky || headingHover ? LogoBlack : LogoWhite} alt="BFI Logo" />
                                    </Link>
                                </LogoContainer>
                                <NavSectionContainer>
                                    <NavSections currentHome={currentHome} NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} navHover={navHover} navPadding={navPadding} navSidePadding={navSidePadding} />
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
        </>
    )
}

export default Header
