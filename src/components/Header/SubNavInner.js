import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'
import slugify from 'react-slugify';

const SubNavInner = ({subMenuName, SubNavItems, StyledSubNav, NavInner, NavList, navHover, currentHome}) => {
    return (
        <>
            <StyledSubNav className={(currentHome === slugify(subMenuName) ? ' active' : '') + (navHover ? ' subNavShow' : '')}>
                <Container margin="none">
                    <NavInner>
                        <NavList>
                            { SubNavItems.map((link) => (
                                <li key={ link.id }><Link to={link.url}>{link.title}</Link></li>
                            )) }
                        </NavList>
                    </NavInner>
                </Container>
            </StyledSubNav>
        </>
    )
}

export default SubNavInner
