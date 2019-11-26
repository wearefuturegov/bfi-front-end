import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

const EducationSub = ({StyledSubNav, NavInner, NavList}) => {
    return (
        <StyledSubNav>
            <Container>
                <NavInner>
                    <NavList>
                        <li><Link to="/">Education events</Link></li>
                        <li><Link to="/">Resources to teach</Link></li>
                        <li><Link to="/">Resources to learn</Link></li>
                        <li><Link to="/">Opportunities for young filmmakers</Link></li>
                        <li><Link to="/">BFI Policy</Link></li>
                    </NavList>
                </NavInner>
            </Container>
        </StyledSubNav>
    )
}

export default EducationSub
