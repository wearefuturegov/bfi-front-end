import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

export class AboutSub extends Component {
    render() {
        return (
            <nav className="sub-nav">
                <Container>
                    <div className="inner">
                        <ul>
                            <li><Link to="/">Our story</Link></li>
                            <li><Link to="/">Our team</Link></li> 
                            <li><Link to="/">BFI Policy</Link></li>
                            <li><Link to="/">BFI National Archive</Link></li>
                            <li><Link to="/">Our partners</Link></li>
                            <li><Link to="/">Press releases &amp; media enquiries</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        )
    }
}

export default AboutSub
