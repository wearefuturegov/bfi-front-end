import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

const EducationSub = ({SubNavItems, StyledSubNav, NavInner, NavList}) => {
    return (
        <StyledSubNav>
            <Container>
                <NavInner>
                    <NavList>
                        { SubNavItems.EducationLinks.map((link) => (
                            <li key={ link.id }><Link to={link.url}>{link.title}</Link></li>
                        )) }
                    </NavList>
                </NavInner>
            </Container>
        </StyledSubNav>
    )
}

export default EducationSub
