import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

const WatchSub = ({StyledSubNav, NavInner, NavList}) => {
    return (
        <StyledSubNav>
            <Container>
                <NavInner>
                    <NavList>
                        <li><Link to="/watch/bfi-player">BFI Player</Link></li>
                        <li><Link to="/">BFI Southbank</Link></li>   
                        <li><Link to="/">BFI IMAX</Link></li>
                        <li><Link to="/">Mediateque</Link></li>
                        <li><Link to="/">BFI National Archive</Link></li>
                        <li><Link to="/">London Film Festival</Link></li>
                    </NavList>
                </NavInner>
            </Container>
        </StyledSubNav>
    )
}

export default WatchSub
