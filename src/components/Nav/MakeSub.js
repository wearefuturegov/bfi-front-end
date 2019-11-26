import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

const MakeSub = ({StyledSubNav, NavInner, NavList}) => {
    return (
        <StyledSubNav>
            <Container>
                <NavInner>
                    <NavList>
                        <li><Link to="/">Get funding</Link></li>
                        <li><Link to="/">Progress your career</Link></li>
                        <li><Link to="/">Get tax relief</Link></li>
                        <li><Link to="/">Understand the film industry</Link></li>
                    </NavList>
                </NavInner>
            </Container>
        </StyledSubNav>
    )
}

export default MakeSub
