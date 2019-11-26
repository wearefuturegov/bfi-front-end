import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

const ExploreSub = ({StyledSubNav, NavInner, NavList}) => {
    return (
        <StyledSubNav>
            <Container>
                <NavInner>
                    <NavList>
                        <li><Link to="/">Sight &amp; Sound</Link></li>
                        <li><Link to="/">Editorials</Link></li>
                        <li><Link to="/">News</Link></li>
                        <li><Link to="/">Film Lists</Link></li>
                        <li><Link to="/">BFI Releases</Link></li>
                        <li><Link to="/">BFI National Archive</Link></li>
                    </NavList>
                </NavInner>
            </Container>
        </StyledSubNav>
    )
}

export default ExploreSub
