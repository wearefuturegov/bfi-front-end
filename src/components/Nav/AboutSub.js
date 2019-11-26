import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

const AboutSub = ({StyledSubNav, NavInner, NavList}) => {
    return (
        <StyledSubNav>
            <Container>
                <NavInner>
                    <NavList>
                        <li><Link to="/">Our story</Link></li>
                        <li><Link to="/">Our team</Link></li> 
                        <li><Link to="/">BFI Policy</Link></li>
                        <li><Link to="/">BFI National Archive</Link></li>
                        <li><Link to="/">Our partners</Link></li>
                        <li><Link to="/">Press releases &amp; media enquiries</Link></li>
                    </NavList>
                </NavInner>
            </Container>
        </StyledSubNav>
    )
}

export default AboutSub
