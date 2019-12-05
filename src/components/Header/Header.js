import React, { useState } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Sticky from 'react-stickynode';

import NavSections from './NavSections'
import PromoBar from './PromoBar';
import SubNav from './SubNav'

import Container from '../bfi-components/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LogoBlack from '../../images/logos/bfi-logo-black.svg'
import LogoWhite from '../../images/logos/bfi-logo-white.svg'

const HeaderBuffer = styled.div`
    width: 100%;
    height: 115px;
`

const HeaderContainer = styled.div`
    margin-bottom: 0px;
`

const StyledHeader= styled.header`
    background: transparent;
    font-weight: 600;
    position: absolute;
    width: 100%;

    a {
        color: ${vars.colour.white}
    }

    &:hover, &.hovered {
        background: ${vars.colour.white};
        a {
            color: ${vars.colour.black}
        }
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
        padding: 15px 0px;
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

const NavigationContainer = styled.div`

    @media ${vars.breakpoint.tablet} {
        transition: transform 0.6s;
        transform: translateY(0px);
        position: fixed;
        width: 100%;
        z-index: 999;


        &.hideMenu {
            transform: translateY(-200px);
        }
    }
`





const Header = ({currentHome}) => {

    const [navHover, setnavHover] = useState('');  
    const [isSticky, setisSticky] = useState(false);  

    const handleStickyChange = (status) => {
        if (status.status === Sticky.STATUS_FIXED) {
            setisSticky(true);
        } else {
            setisSticky(false);
        }
    }
    return (
        <>
        <HeaderContainer>
            <PromoBar NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} />
            <Sticky onStateChange={handleStickyChange}>
                <StyledHeader className={navHover || isSticky ? 'hovered' : ''}>
                    {console.log(Sticky.STATUS_FIXED )}
                    <Container noMargin={true}>
                        <NavInner>
                            <Link to="/">
                                <BFILogo src={navHover || isSticky ? LogoBlack : LogoWhite} alt="BFI Logo" />
                            </Link>
                            <NavSectionContainer>
                                <NavSections currentHome={currentHome} NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} navHover={navHover} />
                            </NavSectionContainer>
                            <SearchButton>
                                <a href="https://www.bfi.org.uk/search/search-bfi/I'm%20looking%20for..." target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </SearchButton>
                        </NavInner>
                    </Container>
                </StyledHeader>
                <SubNav currentHome={currentHome} setnavHover={setnavHover} navHover={navHover} NavInner={NavInner} NavList={NavList} />
            </Sticky>      
            
            {/* <NavigationContainer>
                <NavSectionsContainer onMouseLeave={() => window.innerWidth < parseInt(vars.screen_size.mobile) ? setnavHover('') : null}>
                    <NavSections currentHome={currentHome} NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} navHover={navHover} /> 
                </NavSectionsContainer>    
                 
            </NavigationContainer> */}
        </HeaderContainer>
        {/* <HeaderBuffer/> */}
        </>
    )
}

export default Header
