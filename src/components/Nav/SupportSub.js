import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

const SupportSub = ({StyledSubNav, NavInner, NavList}) => {
    return (
        <StyledSubNav>
            <Container>
                <NavInner>
                    <NavList>
                        <li><Link to="/">Membership</Link></li>
                        <li><Link to="/">Support the BFI</Link></li>
                        <li><Link to="/">Partner with the BFI</Link></li>
                    </NavList>
                </NavInner>
            </Container>
        </StyledSubNav>
    )
}

export default SupportSub
