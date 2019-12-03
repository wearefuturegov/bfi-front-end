import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const WatchSub = ({subMenuName, SubNavItems, StyledSubNav, NavInner, NavList, MobileMenu, MobileMenuList, MobileMenuButton, mobileMenuOpen, handleMobileMenuClick, navHover, setnavHover}) => {
    return (
        <>
            <StyledSubNav onMouseOver={() => setnavHover('watch')} className={navHover ? 'isHovered' : ''}>
                <Container>
                    <NavInner>
                        <NavList>
                            { SubNavItems.WatchLinks.map((link) => (
                                <li key={ link.id }><Link to={link.url}>{link.title}</Link></li>
                            )) }
                        </NavList>
                    </NavInner>
                </Container>
            </StyledSubNav>
            <MobileMenu>
                <MobileMenuButton onClick={handleMobileMenuClick}>
                    <FontAwesomeIcon icon={faBars} />
                    <span>{subMenuName} Menu</span> 
                </MobileMenuButton>
                <MobileMenuList className={mobileMenuOpen ? 'open' : ''}>
                    { SubNavItems.WatchLinks.map((link) => (
                        <li key={ link.id } onClick={handleMobileMenuClick}><Link to={link.url}>{link.title}</Link></li>
                    )) }
                </MobileMenuList>
            </MobileMenu>
        </>
    )
}

export default WatchSub
