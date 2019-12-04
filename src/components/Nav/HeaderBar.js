import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Container from '../bfi-components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LogoBlack from '../../images/logos/bfi-logo-black.svg'
import SectionNav from './SectionNav'

const HeaderBar = ({currentHome, NavInner, NavList, setnavHover, navHover}) => {

    const StyledHeaderBar = styled.nav`
        background: ${vars.colour.white};
        font-weight: 600;
        border-bottom: 1px solid ${vars.colour.grey};
        padding: 5px 0;
        ul {
            display: inline-block;
            width: 80%;
            text-align: right;
        }
        .inner {
            border-bottom: rgba(${vars.colour.black}, 0.2) solid 1px;
        }
    `
    const BFILogo = styled.img`
        vertical-align: middle;
        max-width: 47px;
    `

    const AltSectionNavContainer = styled.div`
        display: none;
        @media ${vars.breakpoint.hd} {
            display: inline-block;
            width: 100%;
        }
    `

    return (
        <StyledHeaderBar onMouseOver={() => window.innerWidth > vars.breakpoint.hd ? setnavHover('') : null}>
            <Container>
                <NavInner>
                    <Link to="/">
                        <BFILogo src={LogoBlack} alt="BFI Logo" onMouseOver={() => setnavHover('')} />
                    </Link>
                    <AltSectionNavContainer>
                        <SectionNav currentHome={currentHome} NavInner={NavInner} NavList={NavList} setnavHover={setnavHover} navHover={navHover} />
                    </AltSectionNavContainer>
                    <NavList onMouseOver={() => setnavHover('')}>
                        <li><a href="https://whatson.bfi.org.uk/Online/" target="_blank" rel="noopener noreferrer">Buy tickets</a></li>
                        <li><a href="https://whatson.bfi.org.uk/Online/" target="_blank" rel="noopener noreferrer">BFI Player</a></li>
                        {/* <li><a href="https://shop.bfi.org.uk" target="_blank" rel="noopener noreferrer">Shop</a></li> */}
                        <li><Link to="/become-a-member">Become a member</Link></li>
                        <li><a href="https://www.bfi.org.uk/search/search-bfi/I'm%20looking%20for..." target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSearch} /></a></li>
                    </NavList>
                </NavInner>
            </Container>
        </StyledHeaderBar>
    )
}

export default HeaderBar;