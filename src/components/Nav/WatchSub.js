import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'
import { slide as Menu } from 'react-burger-menu'
import './mobileMenu.scss';


const WatchSub = ({SubNavItems, StyledSubNav, NavInner, NavList}) => {

    return (
        <>
            <StyledSubNav>
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
            {/* <Menu>
                { SubNavItems.WatchLinks.map((link) => (
                    <li key={ link.id }><Link to={link.url}>{link.title}</Link></li>
                )) }
            </Menu> */}
        </>
    )
}

export default WatchSub
